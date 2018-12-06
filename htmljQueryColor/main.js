$(function() {
  // --------------STEP 1--------------
  // wrap every word in every `<p>` tag with a `<span>` tag.
  // for example: <p>Hey there</p>
  // becomes: <p><span>Hey</span><span>there</span></p>
  // HINT: the `split` array method is your friend

  let a = $('p').first()[0].innerText.split(' ');
  $('p').first()[0].innerText = '';
  a.forEach(elem => $('p').first().append(`<span>${elem}</span>`));
  
  // --------------STEP 2--------------
  // Next, change spans to random colors, once per second
  const randomInt = () => Math.floor(Math.random() * 255);
    function changeColor(node) {
      $(node).css('color', `rgb(${randomInt()}, ${randomInt()}, ${randomInt()})`);
    }
    let b = Array.from($('p').first()[0].children);
    b.map(node => setInterval(() => changeColor(node), 1000));

});