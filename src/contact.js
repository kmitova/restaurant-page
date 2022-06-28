function renderContact() {
  const contactContent = document.createElement("div");

  const contactsTitle = document.createElement('h2')
  contactContent.append(contactsTitle)
  contactsTitle.textContent = 'Contact Us'

  const contactsDetails = document.createElement('div')
  contactContent.appendChild(contactsDetails)

  const phone = document.createElement('p')
  phone.textContent = '555-444-333'

  const email = document.createElement('p')
  email.textContent = 'customersupport@katiscafe.com'

  contactsDetails.append(phone, email)
  contactContent.classList.add('container')
  return contactContent;
}

export { renderContact };
