import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface CompanyValue {
  id: string;
  title: string;
  description: string;
  icon_name: string | null;
  display_order: number;
}

export const useCompanyValues = () => {
  return useQuery({
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
};

export default useCompanyValues;