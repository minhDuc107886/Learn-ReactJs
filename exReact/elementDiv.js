const root = document.getElementById("root")

// Dom
const divDom = document.createElement('div')
divDom.className = 'post-item'

const h2Dom = document.createElement('h2')
const pDom = document.createElement('p')

h2Dom.title = "h2-tag"

h2Dom.innerText = "Tự học React"
pDom.innerText = "ReactJs từ cơ bản đến nâng cao"

divDom.appendChild(h2Dom)
divDom.appendChild(pDom)

root.appendChild(divDom)

// React

const divReact = React.createElement(
    'div',
    {className: 'post-item',},
    React.createElement('h2',{title: 'h2-tag-react',},'Tự học React'),
    React.createElement('p',null,'React từ cơ bản đến nâng cao')
)
console.log(divReact)
