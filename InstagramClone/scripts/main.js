imgArray = ['http://www.femalefirst.co.uk/image-library/square/500/t/the-lord-of-the-rings-fellowship-of-the-ring-quad-1.jpg',
'http://nerdreactor.com/wp-content/uploads/2017/11/LOTR-500x500_c.png', 
'https://content-images.p-cdn.com/images/public/int/0/6/0/1/093624811060_500W_500H.jpg',
'https://cps-static.rovicorp.com/3/JPG_500/MI0000/381/MI0000381791.jpg?partner=allrovi.com'
]

for (var i=0;i<imgArray.length;i++) {
    var container = document.querySelector(".container"); 
    var newImage = document.createElement('img');
    newImage.src = imgArray[i];
    container.appendChild(newImage);
};


for (var a=0;a<imgArray.length;a++) {
    var clickImage2 = document.querySelectorAll(".container img");
    clickImage2[a].addEventListener("click", function(){
        // console.log('You clicked me!');
        document.getElementById('lightbox').style.display='block';
    });
}
    
