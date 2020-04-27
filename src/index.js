import message from './message'
import './css/style.css'

const paragraph = document.createElement('p')
paragraph.innerHTML = message

document.querySelector('#app').append(paragraph)
