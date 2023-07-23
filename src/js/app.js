import * as webpCheck from "./modules/webpcheck.js"
webpCheck.isWebp()



const elementBg = document.querySelector('.element__section')
const buttonElement = document.querySelector('.element__element')

const colorSet = document.querySelector('.settings__main-color')
const btnWidthSpan = document.querySelector('.btn__width')
const btnHeightSpan = document.querySelector('.btn__height')
const btnColorSpan = document.querySelector('.btn__color')
const btnBorderSpan = document.querySelector('.btn__border')
const btnShadowX = document.querySelector('.btn__shadow-x')
const borderRadiusSpan = document.querySelector('.btn__border-radius')

const colorPick = document.querySelector('#color__pick')
const colorInput = document.querySelector('#bg__input')
const mainColorBg = document.querySelector('.main__color-bg')

const colorSetFunc = (element,colorPick,colorValue) =>{
	element.style.background = colorPick.value
	colorValue.value = colorPick.value
}

colorPick.onchange = () => {
	colorSetFunc(elementBg,colorPick,colorInput)
}
colorInput.onchange = () => {
	colorSetFunc(elementBg,colorInput,colorPick)
}

/*TEXT & FONT SIZE*/
const settingsText = document.querySelector('.settings__text')
const settingsTextInput = document.querySelector('.settings__text-input')
const textFontSizeInput = document.querySelector('.text__fontsize-input')
const textColorInput = document.querySelector('.text__color-input')
const textColorOutput = document.querySelector('.text__color-output')
const textColor = document.querySelector('.text-color')
const textBlock = document.querySelector('.text-block')
const btnFontSize = document.querySelector('.btn__font-size')
const btnFontColor = document.querySelector('.btn__font-color')
const fontSelect = document.querySelector('#fontfamily')
const btnFontFamily = document.querySelector('.btn__font-family')
const textFontFamily = document.querySelector('.text-fontfamily')
const weightSelect = document.querySelector('#fontweight')
const btnFontWeight = document.querySelector('.btn__font-weight')
const textFontWeight = document.querySelector('.text-fontweight')


/*font-family*/
fontSelect.onchange = () =>{
	textFontFamily.classList.remove('disabled')
	buttonElement.style.fontFamily = fontSelect.value
	btnFontFamily.textContent = `'${fontSelect.value}'`
}

/*font-size*/
textFontSizeInput.onchange = () =>{
	textBlock.classList.remove('disabled')
	buttonElement.style.fontSize = `${textFontSizeInput.value}px`
	btnFontSize.textContent = textFontSizeInput.value
}
/*font-wieght*/
weightSelect.onchange = () =>{
	textFontWeight.classList.remove('disabled')
	buttonElement.style.fontWeight = weightSelect.value
	btnFontWeight.textContent = weightSelect.value
}

/*button text*/
settingsTextInput.onchange = () => {
	buttonElement.textContent = settingsTextInput.value
}

/*text color*/
textColorInput.onchange = () => {
	textColor.classList.remove('disabled')
	buttonElement.style.color = textColorInput.value
	textColorOutput.value = textColorInput.value
	btnFontColor.textContent = textColorInput.value
}
/*button color*/

const buttonColorBlock = document.querySelector('.button')
const buttonColor = document.querySelector('#button__color')
const buttonColorOutput = document.querySelector('.button__color-output')
const transparentInput = document.querySelector('.transparent')

const transparentCheked = () =>{
	if(transparentInput.checked){
		btnColorSpan.textContent = 'transparent'
		buttonElement.classList.add('transparent-active')
		buttonColor.classList.add('transparent-active')
		buttonColorOutput.classList.add('transparent-active')
	}else{
		btnColorSpan.textContent = buttonColor.value
		buttonElement.classList.remove('transparent-active')
		buttonColor.classList.remove('transparent-active')
		buttonColorOutput.classList.remove('transparent-active')
	}
}

buttonColorBlock.onchange = () => {
	btnColorSpan.textContent = buttonColor.value
	colorSetFunc(buttonElement,buttonColor,buttonColorOutput)
	transparentCheked()
}
buttonColorOutput.onchange = () =>{
	colorSetFunc(buttonElement,buttonColorOutput,buttonColor)
	btnColorSpan.textContent = buttonColor.value
	transparentCheked()
}
/*Width & Height*/

const settingsWidth = document.querySelector('#settings__width-input')
const settingsHeight = document.querySelector('#settings__height-input')
const settingsMainProperty = document.querySelector('.settings__main-width')


settingsMainProperty.onchange = () => {
	buttonElement.style.width = `${settingsWidth.value}px`
	buttonElement.style.height = `${settingsHeight.value}px`
	btnWidthSpan.textContent = settingsWidth.value
	btnHeightSpan.textContent = settingsHeight.value
}