document.addEventListener('DOMContentLoaded', ()=>{
  const redBtn = document.getElementById('redBtn')
  const yellowBtn = document.getElementById('yellowBtn')
  const blueBtn = document.getElementById('blueBtn')
  const greenBtn = document.getElementById('greenBtn')
  const modal = document.getElementById('modal')
  const close = document.getElementById('closeBtn')
  const gif = document.getElementById('powerGif')
  const creditEl = document.getElementById('credit')
  const feedbackEl = document.getElementById('feedback')
  const targetIconEl = document.getElementById('targetIcon')
  const targetPromptEl = document.getElementById('targetPrompt')
  const colorButtons = document.querySelectorAll('.fan-buttons .big-btn')

  const buttonLabels = { red: 'Red', yellow: 'Yellow', blue: 'Blue', green: 'Green' }

  const gallery = {
    red: {
      icon: '🍎',
      prompt: 'Find the red apple.',
      image: 'assets/red.svg',
      credit: 'Original child-friendly red power-up artwork created for this app',
      success: 'You found the red apple!'
    },
    yellow: {
      icon: '☀️',
      prompt: 'Find the yellow sun.',
      image: 'assets/yellow.svg',
      credit: 'Original child-friendly yellow power-up artwork created for this app',
      success: 'You found the yellow sun!'
    },
    blue: {
      icon: '🌊',
      prompt: 'Find the blue wave.',
      image: 'assets/blue.svg',
      credit: 'Original child-friendly blue power-up artwork created for this app',
      success: 'You found the blue wave!'
    },
    green: {
      icon: '🍃',
      prompt: 'Find the green leaf.',
      image: 'assets/green.svg',
      credit: 'Original child-friendly green power-up artwork created for this app',
      success: 'You found the green leaf!'
    }
  }

  let currentTarget = null

  function chooseTarget(){
    const choices = Object.keys(gallery)
    currentTarget = choices[Math.floor(Math.random() * choices.length)]
    const item = gallery[currentTarget]
    targetIconEl.textContent = item.icon
    targetPromptEl.textContent = item.prompt
    feedbackEl.textContent = 'Pick a color and see what happens!'
    colorButtons.forEach(btn => {
      const color = btn.id.replace('Btn', '')
      btn.textContent = buttonLabels[color] || btn.textContent
    })
  }

  function openModal(){
    modal.classList.remove('hidden')
  }

  function closeModal(){
    modal.classList.add('hidden')
    chooseTarget()
  }

  function showForColor(color){
    const item = gallery[color]
    if(!item) return

    gif.style.display = ''
    gif.src = item.image
    creditEl.innerHTML = item.credit ? `<span>${item.credit}</span>` : ''
    gif.onerror = ()=>{
      const colorMap = {red:'#ff6b6b', yellow:'#ffd54f', blue:'#6ec6ff', green:'#80e27e'}
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'><rect width='100%' height='100%' fill='${colorMap[color]||'#eee'}'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-size='28' fill='#222'>Image unavailable</text></svg>`
      gif.src = 'data:image/svg+xml;utf8,' + encodeURIComponent(svg)
    }

    const isCorrect = color === currentTarget
    feedbackEl.textContent = isCorrect ? `${item.success} Be fearless!` : `Try again! Be fearless!`
    colorButtons.forEach(btn => btn.textContent = 'Be fearless!')
    openModal()
  }

  redBtn && redBtn.addEventListener('click', ()=> showForColor('red'))
  yellowBtn && yellowBtn.addEventListener('click', ()=> showForColor('yellow'))
  blueBtn && blueBtn.addEventListener('click', ()=> showForColor('blue'))
  greenBtn && greenBtn.addEventListener('click', ()=> showForColor('green'))

  close.addEventListener('click', closeModal)
  modal.addEventListener('click', (e)=>{ if(e.target===modal) closeModal() })

  chooseTarget()
})
