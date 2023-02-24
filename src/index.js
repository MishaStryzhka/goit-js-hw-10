import './css/styles.css';

import fetchCountries from './fetchCountries'

const refs = {
    input: document.getElementById('search-box')
}

refs.input.addEventListener("input", (e) => {
    // console.log(e.currentTarget.value);
    fetchCountries(e.currentTarget.value)
        .then(data => console.log(data))
})

// fetchCountries("qwe")

const DEBOUNCE_DELAY = 300;
