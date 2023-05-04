var search = document.querySelector('.search')
search.addEventListener('input', (e)=> {
    console.log(e.target.value)
})
var submit = document.querySelector('.submit')
submit.addEventListener('submit', (e)=> {
    e.preventDefault()
    console.log('prevenDefault...')
    console.log(e)
    console.log(e.target.method)
    console.log(e.target.action)
})