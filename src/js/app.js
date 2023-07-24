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


/*BORDER*/

const borderSettingsBlock = document.querySelector('.settings__main-border')
const borderHeight = document.querySelector('#border__height')
const borderColor = document.querySelector('#border__color')
const dotted = document.querySelector('#dotted')
const borderTypes = document.querySelectorAll('input[name="radio"]')
const borderTypesBlock = document.querySelector('.border__type')
const borderRadius = document.querySelector('#border__radius')
const borderRadiusBlock = document.querySelector('.border-radius')
const btnBorderColor = document.querySelector('.btn__border-color')
const borderBlock = document.querySelector('.border-block')
let borderTypeSelected
const borderTypeChange = () => {
	if (borderTypes[0].checked) { borderTypeSelected = borderTypes[0].value }
	if (borderTypes[1].checked) { borderTypeSelected = borderTypes[1].value }
	if (borderTypes[2].checked) { borderTypeSelected = borderTypes[2].value }
	if (borderTypes[3].checked) { borderTypeSelected = borderTypes[3].value }

}
/*borderTypesBlock.onchange = () =>{
		for(borderType of borderTypes){
		if(borderType.checked){
			borderTypeSelected = borderType.value
			break
		}
	}
}*/
const borderRadiusChange = () => {
	if (borderRadius.value == "0" || borderRadius.value == '') {
		borderRadiusBlock.style.display = 'none'
	}else{
		buttonElement.style.borderRadius = `${borderRadius.value}px`
		borderRadiusSpan.textContent = borderRadius.value
		borderRadiusBlock.style.display = 'block'
	}
	

}
const borderSettingsChange = () => {
	buttonElement.style.border = `${borderHeight.value}px ${borderTypeSelected} ${borderColor.value}`
	if (borderTypeSelected == 'none') {
		borderBlock.style.display = 'none'
		btnBorderSpan.textContent = `none`
		btnBorderColor.textContent = ''
	} else {
		btnBorderSpan.textContent = `${borderHeight.value}px ${borderTypeSelected} `
		btnBorderColor.textContent = `${borderColor.value}`
		borderBlock.style.display = 'block'
	}
}

borderSettingsBlock.onchange = () => {
	borderTypeChange()
	borderSettingsChange()
	borderRadiusChange()
}





/*HOVER*/


const hoverClass = document.querySelector('.hover-class')
const hoverSection = document.querySelector('.hover-section')
const hoverToggle = document.querySelector('.hover__toggle')
const hoverClose = document.querySelector('.hover-close')
const hoverMenuBtn = document.querySelector('.hover__menu') 

/* hover Inputs values*/
const hoverTransitionInput = document.querySelector('.hover__transition-input')
const hoverTransitionTimming = document.querySelector('#transition')
const hoverWidthInput = document.querySelector('.hover__width-input')
const hoverHeightInput = document.querySelector('.hover__height-input')
const hoverBgcolorInput = document.querySelector('.hover__bgcolor-input')
const hoverTextColorInput = document.querySelector('.hover__textcolor-input')
const hoverFontSizeInput = document.querySelector('.hover__fontsize-input')
const transformScaleInput = document.querySelector('.transform__scale-input')
const hoverShadows = document.querySelector('.shadow-axes')
const hoverShadowInset = document.querySelector('.shadow-inset')
const hoverShadowX = document.querySelector('.hover__shadow-x')
const hoverShadowY = document.querySelector('.hover__shadow-y')
const hoverShadowBlur = document.querySelector('.hover__shadow-blur')
const hoverShadowSpread = document.querySelector('.hover__shadow-spread')
const hoverShadowColor = document.querySelector('.hover__shadow-color')

/*hover output txt*/
const hoverWidthBlock = document.querySelector('.hover__width-block')
const hoverHeightBlock = document.querySelector('.hover__height-block')

const hoverBgColorBlock = document.querySelector('.hover__bgcolor-block')
const hoverTransitionBlock = document.querySelector('.hover__transition-block')
const hoverFontsizeBlock = document.querySelector('.hover__fontsize-block')
const hoverColorBlock = document.querySelector('.hover__color-block')
const hoverShadowBlock = document.querySelector('.hover__shadow-block')
const hoverTransformBlock = document.querySelector('.hover__transform-block')


const hoverWidth = document.querySelector('.hover__width')
const hoverHeight = document.querySelector('.hover__height')
const hoverBgColor = document.querySelector('.hover__bgcolor-output')
const hoverTransition = document.querySelector('.hover__transition-output')
const hoverTransitionTime = document.querySelector('.hover__transition-timing')
const hoverFontSize = document.querySelector('.hover__font-size')
const hoverFontColor = document.querySelector('.hover__font-color')
const hoverBoxShadow = document.querySelector('.hover__shadow-output')
const hoverTransform = document.querySelector('.hover__transform-output')

let isHoverBGChange = false
let isHoverTextColorChange = false
/* Открытие/закрытие окна с ховер настройками*/
hoverClose.onclick = () =>{
	hoverSection.classList.remove('active')
}
hoverMenuBtn.onclick = () => {
	hoverSection.classList.toggle('active')
}
const visibleHoverBlockOutput = () =>{
	if (hoverWidthInput.value.length > 0 || hoverHeightInput.value.length > 0 || hoverBgcolorInput.value.length > 0 || hoverTransitionInput.value.length > 0 || hoverFontSizeInput.value.length > 0 || hoverTextColorInput.value.length > 0 ) {
		hoverClass.style.display = 'flex'
	} else{
		hoverClass.style.display = 'none'
	}
}
hoverToggle.onchange = () =>{
	hoverToggle.checked ? hoverSection.classList.add('active') : hoverSection.classList.remove('active')
	//hoverToggle.checked ? true : hoverClass.style.display = 'none'
}