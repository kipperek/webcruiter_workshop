const data = ["Oslo", "Gdansk", "Stockholm"];

export const addData = (city: string) => {
  data.push(city);
};

export const GetCities = () => {
  const myPromise = new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });

  return myPromise;
};

export const MutateCities = (city: string) => {
  const myPromise = new Promise<{ success: boolean }>((resolve) => {
    setTimeout(() => {
      addData(city);
      resolve({ success: true });
    }, 500);
  });

  return myPromise;
};
