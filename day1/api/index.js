// How to fetch Data from server.

function fetchDataFromServer() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => printData(json));
}

function printData(data) {
  console.log(data);
  // destructuring
  const { limit, skip, total, users } = data;
  console.log(users);

  //  Template literals
  let res = users
    .map((ele) => {
      return {
        name: `${ele.firstName} ${ele.lastName}`,
        age: ele.age,
        weight: ele.weight,
      };
    })
    .filter((ele) => ele.age < 50)
    .reduce(
      (a, b) => {
        a.weight += b.weight;
        a.count++;
        return a;
      },
      { weight: 0, count: 0 }
    );

  console.log(res.weight, res.weight / res.count);

  let newUsers = users.red;
  // For Each
  users.forEach((ele) => {
    console.log(ele.firstName);
  });

  // reduce
  let age = users.reduce((a, b, index) => {
    a += b.age;
    return a;
  }, 0);
  console.log(age / users.length);

  let ele = document.getElementById("code");
  let tempData = data.filter((a) => a.id < 50);
  ele.innerHTML = JSON.stringify(tempData, null, 4);
}

fetchDataFromServer();
