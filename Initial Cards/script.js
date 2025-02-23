const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        remouveAciveClasses()
        panel.classList.add('active')
    })
})

function remouveAciveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}