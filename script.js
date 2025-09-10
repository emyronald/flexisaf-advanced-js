const addBtn = document.querySelector("#addButton");
const inputField = document.querySelector("#input");
const result = document.querySelector("#result");

function addNumbers() {
  const inputValue = inputField.value;
  const numbersArray = inputValue.split(",").map((num) => Number(num.trim()));
  const filteredNumbers = numbersArray.filter((num) => !isNaN(num));
  const sum = filteredNumbers.reduce((acc, curr) => acc + curr, 0);
  result.textContent = `Result: ${sum}`;
}

addBtn.addEventListener("click", addNumbers);

const btns = document.querySelectorAll(".btn");
const buttonDisplay = document.querySelector("#btn-display");
const backspace = document.querySelector("#backspace");

btns.forEach((btn) => btn.addEventListener("click", displayNum));

function displayNum(e) {
  buttonDisplay.textContent += e.target.textContent;
}

backspace.addEventListener("click", deleteNum);

function deleteNum() {
  const numArr = buttonDisplay.textContent.split("");
  numArr.splice(numArr.length - 1, 1);

  buttonDisplay.textContent = numArr.join("");
}

const people = {
  John: { age: 30, job: "teacher", city: "Owerri" },
  Mary: { age: 27, job: "developer", city: "Lagos" },
  Ben: { age: 24, job: "designer", city: "Abuja" },
};

const peopleContainer = document.querySelector("#people-container");

for (const key in people) {
  const card = document.createElement("div");
  card.innerHTML = `
        <p><strong>Name:</strong>${key}</p>
        <p><strong>Age:</strong> ${people[key].age}</p>
        <p><strong>Job:</strong> ${people[key].job}</p>
        <p><strong>City:</strong> ${people[key].city}</p>
        <hr>
      `;
  peopleContainer.appendChild(card);
};
