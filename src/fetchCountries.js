export default fetchCountries;

function fetchCountries(name) {
    const url = `https://restcountries.com/v2/name/${name}?fields=name,`
    return fetch(url)
        .then((response) => response.json())
};