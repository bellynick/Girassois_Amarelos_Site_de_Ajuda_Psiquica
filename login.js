document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let data = document.getElementById("data").value.trim();
    let genero = document.getElementById("genero").value.trim();
    
    let erro = false;

    document.getElementById("erroEmail").textContent = "";
    document.getElementById("erroSenha").textContent = "";

    if (senha.length < 6) {
        document.getElementById("erroSenha").textContent = "A senha está errada";
        erro = true;
    }

    if (email == "" || !email.includes("@")) {
        document.getElementById("erroEmail").textContent = "Digite um e-mail válido.";
        erro = true;
    }
});