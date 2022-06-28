import Picture from './background.jpeg';

function renderHome() {
  // image
  const image = new Image();
  image.src = Picture;

  const homeContent = document.createElement('div')
  const title = document.createElement('h2')
  homeContent.appendChild(title)
  title.textContent = 'About Us'
  const description = document.createElement('div')
  homeContent.appendChild(description)
  description.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas laoreet, ipsum sed tincidunt ullamcorper, justo quam imperdiet nibh, ac porta metus mauris nec orci. Sed faucibus accumsan ante, ut ultrices nisi. Donec suscipit malesuada consequat. Vivamus id vulputate nunc, in vestibulum ipsum. Curabitur eget malesuada mauris. Cras semper mollis urna, nec egestas purus sollicitudin ac. Curabitur sem lectus, dignissim sit amet purus non, congue gravida mauris. In nec purus mattis, facilisis orci non, iaculis quam. Nullam elementum nunc nec massa interdum vestibulum. Curabitur iaculis, libero ac fermentum blandit, dolor erat suscipit dolor, id iaculis ligula sapien vitae arcu. Ut mauris orci, faucibus a vehicula scelerisque, facilisis vel dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nam orci eros, bibendum sit amet ex vel, ultricies ullamcorper mauris. Mauris sed sapien consectetur, iaculis nibh non, scelerisque lorem. Nullam eget feugiat urna. Nunc quis pellentesque enim.";
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
  // homeContent.appendChild(image)
  homeContent.classList.add('container')
  return homeContent
}

export { renderHome }