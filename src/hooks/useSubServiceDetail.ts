import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import {
  fallbackSubServicesBySlug,
  findFallbackSubService,
  type CatalogSubService,
} from '@/data/contentFallback';

export type SubServiceDetail = CatalogSubService;

export const useSubServiceDetail = (serviceSlug: string, subServiceSlug: string) => {
  const query = useQuery({
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

  const fallbackData = findFallbackSubService(serviceSlug, subServiceSlug);
  const hasRemoteData = Boolean(query.data);

  return {
    ...query,
    data: query.data ?? fallbackData,
    error: fallbackData ? null : query.error,
    isLoading: query.isLoading && !fallbackData,
    isFallback: !hasRemoteData && Boolean(fallbackData),
  };
};

// Get related sub-services (same parent service, excluding current)
export const useRelatedSubServices = (serviceId: string, currentSubServiceId: string) => {
  const query = useQuery({
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

  const fallbackGroup = Object.values(fallbackSubServicesBySlug).find(
    (items) => items[0]?.service_id === serviceId,
  );
  const fallbackData = fallbackGroup
    ?.filter((item) => item.id !== currentSubServiceId)
    .slice(0, 3) ?? [];

  return {
    ...query,
    data: query.data?.length ? query.data : fallbackData,
    isFallback: !query.data?.length && fallbackData.length > 0,
  };
};

export default useSubServiceDetail;
