function renderNavbarActive() {
    const pageName = window.location.pathname.split('/').pop();
    const indicators = document.querySelectorAll('.indicator');
    for (const id of indicators) {
        if (id.dataset.dst === pageName) {
            id.classList.add('active');
        } else {
            id.classList.remove('active');
        }
    }
    if (!document.querySelector('.active.indicator') && !pageName) {
        // se nada foi ativado e o pageName é nulo, coloca home como padrão please
        const home = document.querySelector(
            '.indicator[data-dst="index.html"]'
        );
        home.classList.add('active');
    }
}

function addEventButtons() {
    //buttons
    const buttons = document.querySelectorAll('.indicator');
    for (const b of buttons) {
        const logo = b.parentElement.querySelector('.logo');
        logo.addEventListener('click', () => {
            window.location.href = `./${b.dataset.dst}`;
        });
    }
}

function onLoad() {
    renderNavbarActive();
    addEventButtons();
}

onLoad();
