//var debounce = require('lodash.debounce');
import countryCardTpl from '../templates/country-card.hbs';

const URL = 'https://restcountries.eu/rest/v2/name';

const refs = { cardContainer: document.querySelector('.js-card-container') };
fetch(`${URL}/ukraine`)
  .then(response => {
    return response.json();
  })
  .then(country => {
    console.log(country[0]);
    const markup = countryCardTpl(country[0]);
    console.log(markup);

    refs.cardContainer.innerHTML = markup;
  })
  .catch(error => {
    console.log(error);
  });
