import { useQuery } from "react-query";
import { GetCompanyPath } from "../../common/dto";

const useCities = () => {
  const { isLoading, data } = useQuery({
    queryKey: ["CITIES"],
    queryFn: GetCompanyPath,
  });

  return { isLoading, data: data || [] };
};
export default useCities;
