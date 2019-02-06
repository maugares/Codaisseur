let child = document.querySelector('#childhood');

child.onclick = function () {
  if(child.innerHTML === 'Childhood'){
    child.innerHTML = 'Born in Buenos Aires in 1989, I lived there until 2002, when I moved to Madrid. There is where I really grew up and I developed as a person so, even though I am born in Argentina I consider myself more Spanish.';
    child.style['text-align'] = 'justify';
  } else {
    child.innerHTML = 'Childhood';
    child.style['text-align'] = 'center';
  }
}


let s1 = document.querySelector('#studies1');

s1.onclick = function () {
  if(s1.innerHTML === 'Late teenages'){
    s1.innerHTML = 'After high school I started university directly, enrolling myself in the studies of Industrial Engineering. I didn\'t really enjoy going there so I stopped and switched to Environmental Sciences.';
    s1.style['text-align'] = 'justify';
  } else {
    s1.innerHTML = 'Late teenages';
    s1.style['text-align'] = 'center';
  }
}

let s2 = document.querySelector('#studies2');

s2.onclick = function () {
  if(s2.innerHTML === 'Early 20s'){
    s2.innerHTML = 'For the last year of my studies I decided to go abroad for an exchange year, choosing the Netherlands for being the cheapest alternative. I liked it here, so I stayed and followed an extra Master, this time in Geo-information Sciences.';
    s2.style['text-align'] = 'justify';
  } else {
    s2.innerHTML = 'Early 20s';
    s2.style['text-align'] = 'center';
  }
}

// Last 7 years


let s3 = document.querySelector('#studies3');

s3.onclick = function () {
  if(s3.innerHTML === 'Last 7'){
    s3.innerHTML = '7 years later I\'m still here, willing to make a carreer switch and explore new possibilities. Looking forward to learning more and being able to achieve better results. For now, just this lame one.';
    s3.style['text-align'] = 'justify';
  } else {
    s3.innerHTML = 'Last 7';
    s3.style['text-align'] = 'center';
  }
}
