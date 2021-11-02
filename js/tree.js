// $(document).ready(function() {
//   var slidingBox = $("#sliding-box");

//   $('#overflow').on('click', function() {
//       $('.sliding-background').toggleClass('blocking');
//   });

//   $('#slider').on('change mousemove', function () {
//       var value = $(this).val();
//       slidingBox.attr('style', `top: ${value}px`);
//   });
// });

const onReady = (callback) =>{
  if (document.readyState!='loading') callback();
  else if (document.addEventListener) document.addEventListener('DOMContentLoaded', callback);
  else document.attachEvent('onreadystatechange', function() {
    if (document.readyState=='complete') callback();
  });
};

const setStyle = value => slidingBox.style.cssText = `top: ${ value }px;`;

const handleSliderEvent = (event) => {
  const value = event.target.value;
  setStyle(value);
};

const checkDate = () => {
  let cover = 0;
  const now = new Date();
  const start = new Date('Dec 1, ' + now.getFullYear());

  if (now < start) {
    cover = 600;
  } else {
    const date = now.getDate();
    cover = 600 - ((date / 25) * 600);
  }
  setStyle(cover);
  slider.value = cover;
};

let slidingBox;
let slider;
onReady(function(){
  slidingBox = document.getElementById('sliding-box');
  slider = document.getElementById('slider');

  slider.addEventListener('change', handleSliderEvent.bind(this));
  checkDate();
});
