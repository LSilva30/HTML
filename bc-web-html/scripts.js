function handleSubmit(event) {
  event.preventDefault();
  console.log('Submitted Form');
  const form = document.querySelector("form");
  const newCustomer = {
      firstName: form.elements.firstName.value,
      lastName: form.elements.lastName.value,
      email: form.elements.email.value
    }
  console.log(newCustomer)
  fetch('https://ls-pet-boutique.web.app/customers', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(newCustomer),
  })
    .then(() => {
      form.innerHTML = '<h3>thanks</h3>'
      getCustomers()
    })
    .catch(err => {
      form.innerHTML = '<h3>Error sending customer</h3>'
    })
}
function handleNameChange() {
  console.log('Name Changed', event.target.value)
}

function getCustomers() {
fetch('https://ls-pet-boutique.web.app/customers')
.then(response => response.json())
.then(data => {
  const custDiv = document.getElementById('customers')
  const custArray = data.map(customer => {
    return `<article>
      <h3>${customer.firstName} ${customer.lastName}</h3>
      <p>${customer.email}</p>
    </article>`
  })
  custDiv.innerHTML = custArray.join('')
})
.catch(err => console.log(err))
}

getCustomers()