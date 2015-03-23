var prev = document.getElementsByClassName('goto-prev')[0],
    next = document.getElementsByClassName('goto-next')[0],
    indicator1 = document.getElementsByClassName('indicators indicator1 active')[0],
    indicator2 = document.getElementsByClassName('indicators indicator2')[0],
    firstpage = document.getElementById('first-page'),
    secondpage = document.getElementById('second-page');
    addall1 = document.getElementsByClassName('addall addall1')[0];
    addall2 = document.getElementsByClassName('addall addall2')[0];
    addall3 = document.getElementsByClassName('addall addall3')[0];


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
});

