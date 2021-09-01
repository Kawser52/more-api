const fetchCountry = ()=>{
    fetch('https://restcountries.eu/rest/v2/all')
    .then(res => res.json())
    .then(data => displayCountry(data))
}
fetchCountry();

const displayCountry = countries =>{
    const getCountry = document.getElementById('country-design');
    countries.forEach(country => {
    // console.log(country);
    const div = document.createElement('div');
    div.classList.add('country-box');
    div.innerHTML = `
     <h3>${country.name}</h3>
     <p>${country.capital}</p>
     <button onclick="loadMoreData('${country.name}')">Load More</button>
    `
   
    // const h3 = document.createElement('h3');
    // const p= document.createElement('p');
    //  h3.innerText = country.name;
    //  p.innerText = country.capital;
    // div.appendChild(h3);
    // div.appendChild(p);
    getCountry.appendChild(div);

    });
}

const loadMoreData = desherName =>{
    const uri = (`https://restcountries.eu/rest/v2/name/${desherName}`)
    fetch(uri)
    .then(res => res.json(fetch))
    .then(data => displayCountryDetails(data))
}
const displayCountryDetails = deshDetails =>{
    const getDetailsBox = document.getElementById('details-section');
    deshDetails.forEach(desherDet=>{
        console.log(desherDet);
        getDetailsBox.innerHTML =  `
        <p>${desherDet.name}</p>
        <p>${desherDet.capital}</p>
        <p>${desherDet.population}</p>
        <img src= "${desherDet.flag}" width = '200' height = '100'/>
        `

    })
}