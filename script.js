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
const survey1Form = section1.querySelector(".survey1");
const survey1ResultDiv = section1.querySelector(".result-card");
const survey1ClearBtn = survey1Form.querySelector("button[type='button']");
const survey1Radios = survey1Form.querySelectorAll(".form-check-input");
const survey1ScoreDiv = survey1ResultDiv.querySelector(
  ".card-text.general-happiness-score"
);

const section2 = document.querySelector("#resiliency-survey");
const survey2Form = section2.querySelector(".survey2");
const survey2ResultDiv = section2.querySelector(".result-card");
const survey2ClearBtn = survey2Form.querySelector("button[type='button']");
const survey2Radios = survey2Form.querySelectorAll(".form-check-input");
const survey2ScoreDiv = survey2ResultDiv.querySelector(
  ".card-text.resiliency-score"
);

const section3 = document.querySelector("#authentic-happiness-survey");
const survey3Form = section3.querySelector(".survey3");
const survey3ResultDiv = section3.querySelector(".result-card");
const survey3ClearBtn = survey3Form.querySelector("button[type='button']");
const survey3Radios = survey3Form.querySelectorAll(".form-check-input");
const survey3ScoreDiv = survey3ResultDiv.querySelector(
  ".card-text.authentic-happiness-score"
);

const calculateSurvey1Score = (event) => {
  event.preventDefault();

  const data = new FormData(survey1Form);
  const answers = Array.from(data);

  const allAnswered = answers.length === 4;

  if (allAnswered) {
    const totalScore = answers.reduce(
      (sum, answer) => sum + parseInt(answer[1]),
      0
    );
    const averageScore = (totalScore / 4).toFixed(2);
    console.log(`Your average score is ${averageScore}`);

    survey1ScoreDiv.innerHTML = `<p class="fs-3">Score: ${averageScore}</p>`;
  }
};

survey1Form.addEventListener("submit", calculateSurvey1Score);
survey1ClearBtn.addEventListener("click", () => {
  survey1Radios.forEach((radio) => {
    radio.checked = false;
  });

  survey1ScoreDiv.innerHTML = "";
});

const calculateSurvey2Score = (event) => {
  event.preventDefault();

  const data = new FormData(survey2Form);
  const answers = Array.from(data);

  const allAnswered = answers.length === 20;

  if (allAnswered) {
    const totalScore = answers.reduce(
      (sum, answer) => sum + parseInt(answer[1]),
      0
    );

    console.log(`Your total score is ${totalScore}`);

    survey2ScoreDiv.innerHTML = `<p class="fs-3">Score: ${totalScore}</p>`;
  }
};

survey2Form.addEventListener("submit", calculateSurvey2Score);
survey2ClearBtn.addEventListener("click", () => {
  survey2Radios.forEach((radio) => {
    radio.checked = false;
  });

  survey2ScoreDiv.innerHTML = "";
});

const calculateSurvey3Score = (event) => {
  event.preventDefault();

  const data = new FormData(survey3Form);
  const answers = Array.from(data);

  const allAnswered = answers.length === 24;

  if (allAnswered) {
    const totalScore = answers.reduce(
      (sum, answer) => sum + parseInt(answer[1]),
      0
    );
    const averageScore = (totalScore / 24).toFixed(2);
    console.log(`Your average score is ${averageScore}`);

    survey3ScoreDiv.innerHTML = `<p class="fs-3">Score: ${averageScore}</p>`;
  }
};

survey3Form.addEventListener("submit", calculateSurvey3Score);
survey3ClearBtn.addEventListener("click", () => {
  survey3Radios.forEach((radio) => {
    radio.checked = false;
  });

  survey3ScoreDiv.innerHTML = "";
});
