import React, { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { MutateCities } from "../common/dto";
const CityForm: React.FC = () => {
  const [city, setCity] = useState("");

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(async (city: string) => {
    await MutateCities(city);
    queryClient.invalidateQueries("CITIES");
  });

  const saveCity = () => {
    mutate(city);
    setCity("");
  };

  return (
    <>
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      {!isLoading && <button onClick={saveCity}>SAVE</button>}
      {isLoading && "Please wait"}
    </>
  );
};

export default CityForm;
