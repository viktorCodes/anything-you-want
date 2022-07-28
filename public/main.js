

const update =document.querySelector('#update-button')

update.addEventListener('click', _ => {
    //SEND PUT REQUEST

    fetch('/quotes', {
        method: 'put',
    headers: {'Content-Type': 'application/json'},
    })
})