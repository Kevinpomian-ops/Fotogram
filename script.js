const myImgs2 = [
    { path: "alexanderweichsel-japan-9074037_1280.jpg", desc: "Foto von Torii-Tor", klasse: "arrayclass" },
    { path: "binmassam-chef-4807317_1280.jpg", desc: "Foto von Streetfood Japan", klasse: "arrayclass" },
    { path: "deltaworks-japanese-umbrellas-636870_1280.jpg", desc: "Foto von Regenschirme", klasse: "arrayclass" },
    { path: "djedj-japanese-lantern-5568727_1280.jpg", desc: "Foto von einer Dekoration", klasse: "arrayclass" },
    { path: "jplenio-traditional-8245250_1280.jpg", desc: "Foto von Abtrennungen in einem Raum", klasse: "arrayclass" },
    { path: "kanenori-mountains-8031511_1280.jpg", desc: "Foto auf einem Berg in der nacht", klasse: "arrayclass" },
    { path: "kanenori-temple-6963458_1280.jpg", desc: "Foto von einem Tempel in der nacht", klasse: "arrayclass" },
    { path: "mailtotobi-waterfall-4259935_1280.jpg", desc: "Foto von einem Wasserfall", klasse: "arrayclass" },
    { path: "maximilianhemon-japan-5021733_1280.jpg", desc: "Foto vom Nachtleben", klasse: "arrayclass" },
    { path: "pexels-temple-1841296_1280.jpg", desc: "Foto von einem Tempel am Tag", klasse: "arrayclass" },
    { path: "rmsep4-street-4942809_1280.jpg", desc: "Foto von straße in der Nacht", klasse: "arrayclass" },
    { path: "takatoshikun-cafe-5899078_1280.jpg", desc: "Foto von einem kleinen Laden außen", klasse: "arrayclass" }
]





function renderImgs() {
    let images = "";
    for (Image in myImgs2) {
        images += `
        <button onclick="openDialog(${Image})"class=" ${myImgs2[Image].klasse} " ${myImgs2[Image].activ}>
        <img src="assats/img/${myImgs2[Image].path}" alt="${myImgs2[Image].desc}" id="image${Image}">
        </button>
        `
    }
    document.getElementById('imgs').innerHTML = images;
}
renderImgs();

let activeImg = 1;



function renderDialog() {
    let dialog = "";
    dialog += `
        <div class="dialogHeader">
            <p>Bild: ${myImgs2[activeImg].desc}</p>
        <button id="closeButton" onclick="closeDialog()">X</button>
        </div>

        <div class="dialogImg">
        <img src="./assats/img/${myImgs2[activeImg].path}" alt="${myImgs2[activeImg].desc}" >
        </div>
        <nav>
            <button onclick="dialogBack()" id="backButton">←</button>
            <p class="counter">${activeImg + 1}/${myImgs2.length}</p>
            <button onclick="dialogNext()" id="nextButton">→</button>
        </nav>
    `;
    document.getElementById('imgDialog').innerHTML = dialog;

}
renderDialog();


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


    if (activeImg > myImgs2.length - 1) {
        activeImg = 0;
    }
    renderDialog();
}

function dialogBack() {
    activeImg = activeImg - 1;


    if (activeImg < 0) {
        activeImg = myImgs2.length - 1;
    }
    renderDialog();
}
    