import './style.css';

let annualPayment = '$39.99';
let weeklyAccess = '$6.99';
let yearlyAccess = '$0.48'

function changeTranslation(language) {
  fetch(`i18n/${language}.json`)
    .then((response) => response.json())
    .then((translations) => {
      document.getElementById('title').innerHTML = translations['Get Unlimited <br>Access'];
      document.getElementById('itemOne').innerHTML = translations['Unlimited Art <br>Creation'];
      document.getElementById('itemTwo').innerHTML = translations['Exclusive <br>Styles'];
      document.getElementById('itemThree').innerHTML = translations['Magic Avatars <br>With 20% Off'];
      document.getElementById('offerYearly').innerHTML = translations['YEARLY ACCESS'];
      document.getElementById('badgeBestOffer').innerHTML = translations['BEST OFFER'];
      document.getElementById('offerYearlyPrice').innerHTML = translations['Just {{price}} per year'].replace('{{price}}', annualPayment);
      document.getElementById('offerWeekly').innerHTML = translations['WEEKLY ACCESS'];
      document.getElementById('weeklyOfferWeeklyPayment').innerHTML = translations['{{price}} <br>per week'].replace('{{price}}', weeklyAccess);
      document.getElementById('annualOfferWeeklyPayment').innerHTML = translations['{{price}} <br>per week'].replace('{{price}}', yearlyAccess);
      document.getElementById('termsOfUse').innerHTML = translations['Terms of Use'];
      document.getElementById('privacyPolicy').innerHTML = translations['Privacy Policy'];
      document.getElementById('restore').innerHTML = translations['Restore'];
      document.getElementById('continue').innerHTML = translations['Continue'];
    })
    .catch((error) => {
      console.error('problem loading translation', language, error);
      if (language !== 'en') {
        changeTranslation('en');
      }
    });
}

const urlSearchParams = new URLSearchParams(window.location.search);
const lang = urlSearchParams.get('lang');
const availableLang = ['de', 'en', 'es', 'fr', 'ja', 'pt'];
const systemLang = navigator.language.substr(0, 2);
let selectedLang;

if (availableLang.includes(lang)) {
  selectedLang = lang;
} else if (availableLang.includes(systemLang)) {
  selectedLang = systemLang;
} else {
  selectedLang = 'en';
}
changeTranslation(selectedLang);

document.addEventListener('DOMContentLoaded', function () {
  const specificLang = document.querySelectorAll('.lang-special');
  specificLang.forEach((el) => {
    el.classList.add(`lang-${selectedLang}`);
  });
});

const buttonContinue = document.getElementById('continue');
const radioButtons = document.querySelectorAll('.input-plan');

buttonContinue.addEventListener('click', () => {
  const selectedTariffPlan = document.querySelector('.input-plan:checked');
  if (selectedTariffPlan) {
    const linkTariffPlan = selectedTariffPlan.value;
    window.location.href = linkTariffPlan;
  }
});
