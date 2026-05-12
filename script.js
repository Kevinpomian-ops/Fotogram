// const variable_string = "Text";
// const variable_int = 5; //ganzzahlen
// const variable_float = 5.5; //kommazahlen
// const variable_array = ["Text", 5, 5.5]; //eindimensionale auflistung index 0123456789
// const variable_json = {
//     bezeichner: "Text",
//     bezeichner2: 5,
//     bezeichner3: 5.5,
//     bezeichner4: ["Text", 5, 5.5],
//     bezeichner5: {
//         bezeichner: "Text",
//         bezeichner2: 5,
//         bezeichner3: 5.5,
//         bezeichner4: ["Text", 5, 5.5],
//         bezeichner5: {}
//     } //mehrdimensionales auflistung bezeichner:wert
// }

// for (index in array) {
//     const element = array[index];
    
// } //Kontrolstruktur -> Schleifen

// if (condition) {
    
// } else {
    
// } //Kontrolstruktur


const myImgs = [
    "alexanderweichsel-japan-9074037_1280.jpg",
    "binmassam-chef-4807317_1280.jpg",
    "deltaworks-japanese-umbrellas-636870_1280.jpg",
    "djedj-japanese-lantern-5568727_1280.jpg",
    "jplenio-traditional-8245250_1280.jpg",
    "kanenori-mountains-8031511_1280.jpg",
    "kanenori-temple-6963458_1280.jpg",
    "mailtotobi-waterfall-4259935_1280.jpg",
    "maximilianhemon-japan-5021733_1280.jpg",
    "pexels-temple-1841296_1280.jpg",
    "rmsep4-street-4942809_1280.jpg",
    "takatoshikun-cafe-5899078_1280.jpg"
]

const myImgs2 = [
    { path: "alexanderweichsel-japan-9074037_1280.jpg", desc: "Beschreibung", activ: false, klasse:"test"},
    { path: "binmassam-chef-4807317_1280.jpg", desc: "Beschreibung",activ: false, klasse:"test" },
    { path: "deltaworks-japanese-umbrellas-636870_1280.jpg", desc: "Beschreibung",activ: true, klasse:"test" },
    { path: "djedj-japanese-lantern-5568727_1280.jpg", desc: "Beschreibung", klasse:"test" },
    { path: "jplenio-traditional-8245250_1280.jpg", desc: "Beschreibung", klasse:"test" },
    { path: "kanenori-mountains-8031511_1280.jpg", desc: "Beschreibung", klasse:"test" },
    { path: "kanenori-temple-6963458_1280.jpg", desc: "Beschreibung", klasse:"test" },
    { path: "mailtotobi-waterfall-4259935_1280.jpg", desc: "Beschreibung", klasse:"test" },
    { path: "maximilianhemon-japan-5021733_1280.jpg", desc: "Beschreibung", klasse:"test" },
    { path: "pexels-temple-1841296_1280.jpg", desc: "Beschreibung", klasse:"test" },
    { path: "rmsep4-street-4942809_1280.jpg", desc: "Beschreibung", klasse:"test" },
    { path: "takatoshikun-cafe-5899078_1280.jpg", desc: "Beschreibung", klasse:"test" }
]


// function renderImgs() {
//     let images = "";
//     for (Image in myImgs2) {
//         console.log(myImgs2[Image]);
//         images += `
//         <img src="assats/img/${myImgs2[Image].path}" alt="Bild ${myImgs2[Image].desc}" class="${myImgs2[Image].klasse}">
//         `

//     }
//     document.getElementById('imgs').innerHTML = images;
// }

function renderImgs() {
    let images = "";
    for (Image in myImgs2) {
        console.log(myImgs2[Image]);
        images += `
        <div style="background-image:url('assats/img/${myImgs2[Image].path}'); border: 1px solid #ff0000" alt="Bild ${myImgs2[Image].desc}" class="${myImgs2[Image].klasse}"></div>
        `

    }
    document.getElementById('imgs').innerHTML = images;
}

renderImgs();
