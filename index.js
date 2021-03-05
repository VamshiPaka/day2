let createArrayOfArrays = (countryList) => {
  countryList.map((data, index) => {
    console.log(data.toLowerCase(), data.substring(0, 3), data.length);
  });

  
};
const countries = [
  "ALBANIA",
  "BOLIVIA",
  "CANADA",
  "DENMARK",
  "ETHIPOIA",
  "FINLAND",
  "GERMANY",
  "HUNGARY",
  "IRELAND",
  "JAPAN",
  "KENYA",
];
createArrayOfArrays(countries);
