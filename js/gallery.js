/* take all img element in image container */
var images = document.querySelectorAll ('.image img')
/* take first element in class prev */
var prev = document.querySelector('.prev')
var next = document.querySelector('.next')
var close = document.querySelector('.close')
var galleryImg = document.querySelector('.gallery__inner img')
var gallery = document.querySelector('.gallery')

var currentIndex = 0;

function showGallery () {
    if (currentIndex == 0) {
        prev.classList.add('hide')
    }else {
        prev.classList.remove('hide')
    };

    if (currentIndex == images.length - 1){
        next.classList.add('hide')
    }else {
        next.classList.remove('hide')
    };
    //display
    galleryImg.src = images[currentIndex].src /* hinh anh khi xay ra event 'click' co scr duoc gan voi hinh anh co cung scr trong gallery__inner*/
    gallery.classList.add('show')// add class 'show' vao the html co class gallery //
};

images.forEach((item, index) =>{   /* forEach xet qua tung element cua arr images voi biến image, index cua element duyet qua */
    item.addEventListener('click', function(){ /* forEach tra ve item la cac phan tu cua images, .addEventListener gan event 'click' vao function */
        currentIndex = index  /* currentIndex will be index cua cac phan tu dc xet qua*/
        showGallery()
    /* Conclusion: this function help: when we gay ra su kien 'click' vao element 'img' of .image(duoc var = images) will pop up gallery inner and show image co same scr */
    })
})

close.addEventListener('click', function() {
    gallery.classList.remove('show');
})


prev.addEventListener('click', () =>{
    if (currentIndex > 0) {
        currentIndex --
        showGallery()
    }
});

next.addEventListener('click', () =>{
    if (currentIndex < images.length - 1) {
        currentIndex ++
        showGallery()
    }
});

document.addEventListener('keydown', function(e){
    if(e.keyCode == 27) {
        gallery.classList.remove('show');
    };
});

