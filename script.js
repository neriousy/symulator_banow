let spWoj = ["Żelazny Wojownik", "Blade", "Krzyżowiec", "Berserker", "Gladiator", "Mnich", "Zwiastun Śmierci", "Odszczep"];
let spLuk = ["Myśliwy", "Zabójca", "Destroyer", "Dziki Strażnik", "Ognisty Kannonier", "Zwiadowca", "Łowca Demonów", "Anioł Zemsty"];
let spMag = ["Czerwony Mag", "Święty Mag", "Niebieski Mag", "Mroczny Mag", "Vulcano", "Posejdon", "Prorok", "Arcymag"];
let wybraneSP1 = spWoj;
let wybraneSP2 = spWoj;
let mojaKlasa = document.querySelector(".mojaKlasa");
let jegoKlasa = document.querySelector(".jegoKlasa");
let kartyPierwszego = [document.querySelector(".sp1_1"), document.querySelector(".sp1_2"), document.querySelector(".sp1_3")];
let kartyDrugiego = [document.querySelector(".sp2_1"), document.querySelector(".sp2_2"), document.querySelector(".sp2_3")];
let wybralem = document.querySelector(".wybralem");
let wybraneMoje = [document.querySelector(".pick1_1"), document.querySelector(".pick1_2"), document.querySelector(".pick1_3")];
let wybraneJego = [document.querySelector(".pick2_1"), document.querySelector(".pick2_2"), document.querySelector(".pick2_3")];
let graczPierwszy = document.querySelector(".gracz1");
let graczDrugi = document.querySelector(".gracz2");
let banTwoj = document.querySelector(".banTwoj");
let banJego = document.querySelector(".banJego");
let dodajWalke = document.querySelector(".dodajWalke");
let odbyteWalki = document.querySelector(".odbyteWalki");
let pickedMoje = [document.querySelector(".picked1_1"), document.querySelector(".picked1_2"), document.querySelector(".picked1_3")];
let pickedJego = [document.querySelector(".picked2_1"), document.querySelector(".picked2_2"), document.querySelector(".picked2_3")];
let bannedMoje = [document.querySelector(".banned1_1"), document.querySelector(".banned1_2"), document.querySelector(".banned1_3")];
let bannedJego = [document.querySelector(".banned2_1"), document.querySelector(".banned2_2"), document.querySelector(".banned2_3")];
let numer = 1;
let wyzeruj = document.querySelector(".wyzeruj");
mojaKlasa.addEventListener("change", function () {
    for (let j = 0; j < 3; j++) {

        do {
            kartyPierwszego[j].options[0] = null
        }
        while (kartyPierwszego[j].options[0] != null);

        if (mojaKlasa.selectedIndex == "0") {
            wybraneSP1 = spWoj;
        };
        if (mojaKlasa.selectedIndex == "1") {
            wybraneSP1 = spLuk;
        };
        if (mojaKlasa.selectedIndex == "2") {
            wybraneSP1 = spMag;
        };

        for (let i = 0; i < 8; i++) {
            kartyPierwszego[j].options[kartyPierwszego[j].options.length] = new Option(wybraneSP1[i].toString(), i);
        }
    }
});

jegoKlasa.addEventListener("change", function () {
    for (let j = 0; j < 3; j++) {
        do {
            kartyDrugiego[j].options[0] = null;
        }

        while (kartyDrugiego[j].options[0] != null);

        if (jegoKlasa.selectedIndex == "0") {
            wybraneSP2 = spWoj;
        };
        if (jegoKlasa.selectedIndex == "1") {
            wybraneSP2 = spLuk;
        };
        if (jegoKlasa.selectedIndex == "2") {
            wybraneSP2 = spMag;
        };

        for (let i = 0; i < 8; i++) {
            kartyDrugiego[j].options[kartyDrugiego[j].options.length] = new Option(wybraneSP2[i].toString(), i);
        }
    }
});


wybralem.addEventListener("click", function () {
    for (let i = 0; i < 3; i++) {
        wybraneMoje[i].value = wybraneSP1[kartyPierwszego[i].selectedIndex];
        wybraneJego[i].value = wybraneSP2[kartyDrugiego[i].selectedIndex];
    }
    do {
        graczPierwszy.options[0] = null;
        graczDrugi.options[0] = null;
        banTwoj.options[0] = null;
        banJego.options[0] = null;
    }

    while (graczPierwszy.options[0] != null);
    for (let i = 0; i < 3; i++) {
        graczPierwszy.options[i] = new Option(wybraneMoje[i].value, i);
        graczDrugi.options[i] = new Option(wybraneJego[i].value, i);
        banTwoj.options[i] = new Option(wybraneJego[i].value, i);
        banJego.options[i] = new Option(wybraneMoje[i].value, i);
    }
});

dodajWalke.addEventListener("click", function () {
    for (let i = 0; i < 3; i++) {
        if (graczPierwszy.options[graczPierwszy.selectedIndex].text == wybraneMoje[i].value){
            pickedMoje[i].value++;
        }
        
        if (graczDrugi.options[graczDrugi.selectedIndex].text == wybraneJego[i].value){
            pickedJego[i].value++;
        }
        
        if (banTwoj.options[banTwoj.selectedIndex].text == wybraneJego[i].value){
            bannedJego[i].value++;
        }
        
        if (banJego.options[banJego.selectedIndex].text == wybraneMoje[i].value){
            bannedMoje[i].value++;
        }
    }
    
    odbyteWalki.innerHTML += "<div> Walka " + numer  + "</div>" +"<p> <b> Picki: </b>" + graczPierwszy.options[graczPierwszy.selectedIndex].text + " vs " + graczDrugi.options[graczDrugi.selectedIndex].text + "<br> <b> Bany: </b>" + banTwoj.options[banTwoj.selectedIndex].text + ", " + banJego.options[banJego.selectedIndex].text + "</p>";
    numer++;
});

wyzeruj.addEventListener("click", function(){
   for (let i=0; i<3; i++){
       pickedMoje[i].value = 0;
       pickedJego[i].value = 0;
       bannedMoje[i].value = 0;
       bannedJego[i].value = 0;
   } 
    
    numer = 1;
    odbyteWalki.innerHTML = "Odbyte walki: ";
});