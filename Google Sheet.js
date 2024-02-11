
const scriptURL = 'https://script.google.com/macros/s/AKfycbxuZoQPmUCKF6iOZKnI8CDI5QeWDR08GcYYhkBzdJ572O_w8VXEIQByCoxHk4810WXo8w/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})