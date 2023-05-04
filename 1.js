var parent = document.querySelector('.parent')
var children = document.querySelector('.children')


parent.addEventListener('mouseenter', e => {
    e.stopPropagation()
    console.log('parent')
})

children.addEventListener('mouseenter', e => {
    e.stopPropagation()
    console.log('children')
})

