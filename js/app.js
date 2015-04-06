var indicator1 = document.getElementsByClassName('indicators indicator1 active')[0],
    indicator2 = document.getElementsByClassName('indicators indicator2')[0],
    firstPage = document.getElementById('firstPage'),    
    secondPage = document.getElementById('secondPage'),
    secondPageAttachment = document.querySelector('#secondPage .attachment'),
    checkboxCol1 = document.getElementsByClassName('documents col'),
    checkboxCol2 = document.getElementsByClassName('links col'),
    checkboxCol3 = document.getElementsByClassName('science-lab col'),
    counter = secondPage.getElementsByClassName('attachment-counter')[0],
    sourceList = document.querySelectorAll('#first-Page li'),
    send = document.getElementsByClassName('send')[0],
    startX, isStart, isMove, currentIndex = 0,
    startTime = Date.now(),
    timeDiff = Date.now() - startTime,
    ignoreAction;
    

  send.addEventListener('click', function(){
      var aList = '',
        name = document.getElementById('name').value,
        email = document.getElementById('email').value,
        message = document.getElementById('message').value;

        [].forEach.call(document.querySelectorAll('#secondPage .attached'), function(a){aList = aList + a.innerText + '\r'}) ;
        alert(name + '\r' + email + '\r' + message + '\r' + aList);
    });

  document.addEventListener('mouseup' ,onUp);
  document.addEventListener('mousedown' ,onDown);
  document.addEventListener('mousemove' ,onMove);

  function onDown(){
    startX = event.clientX;
    isMove = false;
    }
  
  function onMove(){
    isMove = true;
    }
  
  function onUp(){
    if(isMove){
      if(startX - event.clientX > 15){
        firstPage.classList.remove('current');
          secondPage.classList.remove('right');
          firstPage.classList.add('left');
          secondPage.classList.add('current');
          indicator1.classList.remove('active');
          indicator2.classList.add('active');
      }
      if(startX - event.clientX < -15){
          firstPage.classList.remove('left');
          secondPage.classList.remove('current');
          firstPage.classList.add('current');
          secondPage.classList.add('right');
          indicator2.classList.remove('active');
          indicator1.classList.add('active');
      }
    }
  }

  function fireEvent(element,event){
    var evt = document.createEvent("HTMLEvents");
        evt.initEvent(event, true, true ); // event type,bubbling,cancelable
        return !element.dispatchEvent(evt);
  }

  [].forEach.call([checkboxCol1[0], checkboxCol2[0], checkboxCol3[0]], function(col){
    var addAll = col.querySelector('.addall'),
        checkboxes = col.querySelectorAll('input[type=checkbox]');
    
    [].forEach.call(checkboxes, function(checkbox){
      checkbox.addEventListener('change', function(){
        var selected = col.querySelectorAll('input[type=checkbox]:checked');
    
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
          }
          else{
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

  [].forEach.call([checkboxCol1[0], checkboxCol2[0], checkboxCol3[0]], function(col, colIndex){
    var checkboxes = col.querySelectorAll('input[type=checkbox]'),
        p1 = col.querySelectorAll('p')[0],
        p2 = col.querySelectorAll('p')[1];

        [].forEach.call(checkboxes, function(checkbox, cIndex){
          checkbox.addEventListener('change', function(event){
            var li = document.createElement('li'),
              icon = colIndex === 0 ? 'icon documents-icon' :  colIndex === 1 ? 'icon links-icon' : 'icon science-icon';
              createdLi = secondPage.querySelector('[index="' + colIndex + '-' + cIndex + '"]');
              if(checkbox.checked && !createdLi){
                li.setAttribute('index',  colIndex + '-' + cIndex);
                li.classList.add('attached');
                li.innerHTML = "<p class=\"author-result " + icon +"\"\></p>" + p1.innerHTML + " " + p2.innerHTML + "<button class=\"trashcan\"></button>" + "</p>";
                li.querySelector('button').addEventListener('click', function(col){
                  count = document.getElementsByClassName('attached').length;
                  checkbox.checked = false;
                  fireEvent(checkbox, 'change');
                  counter.innerHTML = count + " attached files";            
                });
                secondPageAttachment.appendChild(li);
                count = document.getElementsByClassName('attached').length;
                counter.innerHTML = count + " attached files";
              }
              else{
                if(createdLi){
                  secondPageAttachment.removeChild(createdLi);
                  fireEvent(checkbox, 'change');
                  count = document.getElementsByClassName('attached').length;
                  counter.innerHTML = count + " attached files";
                }
              }
          })
        })
  });