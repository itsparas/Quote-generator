const imageContainer = document.getElementById("image-container");
const loader = document.getElementById("loader");

let ready=false;
let imageload=0;

// Unsplash API
const count =15;
const apikey = 'Vtclx9OfVwzt8WWN9jgEE1s57U-HGdIgyw9tgNZmZ-A';
const apiUrl = `https://api.unsplash.com/photos/random?client_id=${apikey}&count=${count}`;


// chech all image is loaded or not
    function imageLoaded(){
        imageload++;
        if((imageload%15)==0){
            ready=true;
            loader.hidden=true;
        }
    }

// Get Photo From Unsplace

async function getPhotos(){
    try {
        const response = await fetch(apiUrl);
        const photos = await response.json();
        displayPhotos(photos);
    } catch (error) {
        
    }
}

// helper function
function setAttribute(element , attribute){
    for(const key in attribute){
        element.setAttribute(key,attribute[key]);
    }
}

//  Displaying Photos

function displayPhotos(photos){
    
    photos.forEach(item => {

        // creating <a> to link unsplash
        const temp = document.createElement('a');
        setAttribute(temp,{
            'href': item.links.html,
            'target':'_blank' 
        });

        // creating <img> tag

        const img = document.createElement('img');

        setAttribute(img,{
            'src' : item.urls.regular,
            'alt' : item.alt_description
        });

        // load complete
        
        img.addEventListener('load',imageLoaded);

        // putting img in a tag
        temp.appendChild(img);

        // putting a tag in image container
        imageContainer.appendChild(temp);
    });
}

//  click to see if scrooling near botttom

window.addEventListener("scroll", ()=>{
    if(window.innerHeight + window.scrollY >= document.body.offsetHeight-1000 && ready){
        ready=false;
        getPhotos();
        
    }
})


// Photos

getPhotos();