import './style.css';

const turnOnButton = document.getElementById('btnTurnOn');
const turnOffButton = document.getElementById('btnTurnOff');

turnOnButton.onclick = () => {
  fetch('/turnOn');
  
};
turnOffButton.onclick = () => {
  fetch('/turnOff');
};
