const display = document.getElementById("display");
const historyList = document.getElementById("history-list");
const themeBtn = document.getElementById("theme-btn");

// Append numbers and operators
function appendNumber(num) {
  display.value += num;
}

function appendOperator(op) {
  display.value += op;
}

// Clear display
function clearDisplay() {
  display.value = "";
}

// Delete last character
function deleteLast() {
  display.value = display.value.slice(0, -1);
}

// Calculate and show result
function calculateResult() {
  try {
    const expression = display.value;
    const result = eval(expression.replace("%", "/100"));
    display.value = result;

    // Add to history
    const li = document.createElement("li");
    li.textContent = `${expression} = ${result}`;
    historyList.prepend(li);
  } catch {
    display.value = "Error";
  }
}

// Keyboard support
document.addEventListener("keydown", (e) => {
  if (!isNaN(e.key) || "+-*/.%".includes(e.key)) appendNumber(e.key);
  if (e.key === "Enter") calculateResult();
  if (e.key === "Backspace") deleteLast();
  if (e.key === "Escape") clearDisplay();
});

// Dark / Light mode
themeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    themeBtn.textContent = "☀️ Light Mode";
  } else {
    themeBtn.textContent = "🌙 Dark Mode";
  }
});

