setInterval(function hora(){
    
    let novaHora = new Date();
    let dia = novaHora.getDate();
    let mes = novaHora.getMonth();
    let ano = novaHora.getFullYear();
    let hora = novaHora.getHours();
    let minuto = novaHora.getMinutes();
    let segundo = novaHora.getSeconds();
    
    minuto = zero(minuto);
    segundo = zero(segundo);
    
    document.querySelector('.horas').textContent =dia+'/'+ mes+ '/'+ano+' '+hora+':'+minuto+':'+segundo;
},1000)

function zero(x) {
    if (x < 10) {
        x = '0' + x;
    } return x;
}





const iniciar = document.querySelector('.start');
const pausar = document.querySelector('.pause');
const tempo = document.querySelector('.tempo');

iniciar.addEventListener('click', iniciarTempo);
pausar.addEventListener('click', pausarTempo);
pausar.addEventListener('dblclick', resetarTempo);


let timer;


function iniciarTempo() {
  let s = 1;
  let m = 0;
  let h = 0;

  timer = setInterval(() => {
    if (s == 60) { m++; s = 0; }
    if (m == 60) { h++; m = 0; s = 0; }
    if (h < 10) document.querySelector("#hora").innerHTML = "0" + h + "hs";
    else document.querySelector("#hora").innerHTML = h + "hs";

    if (m < 10) document.querySelector("#minuto").innerHTML = "0" + m + "m";
    else document.querySelector("#minuto").innerHTML = m + "m";

    if (s < 10) document.querySelector("#segundo").innerHTML = "0" + s + "s"; 
    else document.querySelector("#segundo").innerHTML = s + "s"
    s.innerText = s++;
  }, 1000);
  iniciar.setAttribute('disabled', '');
}

function pausarTempo() {
  clearInterval(timer);
  iniciar.removeAttribute('disabled');
}

function resetarTempo() {
  document.querySelector("#hora").innerHTML = "00hs";
  document.querySelector("#minuto").innerHTML = "00m";
  document.querySelector("#segundo").innerHTML = "00s";
  
}




