import React from "react";
import { Field, Form, Formik } from "formik";
import { useMutation, useQueryClient } from "react-query";
import { MutateCities } from "../common/dto";
const CityForm: React.FC = () => {
  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(async (city: string) => {
    await MutateCities(city);
    queryClient.invalidateQueries("CITIES");
  });

  const saveCity = (
    values: { city: string },
    { resetForm }: { resetForm: () => void }
  ) => {
    console.log(values);
    mutate(values.city);
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{
          city: "",
        }}
        onSubmit={saveCity}
      >
        {() => (
          <Form>
            <Field type="text" name="city" />
            {!isLoading && <button type="submit">SAVE</button>}
          </Form>
        )}
      </Formik>
      {isLoading && "Please wait"}
    </div>
  );
};

export default CityForm;
