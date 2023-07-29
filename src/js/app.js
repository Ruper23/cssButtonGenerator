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


/*Shadow*/

const buttonShadow = document.querySelector('.button__shadow')
const buttonShadowBlock = document.querySelectorAll('.button__shadow-block')
const buttonShadowX = document.querySelectorAll('.button__shadow-x')
const shadowXOutput = document.querySelectorAll('.shadow__x-txt')
const buttonShadowY = document.querySelectorAll('.button__shadow-y')
const shadowYOutput = document.querySelectorAll('.shadow__y-txt')
const buttonShadowBlur = document.querySelectorAll('.button__shadow-blur')
const shadowBlurOutput = document.querySelectorAll('.shadow__blur-txt')
const buttonShadowSpread = document.querySelectorAll('.button__shadow-spread')
const shadowSpreadOutput = document.querySelectorAll('.shadow__spread-txt')
const buttonShadowColor = document.querySelectorAll('.shadow__color')
const buttonShadowInset = document.querySelectorAll('.button__shadow-inset')
const shadowBlockOutput = document.querySelector('.shadow-block')
const addShadow = document.querySelector('.add__shadow')
const shadowDatasetC = document.querySelectorAll('.shadow__color')

/*Индекс блока и всех элементов внутри него*/
let newShadowCount = 0

/*Add new shadow*/
/*имена классов */
const classesForShadow = {
	shadowBlock: "button__shadow-block",
	inputColor: "input__color",
	shadowColor: "shadow__color",
	shadowInset: "button__shadow-inset",
	shadowX: "button__shadow-x",
	shadowXTxt: "shadow__x-txt",
	shadowY: "button__shadow-y",
	shadowYTxt: "shadow__y-txt",
	shadowBlur: "button__shadow-blur",
	shadowBlurTxt: "shadow__blur-txt",
	shadowSpread: "button__shadow-spread",
	shadowSpreadTxt: "shadow__spread-txt",
	showHide: "show-hide",
	hide: "hide",
	h4Title: "h4-title",

}
/*Создание нового блока с ползунками*/
addShadow.onclick = () => {
	const divMain = document.createElement('div')
	const divColor = document.createElement('div')
	const divX = document.createElement('div')
	const divY = document.createElement('div')
	const divBlur = document.createElement('div')
	const divSpread = document.createElement('div')
	const h4 = document.createElement('h4')
	const inputColor = document.createElement('input')
	const inputRangeX = document.createElement('input')
	const inputRangeY = document.createElement('input')
	const inputRangeBlur = document.createElement('input')
	const inputRangeSpread = document.createElement('input')
	const spanInset = document.createElement('span')
	const spanX = document.createElement('span')
	const spanY = document.createElement('span')
	const spanBlur = document.createElement('span')
	const spanSpread = document.createElement('span')
	const inputCheckbox = document.createElement('input')
	const hideBtn = document.createElement('button')

	/*Индекс блока и всех элементов внутри него + 1*/
	newShadowCount++

	divMain.className = classesForShadow.shadowBlock
	divMain.setAttribute("data-shadows", newShadowCount)
	divMain.classList.add(classesForShadow.hide)
	h4.textContent = "Color"
	h4.className = classesForShadow.h4Title
	/*color*/
	divColor.className = classesForShadow.inputColor
	inputColor.className = classesForShadow.shadowColor
	inputColor.setAttribute("type", "color")
	inputColor.setAttribute("data-shadows", newShadowCount)
	divColor.append(inputColor)
	/*inset*/
	inputCheckbox.className = classesForShadow.shadowInset
	inputCheckbox.setAttribute("data-shadows", newShadowCount)
	inputCheckbox.setAttribute("type", "checkbox")
	spanInset.textContent = "inset"
	/*button show-hide*/
	hideBtn.className = classesForShadow.showHide
	hideBtn.setAttribute("data-hide", newShadowCount)
	hideBtn.classList.add(classesForShadow.hide)
	/*range x*/
	inputRangeX.className = classesForShadow.shadowX
	inputRangeX.setAttribute("type", "range")
	inputRangeX.setAttribute("min", "-50")
	inputRangeX.setAttribute("max", "50")
	inputRangeX.setAttribute("value", "0")
	inputRangeX.setAttribute("data-shadows", newShadowCount)
	spanX.textContent = "0px"
	spanX.className = classesForShadow.shadowXTxt
	divX.append(inputRangeX, spanX)

	/*range y*/
	inputRangeY.className = classesForShadow.shadowY
	inputRangeY.setAttribute("type", "range")
	inputRangeY.setAttribute("min", "-50")
	inputRangeY.setAttribute("max", "50")
	inputRangeY.setAttribute("value", "0")
	inputRangeY.setAttribute("data-shadows", newShadowCount)
	spanY.textContent = "0px"
	spanY.className = classesForShadow.shadowYTxt
	divY.append(inputRangeY, spanY)

	/*range blur*/
	inputRangeBlur.className = classesForShadow.shadowBlur
	inputRangeBlur.setAttribute("type", "range")
	inputRangeBlur.setAttribute("min", "0")
	inputRangeBlur.setAttribute("max", "100")
	inputRangeBlur.setAttribute("value", "0")
	inputRangeBlur.setAttribute("data-shadows", newShadowCount)
	spanBlur.textContent = "0px"
	spanBlur.className = classesForShadow.shadowBlurTxt
	divBlur.append(inputRangeBlur, spanBlur)

	/*range Spread*/
	inputRangeSpread.className = classesForShadow.shadowSpread
	inputRangeSpread.setAttribute("type", "range")
	inputRangeSpread.setAttribute("min", "0")
	inputRangeSpread.setAttribute("max", "20")
	inputRangeSpread.setAttribute("value", "0")
	inputRangeSpread.setAttribute("data-shadows", newShadowCount)
	spanSpread.textContent = "0px"
	spanSpread.className = classesForShadow.shadowSpreadTxt
	divSpread.append(inputRangeSpread, spanSpread)

	/*Новый блок теней*/
	divMain.append(h4, divColor, inputCheckbox, hideBtn, spanInset, divX, divY, divBlur, divSpread)
	buttonShadow.insertBefore(divMain, addShadow)
}
let btnShadows = ['0px 0px 0px 0px #000000']
buttonShadow.onchange = () => {
	const buttonShadowX = document.querySelectorAll('.button__shadow-x')
	const buttonShadowY = document.querySelectorAll('.button__shadow-y')
	const buttonShadowBlur = document.querySelectorAll('.button__shadow-blur')
	const buttonShadowSpread = document.querySelectorAll('.button__shadow-spread')
	const buttonShadowColor = document.querySelectorAll('.shadow__color')
	const buttonShadowInset = document.querySelectorAll('.button__shadow-inset')

	const spanX = document.querySelectorAll('.shadow__x-txt')
	const spanY = document.querySelectorAll('.shadow__y-txt')
	const spanBlur = document.querySelectorAll('.shadow__blur-txt')
	const spanSpread = document.querySelectorAll('.shadow__spread-txt')

	let lenghtOfshadows = buttonShadow.children.length - 2

	const arrayOfShadows = []
	for (let i = 0; i < lenghtOfshadows; i++) {
		if (buttonShadowInset[i].checked) {
			/*Запись в массив всех параметров тени из соответствующего блока*/
			arrayOfShadows[i] = `${buttonShadowX[i].value}px ${buttonShadowY[i].value}px ${buttonShadowBlur[i].value}px ${buttonShadowSpread[i].value}px ${buttonShadowColor[i].value} inset`
		} else {
			arrayOfShadows[i] = `${buttonShadowX[i].value}px ${buttonShadowY[i].value}px ${buttonShadowBlur[i].value}px ${buttonShadowSpread[i].value}px ${buttonShadowColor[i].value}`
		}

		/*Запись стиля из массива к кнопке инлайново*/
		buttonElement.style.boxShadow = arrayOfShadows
		/*Запись стиля в блок стилей */
		btnShadowX.textContent = arrayOfShadows.toString().split(',').join(', \n')
		spanX[i].textContent = `${buttonShadowX[i].value}px`
		spanY[i].textContent = `${buttonShadowY[i].value}px`
		spanBlur[i].textContent = `${buttonShadowBlur[i].value}px`
		spanSpread[i].textContent = `${buttonShadowSpread[i].value}px`
		btnShadows = arrayOfShadows
	}
	shadowBlockOutput.style.display = "block"
}

/*Show hide func*/
buttonShadow.onclick = e =>{
	const showHideBtnAll = document.querySelectorAll('.show-hide')
	const buttonShadowBlock = document.querySelectorAll('.button__shadow-block')
	let currTarget = e.target.dataset.hide
	if(showHideBtnAll){
	showHideBtnAll[currTarget].classList.toggle('hide')
	buttonShadowBlock[currTarget].classList.toggle('hide')
	}else{
		e.preventDefault()
	}
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
/**/
hoverWidthInput.onchange = () =>{
	hoverWidthInput.value.length > 0 ? hoverWidthBlock.classList.remove('disabled') : hoverWidthBlock.classList.add('disabled')
	hoverWidth.textContent = hoverWidthInput.value
	visibleHoverBlockOutput()
}
hoverHeightInput.onchange = () =>{
	hoverHeightInput.value.length > 0 ? hoverHeightBlock.classList.remove('disabled') : hoverHeightBlock.classList.add('disabled')	
	hoverHeight.textContent = hoverHeightInput.value
	visibleHoverBlockOutput()
}
hoverBgcolorInput.onchange = () =>{
	hoverBgcolorInput.value.length > 0 ? hoverBgColorBlock.classList.remove('disabled') : hoverBgColorBlock.classList.add('disabled')
	hoverBgColor.textContent = hoverBgcolorInput.value
	isHoverBGChange = true
	visibleHoverBlockOutput()
}
hoverTransitionInput.onchange = () =>{
	hoverTransitionInput.value.length > 0 ? hoverTransitionBlock.classList.remove('disabled') : hoverTransitionBlock.classList.add('disabled')
	hoverTransition.textContent = hoverTransitionInput.value
	buttonElement.style.transition = `${hoverTransitionInput.value}s all ${hoverTransitionTimming.value}`
}
hoverTransitionTimming.onchange = () =>{
	hoverTransitionTime.textContent = hoverTransitionTimming.value
	buttonElement.style.transition = `${hoverTransitionInput.value}s all ${hoverTransitionTimming.value}`
}
hoverTextColorInput.onchange = () =>{
	hoverTextColorInput.value.length > 0 ? hoverColorBlock.classList.remove('disabled') : hoverColorBlock.classList.add('disabled')
	hoverFontColor.textContent = hoverTextColorInput.value
	visibleHoverBlockOutput()
	isHoverTextColorChange = true
}
hoverFontSizeInput.onchange = () =>{
	hoverFontSizeInput.value.length > 0 ? hoverFontsizeBlock.classList.remove('disabled') : hoverFontsizeBlock.classList.add('disabled')
	hoverFontSize.textContent = hoverFontSizeInput.value
	visibleHoverBlockOutput()
}
const hoverShadowsArray = []
hoverShadows.onchange = () =>{
	hoverShadowBlock.textContent.length > 0 ? hoverShadowBlock.classList.remove('disabled') : hoverShadowBlock.classList.add('disabled')
	if (hoverShadowInset.checked === true) {	
		hoverShadowsArray[0] = `${hoverShadowX.value}px ${hoverShadowY.value}px ${hoverShadowBlur.value}px ${hoverShadowSpread.value}px ${hoverShadowColor.value} inset`
		hoverBoxShadow.textContent = `${hoverShadowX.value}px ${hoverShadowY.value}px ${hoverShadowBlur.value}px ${hoverShadowSpread.value}px ${hoverShadowColor.value} inset`
	}else{
		hoverShadowsArray[0] = `${hoverShadowX.value}px ${hoverShadowY.value}px ${hoverShadowBlur.value}px ${hoverShadowSpread.value}px ${hoverShadowColor.value}`
		hoverBoxShadow.textContent = `${hoverShadowX.value}px ${hoverShadowY.value}px ${hoverShadowBlur.value}px ${hoverShadowSpread.value}px ${hoverShadowColor.value}`
	}
	visibleHoverBlockOutput()
}
transformScaleInput.onchange = () =>{
	transformScaleInput.value.length > 0 ? hoverTransformBlock.classList.remove('disabled') : hoverTransformBlock.classList.add('disabled')
	hoverTransform.textContent = transformScaleInput.value
	visibleHoverBlockOutput()
}


hoverToggle.onchange = () =>{
	hoverToggle.checked ? hoverSection.classList.add('active') : hoverSection.classList.remove('active')
	//hoverToggle.checked ? true : hoverClass.style.display = 'none'
}


/*Сброс ховера*/
const hoverResetBtn = document.querySelector('.hover-reset')
const hoverArchor = document.querySelectorAll('[data-archor]')
const hoverValues = document.querySelectorAll('.hover-section input')

const hoverValuesReset = () =>{
	hoverClass.style.display = 'none'
	hoverValues.forEach(elem => elem.value = '')
	hoverArchor.forEach(elem => elem.classList.add('disabled'))
	hoverShadowX.value = 0
	hoverShadowY.value = 0
	hoverShadowBlur.value = 0
	hoverShadowSpread.value = 0
	isHoverTextColorChange = false
	isHoverBGChange = false
	hoverShadowInset.checked = false
	hoverShadowsArray[0] = ''
}
hoverResetBtn.onclick = () =>{
	hoverValuesReset()
}
	let normalScale = 1
