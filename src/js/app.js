import * as webpCheck from "./modules/webpcheck.js"
webpCheck.isWebp()
import {fonts} from "./modules/fonts/fontsFamily.js"
import {fontSizeChange,fontWeightChange,buttonTextChange,textColorChange} from "./modules/fonts/fontSettings.js"

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

const settingsTextInput = document.querySelector('.settings__text-input')
const textFontSizeInput = document.querySelector('.text__fontsize-input')
const textColorInput = document.querySelector('.text__color-input')

const fontSelect = document.querySelector('#fontfamily')
const btnFontFamily = document.querySelector('.btn__font-family')
const textFontFamily = document.querySelector('.text-fontfamily')
const weightSelect = document.querySelector('#fontweight')
const btnFontWeight = document.querySelector('.btn__font-weight')



/*font-family*/


	/*Создание списка шривтов в меню выбора*/
const fontsList = () => {
	fonts.map(font => {
		const optionFontFamily = document.createElement('option')
		optionFontFamily.setAttribute('value' , '')
		fontSelect.append(optionFontFamily)
		optionFontFamily.value = font.family
		optionFontFamily.textContent = font.family
	})
	let item = fonts[0].weight
		item.map(i => {
			const optionFontWeight = document.createElement('option')
			optionFontWeight.setAttribute('value' , '')
			optionFontWeight.className = "fontweight"
			weightSelect.append(optionFontWeight)
			optionFontWeight.value = i
			optionFontWeight.textContent = i
		})
}
fontsList()

let list
let indexOfFont = 0
/*Функция очистки списка толщины шрифта*/
const clearWeightList = () => {
	const optionFontWeightClass = document.querySelectorAll('.fontweight')
	for (let i = 0; i < fonts[indexOfFont].weight.length; i++){
		weightSelect.remove(optionFontWeightClass[i])
	}
}
/*Функция создания списка толщины шрифта*/
const weightListWright = (list) => {
	list.map(item => {
			const optionFontWeight = document.createElement('option')
			optionFontWeight.setAttribute('value' , '')
			optionFontWeight.className = "fontweight"
			weightSelect.append(optionFontWeight)
			optionFontWeight.value = item
			optionFontWeight.textContent = item
		})
		buttonElement.style.fontWeight = list[0]
		btnFontWeight.textContent = list[0]
}
/*Функция выбора шрифта со списком толщины*/
const fontsCurrWeight = () => {
	/*очистка предыдущего списка*/
	clearWeightList()
	/*поиск обьекта в массиве по названию шрифта*/
	let findCurrFont = fonts.find(font => font.family === fontSelect.value)
	/*получение индекса обьекта из массива, по названию шрифта*/
	indexOfFont = fonts.indexOf(findCurrFont, 0)
	/*определение массива значений толщины, по названию шрифта*/
	list = fonts[indexOfFont].weight
	/*создаем новый список толщин по выбранному шрифту*/
	weightListWright(list)
}
/*Событие по изменению выбора элемента из списка*/
fontSelect.onchange = () =>{
	textFontFamily.classList.remove('disabled')
	buttonElement.style.fontFamily = fontSelect.value
	btnFontFamily.textContent = `'${fontSelect.value}'`
	fontsCurrWeight()
}

/*font-size*/
textFontSizeInput.addEventListener('change', () =>{
	fontSizeChange(buttonElement)
})
/*font-wieght*/
weightSelect.addEventListener('change', () =>{
	fontWeightChange(buttonElement)
})

/*button text*/
settingsTextInput.addEventListener('change', () => {
	buttonTextChange(buttonElement)
})

/*text color*/
textColorInput.addEventListener('change', () => {
	textColorChange(buttonElement)
})
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

buttonColorBlock.addEventListener('change', () => {
	btnColorSpan.textContent = buttonColor.value
	colorSetFunc(buttonElement,buttonColor,buttonColorOutput)
	transparentCheked()
})
buttonColorOutput.addEventListener('change', () =>{
	colorSetFunc(buttonElement,buttonColorOutput,buttonColor)
	btnColorSpan.textContent = buttonColor.value
	transparentCheked()
})
/*Width & Height*/

const settingsWidth = document.querySelector('#settings__width-input')
const settingsHeight = document.querySelector('#settings__height-input')
const settingsMainProperty = document.querySelector('.settings__main-width')


settingsMainProperty.addEventListener('change', () => {
	buttonElement.style.width = `${settingsWidth.value}px`
	buttonElement.style.height = `${settingsHeight.value}px`
	btnWidthSpan.textContent = settingsWidth.value
	btnHeightSpan.textContent = settingsHeight.value
})


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

borderSettingsBlock.addEventListener('change', () => {
	borderTypeChange()
	borderSettingsChange()
	borderRadiusChange()
})


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
/* const shadowDatasetC = document.querySelectorAll('.shadow__color') */

const shadowTabs = document.querySelector('.shadow__tabs')

/*Индекс блока и всех элементов внутри него*/
let newShadowCount = 0
let btnShadows = ['0px 0px 0px 0px #000000']
/*Add new shadow*/
/*имена CSS классов */
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
	tab: "tab",
	tabColor: "tab__color",

}
/*Создание нового блока с ползунками*/
addShadow.addEventListener('click', () => {
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

	const divTab = document.createElement('div')
	const divTabColor = document.createElement('div')

	newShadowCount++

	divTab.className = classesForShadow.tab
	divTab.setAttribute("data-shadows", newShadowCount)
	divTabColor.className = classesForShadow.tabColor
	divTab.append(divTabColor)
	shadowTabs.append(divTab)

	/*Индекс блока и всех элементов внутри него + 1*/

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
	
	/*Фокус на новую вкладку тени*/
	const buttonShadowBlock = document.querySelectorAll('.button__shadow-block')
	const tab = document.querySelectorAll('.tab')
	activeTarget(buttonShadowBlock,newShadowCount)
	activeTarget(tab,newShadowCount)
	
	newShadowCount > 13 ? addShadow.classList.add('inactive') : addShadow.classList.remove('inactive') 
	console.log(newShadowCount);
}
)
/*функция на переключение фокуса*/
const activeTarget = (tab,count) =>{
	tab.forEach(el => el.classList.remove('active'))
	tab[count].classList.add('active')
}
/*фокус на блок*/
const switchShadowWithTab = (tabCurr) => {
	const buttonShadowBlock = document.querySelectorAll('.button__shadow-block')
	activeTarget(buttonShadowBlock,tabCurr)
}
/*фокус на таб*/
shadowTabs.addEventListener('click',(e) => {
	const tab = document.querySelectorAll('.tab')
	const showHideBtnAll = document.querySelectorAll('.show-hide')
	const buttonShadowBlock = document.querySelectorAll('.button__shadow-block')
	refreshIndex(showHideBtnAll,tab,buttonShadowBlock)

	let tabCurr = e.target.dataset.shadows
	activeTarget(tab,tabCurr)
	switchShadowWithTab(tabCurr)

})
/*переиндексация оставшихся элементов*/
const refreshIndex = (showHideBtnAll,tab,buttonShadowBlock) =>{
	for (let i = 0; i < tab.length; i++) {
		tab[i].dataset.shadows = i
		buttonShadowBlock[i].dataset.shadows = i
		showHideBtnAll[i].dataset.hide = i
	}				
}
const refreshArrayOfShadows = (btnShadows,currIndex) =>{
	btnShadows.splice(currIndex,1)
}

const battonShadowChange = () =>{
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

	const tabColor = document.querySelectorAll('.tab__color')

	let lenghtOfshadows = buttonShadow.children.length - 3

	const arrayOfShadows = []
	for (let i = 0; i < lenghtOfshadows; i++) {
		tabColor[i].style.background = buttonShadowColor[i].value
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
buttonShadow.addEventListener('change', () => {
	battonShadowChange()
})

/*удаление вкладки с тенью*/
buttonShadow.addEventListener('click', (e) =>{
	const buttonShadowBlock = document.querySelectorAll('.button__shadow-block')
	const tab = document.querySelectorAll('.tab')
	let currTarget = e.target.dataset.hide
		if (currTarget) {	
			addShadow.classList.remove('inactive')
			/*удаление вкладки*/
			let prevBlock = currTarget - 1
			buttonShadow.removeChild(buttonShadowBlock[currTarget])
			shadowTabs.removeChild(tab[currTarget])
			/*прехеод на предыдущую вкладку*/
			activeTarget(buttonShadowBlock,prevBlock)
			activeTarget(tab,prevBlock)
			newShadowCount--
			/*обновление индексов*/
			refreshArrayOfShadows(btnShadows,currTarget)
			/*обновление массива теней*/
			battonShadowChange()	
		}
})


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
const hoverShadowsSettings = document.querySelector('.hover__shadow-settings')
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
hoverClose.addEventListener('click', () =>{
	hoverSection.classList.remove('active')
})
hoverMenuBtn.addEventListener('click', () => {
	hoverSection.classList.toggle('active')
})
const visibleHoverBlockOutput = () =>{
	if (hoverWidthInput.value.length > 0 || hoverHeightInput.value.length > 0 || hoverBgcolorInput.value.length > 0 || hoverTransitionInput.value.length > 0 || hoverFontSizeInput.value.length > 0 || hoverTextColorInput.value.length > 0 ) {
		hoverClass.style.display = 'flex'
	} else{
		hoverClass.style.display = 'none'
	}
}
/**/
hoverWidthInput.addEventListener('change', () =>{
	hoverWidthInput.value.length > 0 ? hoverWidthBlock.classList.remove('disabled') : hoverWidthBlock.classList.add('disabled')
	hoverWidth.textContent = hoverWidthInput.value
	visibleHoverBlockOutput()
})
hoverHeightInput.addEventListener('change', () =>{
	hoverHeightInput.value.length > 0 ? hoverHeightBlock.classList.remove('disabled') : hoverHeightBlock.classList.add('disabled')	
	hoverHeight.textContent = hoverHeightInput.value
	visibleHoverBlockOutput()
})
hoverBgcolorInput.addEventListener('change', () =>{
	hoverBgcolorInput.value.length > 0 ? hoverBgColorBlock.classList.remove('disabled') : hoverBgColorBlock.classList.add('disabled')
	hoverBgColor.textContent = hoverBgcolorInput.value
	isHoverBGChange = true
	visibleHoverBlockOutput()
})
hoverTransitionInput.addEventListener('change', () =>{
	hoverTransitionInput.value.length > 0 ? hoverTransitionBlock.classList.remove('disabled') : hoverTransitionBlock.classList.add('disabled')
	hoverTransition.textContent = hoverTransitionInput.value
	buttonElement.style.transition = `${hoverTransitionInput.value}s all ${hoverTransitionTimming.value}`
})
hoverTransitionTimming.addEventListener ('change', () =>{
	hoverTransitionTime.textContent = hoverTransitionTimming.value
	buttonElement.style.transition = `${hoverTransitionInput.value}s all ${hoverTransitionTimming.value}`
})
hoverTextColorInput.addEventListener('change', () =>{
	hoverTextColorInput.value.length > 0 ? hoverColorBlock.classList.remove('disabled') : hoverColorBlock.classList.add('disabled')
	hoverFontColor.textContent = hoverTextColorInput.value
	visibleHoverBlockOutput()
	isHoverTextColorChange = true
})
hoverFontSizeInput.addEventListener('change', () =>{
	hoverFontSizeInput.value.length > 0 ? hoverFontsizeBlock.classList.remove('disabled') : hoverFontsizeBlock.classList.add('disabled')
	hoverFontSize.textContent = hoverFontSizeInput.value
	visibleHoverBlockOutput()
})
const hoverShadowsArray = []
hoverShadowsSettings.addEventListener('change', () =>{
	hoverShadowBlock.textContent.length > 0 ? hoverShadowBlock.classList.remove('disabled') : hoverShadowBlock.classList.add('disabled')
	if (hoverShadowInset.checked === true) {	
		hoverShadowsArray[0] = `${hoverShadowX.value}px ${hoverShadowY.value}px ${hoverShadowBlur.value}px ${hoverShadowSpread.value}px ${hoverShadowColor.value} inset`
		hoverBoxShadow.textContent = `${hoverShadowX.value}px ${hoverShadowY.value}px ${hoverShadowBlur.value}px ${hoverShadowSpread.value}px ${hoverShadowColor.value} inset`
	}else{
		hoverShadowsArray[0] = `${hoverShadowX.value}px ${hoverShadowY.value}px ${hoverShadowBlur.value}px ${hoverShadowSpread.value}px ${hoverShadowColor.value}`
		hoverBoxShadow.textContent = `${hoverShadowX.value}px ${hoverShadowY.value}px ${hoverShadowBlur.value}px ${hoverShadowSpread.value}px ${hoverShadowColor.value}`
	}
	visibleHoverBlockOutput()
})
transformScaleInput.addEventListener('change', () =>{
	transformScaleInput.value.length > 0 ? hoverTransformBlock.classList.remove('disabled') : hoverTransformBlock.classList.add('disabled')
	hoverTransform.textContent = transformScaleInput.value
	visibleHoverBlockOutput()
})


hoverToggle.addEventListener('change', () =>{
	hoverToggle.checked ? hoverSection.classList.add('active') : hoverSection.classList.remove('active')
	//hoverToggle.checked ? true : hoverClass.style.display = 'none'
}
)

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
hoverResetBtn.addEventListener('click', () =>{
	hoverValuesReset()
})
	let normalScale = 1
/*Классы состояния кнопки*/


/*Обычное состояние кнопки заданное пользователем*/
class Main {
	constructor(color,width,height,fontSize,textColor,shadow,scale){
		this.color = color
		this.width = width
		this.height = height
		this.fontSize = fontSize
		this.textColor = textColor
		this.shadow = shadow
		this.scale = scale

	}
	btnColor(){
		if (!isHoverBGChange === true) {return}
		buttonElement.style.backgroundColor = this.color
	}
	btnWidth() {
		if (!hoverWidthInput.value.length > 0) {return}
		buttonElement.style.width = `${this.width}px`
	}
	btnHeight() {
		if (!hoverHeightInput.value.length > 0) {return}
		buttonElement.style.height = `${this.height}px`
	}
	btnFontSize() {
		if (!hoverFontSizeInput.value.length > 0) {return}
		buttonElement.style.fontSize = `${this.fontSize}px`
	}
	btnTextColor() {
		if (!isHoverTextColorChange === true) {return}
		buttonElement.style.color = this.textColor
	}
	btnShadow() {
		if (!hoverShadowsArray.length > 0) {return}
		buttonElement.style.boxShadow = this.shadow
	}
	btnScale () {
		if (!transformScaleInput.value.length > 0) {return}
		buttonElement.style.transform = `scale(${this.scale})`
	}
}

/*Состояние при наведении заданое пользователем*/
class Hover extends Main{
		constructor(color,width,height,fontSize,textColor,shadow,scale){
		super()
		this.color = color
		this.width = width
		this.height = height
		this.fontSize = fontSize
		this.textColor = textColor
		this.shadow = shadow
		this.scale = scale
	}

}

let hoverState
let normalState
buttonElement.addEventListener('mouseenter', ()=>{
	hoverState = new Hover (hoverBgcolorInput.value,hoverWidthInput.value,hoverHeightInput.value,hoverFontSizeInput.value,hoverTextColorInput.value,hoverShadowsArray,transformScaleInput.value)
	if (!hoverToggle.checked) {return}
	hoverState.btnWidth(hoverWidthInput.value)
	hoverState.btnHeight(hoverHeightInput.value)
	hoverState.btnColor(hoverBgcolorInput.value)
	hoverState.btnFontSize(hoverFontSizeInput.value)
	hoverState.btnTextColor(hoverTextColorInput.value)
	hoverState.btnShadow(hoverShadowsArray)
	hoverState.btnScale(transformScaleInput.value)
})
buttonElement.addEventListener('mouseleave', ()=>{
	normalState = new Main (buttonColor.value,settingsWidth.value,settingsHeight.value,textFontSizeInput.value,textColorInput.value,btnShadows,normalScale)
	normalState.btnWidth(settingsWidth.value)
	normalState.btnHeight(settingsHeight.value)
	normalState.btnColor(buttonColor.value)
	normalState.btnFontSize(textFontSizeInput.value)
	normalState.btnTextColor(textColorInput.value)
	normalState.btnShadow(btnShadows)
	normalState.btnScale(normalScale)
})