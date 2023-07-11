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
const BMIRange = document.querySelector(".BMI-range");
const BMIPlaceholder = document.querySelector(".BMI-placeholder");

BMIPlaceholder.textContent = `Welcome
Enter your height and weight and you’ll see your BMI result here
    `;

const measureChecked = function () {
  const isMetricSelected = metric.checked;
  metricHeight.classList.toggle("active", isMetricSelected);
  metricWeight.classList.toggle("active", isMetricSelected);
  imperialHeight1.classList.toggle("active", !isMetricSelected);
  imperialHeight2.classList.toggle("active", !isMetricSelected);
  imperialWeight1.classList.toggle("active", !isMetricSelected);
  imperialWeight2.classList.toggle("active", !isMetricSelected);
  details.style.gridTemplateColumns = isMetricSelected ? "1fr" : "1fr 1fr";
  details.style.gridTemplateRows = isMetricSelected ? "1fr 1fr" : "1fr";
  cm.style.display = isMetricSelected ? "block" : "none";
  kg.style.display = isMetricSelected ? "block" : "none";
  ft.style.display = isMetricSelected ? "none" : "block";
  inch.style.display = isMetricSelected ? "none" : "block";
  st.style.display = isMetricSelected ? "none" : "block";
  lbs.style.display = isMetricSelected ? "none" : "block";
};
measureChecked();

const CalcBMI = function (weight, height, isMetric) {
  if (isMetric) {
    return weight / ((height / 100) * (height / 100));
  } else {
    return (weight / (height * height)) * 703;
  }
};
const WeightRange = function (BMI, height, isMetric) {
  if (isMetric) {
    return (BMI * (height / 100) * (height / 100)).toFixed(1);
  } else {
  }
  return (BMI * (height / 100) * (height / 100)).toFixed(1);
};

const getMeasurements = function (isMetric) {
  const ft = Number(imperialHeight1.value);
  const inch = Number(imperialHeight2.value);
  const st = Number(imperialWeight1.value);
  const lbs = Number(imperialWeight2.value);
  const imperialWeight = st * 14 + lbs;
  const imperialHeight = ft * 12 + inch;

  const inputWeight = isMetric ? Number(metricWeight.value) : imperialWeight;
  const inputHeight = isMetric ? Number(metricHeight.value) : imperialHeight;

  const BMI = CalcBMI(inputWeight, inputHeight, isMetric);
  console.log(BMI, inputHeight, inputWeight);

  BMIScore.textContent = BMI.toFixed(1);

  if (BMI < 18.5) {
    BMIPlaceholder.textContent = `Your BMI is...`;
    BMIRange.textContent = ` Your BMI suggests you're
  Underweight. Your ideal weight is between ${WeightRange(
    18.5,
    inputHeight
  )} and ${WeightRange(24.9, inputHeight)}
  kg`;
  } else if (BMI >= 18.5 && BMI <= 24.9) {
    BMIPlaceholder.textContent = `Your BMI is...`;
    BMIRange.textContent = ` Your BMI suggests you're
  Healthy weight. Your ideal weight is between
  ${WeightRange(18.5, inputHeight)} and ${WeightRange(24.9, inputHeight)}.`;
  } else if (BMI >= 25 && BMI <= 29.9) {
    BMIPlaceholder.textContent = `Your BMI is...`;
    BMIRange.textContent = ` Your BMI suggests you're
  Overweight. Your ideal weight is between
  ${WeightRange(18.5, inputHeight)} and ${WeightRange(24.9, inputHeight)}.`;
  } else if (BMI > 30) {
    BMIPlaceholder.textContent = `Your BMI is...`;
    BMIRange.textContent = ` Your BMI suggests you're
  Obese. Your ideal weight is between ${WeightRange(
    18.5,
    inputHeight
  )} and ${WeightRange(24.9, inputHeight)}.`;
  } else {
    BMIScore.textContent = "";
    BMIPlaceholder.textContent = `Welcome! <br/>

    Enter your height and weight and you’ll see your BMI result here
  `;
  }

  if (BMI === 0) {
    BMIScore.textContent = "";
    BMIPlaceholder.html = `Welcome! <br/>>

    Enter your height and weight and you’ll see your BMI result here
  `;
    BMIRange.textContent = "";
  }
};

imperial.addEventListener("change", measureChecked);
metric.addEventListener("change", measureChecked);

metricWeight.addEventListener("blur", function () {
  getMeasurements(true);
});

metricHeight.addEventListener("blur", function () {
  getMeasurements(true);
});
imperialHeight1.addEventListener("blur", function () {
  getMeasurements(false);
});

imperialHeight2.addEventListener("blur", function () {
  getMeasurements(false);
});
imperialWeight1.addEventListener("blur", function () {
  getMeasurements(false);
});

imperialWeight2.addEventListener("blur", function () {
  getMeasurements(false);
});
