let bank = [];
let odds = [];
let evens = [];

function Form() {
  return `
    Add a number to the bank
    <input id="number-input" type="number"/>
    <button id="add-button">Add Number</button>
    <button id="sort-one-button">Sort 1</button>
    <button id="sort-all-button">Sort All</button>
  `;
}

function NumberList(title, numbers) {
  return `
    <h2>${title}</h2>
    <div class="box">${numbers.join(" ")}</div>
  `;
}

// ---------- RENDER ----------

function render() {
  const app = document.getElementById("app");

  app.innerHTML = `
    <h1>Odds and Evens</h1>
    ${Form()}
    ${NumberList("Bank", bank)}
    ${NumberList("Odds", odds)}
    ${NumberList("Evens", evens)}
  `;

  addEventListeners();
}

// ---------- EVENT LOGIC ----------

function addEventListeners() {
  document.getElementById("add-button").addEventListener("click", () => {
    const input = document.getElementById("number-input");
    const value = parseInt(input.value);

    if (!isNaN(value)) {
      bank.push(value);
      render();
    }
  });

  document.getElementById("sort-one-button").addEventListener("click", () => {
    if (bank.length === 0) return;

    const number = bank.shift();

    if (number % 2 === 0) {
      evens.push(number);
    } else {
      odds.push(number);
    }

    render();
  });

  document.getElementById("sort-all-button").addEventListener("click", () => {
    while (bank.length > 0) {
      const number = bank.shift();
      if (number % 2 === 0) {
        evens.push(number);
      } else {
        odds.push(number);
      }
    }

    render();
  });
}

// INITIAL RENDER
render();
