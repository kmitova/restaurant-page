function renderHome() {
  const homeContent = document.createElement('div')
  const title = document.createElement('h2')
  homeContent.appendChild(title)
  title.textContent = 'About Us'
  const description = document.createElement('div')
  homeContent.appendChild(description)
  description.textContent = 'here is  random description of the restaurant'
  const hours = document.createElement('div')
  homeContent.appendChild(hours)
  const hoursTitle = document.createElement('h3')
  hours.appendChild(hoursTitle)
  hoursTitle.textContent = 'Hours'
  const timetable = document.createElement('div')
  hours.appendChild(timetable)
  timetable.innerHTML = '<p>Monday - Friday: 7am - 5pm</p><p>Saturday - Sunday: 7:30am - 4pm</p>'
  const location = document.createElement('div')
  homeContent.appendChild(location)
  const locationTitle = document.createElement('h3')
  location.appendChild(locationTitle)
  locationTitle.textContent = 'Location'
  const address = document.createElement('p')
  location.appendChild(address)
  address.textContent = "13 Av. du Président Wilson, 75116 Paris, France";
  return homeContent
}

export { renderHome }