function eyeClick() {
    const inputSenha = document.getElementById("password_input")
    const eye = document.getElementById("eye-Ic")
    const senhaTypePassword = inputSenha.type == "password"

    if (senhaTypePassword) {
        inputSenha.setAttribute("type", "text")
        eye.setAttribute("src", "../img/close-eye.svg")
        eye.setAttribute("alt", "Ocultar Senha")

    } else {
        inputSenha.setAttribute("type", "password")
        eye.setAttribute("src", "../img/open-eye.svg")
        eye.setAttribute("alt", "Mostrar Senha")
    }
}

function error () {
    const inputUser = document.getElementById("user_input")
    const inputSenha = document.getElementById("password_input")
    const msgError = document.getElementById("errorMsg")
    const btnLog = document.getElementById("btn-log")

    const user1 = "admin"
    const pass1 = "admin"
    
    if (inputSenha.value == pass1 && inputUser.value == user1) {
        msgError.hidden = true;
        btnLog.style.marginTop = '25px';
    } else {
        msgError.hidden = false;
        btnLog.style.marginTop = '10px';
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

function validateLogin () {
    const inputUser = document.getElementById("user_input")
     const inputSenha = document.getElementById("password_input")
     const nome = inputUser.value;
    const senha = inputSenha.value;

    const url = "http://172.17.16.161:8080/Adm/logar/?nome="+nome+"&senha="+senha;

    var myHeaders = new Headers();

    myHeaders.append("Content-Type", "text/plain");
    myHeaders.append("X-Custom-Header", "ProcessThisImmediately");
    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Request-Method", "GET, POST");
    myHeaders.append("Access-Control-Request-Headers","*");
    myHeaders.append("Access-Control-Max-Age", "3600");
    
    var myInit = { 
        method: 'POST',
        headers: myHeaders,
        mode: 'no-cors',
        cache: 'default',
        body: {nome: inputUser, senha:inputSenha}
    };

    var myRequest = new Request(url, myInit);

    fetch(myRequest).then(
        resposta => {
            console.log(resposta.text)
            return resposta.json;
        }
    ).then(data => {
       console.log(data);
        // rua.value = data.logradouro;
        // document.getElementById("bairro").value = data.bairro;
        // console.log(data.localidade);
        // document.getElementById("cidade").value = data.localidade;
        // document.getElementById("estado").value = data.uf;
    }).catch(error => console.log(error));
    
    // function(Response){
    //     console.log("ok");
    // }
    
}
