// Скрипт для атрибута disabled в фильтрах

(function(){
	var inputCheckbox = document.querySelectorAll('.filter-input');

	for (var i = 0; i < inputCheckbox.length; i++) {
		if(inputCheckbox[i].disabled == true){
			inputCheckbox[i].parentNode.classList.add('label-disabled');
		}
	}
}())