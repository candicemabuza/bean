function myFunction(){
  // Get the H1 heading
  var first = document.querySelector('#home');
  var second = document.querySelector('#services');
  var third = document.querySelector('#portfoilio');
  var fourth = document.querySelector('#resume');
  var fifth = document.querySelector('#skills');
  var sixth = document.querySelector('#contact');
  var cn = document.querySelector('#current-number');

  var pages = [first, second, third, fourth, fifth, sixth];

  for (var i = 0; i < pages.length; i++){
    var bounding = pages[i].getBoundingClientRect();
    if (bounding.top >= 0 && bounding.top < 120 || bounding.bottom <= 0 && bounding.bottom > 120){
     cn.innerHTML = "0" +(i + 1);
    }
  }


}
