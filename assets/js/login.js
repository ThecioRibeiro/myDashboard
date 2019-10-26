function login() {

    var usuario = {
        email: 'a', //'#email'  'admin@email.com.br'
        senha: 1 //'#senha'  '123logar'
    };
    console.log(usuario);

    if ($('#email').val() == usuario.email
        && $('#senha').val() == usuario.senha) {
        console.log('teste ok');
        setTimeout(function() {
            window.location.href = "file:///C:/Users/edut/Documents/GitHub/myDashboard/index.html";
        }, 5000);   
    } else {
        console.log('nao');
        toastr.error('Senha ou usuário incorreto.');
    }
}


