let pageIndex = 1;

function refreshIndex() {
    const pages = document.querySelectorAll('.container-orientacao');
    for (const page of pages) {
        if (page.dataset.index == pageIndex) {
            page.classList.add('active');
        } else {
            page.classList.remove('active');
        }
    }
}

function stepForward() {
    pageIndex = Math.min(3, pageIndex + 1);
    refreshIndex();
}

function stepBack() {
    pageIndex = Math.max(1, pageIndex - 1);
    refreshIndex();
}

function loadEventListeners() {
    const btnsLeft = document.querySelectorAll('.arrow-left');
    const btnsRight = document.querySelectorAll('.arrow-right');

    for (const btn of btnsLeft) {
        btn.addEventListener('click', stepBack);
    }

    for (const btn of btnsRight) {
        btn.addEventListener('click', stepForward);
    }
}

loadEventListeners();
