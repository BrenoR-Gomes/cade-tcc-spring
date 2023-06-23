function onSubmit() {
    var form = new FormData(document.getElementById('cadastro'));
    // const url = `https://localhost:8085/nome`;
    fetch(form.action, {
        method: "POST",
        body: form,
        headers: { 'Content-Type': 'application/json' }
    })
    .then(
        resposta => {
            console.log(resposta.json())
            return resposta.json();
            
        }
    ).catch(error => console.log(error));
}