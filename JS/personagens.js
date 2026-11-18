const pesquisa = document.getElementById("search-box");
const parte = document.getElementById("parts");
const categ = document.getElementById("categ");
const teams = document.getElementById("teams");

function atualizarPersonagens() {

    const textoPesquisa = pesquisa.value.toLowerCase();
    const personagens = document.querySelectorAll(".text-and-img");
    let encontrados = 0;

    personagens.forEach(personagem => {

        const nome = personagem
            .querySelector(".person-name")
            .textContent
            .toLowerCase();

        const personagemParte = personagem.dataset.parts;
        const personagemCategoria = personagem.dataset.categ;
        const personagemGrupo = personagem.dataset.team;

        const pesquisaOk =
            nome.includes(textoPesquisa);

        const parteOk =
            parte.value === "none" ||
            parte.value === personagemParte;

        const categoriaOk =
            categ.value === "none" ||
            personagemCategoria === categ.value;

        const grupoOk =
            teams.value === "none" ||
            teams.value === personagemGrupo;

        if (pesquisaOk && parteOk && categoriaOk && grupoOk) {
            personagem.style.display = "flex";
            encontrados++;
        } else {
            personagem.style.display = "none";
        }

    });
    document.querySelectorAll(".main-title").forEach(titulo => {

        const container = titulo.nextElementSibling;
        const temVisivel = [...container.querySelectorAll(".text-and-img")]
            .some(card => card.style.display !== "none");
        titulo.style.display =
            temVisivel ? "" : "none";
        container.style.display =
            temVisivel ? "" : "none";
    });

    document.getElementById("no-result").style.display =
        encontrados === 0 ? "block" : "none";
}

pesquisa.addEventListener("input", atualizarPersonagens);
parte.addEventListener("change", atualizarPersonagens);
categ.addEventListener("change", atualizarPersonagens);
teams.addEventListener("change", atualizarPersonagens);

atualizarPersonagens();

console.log("JS dos personagens funcionando…");