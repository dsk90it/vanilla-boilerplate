import heading from './heading'
import subtext from './subtext'

const headingEl = document.createElement('h1')
const subtextEl = document.createElement('p')

headingEl.innerHTML = heading
subtextEl.innerHTML = subtext

document.querySelector('#app').append(headingEl)
document.querySelector('#app').append(subtextEl)

console.log('index.js')
