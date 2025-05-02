function verificarSenha(senha) {
    const minCaracteres = 8;
    const temMaiusculas = /[A-Z]/.test(senha);
    const temMinusculas = /[a-z]/.test(senha);
    const temCaractereEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(senha);

    if (senha.length >= minCaracteres && temMaiusculas && temMinusculas && temCaractereEspecial) {
        console.log("Senha válida.");
    } else {
        console.log("Senha inválida. A senha deve ter:");
        if (senha.length < minCaracteres) console.log("- Pelo menos 8 caracteres");
        if (!temMaiusculas) console.log("- Pelo menos uma letra maiúscula");
        if (!temMinusculas) console.log("- Pelo menos uma letra minúscula");
        if (!temCaractereEspecial) console.log("- Pelo menos um caractere especial");
    }
}

let senha = "Exemplo@123"; // Você pode alterar este valor para testar outras senhas

verificarSenha(senha);
