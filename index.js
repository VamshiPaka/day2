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

const users = [
  {
    name: "Brook",
    scores: 75,
    skills: ["HTM", "CSS", "JS"],
    age: 16,
  },
  {
    name: "Alex",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "David",
    scores: 75,
    skills: ["HTM", "CSS"],
    age: 22,
  },
  {
    name: "John",
    scores: 85,
    skills: ["HTM"],
    age: 25,
  },
  {
    name: "Sara",
    scores: 95,
    skills: ["HTM", "CSS", "JS"],
    age: 26,
  },
  {
    name: "Martha",
    scores: 80,
    skills: ["HTM", "CSS", "JS"],
    age: 18,
  },
  {
    name: "Thomas",
    scores: 90,
    skills: ["HTM", "CSS", "JS"],
    age: 20,
  },
];

users.map((data, index) => {
  if (data.scores > 85) {
    console.log(data);
  }
});

//console.log(users.filter((newuser) => newuser.scores > 85));
