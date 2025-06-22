function updateScreenWidthIndicator() {
	const width = window.innerWidth;
	document.title = `Width: ${width}px`;
}

window.addEventListener("resize", updateScreenWidthIndicator);
updateScreenWidthIndicator();
