const imgs = document.getElementById('imgs')
const leftBtn = document.getElementById('left')
const rightBtn = document.getElementById('right')

const img = document.querySelectorAll('#imgs img')

let whatPlace = document.getElementById('place').textContent

let idx = 0

let interval = setInterval(run, 2000)

function run() {
  idx++
  changeImage()
  
  if(img[idx].className == "alaska") {
   document.getElementById("place").textContent = "Alaska"
  } else if(img[idx].className == "bermuda") {
    document.getElementById("place").textContent = "Bermuda"
  } else {
    document.getElementById("place").textContent = "Somewhere-On-Earth"
  }
  
}

function changeImage() {
  if(idx > img.length - 1) {
    idx = 0
  } else if(idx < 0) {
    idx = img.length - 1
  } 

  imgs.style.transform = `translateX(${-idx * 500}px)`

}

function resetInterval() {
  clearInterval(interval)
  interval = setInterval(run, 2000)
}

rightBtn.addEventListener('click', () => {
  idx++
  changeImage()
  resetInterval()
})

leftBtn.addEventListener('click', () => {
  idx--
  changeImage()
  resetInterval()
})