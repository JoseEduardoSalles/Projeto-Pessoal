function entrar() {
    var email = in_login.value;
    var senha = in_senha.value;

    if (email == '' || senha == '') {
        alert('Insira um campo válido')
    }
    else if (email == "admin@gmail.com" && senha == "1234") {
        window.location.assign("../Site/home.html") //chamando a window e dps ta pegando a location da janela
        // e o assing pra eu ir pra alguma pagina 
    }
    else if (email == 'lucas@gmail.com' && senha == 'batata') {
        window.location.assign("../Site/home.html")
    }
    else if (email == 'ProfBrandao@gmail.com' && senha == 'bandtec') {
        window.location.assign("../Site/home.html")
    }
    else {
        alert('Insira um usuário válido')
    }
}