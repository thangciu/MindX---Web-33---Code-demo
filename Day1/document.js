var firstDivTag = document.getElementsByTagName('div')[0];

console.log(firstDivTag.parentNode)
console.log(firstDivTag.nextElementSibling)

var button = document.getElementsByTagName('button')[0];
button.addEventListener('mouseover', function() {
  alert('Hello web 33');
})
