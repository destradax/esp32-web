import './style.css';

const pinInput = document.getElementById('pinInput');
const btnTurnOn = document.getElementById('btnTurnOn');
const btnTurnOff = document.getElementById('btnTurnOff');

btnTurnOn.onclick = () => {
  const pin = pinInput.value;
  fetch(`/turnOn?pin=${pin}`);
};
btnTurnOff.onclick = () => {
  const pin = pinInput.value;
  fetch(`/turnOff?pin=${pin}`);
};
