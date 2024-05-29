function loadBotoes() {
    const btnEnviar = document.getElementById("enviar");
    btnEnviar.addEventListener('click', () => {
        const inputs = {
            nome: document.getElementById("nome"),
            cpf: document.getElementById("cpf"),
            senha: document.getElementById("senha")
        };

        for (const i in inputs) {
            localStorage.setItem(i, inputs[i].value);
        }
    })
}

function loadInputs() {
    const inputs = {
        nome: document.getElementById("nome"),
        cpf: document.getElementById("cpf"),
        senha: document.getElementById("senha")
    };

    for (const i in inputs) {
        inputs[i].value = localStorage.getItem(i) ?? "";
    }

    document.querySelector("#senhaRepetir").value = inputs["senha"].value;
}

function load() {
    loadBotoes();
    loadInputs();
}

load()