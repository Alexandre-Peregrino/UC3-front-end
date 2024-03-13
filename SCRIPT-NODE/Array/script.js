let cores = ['blue', 'red', 'green', 'black'];
let body = document.getElementsByTagName('body');
// body[0].innerHTML += 
// `
// <p> ${cores[0]} </p>
// <p> ${cores[1]} </p>
// <p> ${cores[2]} </p>
// `;

for(let i=0; i<cores.length; i++){

    let p= document.createElement('p');
    p.textContent = cores[i];
    body[0].appendChild(p);
}
cores.forEach(cor, index =>{})