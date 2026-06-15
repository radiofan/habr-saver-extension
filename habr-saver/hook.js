(function(){
	const listeners = [];

	const originalAddEventListener =
		EventTarget.prototype.addEventListener;

	EventTarget.prototype.addEventListener =
		function(type, listener, options){

			listeners.push({
				target: this,
				type,
				listener,
				options
			});

			return originalAddEventListener.call(
				this,
				type,
				listener,
				options
			);
		};

	window.__eventListenerCleaner = {
		openSpoilers(){
			for(el of document.querySelectorAll("details")){ el.setAttribute("open", "open");}
			for(el of document.querySelectorAll(".habrahidden")){ el.setAttribute("data-show", "true");}
		},
		removeAll(){
			for(const item of listeners){
				try{
					item.target.removeEventListener(
						item.type,
						item.listener,
						item.options
					);
				}catch(e){
					console.log(e);
				}
			}

			listeners.length = 0;
		},
		cleanElements(){
			for(el of document.querySelectorAll("div.header-banner-wrapper")){ el.remove();}
			for(el of document.querySelectorAll("header")){ el.remove();}
			for(el of document.querySelectorAll("div.tm-footer-menu")){ el.remove();}
			for(el of document.querySelectorAll("div.tm-footer")){ el.remove();}
			for(el of document.querySelectorAll("#overlays")){ el.remove();}
			for(el of document.querySelectorAll("div.tm-article-presenter__footer section.tm-block.tm-block_spacing-bottom")){
				if(el.querySelector(".article-author")){
					continue;
				}
				el.remove();
			}
			for(el of document.querySelectorAll("div.tm-article-presenter__footer section.tm-block.tm-block_spacing-around")){ el.remove();}
			for(el of document.querySelectorAll("div.tm-article-presenter__footer div.tm-project-block.tm-project-block--courses")){ el.remove();}
			for(el of document.querySelectorAll("div.tm-article-presenter__footer div.tm-project-block.tm-project-block--salary")){ el.remove();}
			for(el of document.querySelectorAll("script")){ el.remove();}
			for(el of document.querySelectorAll("noscript")){ el.remove();}
			for(el of document.querySelectorAll("#publication-comments div.tm-comment-form")){ el.remove();}
			for(el of document.querySelectorAll("#publication-comments div.tm-comment-navigation.tm-comment-navigation__block.tm-comment-navigation__has-new_reverse")){ el.remove();}
			for(el of document.querySelectorAll("div.tm-page__sidebar")){ el.remove();}
			for(el of document.querySelectorAll("div.tm-page-progress-bar")){ el.remove();}
			for(el of document.querySelectorAll("button.tm-scroll-top")){ el.remove();}
			for(el of document.querySelectorAll("div.pull-down__header")){ el.remove();}
			for(el of document.querySelectorAll("div.sponsor-block")){ el.remove();}
			for(el of document.querySelectorAll("img[aria-hidden=\"true\"]")){ el.remove();}
			for(el of document.querySelectorAll(".code-explainer")){ el.remove();}
			for(el of document.querySelectorAll("details > summary")){ el.style.display ="none";}
			document.querySelector("main > div.tm-page").style.padding = "0";
			for(el of document.querySelectorAll(".spoiler__content")){ el.style.padding = "2px"; el.style.margin = "0";}
			for(el of document.querySelectorAll(".spoiler__content > pre")){ el.style.padding = "2px"; el.style.margin = "0";}
			document.querySelector("main > div.tm-page > div.tm-page-width").style.margin = "0";
			document.querySelector("main > div.tm-page > div.tm-page-width").style.padding = "0";
			document.querySelector("main > div.tm-page > div.tm-page-width").style.maxWidth = "10000px";
			document.querySelector("main > div.tm-page div.tm-article-presenter").style.maxWidth = "10000px";
			document.querySelector("main > div.tm-page div.tm-article-presenter").style.margin = "0";
			document.querySelector("div.tm-article-presenter__footer").style.margin = "0";
			document.querySelector("div.tm-article-presenter__footer").style.maxWidth = "10000px";
			document.querySelector("div.tm-page__main_has-sidebar").style.maxWidth = "10000px";
		}
	};
})();