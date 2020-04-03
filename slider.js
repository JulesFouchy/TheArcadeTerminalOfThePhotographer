const SLIDERS = {
	saturation: 1,
	luminosity: 0,
	contrast: 0
}

const createSliders = () => {
	createSlider("saturation",  -1, 2)
	createSlider("luminosity", -1, 1)
	createSlider("contrast", -1, 1)
}

const setValue = (variableName, val) => {SLIDERS[variableName] = val}

const createSlider = (variableName, min, max, initialValue) => {
	const sliderContainer = document.getElementById("sliders")
	const onInputFunc = "oninput = \"setValue(\'" + variableName + "\', this.value*0.01)\""
	sliderContainer.innerHTML += "<input type=\"range\" min=\""+ min*100 +"\" max=\""+ max*100 +"\" value=\""+ SLIDERS[variableName]*100 +"\" class=\"slider\" id=\""+ variableName +"\" "+onInputFunc + "\\>\n"
}