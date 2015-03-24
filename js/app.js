var prev = document.getElementsByClassName('goto-prev')[0],
    next = document.getElementsByClassName('goto-next')[0],
    indicator1 = document.getElementsByClassName('indicators indicator1 active')[0],
    indicator2 = document.getElementsByClassName('indicators indicator2')[0],
    firstpage = document.getElementById('first-page'),
    secondpage = document.getElementById('second-page'),
    addall1 = document.getElementsByClassName('addall addall1')[0],
    addall2 = document.getElementsByClassName('addall addall2')[0],
    addall3 = document.getElementsByClassName('addall addall3')[0],
    checkbox1 = document.querySelectorAll('.documents input[type=checkbox]'),
    checkbox2 = document.querySelectorAll('.links input[type=checkbox]'),
    checkbox3 = document.querySelectorAll('.science-lab input[type=checkbox]'),
    removeall1 = document.getElementsByClassName('addall1 removeall')[0],
    removeall2 = document.getElementsByClassName('addall2 removeall')[0],
    removeall3 = document.getElementsByClassName('addall3 removeall')[0];




next.addEventListener('click', function(){
  firstpage.classList.remove('current');
  secondpage.classList.remove('right');
  firstpage.classList.add('left');
  secondpage.classList.add('current');
  indicator1.classList.remove('active');
  indicator2.classList.add('active');
});

prev.addEventListener('click', function(){
  firstpage.classList.remove('left');
  secondpage.classList.remove('current');
  firstpage.classList.add('current');
  secondpage.classList.add('right');
  indicator2.classList.remove('active');
  indicator1.classList.add('active');
});

addall1.addEventListener('click', function(){
	addall1.innerHTML="remove all";
	addall1.classList.remove('addall');
  	addall1.classList.add('removeall');
  [].forEach.call(checkbox1, function(item, index){
    checkbox1[index].setAttribute("checked", "checked");
    });
});

addall2.addEventListener('click', function(){
	addall2.innerHTML="remove all";
  	addall2.classList.remove('addall');
  	addall2.classList.add('removeall');
  [].forEach.call(checkbox2, function(item, index){
    checkbox2[index].setAttribute("checked", "checked");
    });
});

addall3.addEventListener('click', function(){
  addall3.classList.remove('addall');
  addall3.classList.add('removeall');
  addall3.innerHTML="remove all";
  [].forEach.call(checkbox3, function(item, index){
   	checkbox3[index].setAttribute("checked", "checked");
    });
});

removeall1.addEventListener('click', function(){
	removeall1.innerHTML="add all";
	removeall1.classList.remove('removeall');
  	removeall1.classList.add('addall');
  [].forEach.call(checkbox1, function(item, index){
    checkbox1[index].setAttribute("checked", "unchecked");
    });
});


