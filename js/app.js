var indicator1 = document.getElementsByClassName('indicators indicator1 active')[0],
    indicator2 = document.getElementsByClassName('indicators indicator2')[0],
    firstpage = document.getElementById('first-page'),
    secondpage = document.getElementById('second-page'),
    add1 = document.getElementById('add1'),
    add2 = document.getElementById('add2'),
    add3 = document.getElementById('add3'),
    checkbox1 = document.querySelectorAll('.documents input[type=checkbox]'),
    checkbox2 = document.querySelectorAll('.links input[type=checkbox]'),
    checkbox3 = document.querySelectorAll('.science-lab input[type=checkbox]');
    checkboxall = document.querySelectorAll('#first-page input[type=checkbox]');



indicator2.addEventListener('click', function(){
  firstpage.classList.remove('current');
  secondpage.classList.remove('right');
  firstpage.classList.add('left');
  secondpage.classList.add('current');
  indicator1.classList.remove('active');
  indicator2.classList.add('active');
  });

indicator1.addEventListener('click', function(){
  firstpage.classList.remove('left');
  secondpage.classList.remove('current');
  firstpage.classList.add('current');
  secondpage.classList.add('right');
  indicator2.classList.remove('active');
  indicator1.classList.add('active');
});

add1.addEventListener('click', function(){
  if (add1.classList.contains('addall')){
  add1.classList.remove('addall');
  add1.classList.add('removeall');
  add1.innerHTML="remove all";
  [].forEach.call(checkbox1, function(item, index){
    checkbox1[index].setAttribute("checked", "true");
    });
  }
  else {
  [].forEach.call(checkbox1, function(item, index){
    checkbox1[index].removeAttribute('checked');
    });
  add1.classList.remove('removeall');
  add1.classList.remove('addall1');
  add1.classList.add('addall');
  add1.classList.add('addall1');
  add1.innerHTML="add all";  
  } 
});

add2.addEventListener('click', function(){
  if (add2.classList.contains('addall')){
  add2.classList.remove('addall');
  add2.classList.add('removeall');
  add2.innerHTML="remove all";
  [].forEach.call(checkbox1, function(item, index){
    checkbox2[index].setAttribute("checked", "true");
    });
  }
  else {
  [].forEach.call(checkbox1, function(item, index){
    checkbox2[index].removeAttribute('checked');
    });
  add2.classList.remove('removeall');
  add2.classList.remove('addall1');
  add2.classList.add('addall');
  add2.classList.add('addall1');
  add2.innerHTML="add all";  
  } 
});

add3.addEventListener('click', function(){
  if (add3.classList.contains('addall')){
  add3.classList.remove('addall');
  add3.classList.add('removeall');
  add3.innerHTML="remove all";
  [].forEach.call(checkbox1, function(item, index){
    checkbox3[index].setAttribute("checked", "true");
    });
  }
  else {
  [].forEach.call(checkbox1, function(item, index){
    checkbox3[index].removeAttribute('checked');
    });
  add3.classList.remove('removeall');
  add3.classList.remove('addall1');
  add3.classList.add('addall');
  add3.classList.add('addall1');
  add3.innerHTML="add all";  
  } 
});

