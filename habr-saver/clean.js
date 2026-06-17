(function(){
	console.log("clean habr");
	
	if(!window.__eventListenerCleaner.hasOwnProperty('openSpoilers') ||
		!window.__eventListenerCleaner.hasOwnProperty('removeAll') ||
		!window.__eventListenerCleaner.hasOwnProperty('cleanElements')){
		alert("Need to reload page for hooking event listeneres");
	}else{
		window.__eventListenerCleaner.openSpoilers();
		window.__eventListenerCleaner.removeAll();
		window.__eventListenerCleaner.cleanElements();
	}
})();