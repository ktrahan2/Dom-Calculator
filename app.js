const $screen = document.querySelector('#screen')
const $clearButton = document.querySelector('#clear')
const $equals = document.querySelector('#equals')
const $buttonsContainer = document.querySelector('#buttons-container')

const operatorArray = ["x", "-", "+", "÷", "*", "/"]

function clearScreen() {
    $screen.innerHTML = ""
}

function failedFormat() {
    if (operatorArray.includes(findFirstIndex()) || operatorArray.includes(findLastIndex()) && operatorArray.includes(event.target.textContent)) {
        $screen.textContent = "Error"
    }
}

function findLastIndex() {
    let array = $screen.textContent.split("")
    let finalIndex = array[array.length - 1]
    return finalIndex
}   
function findFirstIndex() {
    let array = $screen.textContent.split("")
    let firstIndex = array[0]
    return firstIndex
}

function evaluateScreen() {
    if ($screen.textContent.includes('/0')) {
        $screen.textContent = "Error"
    }
    else {
        // $screen.textContent = eval($screen.textContent)
        let array = $screen.textContent.match(/(\d+)([-|*|+|/])(\d+)/)
        if (array[2] == '+') {
            $screen.textContent = array[1] + array[3]
        } 
        else if (array[2]  == '-') {
            $screen.textContent = array[1] - array[3]
        } 
        else if (array[2] == '/') {
            $screen.textContent = array[1] / array[3]
        } 
        else if (array[2] == '*') {
            $screen.textContent = array[1] * array[3]
        } 
    }
}
failedFormat()
$buttonsContainer.addEventListener('click', event => {
    if (event.target.tagName === 'SPAN') {
        failedFormat()    
        if ($screen.textContent.includes('Error')) {
            if (event.target == $clearButton) {
                clearScreen()
            }   
        }
        else {
            if (event.target == $clearButton) {
                clearScreen()
            }
            else if (event.target == $equals) {
                evaluateScreen()
            }
            else if (event.target.textContent == '÷') {
                $screen.append('/')
            }
            else if (event.target.textContent == 'x') {
                $screen.append('*')
            }
            else {
                $screen.append(event.target.textContent)
            }
        }
    }
})




