function myFunction(){
  // Get the sections
  var first = document.querySelector('#home');
  var second = document.querySelector('#services');
  var third = document.querySelector('#portfoilio');
  var fourth = document.querySelector('#resume');
  var fifth = document.querySelector('#skills');
  var sixth = document.querySelector('#contact');
  var currentNumber = document.querySelector('#current-number');
   // Array of the sections
  var pages = [first, second, third, fourth, fifth, sixth];

	// check if section is in view and update current number in pagination
  for (var i = 0; i < pages.length; i++){
    var bounding = pages[i].getBoundingClientRect();
    if (bounding.top >= 0 && bounding.top < 120 || bounding.bottom <= 0 && bounding.bottom > 120){
     currentNumber.innerHTML = "0" +(i + 1);
    }
  }


}
