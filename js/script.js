"use strict";
window.addEventListener('DOMContentLoaded', () => {


  
const menuBtn = document.querySelector('.menu-btn'),
menuList = document.querySelector('.menu-list'),
respMenu = document.querySelector('.resp-menu'),
close = document.querySelector('.close'),
video = document.querySelector('.video');

function click (){
menuBtn.addEventListener('click', () =>{
menuList.classList.toggle('menu-list__drop-active');
menuBtn.classList.toggle('left');
respMenu.classList.toggle('resp-menu-activ');
});
close.addEventListener('click', () =>{
respMenu.classList.remove('resp-menu-activ');
});

}
click();

function scrollVideo() {
var video = $('.video').get(0),
videoLength = video.duration,
scrollPosition = $(document).scrollTop();

video.currentTime = (scrollPosition / ($(document).height() - $(window).height())) * videoLength;
}

$(window).scroll(function(e) {
scrollVideo();
});


function hiddeVideo() {
if (video.offsetHight < $(window).height() ) {
video.style = "display = none";
}
}
hiddeVideo();



});