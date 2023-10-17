
const settingsTextInput = document.querySelector('.settings__text-input')
const textFontSizeInput = document.querySelector('.text__fontsize-input')
const textColorInput = document.querySelector('.text__color-input')
const textColorOutput = document.querySelector('.text__color-output')
const textColor = document.querySelector('.text-color')
const textBlock = document.querySelector('.text-block')
const btnFontSize = document.querySelector('.btn__font-size')
const btnFontColor = document.querySelector('.btn__font-color')
const weightSelect = document.querySelector('#fontweight')


/*font-size*/

export function fontSizeChange(buttonElement) {
	textBlock.classList.remove('disabled')
	buttonElement.style.fontSize = `${textFontSizeInput.value}px`
	btnFontSize.textContent = textFontSizeInput.value
}
/*font-wieght*/
export function fontWeightChange(buttonElement) {
	textFontWeight.classList.remove('disabled')
	buttonElement.style.fontWeight = weightSelect.value
	btnFontWeight.textContent = weightSelect.value
}
/*button text*/
export function buttonTextChange(buttonElement) {
	buttonElement.textContent = settingsTextInput.value
}

/*text color*/
export function textColorChange(buttonElement) {
	textColor.classList.remove('disabled')
	buttonElement.style.color = textColorInput.value
	textColorOutput.value = textColorInput.value
	btnFontColor.textContent = textColorInput.value
}