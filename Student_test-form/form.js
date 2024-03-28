//Write your student id, firstname, and lastname in a single line comment before starting your program
//students who do not put this comment will get 50% taken off their score.
//ID:65130500015       Name:Chanapon Auafaur
 
function init() {
 //insert your code here
    const bodyElement = document.querySelector('body')
    const newBt = document.createElement('button')
    newBt.setAttribute('id', 'newBt')
    newBt.textContent = 'showFrom'
    newBt.addEventListener('click', () => {
      showForm()
    })

    bodyElement.appendChild(newBt)
}

function showForm() {
//insert your code here
    newBt.remove()
    const divInput = document.createElement('div')
    divInput.setAttribute('id','divInput')

    const divTextArea = document.createElement('div')
    divTextArea.setAttribute('id','divTextArea')

    const bodyElement = document.querySelector('body')

    const textBoxElement = document.createElement('input')
    textBoxElement.setAttribute('id','textInput')

    const textTeraElement = document.createElement('input')
    textTeraElement.setAttribute('id','textArea')
    // textTeraElement.setAttributeNS('id','textArea')
    bodyElement.appendChild(divInput)
    bodyElement.appendChild(divTextArea)
    
    divInput.appendChild(textBoxElement)
    divTextArea.appendChild(textTeraElement)

    const newQbtn = document.createElement('button')
  newQbtn.setAttribute('id', 'display')
  newQbtn.textContent = 'display'
  newQbtn.addEventListener('click', () => {
    display()
  })
    bodyElement.appendChild(newQbtn)

    const ClearQbtn = document.createElement('button')
  ClearQbtn.setAttribute('id', 'clearB')
  ClearQbtn.textContent = 'Clear Quiz'
  ClearQbtn.addEventListener('click', () => {
    clear()
  })
    bodyElement.appendChild(ClearQbtn)
}

function display() {
//insert your code here
    const displaydivInputElement = document.getElementById('textInput')
    const displaydivTextAreaElement = document.getElementById('textArea')
    const bodyElement = document.querySelector('body')

    const divdisplayArea = document.createElement('div')
    divdisplayArea.setAttribute('id','displayArea')


    bodyElement.appendChild(divdisplayArea)

    const h1Element = document.createElement('h1')
    h1Element.textContent = displaydivInputElement.value
    const pElement = document.createElement('p')
    pElement.textContent = displaydivTextAreaElement.value

    divdisplayArea.appendChild(h1Element)
    divdisplayArea.appendChild(pElement)

    const add = document.getElementById('displayArea')
    add.appendChild(h1Element)
    add.appendChild(pElement)
    // const displaydivInputElement = document.getElementById('divInput')
    // const displaydivTextAreaElement = document.getElementById('divTextArea')





    // const displayAreaElement = document.getElementById('displayArea')
    // displayAreaElement.appendChild(h1Element)
    // displayAreaElement.appendChild(pElement)

    // divdisplayArea.appendChild(h1Element)
    // divdisplayArea.appendChild(pElement)
}

function clear() {
//insert your code here
const clearE = document.getElementById('displayArea')
clearE.textContent = ''
}

init();
