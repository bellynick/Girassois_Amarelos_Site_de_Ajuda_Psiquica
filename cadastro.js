document.getElementById("formulario").addEventListener("submit", function (event) {
    event.preventDefault();
    
    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let data = document.getElementById("data").value.trim();
    let genero = document.getElementById("genero").value.trim();
    
    let erro = false;

    document.getElementById("erroNome").textContent = "";
    document.getElementById("erroEmail").textContent = "";
    document.getElementById("erroSenha").textContent = "";
    document.getElementById("erroData").textContent = "";
    document.getElementById("erroGenero").textContent = "";

    if (nome == "") {
        document.getElementById("erroNome").textContent = "O campo nome é obrigatório.";
        erro = true;
    }

    if (email == "" || !email.includes("@")) {
        document.getElementById("erroEmail").textContent = "Digite um e-mail válido.";
        erro = true;
    }

    if (senha.length < 6) {
        document.getElementById("erroSenha").textContent = "A senha deve ter no mínimo 6 caracteres.";
        erro = true;
    } else if (!/[A-Z]/.test(senha)) {
        document.getElementById("erroSenha").textContent = "A senha deve conter pelo menos uma letra maiúscula.";
        erro = true;
    } else if (!/[a-z]/.test(senha)) {
        document.getElementById("erroSenha").textContent = "A senha deve conter pelo menos uma letra minúscula.";
        erro = true;
    } else {
        document.getElementById("erroSenha").textContent = ""; // Limpa a mensagem de erro
    }    

    if (data == "") {
        document.getElementById("erroData").textContent = "Insira sua data de nascimento";
        erro = true;
    }

    if (genero == "") {
        document.getElementById("erroGenero").textContent = "Insira seu genero";
        erro = true;
    }
});