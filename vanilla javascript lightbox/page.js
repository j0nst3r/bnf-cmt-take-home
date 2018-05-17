var xhttp = new XMLHttpRequest(); // a new request

var Get = (url) => {
    xhttp.open("GET",url,true);
    xhttp.send();
	xhttp.addEventListener("readystatechange", processRequest, false);	
}

var modal,
    modalActiveClass = "modal-active";

var closeModal = (event) => {
	if(event === undefined || event.target.hasAttribute('data-modal-dismiss')) {
		modal.classList.remove(modalActiveClass);
    }
}

var openModal = (event) => {
	
	modal = document.querySelector('[data-modal-name="modal"]');
    modal.classList.add(modalActiveClass);
	
	var modalHeader = document.querySelector('.modal__title');
	modalHeader.innerHTML = event.target.alt;
	
	var modalContent = document.querySelector('.modal__content');
	var tempImg = document.createElement('img');
	tempImg.src = event.target.src;
	modalContent.replaceChild(tempImg,modalContent.childNodes[0]);
	modal.addEventListener("click", closeModal);
}


var processRequest = (e) => {
	if (xhttp.readyState == 4 && xhttp.status == 200) {
		
		//get data from api and build the image grid
		var response = JSON.parse(xhttp.response);		
        var div = document.createElement('div');
		div.id = 'block';
		div.className = 'block';
		document.getElementsByTagName('body')[0].appendChild(div);
		response.items.forEach((ele)=>{
			var tempImg = document.createElement('img');
			tempImg.src = ele.media.m;
			tempImg.alt = ele.title
			tempImg.width = 240;
			tempImg.addEventListener("click", openModal);
			tempImg.className = "imageTile";
			div.appendChild(tempImg)
		})
    }
}

window.onload = function(){
	Get("https://api.flickr.com/services/feeds/photos_public.gne?tags=puppies&format=json&nojsoncallback=1");
}