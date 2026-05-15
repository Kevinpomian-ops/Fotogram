const myImgs2 = [
    { path: "alexanderweichsel-japan-9074037_1280.jpg", desc: "Beschreibung", activ: false, klasse: "test" },
    { path: "binmassam-chef-4807317_1280.jpg", desc: "Beschreibung", activ: false, klasse: "test" },
    { path: "deltaworks-japanese-umbrellas-636870_1280.jpg", desc: "Beschreibung", activ: false, klasse: "test" },
    { path: "djedj-japanese-lantern-5568727_1280.jpg", desc: "Beschreibung", activ: false, klasse: "test" },
    { path: "jplenio-traditional-8245250_1280.jpg", desc: "Beschreibung", activ: false, klasse: "test" },
    { path: "kanenori-mountains-8031511_1280.jpg", desc: "Beschreibung", activ: false, klasse: "test" },
    { path: "kanenori-temple-6963458_1280.jpg", desc: "Beschreibung", activ: false, klasse: "test" },
    { path: "mailtotobi-waterfall-4259935_1280.jpg", desc: "Beschreibung", activ: false, klasse: "test" },
    { path: "maximilianhemon-japan-5021733_1280.jpg", desc: "Beschreibung", activ: false, klasse: "test" },
    { path: "pexels-temple-1841296_1280.jpg", desc: "Beschreibung", activ: false, klasse: "test" },
    { path: "rmsep4-street-4942809_1280.jpg", desc: "Beschreibung", activ: false, klasse: "test" },
    { path: "takatoshikun-cafe-5899078_1280.jpg", desc: "Beschreibung", activ: false, klasse: "test" }
]



function renderImgs() {
    let images = "";
    for (Image in myImgs2) {
        // console.log(myImgs2[Image]);
        images += `
        <div onclick="openDialog()"class=" ${myImgs2[Image].klasse} " ${myImgs2[Image].activ}>
        <img src="assats/img/${myImgs2[Image].path}" alt="${myImgs2[Image].desc}">
        </div>
        `
    }
    document.getElementById('imgs').innerHTML = images;
}
renderImgs();

let activeImg = 0;

console.log(activeImg);


function renderDialog() {
    let dialog = "";
    dialog += `
            <p>test.jpg</p>
        <button id="closeButton" onclick="closeDialog()">X</button>
        <img src="./assats/img/${myImgs2[activeImg].path}" alt="${myImgs2[activeImg].desc}" >

        <nav>
            <button onclick="dialogBack()" id="backButton">←</button>
            <p class="counter">${activeImg + 1}/${myImgs2.length}</p>
            <button onclick="dialogNext()" id="nextButton">→</button>
        </nav>
    `;
    document.getElementById('imgDialog').innerHTML = dialog;

}
renderDialog();







function openDialog() {
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

const index = myImgs2.findIndex(img => img.path === "kanenori-temple-6963458_1280.jpg");

console.log(index);