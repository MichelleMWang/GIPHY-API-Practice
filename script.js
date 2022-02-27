const body = document.querySelector('.divy'); 
const img = document.querySelector('img'); 

const textBox = document.createElement('input'); 
textBox.type = 'text'; 
body.appendChild(textBox); 

const button = document.createElement('button'); 
button.textContent = 'Generate Beauty'; 
button.addEventListener('click', () => {
    const text = textBox.value; 
    getImg(text); 
}); 
body.appendChild(button); 
      
function getImg(text){
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=1zWRr6dUhlB0i4bgfzc0GW7vOBUwuuTH&s=${text}%27`, {mode:'cors'})
        .then(function(response){
            console.log(response); 
            return response.json(); 
        })
        .then(function(reponse){
            img.src = reponse.data.images.original.url; 
        })
        .catch(() => {
            console.log('not found'); 
        })
        ; 
    }