const superiorEstacio = document.getElementById("superiorEstacio");
const superiorEstacioDiploma = document.getElementById("superiorEstacioDiploma");
const close = document.querySelectorAll(".close");
const integracaoIa = document.getElementById("Ia");
const iA = document.getElementById("integracaoIa");
const py = document.getElementById("python");
const certificatePython = document.getElementById("certificatePython");
const ingles = document.getElementById("ingles-avancado");
const inglesCertificate = document.getElementById("inglesCertitificate");
const uni = document.getElementById("unicesumar");
const declacacaoUni = document.getElementById("declaracaoUnicesumar");
const menu = document.getElementById("btn-menu");
const nav = document.getElementById("navigation");
const copilotStudio = document.querySelector("#produtividade");
const objPython = document.querySelector("#obj-python");
const oriPython = document.querySelector("#ori-python");
const colectionsPython = document.querySelector("#colections-python");
const certificateColectionsPython = document.querySelector("#certificate-colections-python");
const logic = document.querySelector("#logic");
const certificateLogic = document.querySelector("#certificate-logic");

logic.addEventListener('click', function() {
  certificateLogic.classList.add('clicked');
})

objPython.addEventListener('click', function() {
  oriPython.classList.add('clicked');
})

copilotStudio.addEventListener('click', function() {
  studio.classList.add('clicked');
})

uni.addEventListener('click', function() {
  declacacaoUni.classList.add('clicked');
})
superiorEstacio.addEventListener('click', function() {
    superiorEstacioDiploma.classList.add('clicked');
})

ingles.addEventListener('click', function() {
    inglesCertificate.classList.add('clicked');
})

iA.addEventListener('click', function() {
    integracaoIa.classList.add('clicked');
})

py.addEventListener('click', function() {
    certificatePython.classList.add('clicked');
})

close.forEach(close => {
  close.addEventListener('click', function() {
    const parent = this.closest('.pop-img');
    if (parent) {
      parent.classList.remove('clicked');
    }
  });
});


menu.addEventListener('click', function () {
  nav.classList.toggle('show');
  menu.classList.toggle('hex')
});

