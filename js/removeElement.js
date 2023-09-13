const img1 = document.getElementById('img-1');

function myFunction(x) {
  if (x.matches) {
    // If media query matches
    img1.removeAttribute();
  } else {
    document.body.style.backgroundColor = 'pink';
  }
}

var x = window.matchMedia('(max-width: 700px)');
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes
