const formulario = document.getElementById("formContato");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const mensagem = document.getElementById("mensagem").value;

    const numero = "258841160712";

    const texto =
        "Olá, CasaFacil!%0A%0A" +
        "Nome: " + encodeURIComponent(nome) + "%0A" +
        "Email: " + encodeURIComponent(email) + "%0A%0A" +
        "Mensagem:%0A" +
        encodeURIComponent(mensagem);

    const whatsapp = "https://wa.me/" + numero + "?text=" + texto;

    window.open(whatsapp, "_blank");

});