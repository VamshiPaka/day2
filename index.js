/**function to create array of arrays */
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

countries.forEach(myFunction);
function myFunction(item, index) {
  var arr = new Array();
  arr.push(item);
  arr.push(item.slice(0, 3));
  arr.push(item.length);
  console.log(arr);
}

/**Using filter function to identify score above 85 */
