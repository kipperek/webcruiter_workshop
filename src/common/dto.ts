export const GetCompanyPath = () => {
  const myPromise = new Promise<string[]>((resolve) => {
    setTimeout(() => {
      resolve(["Oslo", "Gdansk", "Stockholm"]);
    }, 1500);
  });

  return myPromise;
};
