// // A JS Promise
const newPromise = new Promise((resolve, reject) => {
  if (1 == 1) {
    resolve("success");
  } else {
    reject("failure");
  }
});

newPromise
  .then((resolve) => {
    console.log(`${"The equation was a"} ${resolve}`);
  })
  .catch((reject) => {
    console.log(reject);
  });

const myPromise = new Promise((myResolve, myReject) => {
  setTimeout(() => {
    myResolve("I love You !!");
  }, 3000);
});

myPromise.then((myResolve) => {
  document.getElementById("demo").innerHTML = myResolve;
});

// // Udemy
//async await
async function fetchUser() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await resp.json();
  console.log(data);
}
fetchUser();

// const urls = [
//   "https://jsonplaceholder.typicode.com/users",
//   "https://jsonplaceholder.typicode.com/posts",
//   "https://jsonplaceholder.typicode.com/albums",
// ];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => fetch(url).then((resp) => resp.json()))
    );
    console.log("users", users);
    console.log("posts", posts);
    console.log("albums", albums);
  } catch (error) {
    console.log("error", error);
  }
};

// getData();

// // #1) Convert the below promise into async await
const await = async function () {
    try {
        const data = await fetch("https://jsonplaceholder.typicode.com/users/");
        const jsn = await data.json();
        console.log(jsn)
    } catch (error) {
        console.log('error')
    }
}

await ();

// // ES 9 2018
// // object spread operator
const animals = {
  tiger: 23,
  lion: 5,
  monkey: 2,
  bird: 40,
};

function objectSpread(p1, p2, p3) {
  console.log(p1);
  console.log(p2);
  console.log(p3);
}

const { tiger, lion, ...rest } = animals;

objectSpread(tiger, lion, rest);

// // ES9 finally
const urls = [
  "https://swapi.co/api/people/1",
  "https://swapi.co/api/people/2",
  "https://swapi.co/api/people/3",
  "https://swapi.co/api/people/4",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((people) => people.json());
  })
)
  .then((array) => {
    throw Error;
    console.log("1", array[0]);
    console.log("2", array[1]);
    console.log("3", array[2]);
    console.log("4", array[3]);
  })
  .catch((err) => console.log("ughhh fix it", err))
  .finally(() => console.log("extra"));

// for await of
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData2 = async function () {
  const arrayOfPromises = urls.map((url) => fetch(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};

getData2();

// allsetled method
const promiseOne = new Promise((resolve, reject) => setTimeout(resolve, 6000));
const promiseTwo = new Promise((resolve, reject) => setTimeout(reject, 3000));

Promise.allSettled([promiseOne, promiseTwo])
  .then((data) => console.log(data))
  .catch((e) => console.log("something failed", e));
