document.getElementById("search-box").addEventListener("input",(function(e){var n,t;(n=e.currentTarget.value,t="https://restcountries.com/v2/name/".concat(n,"?fields=name,"),fetch(t).then((function(e){return e.json()}))).then((function(e){return console.log(e)}))}));
//# sourceMappingURL=index.1386828e.js.map
