const pesquisa = document.getElementById("search-box");

const parte = document.getElementById("part");
const grupo = document.getElementById("team");
const forma = document.getElementById("form");
const alcance = document.getElementById("range");
const funcionamento = document.getElementById("type");
const especial = document.getElementById("special");

const semResultado = document.getElementById("no-result");

function atualizarStands() {

    const textoPesquisa = pesquisa.value.toLowerCase();

    const stands = document.querySelectorAll(".text-and-img");

    let encontrados = 0;

    stands.forEach(stand => {

        const nome = stand.querySelector(".person-name").textContent.toLowerCase();

        const parteStand = stand.dataset.part;
        const grupoStand = stand.dataset.team;
        const formaStand = stand.dataset.form;
        const alcanceStand = stand.dataset.range;
        const tipoStand = stand.dataset.type;
        const especialStand = stand.dataset.special;

        const pesquisaOK = nome.includes(textoPesquisa);

        const parteOK =
            parte.value === "none" ||
            parte.value === parteStand;

        const grupoOK =
            grupo.value === "none" ||
            grupo.value === grupoStand;

        const formaOK =
            forma.value === "none" ||
            forma.value === formaStand;

        const alcanceOK =
            alcance.value === "none" ||
            alcance.value === alcanceStand;

        const tipoOK =
            funcionamento.value === "none" ||
            tipoStand === funcionamento.value;

        const especialOK =
            especial.value === "none" ||
            especial.value === especialStand;

        if (
            pesquisaOK &&
            parteOK &&
            grupoOK &&
            formaOK &&
            alcanceOK &&
            tipoOK &&
            especialOK
        ) {

            stand.style.display = "";
            encontrados++;

        } else {

            stand.style.display = "none";

        }

    });

    semResultado.style.display =
        encontrados === 0 ? "block" : "none";

    atualizarTitulos();

}

function atualizarTitulos() {

    const containers = document.querySelectorAll(".card-container");

    containers.forEach(container => {

        const titulo = container.previousElementSibling;

        const cardsVisiveis = [...container.querySelectorAll(".text-and-img")]
            .some(card => card.style.display !== "none");

        titulo.style.display = cardsVisiveis ? "" : "none";
        container.style.display = cardsVisiveis ? "" : "none";

    });

}

pesquisa.addEventListener("input", atualizarStands);

parte.addEventListener("change", atualizarStands);
grupo.addEventListener("change", atualizarStands);
forma.addEventListener("change", atualizarStands);
alcance.addEventListener("change", atualizarStands);
funcionamento.addEventListener("change", atualizarStands);
especial.addEventListener("change", atualizarStands);

atualizarStands();

console.log("JS dos stands funcionando...")