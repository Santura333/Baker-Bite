// product detail -------
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);

//END product detail ------

// clock

window.onload = function()
{
    //-reverse clock
 // Thiết lập thời gian đích mà ta sẽ đếm
 var countDownDate = new Date("Dec 5, 2022 15:37:25").getTime();

 // cập nhập thời gian sau mỗi 1 giây
 var x = setInterval(function () {

     // Lấy thời gian hiện tại
     var now = new Date().getTime();

     // Lấy số thời gian chênh lệch
     var distance = countDownDate - now;

     // Tính toán số ngày, giờ, phút, giây từ thời gian chênh lệch
     var date = Math.floor(distance / (1000 * 60 * 60 * 24));
     var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
     var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
     var seconds = Math.floor((distance % (1000 * 60)) / 1000);
     let day_night = "AM";

     if (hours > 12) {
         day_night = "PM";
         hours = hours - 12;
     }
     if (seconds < 10) {
         seconds = "0" + seconds;
     }
     if (minutes < 10) {
         minutes = "0" + minutes;
     }
     if (hours < 10) {
         hours = "0" + hours;
     }

     // HIển thị chuỗi thời gian trong thẻ p
     time.textContent =  hours + ": " + minutes + ": " + seconds;

     // Nếu thời gian kết thúc, hiển thị chuỗi thông báo
     if (distance < 0) {
         clearInterval(x);
         document.getElementById("demo").innerHTML = "Thời gian đếm ngược đã kết thúc";
     }
 }, 1000);
};

