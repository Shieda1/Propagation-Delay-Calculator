// https://www.omnicalculator.com/other/propagation-delay

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const propagationdelayRadio = document.getElementById('propagationdelayRadio');
const distancebetweenroutersRadio = document.getElementById('distancebetweenroutersRadio');
const propagationspeedRadio = document.getElementById('propagationspeedRadio');

let propagationdelay;
let distancebetweenrouters = v1;
let propagationspeed = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

propagationdelayRadio.addEventListener('click', function() {
  variable1.textContent = 'Distance between routers';
  variable2.textContent = 'Propagation speed';
  distancebetweenrouters = v1;
  propagationspeed = v2;
  result.textContent = '';
});

distancebetweenroutersRadio.addEventListener('click', function() {
  variable1.textContent = 'Propagation delay';
  variable2.textContent = 'Propagation speed';
  propagationdelay = v1;
  propagationspeed = v2;
  result.textContent = '';
});

propagationspeedRadio.addEventListener('click', function() {
  variable1.textContent = 'Propagation delay';
  variable2.textContent = 'Distance between routers';
  propagationdelay = v1;
  distancebetweenrouters = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(propagationdelayRadio.checked)
    result.textContent = `Propagation delay = ${computepropagationdelay().toFixed(2)}`;

  else if(distancebetweenroutersRadio.checked)
    result.textContent = `Distance between routers = ${computedistancebetweenrouters().toFixed(2)}`;

  else if(propagationspeedRadio.checked)
    result.textContent = `Propagation speed = ${computepropagationspeed().toFixed(2)}`;
})

// calculation

// propagationdelay = distancebetweenrouters / propagationspeed

function computepropagationdelay() {
  return (Number(distancebetweenrouters.value) / Number(propagationspeed.value)) * 1000;
}

function computedistancebetweenrouters() {
  return (Number(propagationdelay.value) / 1000) * Number(propagationspeed.value);
}

function computepropagationspeed() {
  return Number(distancebetweenrouters.value) / (Number(propagationdelay.value) / 1000);
}