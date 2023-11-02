const init = () => {

  const inputForm = document.querySelector('form')
  inputForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const input = document.querySelector('#searchByID')

    fetch(`http://localhost:3000/movies/${input.value}`)
      .then((response) => response.json())
      .then((data) => {
        const title = document.querySelector('#movieDetails h4')
        const summary = document.querySelector('#movieDetails p')

        title.textContent = data.title
        summary.textContent = data.summary
      })
  })
  
}

document.addEventListener('DOMContentLoaded', init);