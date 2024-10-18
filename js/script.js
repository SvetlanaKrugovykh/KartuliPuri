document.addEventListener("DOMContentLoaded", function () {
  const foodGallery = document.getElementById('food-gallery')
  const drinksGallery = document.getElementById('drinks-gallery')
  const langButtons = document.querySelectorAll('.lang-btn')

  function loadImages(lang) {
    const foodImages = data[lang].food
    const drinksImages = data[lang].drinks

    // Clear galleries
    foodGallery.innerHTML = ''
    drinksGallery.innerHTML = ''

    // Load food images
    foodImages.forEach((desc, index) => {
      const img = document.createElement('img')
      img.src = `images/food/img${index + 1}.png`
      img.alt = desc
      foodGallery.appendChild(img)
    })

    // Load drinks images
    drinksImages.forEach((desc, index) => {
      const img = document.createElement('img')
      img.src = `images/drinks/img${index + 1}.png`
      img.alt = desc
      drinksGallery.appendChild(img)
    })
  }

  // Set default language (Polish)
  loadImages('pl')

  // Language buttons event listeners
  langButtons.forEach(button => {
    button.addEventListener('click', () => {
      const selectedLang = button.getAttribute('data-lang')
      loadImages(selectedLang)
    })
  })
})
