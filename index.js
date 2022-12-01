const testamonialData = [
  {
    quote:
      '"I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future."',
    user: 'Tanya Sinclair',
    title: 'UX Engineer',
    photo: 'tanya',
  },
  {
    quote:
      '"If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer."',
    user: 'John Tarkpor',
    title: 'Junior Front-end Developer',
    photo: 'john',
  },
]

let currentTestamonial = 0

function displayQuoteData() {
  const quoteDivs = document.getElementsByClassName('quote')
  const nameDivs = document.getElementsByClassName('name')
  const titleDivs = document.getElementsByClassName('title')

  setTimeout(switchPhoto, 500)

  Array.from(quoteDivs).forEach((value) => (value.innerHTML = testamonialData[currentTestamonial].quote))
  Array.from(nameDivs).forEach((value) => (value.innerHTML = testamonialData[currentTestamonial].user))
  Array.from(titleDivs).forEach((value) => (value.innerHTML = testamonialData[currentTestamonial].title))
}

function switchPhoto() {
  const photoDivs = document.getElementsByClassName('profilePhoto')

  Array.from(photoDivs).forEach((value) => {
    value.src = `./images/image-${testamonialData[currentTestamonial].photo}.jpg`
  })
}

function nextTestamonial() {
  if (currentTestamonial === testamonialData.length - 1) {
    currentTestamonial = 0
  } else {
    currentTestamonial++
  }
  displayQuoteData()

  flipPhoto()
}

function priorTestamonial() {
  if (currentTestamonial === 0) {
    currentTestamonial = testamonialData.length - 1
  } else {
    currentTestamonial--
  }
  displayQuoteData()
  flipPhoto()
}

function flipPhoto() {
  const photoDivs = document.getElementsByClassName('profilePhoto')

  Array.from(photoDivs).forEach((value) => {
    value.classList.remove('animatePhoto')
    void value.offsetWidth
    value.classList.add('animatePhoto')
  })
}
