var imgArray = [
    {url:'https://yt3.ggpht.com/a-/AJLlDp2Z1S4_t4FFXDJ8GIY8a4u1QrxcB0j3ruoH9w=s900-mo-c-c0xffffffff-rj-k-no',
    caption: 'Look at this image',
    comments: ['That is neat!','Love Golum!']},
    {url:'https://c1.staticflickr.com/8/7270/7554426478_da09815d9e_b.jpg',
    caption: 'Look at this image',
    comments: ['That is neat!','Love Golum!']},
    {url:'http://www.freakingnews.com/pictures/105000/Kate-Bosworth-as-Golum-105467.jpg',
    caption: 'Look at this image',
    comments: ['That is neat!','Love Golum!']},
    {url:'http://newsrescue.com/wp-content/uploads/2017/04/gollum.jpg',
    caption: 'Look at this image',
    comments: ['That is neat!','Love Golum!']}
]
//loops through array
imgArray.forEach(function(image) { 
    //creates and adds img for all imgs in Array
    (function (){
        var imageTag = document.createElement('img')
        imageTag.src = image.url
        var container = document.querySelector(".container"); 
        container.appendChild(imageTag);

        imageTag.addEventListener('click',function(event){
            var imageSelect = document.querySelector('img');
            var className = imageSelect.getAttribute("class");
            if(className=="lightbox") {
                imageSelect.className = "lightbox.on";
            } else {
                imageSelect.className = "lightbox";
            };
            })
            // lightbox.src = image.url;
        })();
    })()








// for (var i=0;i<imgArray.length;i++) {
//     //adds images to webpage
//     var newImage = document.createElement('img');
//     newImage.src = imgArray[i];
//     var container = document.querySelector(".container"); 
//     container.appendChild(newImage);
// };


// for (var a=0;a<imgArray.length;a++) {
//     // adds click event to images 
//     var clickImage = document.querySelectorAll(".container img");
//     clickImage[a].addEventListener("click", function(){
//         document.getElementById('lightbox').style.display='block';
//         var imageTag = document.createElement('img'); // creates img tag
//         imageTag.src = event.path[0].currentSrc; // gets url of clicked image
//         var container = document.querySelector('.lightbox-image'); //gets location for .lightbox-image
//         container.appendChild(imageTag); //adds image to div with lightbox-image class
//         var aPrev = document.getElementById('previous');
//         aPrev.href = imgArray[a-1];
//     });

//     // adds click event to lightbox
//     var lightboxDiv = document.getElementById('lightbox')
//     lightboxDiv.addEventListener("click", function(){
//         document.getElementById('lightbox').style.display='none';
//         var container = document.querySelector('.lightbox-image');
//         var images = document.querySelector('img');
//         container.removeChild(images);
        
//     });
// };


// function prevImage() {
//     var aPrev = document.getElementById('previous'); //finds previous arrow
//     var imgLen = imgArray.length; // 
//     aPrev.href = imgArray[i-1];// sets previous image src in the array

// };

