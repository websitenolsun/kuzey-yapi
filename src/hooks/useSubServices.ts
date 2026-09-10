import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface SubService {
  id: string;
  service_id: string;
  title: string;
  description: string;
  icon_name: string | null;
  display_order: number;
  slug: string | null;
}

export const useSubServices = (serviceSlug: string) => {
  return useQuery({
    queryKey: ['sub-services', serviceSlug],
    queryFn: async () => {
      // First get the service by slug
      const { data: service, error: serviceError } = await supabase
        .from('services')
        .select('id')
        .eq('slug', serviceSlug)
        .single();
      
      if (serviceError) throw serviceError;
      
      // Then get sub_services for that service
      const { data, error } = await supabase
        .from('sub_services')
        .select('*')
        .eq('service_id', service.id)
        .order('display_order', { ascending: true });
      
      if (error) throw error;
      return data as SubService[];
    },
    enabled: !!serviceSlug,
  });
};

export default useSubServices;