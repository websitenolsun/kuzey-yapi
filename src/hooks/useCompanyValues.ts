import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import {
  fallbackCompanyValues,
  type CatalogCompanyValue,
} from '@/data/contentFallback';

export type CompanyValue = CatalogCompanyValue;

export const useCompanyValues = () => {
  const query = useQuery({
    queryKey: ['company-values'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('company_values')
        .select('*')
        .order('display_order', { ascending: true });
      
      if (error) throw error;
      return data as CompanyValue[];
    },
  });

  const hasRemoteData = Boolean(query.data?.length);

  return {
    ...query,
    data: hasRemoteData ? query.data : fallbackCompanyValues,
    isLoading: false,
    isFallback: !hasRemoteData,
  };
};

export default useCompanyValues;
