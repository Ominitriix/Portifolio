"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Guarda a lista para filtrar mais tarde
let items = [];
// Salva o resultado da filtragem
let filteredItems = [];
addEventListener("DOMContentLoaded", () => {
    loadProjects();
});
// Carrega todos os templates do github
function loadProjects() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const response = yield fetch("projects.json");
            // Conferindo a resposta para evitar que continue sem os recursos necessarios
            if (!response.ok == true) {
                throw new Error("Infelismente não foi posivel carregar os templates");
            }
            const list = yield response.json();
            if (!Array.isArray(list.projects)) {
                throw new Error("Infelismente não foi posivel carregar os templates");
            }
            // Guarda a lista para usos futuros
            items = list.projects;
            // Após aguardar a resposta, cria uma lista com o valor retornado
            buildElementBody(list.projects);
            //
            // Esperar carregar primeiro no DOM
            filterListProjects();
            //
        }
        catch (error) {
            throw new Error("Infelismente não foi posivel carregar os templates" + error);
        }
    });
}
// Criando um container com itens pra expor os templates
function buildElementBody(list) {
    const container = document.getElementById("container_scroll");
    // Garatindo que nada vai se repetir
    container.innerHTML = "";
    list.forEach((elem) => {
        //
        const div = document.createElement("div");
        const fig = document.createElement("figure");
        const img = document.createElement("img");
        img.src = elem.image;
        img.alt = "Ilustração";
        const figc = document.createElement("figcaption");
        const linkButton = document.createElement("a");
        linkButton.href = elem.urlPage;
        linkButton.target = "_blank";
        const btn = document.createElement("button");
        btn.type = "button";
        const icon = document.createElement("img");
        icon.src = "./assets/img/eye.svg";
        fig.appendChild(img);
        figc.appendChild(linkButton);
        linkButton.appendChild(btn);
        btn.appendChild(icon);
        fig.appendChild(figc);
        div.appendChild(fig);
        container.appendChild(div);
        //
        //
    });
    //
}
function filterListProjects() {
    const listInputs = document.querySelectorAll('input[name="checkModel"]');
    listInputs.forEach((elem, index) => {
        elem.addEventListener("click", () => {
            if (elem.checked && index === 0) {
                buildElementBody(items);
            }
            if (elem.checked && index === 1) {
                const filter = items.filter((x) => x.color == "white");
                buildElementBody(filter);
            }
            if (elem.checked && index === 2) {
                const filter = items.filter((x) => x.color == "dark");
                buildElementBody(filter);
            }
            if (elem.checked && index === 3) {
                const filter = items.filter((x) => x.lang == "workpress");
                buildElementBody(filter);
            }
            if (elem.checked && index === 4) {
                const filter = items.filter((x) => x.lang == "typescript");
                buildElementBody(filter);
            }
            if (elem.checked && index === 5) {
                const filter = items.filter((x) => x.lang == "php");
                buildElementBody(filter);
            }
            if (elem.checked && index === 6) {
                const filter = items.filter((x) => x.lang == "sass");
                buildElementBody(filter);
            }
        });
    });
}
