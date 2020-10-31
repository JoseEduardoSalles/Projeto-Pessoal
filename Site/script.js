function entrar() {
    var email = in_login.value;
    var senha = in_senha.value;

    if (email == "admin@gmail.com" && senha == "1234") {
        window.location.assign("../Site/home.html") //chamando a window e dps ta pegando a location da janela
        // e o assing pra eu ir pra alguma pagina 
    }
}