var tablinks = document.getElementsByClassName('tab-links');
var tabcontents = document.getElementsByClassName('tab-contents');

function opentab(info){
   for(tabname of tablinks)
   {
      tabname.classList.remove('active-link');
   }
   for(content of tabcontents)
   {
      content.classList.remove('active-tab');
   }
   event.currentTarget.classList.add('active-link');
   document.getElementById(info).classList.add('active-tab');
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbxWuKjrwgmJuYGhb1nWqUPjw8Q8lwcP5rQt_hZJ5GTBqF8XXVYpJexrQwN7VjWXkh59uw/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementById('msg')

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
         msg.innerHTML = 'Message sent successfully!!'
         setTimeout(function(){
            msg.innerHTML = ''
         },5000)
         form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })
  form.reset();