const toggleButton = document.querySelector('.js-toggle-button')
const container = document.querySelector('.js-converter-container')

const conversionContainers = document.querySelectorAll('.js-conversion-container')

toggleButton.addEventListener('click', () => {
  container.classList.toggle('dark-container')
  conversionContainers.forEach((conversionContainer) => {
    conversionContainer.classList.toggle('dark-conversion-container')
  })
  if (toggleButton.innerText === 'switch to dark mode') {
    toggleButton.innerText = 'switch to Light Mode'
  }else {
    toggleButton.innerText = 'switch to Dark Mode'
  }
  document.body.classList.toggle('dark-body')
})

//1 meter = 3.281 feet
//1 litter = 0.264 gallon
//1 kilogram = 2.204 pound

const  convertButton = document.querySelector('.js-convert-button');
const convertInput = document.querySelector('.js-input')

convertButton.addEventListener('click', () => {
  const convertValue = Number(convertInput.value);
  convertLength(convertValue);
  convertVolume(convertValue);
  convertMass(convertValue);
})

function convertLength(convertValue) {
  const feetUnit = 3.281;
  const meter = convertValue * feetUnit;
  const feet = convertValue / feetUnit;
  const lengthEl = document.querySelector('.js-length');
  lengthEl.innerHTML = `${convertValue} meters = ${meter.toFixed(3)} feet | ${convertValue} feet = ${feet.toFixed(3)} meters`;
}

function convertVolume(convertValue) {
  const litterUnit = 0.264
  const litter = convertValue * litterUnit;
  const gallons = convertValue / litterUnit;
  const volumeEl = document.querySelector('.js-volume');
   volumeEl.innerHTML = `${convertValue} litters = ${litter.toFixed(3)} gallons | ${convertValue} gallons = ${gallons.toFixed(3)} litters`;
}

function convertMass(convertValue) {
  const kilogramUnit = 2.204;
  const kilogram = convertValue * kilogramUnit;
  const pounds = convertValue / kilogram;
  const massEl = document.querySelector('.js-mass');
  massEl.innerHTML = `${convertValue} kilogram = ${kilogram.toFixed(3)} pounds | ${convertValue} pounds = ${pounds.toFixed(3)} kilogram`;
}
