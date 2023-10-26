
function ConstructionMsg(){
  alert("Under Construction :)")
}


function generateGradient() {
  var gradientBox = document.getElementById('gradient-box');
  var colors = [
      getRandomColor(),
      getRandomColor()
  ];
  gradientBox.style.background = 'linear-gradient(45deg, ' + colors[0] + ', ' + colors[1] + ')';
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
