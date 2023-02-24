({input:document.getElementById("search-box")}).input.addEventListener("input",(e=>{var t;(t=e.currentTarget.value,fetch(`https://restcountries.com/v2/name/${t}?fields=name,`).then((e=>e.json()))).then((e=>console.log(e)))}));
//# sourceMappingURL=index.a04ad807.js.map
