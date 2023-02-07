const generalHappinessQuestions = [
  {
    question: "In general, I consider myself:",
    a_1: ["1", "Not a very happy person"],
    a_2: ["2", ""],
    a_3: ["3", ""],
    a_4: ["4", ""],
    a_5: ["5", ""],
    a_6: ["6", ""],
    a_7: ["7", "A very happy person"],
  },
  {
    question: "Compared to most of my peers, I consider myself:",
    a_1: ["1", "Less Happy"],
    a_2: ["2", ""],
    a_3: ["3", ""],
    a_4: ["4", ""],
    a_5: ["5", ""],
    a_6: ["6", ""],
    a_7: ["7", "Very Happy"],
  },
  {
    question:
      "Some people are generally very happy. They enjoy life regardless of what is going on, getting the most out of everything. To what extent does this characterization describe you?",
    a_1: ["1", "Not At All"],
    a_2: ["2", ""],
    a_3: ["3", ""],
    a_4: ["4", ""],
    a_5: ["5", ""],
    a_6: ["6", ""],
    a_7: ["7", "A Great Deal"],
  },
  {
    question:
      "Some people are generally not very happy. Although they are not depressed, they never seem as happy as they might be. To what extent does this characterization describe you?",
    a_1: ["1", "Not At All"],
    a_2: ["2", ""],
    a_3: ["3", ""],
    a_4: ["4", ""],
    a_5: ["5", ""],
    a_6: ["6", ""],
    a_7: ["7", "A Great Deal"],
  },
];

const submitBtn = document.querySelector("#submit-button");
const clearBtn = document.querySelector("#clear-button");
const calcAvgScore = function () {
  const radioButtons = document.querySelectorAll("input[type='radio']");
  let total = 0;
  let avgScore = 0;

  for (const checkedRadioButton of Array.from(radioButtons).filter(
    (radioButton) => radioButton.checked
  )) {
    total += Number.parseInt(checkedRadioButton.value);
  }

  avgScore = total / 4;

  console.log(avgScore);
};

const clearRadioButtons = function () {
  const radioButtons = document.querySelectorAll("input[type='radio']");
  radioButtons.forEach((radioButton) => {
    radioButton.checked = false;
  });
};

submitBtn.addEventListener("click", calcAvgScore);
clearBtn.addEventListener("click", clearRadioButtons);
