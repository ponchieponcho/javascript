imgArray = ['https://yt3.ggpht.com/a-/AJLlDp2Z1S4_t4FFXDJ8GIY8a4u1QrxcB0j3ruoH9w=s900-mo-c-c0xffffffff-rj-k-no',
'https://c1.staticflickr.com/8/7270/7554426478_da09815d9e_b.jpg', 
'http://www.freakingnews.com/pictures/105000/Kate-Bosworth-as-Golum-105467.jpg',
'https://www.northwestfirearms.com/media/golum.1347/full'
]

for (var i=0;i<imgArray.length;i++) {
    //adds images to webpage
    var newImage = document.createElement('img');
    newImage.src = imgArray[i];
    var container = document.querySelector(".container"); 
    container.appendChild(newImage);
};


for (var a=0;a<imgArray.length;a++) {
    // adds click event to images 
    var clickImage = document.querySelectorAll(".container img");
    clickImage[a].addEventListener("click", function(){
        document.getElementById('lightbox').style.display='block';
        var imageTag = document.createElement('img'); // creates img tag
        imageTag.src = event.path[0].currentSrc; // gets url of clicked image
        var container = document.querySelector('.lightbox-image'); //gets location for .lightbox-image
        container.appendChild(imageTag); //adds image to div with lightbox-image class
    });

    // adds click event to lightbox
    var lightboxDiv = document.getElementById('lightbox')
    lightboxDiv.addEventListener("click", function(){
        document.getElementById('lightbox').style.display='none';
        var container = document.querySelector('.lightbox-image');
        var images = document.querySelector('img');
        container.removeChild(images);

    });
};

