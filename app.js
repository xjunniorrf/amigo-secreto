let grupoAmigos = [];


function cambiarTexto(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function agregarAmigo() {
  amigos = document.getElementById("amigo").value;
  if (amigos == "") {
    alert("Ingrese un valor valido");
  } else {
    if (grupoAmigos.includes(amigos)) {
      alert("El amigo ya esta en la lista");
    } 
    else if (grupoAmigos.length >= 5) {
      alert("El maximo de amigos es 5");
      console.log(grupoAmigos);
    } 
    else {
      grupoAmigos.push(amigos);
      document.getElementById("amigo").value = "";
      mostrarAmigos();
    }
  }
}

function mostrarAmigos() {
  let listaAmigos = document.getElementById("listaAmigos");
  listaAmigos.innerHTML = "";
  for (let i = 0; i < grupoAmigos.length; i++) {
    cambiarTexto("#listaAmigos", `${listaAmigos.innerHTML} ${grupoAmigos[i]} <br>`);
  }

}

function sortearAmigo() {
  let amigoSorteado = Math.floor(Math.random() * grupoAmigos.length);
  amigoSorteado = grupoAmigos[amigoSorteado];
  document.getElementById("resultado").innerHTML = `El amigo secreto es: ${amigoSorteado}`;
  document.getElementById("listaAmigos").innerHTML = "";
  return;
}
