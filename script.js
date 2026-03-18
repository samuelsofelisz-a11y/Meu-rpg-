/* UTIL POPUPS */
function abrir(id){document.getElementById(id).classList.add('ativo')}
function fechar(id){document.getElementById(id).classList.remove('ativo')}

/* ARMA / MUNIÇÃO */
let armaAtual="fuzil";
let tipoMunicao=1;
const fuzilNormal={atual:30,reserva:90,max:30};
const fuzilAB={atual:25,reserva:75,max:25};
const pistola={atual:12,reserva:36,max:12};

function atualizarContadores(){
  document.getElementById("contadorFuzilNormal").textContent=`${fuzilNormal.atual} / ${fuzilNormal.reserva}`;
  document.getElementById("contadorFuzilAB").textContent=`${fuzilAB.atual} / ${fuzilAB.reserva}`;
  document.getElementById("contadorPistola").textContent=`${pistola.atual} / ${pistola.reserva}`;
}

function trocarArma(){
  if(armaAtual==="fuzil"){
    armaAtual="pistola";
    document.getElementById("fuzilImg").style.opacity="0";
    document.getElementById("pistolaImg").classList.add("visivel");
  } else {
    armaAtual="fuzil";
    document.getElementById("fuzilImg").style.opacity="1";
    document.getElementById("pistolaImg").classList.remove("visivel");
  }
  atualizarContadores();
}

function aplicarDano(){
  const val = document.getElementById("danoInput").value;
  // Lógica de cálculo de dano e placas aqui...
  console.log("Dano aplicado: " + val);
}

document.getElementById('btnDano').onclick = aplicarDano;
atualizarContadores();
