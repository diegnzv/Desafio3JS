const divColors = ["blue", "red", "green", "yellow"];
divColors.forEach(color => {
    const div = document.getElementById(color);
    div.addEventListener("click", () => {
        div.style.backgroundColor = "black";
    });
});


let actualColor = "";

document.addEventListener("keydown", (event) => {
    const keyDiv = document.getElementById("key");

    if (event.key === "a") { 
        actualColor = "pink";
        keyDiv.style.backgroundColor = actualColor;
    } else if (event.key === "s") { 
        actualColor = "orange";
        keyDiv.style.backgroundColor = actualColor;
    } else if (event.key === "d") { 
        actualColor = "lightblue";
        keyDiv.style.backgroundColor = actualColor;
    } else if (event.key === "q") { 
        crearDiv("purple");
    } else if (event.key === "w") { 
        crearDiv("gray");
    } else if (event.key === "e") {
        crearDiv("brown");
    }
});


function crearDiv(color) {
    const nuevoDiv = document.createElement("div");
    nuevoDiv.style.width = "200px";
    nuevoDiv.style.height = "200px";
    nuevoDiv.style.backgroundColor = color;
    nuevoDiv.style.border = "1px solid black";
    nuevoDiv.style.margin = "10px";
    document.body.appendChild(nuevoDiv);}