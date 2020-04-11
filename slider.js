const SLIDERS = {
	saturation: 1,
	luminosity: 1,
	contrast: 0
}

const createSliders = () => {
	createSlider('saturation',  0, 2)
	createSlider('luminosity', 0, 2)
	createSlider('contrast', -1, 1)
}

const setValue = (variableName, val) => {
	SLIDERS[variableName] = val
	document.getElementById(variableName+'Value').innerHTML = SLIDERS[variableName].toFixed(2)
}

const showInfos = (variableName) => {
	const modal = document.getElementById("myModal")
  	modal.style.display = "block"
	document.getElementById("modalText").innerHTML = EXPLANATIONS[variableName]
}

const createSlider = (variableName, min, max, initialValue) => {
	const slidersContainer = document.getElementById("sliders")
	const onInputFunc = "oninput = \"setValue(\'" + variableName + "\', this.value*0.01)\""
	slidersContainer.innerHTML += '<span class = "sliderWrapper">'
		slidersContainer.innerHTML += "<span>" + variableName + " </span>"
		slidersContainer.innerHTML += '<span id = "'+ variableName +'Value">' + SLIDERS[variableName].toFixed(2) + '</span>'
		slidersContainer.innerHTML += '<img class = "infoLogo" src = "img/info.png" onclick = "showInfos(\''+variableName+'\')" />'
		slidersContainer.innerHTML += "<input type=\"range\" min=\""+ min*100 +"\" max=\""+ max*100 +"\" value=\""+ SLIDERS[variableName]*100 +"\" class=\"slider\" id=\""+ variableName +"\" "+onInputFunc + "\\>\n"
	slidersContainer.innerHTML += '</span>'
}