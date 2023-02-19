const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const href = link.getAttribute("href");
    const target = document.querySelector(href);
    sections.forEach((section) => {
      section.style.display = "none";
    });
    target.style.display = "block";
  });
});

const section1 = document.querySelector("#general-happiness-survey");
const form = section1.querySelector(".survey1");
const resultDiv = section1.querySelector(".result-card");

const clearBtn = form.querySelector("button[type='button']");
const radios = form.querySelectorAll(".form-check-input");
const scoreInterElem = resultDiv.querySelector(".score-interpretation");

const calculateScore = (event) => {
  event.preventDefault();

  const data = new FormData(form);
  const answers = Array.from(data);

  const allAnswered = answers.length === 4;

  if (allAnswered) {
    const totalScore = answers.reduce(
      (sum, answer) => sum + parseInt(answer[1]),
      0
    );
    const averageScore = totalScore / 4;
    console.log(`Your average score is ${averageScore.toFixed(2)}`);

    const newDiv = document.createElement("div");
    newDiv.innerHTML = `<b>Score</b>: ${averageScore}`;
    newDiv.className = "card-text happiness-score";
    scoreInterElem.parentNode.appendChild(newDiv);
  }
};

form.addEventListener("submit", calculateScore);
clearBtn.addEventListener("click", () => {
  radios.forEach((radio) => {
    radio.checked = false;
  });

  const scoreDiv = section1.querySelector(".happiness-score");
  if (scoreDiv) {
    scoreDiv.remove();
  }
});
