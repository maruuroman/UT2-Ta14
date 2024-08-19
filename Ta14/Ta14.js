const boton = document.getElementById("añadirElemento");
const input = document.getElementById("texto");
const lista = document.getElementById("lista");


boton.addEventListener("click", function() {
    const texto = input.value;

    if (texto !== "") {
        
        const nuevoElemento = document.createElement("li");

        nuevoElemento.textContent = texto; 

        lista.appendChild(nuevoElemento);

        input.value ="";

    }
});