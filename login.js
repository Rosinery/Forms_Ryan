function login() {
    var emailLogin = document.getElementById('email').value;
    var senhaLogin = document.getElementById('senha').value;

    var cadastros = JSON.parse(localStorage.getItem('cadastros')) || [];
    var usuario = cadastros.find(cadastro => cadastro.email === emailLogin && cadastro.senha === senhaLogin);

    if (usuario) {
        alert('Login bem-sucedido! Bem-vindo, ' + usuario.nome + '!');
    } else {
        alert('Email ou senha incorretos. Tente novamente.');
    }

    document.getElementById('email').value = '';
    document.getElementById('senha').value = '';
}
