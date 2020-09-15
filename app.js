const $screen = document.querySelector('#screen')
const $clearButton = document.querySelector('#clear')
const $equals = document.querySelector('#equals')
const $buttonsContainer = document.querySelector('#buttons-container')

const operatorArray = ["x", "-", "+", "÷", "*", "/"]

function clearScreen() {
    $screen.innerHTML = ""
}

function failedFormat() {
    if (operatorArray.includes(findLastIndex()) && operatorArray.includes(event.target.textContent)) {
        clearScreen()
        $screen.textContent = "Error"
    }
}

function findLastIndex() {
    let array = $screen.textContent.split("")
    let finalIndex = array[array.length - 1]
    return finalIndex
}   

function evaluateScreen() {
    if ($screen.textContent.includes('/0')) {
        $screen.textContent = "Error"
    }
    else {
        $screen.textContent = eval($screen.textContent)
        // console.log($screen.textContent.split("")), returns array, but
        //then need to look for index thats an operator???
        
    }
}

$buttonsContainer.addEventListener('click', event => {
    if ($screen.textContent.includes('Error')) {
        if (event.target == $clearButton) {
            clearScreen()
        }   
    }
    else {
        failedFormat()    
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
})


