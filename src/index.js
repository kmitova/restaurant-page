// import _ from 'lodash';
import "./style.css";

// function component() {
//   const element = document.createElement("div");

  
//   element.innerHTML = _.join(["Hello", "webpack"], " ");
//   element.classList.add("hello");

//   return element;
// }

// document.body.appendChild(component());
const content = document.getElementById('content')
console.log('now in the index.js file')
const topSection = document.createElement('div')
const heading = document.createElement('h1')
heading.textContent = 'Restaurant Name'
topSection.appendChild(heading)
content.appendChild(topSection)
const listItems = document.createElement('ul')
content.appendChild(listItems)
const home = document.createElement('li')
home.textContent = 'Home'
listItems.appendChild(home)
const menu = document.createElement("li");
menu.textContent = "Menu";
listItems.appendChild(menu);
const contact = document.createElement("li");
contact.textContent = "Contact";
listItems.appendChild(contact);

