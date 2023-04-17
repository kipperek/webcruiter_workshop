import { useQuery } from "react-query";
import { GetCities } from "../../common/dto";

const useCities = () => {
  const { isFetching, data } = useQuery({
    queryKey: ["CITIES"],
    queryFn: GetCities,
  });

  return { isFetching, data: data || [] };
};
export default useCities;
