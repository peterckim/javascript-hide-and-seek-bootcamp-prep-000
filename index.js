function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var nested = document.querySelector('#nested');
  return nested.querySelector('.target');
}

function deepestChild() {
<<<<<<< HEAD
  var grandNode = document.querySelector('#grand-node').querySelectorAll('div');
  return grandNode[grandNode.length - 1];
}

function increaseRankBy(n) {
  const rankedListElements = document.getElementById('app').querySelectorAll('ul.ranked-list')
 
  for (let i = 0; i < rankedListElements.length; i++) {
    rankedListElements[i].innerHTML = parseInt(rankedListElements[i].innerHTML) + n;
=======
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')
 
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = (i + 1).toString()
>>>>>>> babee09ea31dc5881eebf851e20212748e43721b
  }
}