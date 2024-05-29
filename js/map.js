let map;
function initMap() {
    // https://leafletjs.com/examples/quick-start/
    const coordenadas = [-24.122069139286452, -46.67899042367935];
    const zoom = 19;
    map = L.map('map').setView(coordenadas, zoom);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution:
            '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(map);
}

function addMarkerOnClick(e) {
    const newMarker = L.marker(e.latlng).addTo(map);
    const latlng = newMarker.getLatLng();
    console.log(latlng.lat + ', ' + latlng.lng);
}

function renderMockIcons() {
    // icones: obras, acidentes, alagamento, deslizamento, outro
    let icons = {
        obras: [-24.122145068862757, -46.67824476957322], // nth-child 1
        acidente: [-24.122529258859455, -46.680006980896], // nth-child 2
        alagamento: [-24.120207533453424, -46.67711019515992], // nth-child 3
        deslizamento: [-24.106640211459773, -46.66249752044678], // nth-child 4
        outro: [-24.12106481894194, -46.67934715747834], // nth-child 5
        outro2: [-24.11882413533116, -46.67458891868592], // nth-child 6
        acidente2: [-24.115789649198657, -46.670200824737556], // nth-child 7
        alagamento2: [-24.11187407691466, -46.66607022285462], // nth-child 8
        obras2: [-24.108526167633425, -46.662250757217414], // nth-child 9
        deslizamento2: [-24.10495285231077, -46.659986972808845], // nth-child 10
    };

    for (const key in icons) {
        const pos = icons[key];
        const marker = L.marker(pos).addTo(map);
        marker._id = key;
    }

    const markers = {
        obras: document.querySelector('img.leaflet-marker-icon:nth-child(1)'),
        acidente: document.querySelector(
            'img.leaflet-marker-icon:nth-child(2)'
        ),
        alagamento: document.querySelector(
            'img.leaflet-marker-icon:nth-child(3)'
        ),
        deslizamento: document.querySelector(
            'img.leaflet-marker-icon:nth-child(4)'
        ),
        outro: document.querySelector('img.leaflet-marker-icon:nth-child(5)'),
        outro2: document.querySelector('img.leaflet-marker-icon:nth-child(6)'),
        acidente2: document.querySelector(
            'img.leaflet-marker-icon:nth-child(7)'
        ),
        alagamento2: document.querySelector(
            'img.leaflet-marker-icon:nth-child(8)'
        ),
        obras2: document.querySelector('img.leaflet-marker-icon:nth-child(9)'),
        deslizamento2: document.querySelector(
            'img.leaflet-marker-icon:nth-child(10)'
        ),
    };

    markers.obras.src = './assets/markers/obras.png';
    markers.acidente.src = './assets/markers/acidente.png';
    markers.alagamento.src = './assets/markers/alagamento.png';
    markers.deslizamento.src = './assets/markers/deslizamento.png';
    markers.outro.src = './assets/markers/outros.png';
    markers.outro2.src = './assets/markers/outros.png';
    markers.acidente2.src = './assets/markers/acidente.png';
    markers.alagamento2.src = './assets/markers/alagamento.png';
    markers.obras2.src = './assets/markers/obras.png';
    markers.deslizamento2.src = './assets/markers/deslizamento.png';
}

function load() {
    initMap();
    // map.on('click', addMarkerOnClick);
    renderMockIcons();
}

load();
