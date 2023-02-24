import './css/styles.css';

import debounce from 'lodash.debounce';
import { Notify } from 'notiflix/build/notiflix-notify-aio';


import fetchCountries from './fetchCountries'

const refs = {
    input: document.getElementById('search-box'),
    listCountry: document.querySelector('.country-list'),
    infoCountry: document.querySelector('.country-info')
}
const DEBOUNCE_DELAY = 300;

refs.input.addEventListener("input", debounce(creatElem, DEBOUNCE_DELAY));

function creatElem(e) {
    if (e.target.value !== "") {
        fetchCountries(e.target.value.trim())
            .then(arrayCountries => {
                let markup = "";

                // console.log(arrayCountries)
                // console.log(!Array.isArray(arrayCountries));
                if (!Array.isArray(arrayCountries)) throw new Error(arrayCountries.message);

                if (arrayCountries.length > 10) {
                    Notify.info('Too many matches found. Please enter a more specific name.');
                    refs.listCountry.innerHTML = "";
                    refs.infoCountry.innerHTML = "";
                } else if (arrayCountries.length > 1) {
                    arrayCountries.map(({ name, flags }) => {
                        markup = creatMarkupTemplateItem(flags, name) + markup;
                    });
                    refs.listCountry.innerHTML = markup;
                    refs.infoCountry.innerHTML = "";
                } else if (arrayCountries.length === 1) {
                    const { name, capital, population, flags, languages } = arrayCountries[0];

                    markup = creatMarkupTemplateItem(flags, name);
                    refs.listCountry.innerHTML = markup;

                    markup = creatMarkupTemplateInfo(capital, population, languages);
                    refs.infoCountry.innerHTML = markup;
                } else;
            })
            .catch(err => {
                Notify.warning("Oops, there is no country with that name");
                refs.listCountry.innerHTML = "";
                refs.infoCountry.innerHTML = "";
            })
    }
}

function creatMarkupTemplateItem(flags, name) {
    return `<li class="country-list_item"><img src="${flags.svg}" class="country-list_flags"></img>   ${name}</li>`
};

function creatMarkupTemplateInfo(capital, population, languages) {
    return `<p>Capital: ${capital}</p>
            <p>Population: ${population}</p>
            <p>languages: ${languages.map(language => language.name).join(', ')}</p>`
}
