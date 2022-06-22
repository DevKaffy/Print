let body = document.querySelector('body')
let fullName = document.createElement('h1')
let height = document.createElement('h2')
let country = document.createElement('h2')



body.style.backgroundColor = '#f2f2f2';
body.style.margin = '5rem';
fullName.innerHTML = 'Name: Adewumi, Kafilat Eniola';
height.innerHTML = 'Height: 5.4 ft';
country.innerHTML = 'Country: Nigeria';


body.appendChild(fullName)
body.appendChild(height)
body.appendChild(country)
