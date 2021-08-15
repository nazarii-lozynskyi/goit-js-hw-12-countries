//var debounce = require('lodash.debounce');
import countryCardTpl from '../templates/country-card.hbs';

const URL = 'https://restcountries.eu/rest/v2/name';

fetch(`${URL}/ukraine`)
  .then(response => {
    return response.json();
  })
  .then(country => {
    console.log(country);
    const markup = countryCardTpl(country);
    console.log(markup);
  })
  .catch(error => {
    console.log(error);
  });
