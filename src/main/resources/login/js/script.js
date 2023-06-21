const nome = sessionStorage.getItem("nome");
if (nome === null) nome = "";

nome.length > 0
  ? (document.getElementById("nome").innerText = nome.toString())
  : (document.getElementById("nome").innerText = "Nome do usuário indefinido!");

function eyeClick() {
  const inputSenha = document.getElementById("password_input");
  const eye = document.getElementById("eye-Ic");
  const senhaTypePassword = inputSenha.type == "password";

  if (senhaTypePassword) {
    inputSenha.setAttribute("type", "text");
    eye.setAttribute("src", "../img/close-eye.svg");
    eye.setAttribute("alt", "Ocultar Senha");
  } else {
    inputSenha.setAttribute("type", "password");
    eye.setAttribute("src", "../img/open-eye.svg");
    eye.setAttribute("alt", "Mostrar Senha");
  }
}

function error(user1, pass1) {
  const inputUser = document.getElementById("user_input");
  const inputSenha = document.getElementById("password_input");
  const msgError = document.getElementById("errorMsg");
  const btnLog = document.getElementById("btn-log");

  //   const user1 = "admin";
  //   const pass1 = "admin";
  msgError.hidden = true;
  if (inputSenha.value == pass1 && inputUser.value == user1) {
    msgError.hidden = true;
    btnLog.style.marginTop = "25px";
  } else {
    msgError.hidden = false;
    btnLog.style.marginTop = "10px";
  }
}

// function valideteLogin () {
//     const inputUser = document.getElementById("user_input")
//     const inputSenha = document.getElementById("password_input")
//     const btnLog = document.getElementById("btn-log")

//     const user1 = "admin"
//     const pass1 = "admin"

//     if (inputSenha.value == pass1 && inputUser.value == user1) {
//       btnLog.href = '../../home/Att-Grade/html/index-grade.html';
//     }
// }

function validateLogin() {
  const inputUser = document.getElementById("user_input");
  const inputSenha = document.getElementById("password_input");
  const msgError = document.getElementById("errorMsg");
  msgError.hidden = true;
  const nome = inputUser.value;
  const senha = inputSenha.value;

  const url =
    "http://192.168.0.200:8080/Adm/logar?nome=" + nome + "&senha=" + senha;

  var myHeaders = new Headers();

  myHeaders.append("Content-Type", "text/plain");
  myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
  myHeaders.append("Access-Control-Allow-Origin", "*");
  myHeaders.append("Access-Control-Request-Method", "GET, POST");
  myHeaders.append("Access-Control-Request-Headers", "*");
  myHeaders.append("Access-Control-Max-Age", "3600");

  var myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };

  var myRequest = new Request(url, myInit);

  fetch(myRequest)
    .then((resposta) => {
      return resposta.json();
    })
    .then((data) => {
      console.log(data);
      error(data.nome, data.senha);
      // Troca de janela
      sessionStorage.setItem("nome", data.nome);
      window.location.href = "./bem-vindo.html";
    })
    .catch((error) => console.log(error));
}
