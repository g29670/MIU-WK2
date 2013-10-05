// Elijah Moran
// MIU 1310

// Wait until the DOM is ready.
window.addEventListener("DOMContentLoaded", function(){

	//Search
	var search = $('searchBtn');
	console.log(search);

	var getSearch = function(){
		var term = $('search').value;

		for(i=0, j=localStorage.length; i<j; i++){
			var key = localStorage.key(i);
			var value = localStorage.getItem(key);
			var obj = JSON.parse(value);
			console.log(term);
			console.log(obj);
			if(term === obj.mname){
				for (n in obj){
						console.log(obj[n]);
				}
			}
		}
	}

	search.addEventListener("click", getSearch);
});