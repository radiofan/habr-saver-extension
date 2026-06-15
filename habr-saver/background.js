chrome.action.onClicked.addListener((tab) => {
	if (!tab.id) return;

	chrome.scripting.executeScript({
		target: { tabId: tab.id },
		files: ["clean.js"],
		world: "MAIN"
	});
});

chrome.runtime.onInstalled.addListener(async () => {
	try {
		await chrome.scripting.registerContentScripts([
			{
				id: "event-hook",
				matches: ["https://habr.com/*"],
				js: ["hook.js"],
				runAt: "document_start",
				world: "MAIN"
			}
		]);
	} catch (e) {
		console.error(e);
	}
});