let lang = 'en';

let nLang = (navigator.languages
    ? navigator.languages[0]
    : (navigator.language || navigator.userLanguage)).split('-')[0];

const searchParams = new URLSearchParams(window.location.search);
const qLang = searchParams.get("lang");
let supportedLang = ['en', 'fr'];

lang = supportedLang.includes(nLang) ? nLang : lang;

lang = qLang && supportedLang.includes(qLang) ? qLang : lang;
//console.log()

function changeLang(lang) {
    //console.log("OK")
    getScript(`lang-${lang}.js`)
        .then(() => {
            document.querySelectorAll('[data-translation]').forEach(item => {
                item.innerHTML = translations[`${item.dataset.translation}`];
            });
        })
        .catch((e) => {
            console.error(e);
            document.querySelectorAll('[data-translation]').forEach(item => {
                item.innerHTML = translations[`${item.dataset.translation}`];
            });
        });

}

changeLang(lang)
