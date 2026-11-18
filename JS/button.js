const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {

    if (window.scrollY > 3000) {
        btnTopo.classList.add("ativo");
    } else {
        btnTopo.classList.remove("ativo");
    }

});

console.log("JS do botao funcionando...")