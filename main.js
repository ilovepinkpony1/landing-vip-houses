'use strict';

const video = document.querySelector('.video');
const button = document.getElementById('video-button');
const hiddeElementsParks = document.querySelectorAll('.description-illustrations');
const hiddenFlats = document.querySelectorAll('.main-flat');
const hiddenAbout = document.querySelectorAll('.main-about');
const hiddenInfoMain = document.querySelectorAll('.more-info');
const hiddenVideo = document.querySelectorAll('.main-video');
const hiddenMap = document.querySelectorAll('.main-map');
const hiddenOther = document.querySelectorAll('.main-other');

window.addEventListener('load', () => {
  const preloader = document.querySelector('.preloader');
  preloader.classList.add('preloader-loaded');
})

button.addEventListener('click', () => {
  if (video.paused) {
    button.classList.remove('play');
    button.classList.add('pouse');

    video.play();
  } else {
    button.classList.remove('pouse');
    button.classList.add('play');
    video.pause();
  }
})

window.addEventListener('scroll', () => {
  hideElements(hiddeElementsParks, 430, 1100);
  hideElements(hiddenFlats, 800, 1800);
  hideElements(hiddenAbout, 730, 1200);
  hideElements(hiddenInfoMain, 1500, 2200);
  hideElements(hiddenVideo, 1900, 2900);
  hideElements(hiddenVideo, 1900, 2900);
  hideElements(hiddenMap, 2700, 3500);
  hideElements(hiddenOther, 3300, 4000);
})

function hideElements(elements, rangeMin, rangeMax) {
  if (window.scrollY >= rangeMin && window.scrollY <= rangeMax) {
    [...elements].forEach(el => {
      el.classList.remove('hidden-el');
      el.classList.add('visible-el');
    })
  } else {
    [...elements].forEach(el => {
      if (el.classList.contains('visible-el')) {
        el.classList.remove('visible-el');
        el.classList.add('hidden-el');
      }
    })
  }
}