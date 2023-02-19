const sections = document.querySelectorAll("section");
const links = document.querySelectorAll("nav a");

const section1 = document.querySelector("#general-happiness-survey");
const survey1Form = section1.querySelector(".survey1");
const survey1Questions = survey1Form.querySelectorAll("div.mb-3");
const survey1ClearBtn = section1.querySelector("button[type='button']");
const survey1Radios = survey1Form.querySelectorAll(".form-check-input");
const survey1ScoreDiv = section1.querySelector(
  ".card-text.general-happiness-score"
);

const section2 = document.querySelector("#resiliency-survey");
const survey2Form = section2.querySelector(".survey2");
const survey2Questions = survey2Form.querySelectorAll("div.mb-3");
const survey2ClearBtn = section2.querySelector("button[type='button']");
const survey2Radios = survey2Form.querySelectorAll(".form-check-input");
const survey2ScoreDiv = section2.querySelector(".card-text.resiliency-score");

const section3 = document.querySelector("#authentic-happiness-survey");
const survey3Form = section3.querySelector(".survey3");
const survey3Questions = survey3Form.querySelectorAll("div.mb-3");
const survey3ClearBtn = section3.querySelector("button[type='button']");
const survey3Radios = survey3Form.querySelectorAll(".form-check-input");
const survey3ScoreDiv = section3.querySelector(
  ".card-text.authentic-happiness-score"
);

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

const calculateScore = (event, form, questionNum, isAvg, scoreElem) => {
  event.preventDefault();

  const data = new FormData(form);
  const answers = Array.from(data);

  const allAnswered = answers.length === questionNum;
  let finalScore = 0;

  if (allAnswered) {
    finalScore = answers.reduce((sum, answer) => sum + parseInt(answer[1]), 0);

    if (isAvg) {
      finalScore = (finalScore / questionNum).toFixed(2);
    }

    console.log(`Your score is ${finalScore}`);

    scoreElem.innerHTML = `<p class="fs-3">Score: ${finalScore}</p>`;
  }
};

const clearAnswer = (radios, scoreElem) => {
  radios.forEach((radio) => {
    radio.checked = false;
  });

  scoreElem.innerHTML = "";
};

survey1Form.addEventListener("submit", (event) =>
  calculateScore(
    event,
    survey1Form,
    [...survey1Questions].length,
    true,
    survey1ScoreDiv
  )
);

survey2Form.addEventListener("submit", (event) =>
  calculateScore(
    event,
    survey2Form,
    [...survey2Questions].length,
    false,
    survey2ScoreDiv
  )
);

survey3Form.addEventListener("submit", (event) =>
  calculateScore(
    event,
    survey3Form,
    [...survey3Questions].length,
    true,
    survey3ScoreDiv
  )
);

survey1ClearBtn.addEventListener("click", () =>
  clearAnswer(survey1Radios, survey1ScoreDiv)
);

survey2ClearBtn.addEventListener("click", () =>
  clearAnswer(survey2Radios, survey2ScoreDiv)
);

survey3ClearBtn.addEventListener("click", () =>
  clearAnswer(survey3Radios, survey3ScoreDiv)
);
