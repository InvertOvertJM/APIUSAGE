//dad joke api
const jokeText = document.getElementById('dadJoke')
const userText = document.getElementById('info')
const dogImage = document.getElementById('dogImg')

fetch('https://icanhazdadjoke.com/', {
    headers: {
        'Accept': 'application/json'
    }
})
    .then(response => response.json())  
    .then(data => {
        console.log(data.joke);
        jokeText.textContent = data.joke;
    })
    .catch(error => console.error('Error:', error));

//random user api
fetch('https://randomuser.me/api/')
    .then(response => response.json()) 
    .then(data => {
        console.log('Name:', data.results[0].name.first + ' ' + data.results[0].name.last);
        console.log('Email:', data.results[0].email);
        console.log('Location:', data.results[0].location.city);
        userText.textContent = ('Name:', data.results[0].name.first + ' ' + data.results[0].name.last); //just the name of the user
    })
    .catch(error => console.error('Error:', error));

//dog ceo api
fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(data => {
        document.getElementById('dogImg').src = data.message; //dog image replacer
    })
    .catch(error => console.error('Error:', error));
