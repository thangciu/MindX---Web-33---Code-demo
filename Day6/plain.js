document.addEventListener('DOMContentLoaded', function() {
  document.getElementsByClassName('btn').addEventListener('click', function() {
    alert('Hello')
  })

  document.getElementsByClassName('btn').css.display = 'none'
})
