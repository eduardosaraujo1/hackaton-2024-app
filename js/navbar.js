function renderNavbarActive() {
    const indicators = document.querySelectorAll(".indicator");
    for (const id of indicators) {
        if (id.dataset.id === navbar.current) {
            id.classList.add("active");
        } else {
            id.classList.remove("active");
        }
    }
}

function onLoad() {
    renderNavbarActive();
}

document.addEventListener("DOMContentLoaded", onLoad);
