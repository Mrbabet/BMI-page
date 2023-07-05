const imperial = document.getElementById("imperial");
const metric = document.getElementById("metric");
const radioInput = document.querySelector("input");
const metricHeight = document.getElementById("height");
const metricWeight = document.getElementById("weight");
const imperialHeight1 = document.getElementById("imperial_height1");
const imperialHeight2 = document.getElementById("imperial_height2");
const imperialWeight1 = document.getElementById("imperial_weight1");
const imperialWeight2 = document.getElementById("imperial_weight2");
const details = document.querySelector(".details");
const cm = document.querySelector(".cm");
const kg = document.querySelector(".kg");
const ft = document.querySelector(".ft");
const inch = document.querySelector(".in");
const st = document.querySelector(".st");
const lbs = document.querySelector(".lbs");
const BMIScore = document.getElementById("BMI-score");
const metricButton = document.querySelector(".calc-bmi-metric");
const imperialButton = document.querySelector(".calc-bmi-imperial");

const measureChecked = function () {
  const isMetricSelected = metric.checked;
  metricHeight.classList.toggle("active", isMetricSelected);
  metricWeight.classList.toggle("active", isMetricSelected);
  imperialHeight1.classList.toggle("active", !isMetricSelected);
  imperialHeight2.classList.toggle("active", !isMetricSelected);
  imperialWeight1.classList.toggle("active", !isMetricSelected);
  imperialWeight2.classList.toggle("active", !isMetricSelected);
  if (isMetricSelected) {
    details.style.gridTemplateColumns = "1fr";
    details.style.gridTemplateRows = "1fr 1fr";
    cm.style.display = "block";
    kg.style.display = "block";
    ft.style.display = "none";
    inch.style.display = "none";
    st.style.display = "none";
    lbs.style.display = "none";
    metricButton.style.display = "block";
    imperialButton.style.display = "none";
  } else {
    details.style.gridTemplateColumns = "1fr 1fr";
    details.style.gridTemplateRows = "1fr";
    cm.style.display = "none";
    kg.style.display = "none";
    ft.style.display = "block";
    inch.style.display = "block";
    st.style.display = "block";
    lbs.style.display = "block";
    metricButton.style.display = "none";
    imperialButton.style.display = "block";
  }
};
imperial.addEventListener("change", measureChecked);
metric.addEventListener("change", measureChecked);
measureChecked();

const getMetricMeasurements = function () {
  const b = Number(metricHeight.value);
  const a = Number(metricWeight.value);
  const CalcBMI = function (weight, height) {
    return (BMIValue = weight / ((height / 100) * (height / 100)));
  };

  BMIScore.textContent = `${CalcBMI(a, b)}`;
};

const getImperialMeasurements = function () {
  const ft = Number(imperialHeight1.value);
  const inch = Number(imperialHeight2.value);
  const st = Number(imperialWeight1.value);
  const lbs = Number(imperialWeight2.value);
  const inchSum = ft * 12 + inch;
  const lbsSum = st * 14 + lbs;
  const CalcBMI = function (weight, height) {
    return (BMIValue = (weight / (height * height)) * 703);
  };
  BMIScore.textContent = `${CalcBMI(lbsSum, inchSum)}`;
};
