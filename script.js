
function checkPassword() {
    var password = document.getElementById("passwordInput").value;
    if (password === "salchipapa") {
        document.getElementById("message").innerHTML = "Felicidades!, lograste resolver todos los acertijos creo que ya seria momento de darte tu premio asi que tu premio te estara esperando en la puerta del kiosco el dia jueves 13/7/2023 espero que la hayas pasado mal xd";
        document.getElementById("message").style.display = "block";
    } else {
        document.getElementById("message").innerHTML = "";
        document.getElementById("message").style.display = "none";
    }
}

