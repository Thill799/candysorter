var unsortedCandied = document.getElementById('unsortedCandies')

var yellowCandies = document.getElementById('yellowCandies')

var blueCandies = document.getElementById('blueCandies')

var redCandies = document.getElementById('redCandies')

function sortCandies() {
  var candies = unsortedCandies.children
  while (candies.length > 0) {
     var candy = candies[0]
 
     switch (candy.className) {
         case 'yellow candy':
             yellowCandies.appendChild(candy)
             break
         case 'blue candy':
             blueCandies.appendChild(candy)
             break
         case 'red candy':
             redCandies.appendChild(candy)
             break
     }
  }
}

function putThemBack() {
  putBackOneGroup(redCandies.children)
  putBackOneGroup(blueCandies.children)
  putBackOneGroup(yellowCandies.children)
}

function putBackOneGroup(candies) {
  while (candies.length > 0) {
    var candy = candies[0]
    unsortedCandies.appendChild(candy)
  }
}
