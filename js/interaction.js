
let isActive = false;
const handleEvent = (event) => {
  if (event.path.includes(slider)) return;
  if (isActive === true) return;
  isActive = true;

  images[active].classList.toggle('move');
  setTimeout(() => {
    isActive = false;
    images[active].classList.toggle('move');
    active = (active === 'santa') ? 'train' : 'santa';
  }, 3200);
};

let images = {
  train: null,
  santa: null
};
let handler;
let active = 'santa';
onReady(function(){
  images.train = document.getElementById('train');
  images.santa = document.getElementById('santa');
  handler = document.getElementById('triggerEvent')

  handler.addEventListener('click', handleEvent.bind(this));
});
