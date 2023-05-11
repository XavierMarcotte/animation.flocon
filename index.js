const body = document.querySelector('body');

function bubblemaker() {
  const bubble = document.createElement('span');
  bubble.classList.add('bubble');
  document.body.appendChild(bubble);
  
  const size = Math.random() * 6 + "px";
  
  bubble.style.height = size;
  bubble.style.width = size;

  
  bubble.style.bottom = Math.random() * 100 + 50 + "%";
  bubble.style.left = Math.random() * 100 + "%";
  
  const plusminus = Math.random() > 0.5 ? 1 : -1;

  bubble.style.setProperty('--left', Math.random() * 100*plusminus + "%");
  setTimeout(() => {
    bubble.remove();
  }, 8000);

  
}

setInterval(bubblemaker, 50);

