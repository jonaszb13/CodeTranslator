let isDarkmode = localStorage.getItem('isDarkMode');

const enableDarkmode = () => {
    localStorage.setItem('isDarkmode', 'enabled');

    //body
    document.body.classList.add('darkmode_body');
    
    //header
    document.querySelector('#Head').classList.add('darkmode_header');
    document.querySelector('#dark-switch').classList.add('darkmode_label');
    document.getElementById("Konto").src = toggleKonto();
    function toggleKonto() {
        let initialKonto = document.getElementById("Konto").src;
        let srcKonto = initialKonto.includes('resources/img/icon/Konto.png');
        let newKonto = {
            'true': '/resources/img/icon/Konto_dark.png',
            'false': '/resources/img/icon/Konto.png'
        }[srcKonto];
        return newKonto;
    }
    document.getElementById("Kontakt").src = toggleKontakt();
    function toggleKontakt() {
        let initalKontakt = document.getElementById("Kontakt").src;
        let srcKontakt = initalKontakt.includes('resources/img/icon/Kontakt.png');
        let newKontakt = {
            'true': '/resources/img/icon/Kontakt_dark.png',
            'false': '/resources/img/icon/Kontakt.png'
        }[srcKontakt];
        return newKontakt;
    }

    //section
    document.querySelector('#section').classList.add('darkmode_section');

    //footer
    document.querySelector('#Footer').classList.add('darkmode_footer');

    //TranslatorCT - checks if sections exits and changes to dark values, if not just return null
    console.log(document.querySelectorAll(".TranslatorCT").length > 0)
    if (document.querySelectorAll(".TranslatorCT").length > 0) {
        console.log('test');
        document.querySelector('#codein').classList.add("darkmode_codein");
        document.querySelector('#codeout').classList.add("darkmode_codeout");
    }

    console.log(document.querySelectorAll(".Contact").length > 0)
    if (document.querySelectorAll(".Contact").length > 0) {
        document.querySelector('#heading').classList.add("darkmode_heading");
    }
}

const disableDarkmode = () => {
    localStorage.setItem('isDarkmode', null);

    //body
    document.body.classList.remove('darkmode_body');

    //header
    document.querySelector('#Head').classList.remove('darkmode_header');
    document.querySelector('#dark-switch').classList.remove('darkmode_label');
    document.getElementById("Konto").src = toggleKonto();
    function toggleKonto() {
        let initialKonto = document.getElementById("Konto").src;
        let srcKonto = initialKonto.includes('resources/img/icon/Konto.png');
        let newKonto = {
            'true': '/resources/img/icon/Konto_dark.png',
            'false': '/resources/img/icon/Konto.png'
        }[srcKonto];
        return newKonto;
    }
    document.getElementById("Kontakt").src = toggleKontakt();
    function toggleKontakt() {
        let initalKontakt = document.getElementById("Kontakt").src;
        let srcKontakt = initalKontakt.includes('resources/img/icon/Kontakt.png');
        let newKontakt = {
            'true': '/resources/img/icon/Kontakt_dark.png',
            'false': '/resources/img/icon/Kontakt.png'
        }[srcKontakt];
        return newKontakt;
    }

    //section
    document.querySelector('#section').classList.remove('darkmode_section');

    //footer
    document.querySelector('#Footer').classList.remove('darkmode_footer');

    //TranslatorCT - checks if sections exits and changes to dark values, if not just return null
    if (document.querySelectorAll(".TranslatorCT").length > 0) {
        document.querySelector('#codein').classList.remove("darkmode_codein");
        document.querySelector('#codeout').classList.remove("darkmode_codeout");
    }

    console.log(document.querySelectorAll(".Contact").length > 0)
    if (document.querySelectorAll(".Contact").length > 0) {
        document.querySelector('#heading').classList.remove("darkmode_heading");
    }
}

if (localStorage.getItem('isDarkmode') === 'enabled') {
    enableDarkmode();
}

const darkmode_button = document.querySelector('#dark-switch')
darkmode_button.addEventListener('click', () => {
    isDarkmode = localStorage.getItem('isDarkmode');
    if (isDarkmode !== 'enabled') {
        enableDarkmode();
        console.log("darkmode now on " + localStorage.getItem('isDarkmode'));
    } else {
        disableDarkmode();
        console.log("darkmode now off " + localStorage.getItem('isDarkmode'));
    }
})