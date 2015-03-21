(function(global){

	NodeList.prototype.forEach = Array.prototype.forEach;
	HTMLCollection.prototype.forEach = Array.prototype.forEach;

	function initLiteNav(){
		var container = document.querySelector('[data-lite-nav-container]'),
			articles = document.querySelectorAll('[data-lite-nav-article]'),
			startX, isStart, isMove, currentIndex = 0,
			indicator = document.querySelector('[data-lite-nav-indicator]');

		articles.forEach(function(article, index){
			indicator.appendChild(document.createElement('div'));
		});

		function setActiveArticle(index){
			if(index > articles.length - 1){
				index = articles.length - 1
			}else if(index < 0){
				index = 0;
			}

			articles.forEach(function(article){
				article.classList.remove('active');
			});
			indicator.children.forEach(function(div){
				div.classList.remove('active');
			});
			articles[index].classList.add('active');
			indicator.children[index].classList.add('active');
		}


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
					currentIndex++;
					setActiveArticle(currentIndex);
				}else{
					currentIndex--;
					setActiveArticle(currentIndex);
				}
			}
		}

		setActiveArticle(0);

		document.addEventListener('mouseup' ,onUp);
		document.addEventListener('mousedown' ,onDown);
		document.addEventListener('mousemove' ,onMove);
	}

	global.addEventListener('load', initLiteNav)

})(window);