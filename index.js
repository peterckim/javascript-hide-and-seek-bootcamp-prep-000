function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  var nested = document.querySelector('#nested');
  return nested.querySelector('.target');
}

function deepestChild() {
  var grandNode = document.querySelector('#grand-node').querySelectorAll('div');
  return grandNode[grandNode.length - 1];
}

function increaseRankBy(n) {
  const rankedListElements = document.getElementById('app').querySelectorAll('ul.ranked-list')
 
  for (let i = 0; i < rankedListElements.length; i++) {
    rankedListElements[i].innerHTML = parseInt(rankedListElements[i].innerHTML) + n;
  }
}