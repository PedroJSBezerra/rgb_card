document.querySelectorAll('.card').forEach(card => {
  let shine = document.createElement('span')
  card.onmousemove = (e) => {
    let x = e.offsetX               //mouse position on node
    let y = e.offsetY               //mouse position on node
    let width = card.offsetWidth    //node width
    let height = card.offsetHeight  //node height
    let middleX = x-width/2
    let middleY = y-height/2
    let degX = middleX / 16 | 0
    let degY = middleY / 32 | 0
    card.appendChild(shine)
    
    shine.style = `
      display: block;
      width: 100%;
      height: 100%;
      top: 0;
      position: absolute;
      border-radius: 1rem;
      background: linear-gradient(${degX*10}deg, rgba(0,0,0,.0), rgba(255,255,255,.3));
    `
    card.style.transform = `
      rotateY(${degX*-1}deg)
      rotateX(${degY}deg)
      scale(1.05)
    `
    card.onmouseleave = (e) => {
      card.removeChild(shine)
      card.style.transform = "none"
    }
  }
})