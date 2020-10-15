function str() {
  var a = document.getElementById('a').value;
  var b = document.getElementById('b').value;
  var c = document.getElementById('c').value;
  var d = b*b -4*a*c;
  if(d<0) {
    var x2 = "Нет";
    var x1 = "Нет";
    var d = "Нет";
  }
  if(d>0) {
    d = Math.sqrt(d);
    var x1 = ((b*(-1)-d)/2*a);
    var x2 = ((b*(-1)+d)/2*a);
  }
  if(d==0) {
    d = Math.sqrt(d);
    var x1 = ((b*(-1))/2*a);
    var x2 = "Нет";
  }

  document.getElementById('x1').innerText = "X1= "+x1;
  document.getElementById('d').innerText = "D= "+d;
  document.getElementById('x2').innerText = "X2= "+x2;
}
