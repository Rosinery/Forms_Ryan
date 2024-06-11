function cadastrar() {
    var nome = document.getElementById('nome').value;
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senhaCad').value;

    if (checarEmailExistente(email)) {
        alert('Este email já está cadastrado. Por favor, utilize outro.');
        return;
    }

    var cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    cadastros.push({ nome: nome, email: email, senha: senha });
    localStorage.setItem('cadastros', JSON.stringify(cadastros));

    alert('Cadastro realizado com sucesso!');
    limparFormulario();
}

function checarEmailExistente(email) {
    var cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    return cadastros.some(cadastro => cadastro.email === email);
}

function limparFormulario() {
    document.getElementById('nome').value = '';
    document.getElementById('email').value = '';
    document.getElementById('senhaCad').value = '';
}
