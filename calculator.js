const numberButton = document.querySelectorAll('[data-number]')
const operationButton = document.querySelectorAll('[data-operation]')
const equalButton = document.querySelectorAll('[data-equal]')
const allClearButton=document.querySelectorAll('[data-all-clear]')
const previousOperandTextElement = document.querySelectorAll('[data-previous-operand]')
const presentOperandTextElement = document.querySelectorAll('[data-present-operand]')


 


class calculator {
    constructor(presentOperandTextElement,presentOperandTextElement)
    this.prevousOperandTextElement =previousOperandTextElement
    this.presentOperandTextElement = presentOperandTextElement
    this.clear()
}

clear(){
    this.presentOperand  = ''
    this.previousOperand =''
    this.operation = undefined

}

delete_function(){

}
chooseOperayion(operation)
{

}
appendNumber()
{
    this.presentOperand = number

}
compute(){

}
updateDisplay(){
    this.presentOperandTextElement.innerText = this.presentOperand

}








const calculator =new calculator(presentOperandTextElement,presentOperandTextElement)
numberButton.forEach(button =>{
    button.addEventListener('click',() => {
        calculator.appendNumber(button.innerText)
        calculator.updateDisplay()
    })
    
})





