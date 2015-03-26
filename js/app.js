var indicator1 = document.getElementsByClassName('indicators indicator1 active')[0],
    indicator2 = document.getElementsByClassName('indicators indicator2')[0],
    firstPage = document.getElementById('first-page'),    
    secondPage = document.getElementById('second-page'),
    secondPageAttachment = document.querySelector('#second-page .attachment'),
    checkboxCol1 = document.getElementsByClassName('documents col'),
    checkboxCol2 = document.getElementsByClassName('links col'),
    checkboxCol3 = document.getElementsByClassName('science-lab col'),
    counter = secondPage.getElementsByClassName('attachment-counter')[0],
    sourceList = document.querySelectorAll('#first-page li');
    


  indicator2.addEventListener('click', function(){
    firstPage.classList.remove('current');
    secondPage.classList.remove('right');
    firstPage.classList.add('left');
    secondPage.classList.add('current');
    indicator1.classList.remove('active');
    indicator2.classList.add('active');
  });

  indicator1.addEventListener('click', function(){
    firstPage.classList.remove('left');
    secondPage.classList.remove('current');
    firstPage.classList.add('current');
    secondPage.classList.add('right');
    indicator2.classList.remove('active');
    indicator1.classList.add('active');
  });

function fireEvent(element,event){
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent(event, true, true ); // event type,bubbling,cancelable
    return !element.dispatchEvent(evt);
}
  //documents.col checkboxes
    [].forEach.call(checkboxCol1, function(col){
      var addAll = col.querySelector('.addall'),
          checkboxes = col.querySelectorAll('input[type=checkbox]');
    
    
    [].forEach.call(checkboxes, function(checkbox){
   checkbox.addEventListener('change', function(){
    var selected = document.querySelectorAll('.documents input[type=checkbox]:checked');
    
    if(ignoreAction){
     return
    }
   
    if(selected.length < checkboxes.length){
     addAll.classList.remove('removeall');
     addAll.innerHTML = 'add all';
    }

    if(selected.length === checkboxes.length){
     addAll.classList.add('removeall');
     addAll.innerHTML = 'remove all';
    }
   });
    });
    
      addAll.addEventListener('click', function(){
          if(addAll.classList.contains('removeall')){
            addAll.classList.remove('removeall');
            addAll.innerHTML = 'add all';
          }else{
            addAll.classList.add('removeall');
            addAll.innerHTML = 'remove all';
          }
    
   ignoreAction = true; 
  [].forEach.call(checkboxes, function(checkbox){
   if(addAll.classList.contains('removeall')){
     checkbox.checked = true;
     fireEvent(checkbox, 'change');
   }
   else{
     checkbox.checked = false;
     fireEvent(checkbox, 'change');
   }
  });
  ignoreAction = false; 
  
    });
  });

  [].forEach.call(sourceList, function(li, index){
    var checkbox = li.querySelectorAll('.documents.col input[type=checkbox]'),
        p1 = li.querySelectorAll('p')[0],
        p2 = li.querySelectorAll('p')[1];
  checkbox.addEventListener('change', function(event){
    var li = document.createElement('li'),
      	createdLi = secondPage.querySelector('[index="' + index + '"]');
        if(checkbox.checked && !createdLi){
          li.setAttribute('index', index);
          li.classList.add('attached');
          li.innerHTML = "<p class=\"author-result\">" + "<p class=\"documents-icon\"></p>" + p1.innerHTML + "<p class=\"author-info\">" + p2.innerHTML + "<button class=\"trashcan\"></button>" + "</p></p>";
          li.querySelector('button').addEventListener('click', function(col){
          	count = document.getElementsByClassName('attached').length;
            checkbox.checked = false;
            fireEvent(checkbox, 'change');
            counter.innerHTML = count + " attached files";            
            });
          secondPageAttachment.appendChild(li);
          count = document.getElementsByClassName('attached').length;
          counter.innerHTML = count + " attached files";
        }else{
          if(createdLi){
            secondPageAttachment.removeChild(createdLi);
            fireEvent(checkbox, 'change');
            count = document.getElementsByClassName('attached').length;
            counter.innerHTML = count + " attached files";
          }
        }
    })
});  