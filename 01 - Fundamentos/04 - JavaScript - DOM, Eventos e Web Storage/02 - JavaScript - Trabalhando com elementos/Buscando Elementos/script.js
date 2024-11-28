document.getElementById('where-are-you').parentElement.style.color = 'green';
document.getElementById('first-child-of-child').innerHTML = 'texto adicionado ao primeiro filho do filho<br>';
console.log(document.getElementById('parent').firstElementChild);
console.log(document.getElementById('where-are-you').previousElementSibling);
console.log(document.getElementById('where-are-you').nextSibling.nodeValue);
console.log(document.getElementById('where-are-you').nextElementSibling);
console.log(document.getElementById('parent').lastElementChild.previousElementSibling);