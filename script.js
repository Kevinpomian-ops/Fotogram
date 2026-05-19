const myImgs = [
    { path: "alexanderweichsel-japan-9074037_1280.jpg", desc: "Foto von Torii-Tor", class: "arrayclass" },
    { path: "binmassam-chef-4807317_1280.jpg", desc: "Foto von Streetfood Japan", class: "arrayclass" },
    { path: "deltaworks-japanese-umbrellas-636870_1280.jpg", desc: "Foto von Regenschirme", class: "arrayclass" },
    { path: "djedj-japanese-lantern-5568727_1280.jpg", desc: "Foto von einer Dekoration", class: "arrayclass" },
    { path: "jplenio-traditional-8245250_1280.jpg", desc: "Foto von einem Raum", class: "arrayclass" },
    { path: "kanenori-mountains-8031511_1280.jpg", desc: "Foto auf einem Berg in der nacht", class: "arrayclass" },
    { path: "kanenori-temple-6963458_1280.jpg", desc: "Foto von einem Tempel in der nacht", class: "arrayclass" },
    { path: "mailtotobi-waterfall-4259935_1280.jpg", desc: "Foto von einem Wasserfall", class: "arrayclass" },
    { path: "maximilianhemon-japan-5021733_1280.jpg", desc: "Foto vom Nachtleben", class: "arrayclass" },
    { path: "pexels-temple-1841296_1280.jpg", desc: "Foto von einem Tempel am Tag", class: "arrayclass" },
    { path: "rmsep4-street-4942809_1280.jpg", desc: "Foto von straße in der Nacht", class: "arrayclass" },
    { path: "takatoshikun-cafe-5899078_1280.jpg", desc: "Foto von einem kleinen Laden außen", class: "arrayclass" }
]

let activeImg = 1;

function renderImgs() {
    let images = "";
    for (Image in myImgs) {
        images += `
        <button onclick="openDialog(${Image})"class=" ${myImgs[Image].class} ">
            <img src="assats/img/${myImgs[Image].path}" alt="${myImgs[Image].desc}" id="image${Image}">
        </button>
        `
    }
    document.getElementById('imgs').innerHTML = images;
}

function renderDialog() {
    let dialog = "";
    dialog += `
        <div class="dialogHeader">
            <h2>Bild: ${myImgs[activeImg].desc}</h2>
            <button id="closeButton" onclick="closeDialog()">X</button>
        </div>

        <div class="dialogImg">
            <img src="./assats/img/${myImgs[activeImg].path}" alt="${myImgs[activeImg].desc}" >
        </div>

        <nav>
            <button onclick="dialogBack()" id="backButton">←</button>
            <p class="counter">${activeImg + 1}/${myImgs.length}</p>
            <button onclick="dialogNext()" id="nextButton">→</button>
        </nav>
    `;
    document.getElementById('imgDialog').innerHTML = dialog;
}

function openDialog(i) {
    activeImg = i;
    document.getElementById("imgDialog").showModal();
    renderDialog();
}

function closeDialog() {
    document.getElementById("imgDialog").close();
}

function dialogNext() {
    activeImg = activeImg + 1;

    if (activeImg > myImgs.length - 1) {
        activeImg = 0;
    }
    renderDialog();
}

function dialogBack() {
    activeImg = activeImg - 1;

    if (activeImg < 0) {
        activeImg = myImgs.length - 1;
    }
    renderDialog();
}