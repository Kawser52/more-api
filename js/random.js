const randomUser = () =>{
    fetch('https://randomuser.me/api/?results=5')
    .then(res => res.json())
    .then(data => displayUser(data))
}
randomUser();

const displayUser = data =>{
   const getId= document.getElementById('random');
  const buddys = data.results;
  for (const buddy of buddys){
     const p= document.createElement('p');
     p.innerText= `Name: ${buddy.name.title} ${buddy.name.first} ${buddy.name.last} `;
     getId.appendChild(p);
  }
}