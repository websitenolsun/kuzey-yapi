import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface SubServiceDetail {
  id: string;
  service_id: string;
  title: string;
  description: string;
  icon_name: string | null;
  display_order: number;
  slug: string | null;
  long_description: string | null;
  seo_title: string | null;
  seo_description: string | null;
  seo_keywords: string[] | null;
  service_areas: string[] | null;
  faqs: Array<{ question: string; answer: string }> | null;
  service?: {
    id: string;
    title: string;
    slug: string;
  };
}

export const useSubServiceDetail = (serviceSlug: string, subServiceSlug: string) => {
  return useQuery({
    queryKey: ['sub-service-detail', serviceSlug, subServiceSlug],
    queryFn: async () => {
      // First get the service by slug
      const { data: service, error: serviceError } = await supabase
        .from('services')
        .select('id, title, slug')
        .eq('slug', serviceSlug)
        .single();
      
      if (serviceError) throw serviceError;
      
      // Then get the specific sub_service by slug
      const { data, error } = await supabase
        .from('sub_services')
        .select('*')
        .eq('service_id', service.id)
        .eq('slug', subServiceSlug)
        .single();
      
      if (error) throw error;
      
      return {
        ...data,
        service,
        faqs: data.faqs as Array<{ question: string; answer: string }> | null
      } as SubServiceDetail;
    },
    enabled: !!serviceSlug && !!subServiceSlug,
  });
};

// Get related sub-services (same parent service, excluding current)
export const useRelatedSubServices = (serviceId: string, currentSubServiceId: string) => {
  return useQuery({
    queryKey: ['related-sub-services', serviceId, currentSubServiceId],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('sub_services')
        .select('id, title, slug, description, icon_name')
        .eq('service_id', serviceId)
        .neq('id', currentSubServiceId)
        .order('display_order', { ascending: true })
        .limit(3);
      
      if (error) throw error;
      return data;
    },
    enabled: !!serviceId && !!currentSubServiceId,
  });
};

export default useSubServiceDetail;
