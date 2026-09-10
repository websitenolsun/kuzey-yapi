import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import {
  fallbackSubServicesBySlug,
  type CatalogSubService,
} from '@/data/contentFallback';

export type SubService = CatalogSubService;

export const useSubServices = (serviceSlug: string) => {
  const query = useQuery({
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
      return data as unknown as SubService[];
    },
    enabled: !!serviceSlug,
  });

  const fallbackData = fallbackSubServicesBySlug[serviceSlug] ?? [];
  const hasRemoteData = Boolean(query.data?.length);

  return {
    ...query,
    data: hasRemoteData ? query.data : fallbackData,
    isLoading: query.isLoading && fallbackData.length === 0,
    isFallback: !hasRemoteData,
  };
};

export default useSubServices;
