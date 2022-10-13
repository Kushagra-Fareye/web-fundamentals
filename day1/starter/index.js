//  1. API call

function fetchDataFromServer() {
  fetch("https://dummyjson.com/users")
    .then((response) => response.json())
    .then((json) => renderCards(json));
}

fetchDataFromServer();

const nameFormatter = (user) => {
  console.log(user);
  return `${user.firstName} ${user.lastName}`;
};

const companyNameFormatter = (user) => {
  return user.company.name;
};

const positionNameFormatter = (user) => {
  return user.company.title;
};

let config = [
  { key: "name", label: "Name", formatter: nameFormatter },
  { key: "age", label: "Age" },
  { key: "phone", label: "Phone Number" },
  { key: "bloodGroup", label: "Blood Group" },
  { key: "company", label: "Company", formatter: companyNameFormatter },
  { key: "phone", label: "Phone Number" },
  { key: "position", label: "Position", formatter: positionNameFormatter },
  { key: "weight", label: "Weight" },
];

const fillCardData = (user) => {
  const card = document.createElement("div");
  card.setAttribute("id", "card");
  const image = document.createElement("img");
  image.src = user.image;
  image.setAttribute("id", "image");
  card.appendChild(image);
  const dataFields = document.createElement("div");
  dataFields.setAttribute("id", "dataFields");

  config.forEach((config) => {
    let value = `-`;
    if (config.formatter) {
      value = config.formatter(user);
    } else {
      value = user[config.key];
    }
    const dataBlock = document.createElement("div");
    dataBlock.setAttribute("id", "data");
    const dataKey = document.createElement("h3");
    dataKey.innerHTML = config.label;
    const dataValue = document.createElement("p");
    dataValue.innerHTML = value;
    dataBlock.appendChild(dataKey);
    dataBlock.appendChild(dataValue);
    dataFields.appendChild(dataBlock);
  });
  card.appendChild(dataFields);
  return card;
};

const renderCards = (data) => {
  const { users } = data;
  const cards = document.getElementById("cards");
  users.forEach((user) => {
    const card = fillCardData(user);
    cards.appendChild(card);
  });
};

//  2. Card layout

//  3. Configurable fields
