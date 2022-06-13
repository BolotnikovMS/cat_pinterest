window.addEventListener('DOMContentLoaded', () => {
  const cardsItem = document.querySelectorAll('.cards__item')

  cardsItem.forEach(card => {
    const heart = card.getElementsByTagName('i')[0]

    card.addEventListener('mouseover', () => {
      card.classList.add('card__transform')
      heart.classList.remove('hide')
    })

    card.addEventListener('mouseout', () => {
      card.classList.remove('card__transform')
      heart.classList.add('hide')
    })
  })
})