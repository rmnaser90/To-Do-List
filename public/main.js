const update = document.querySelector('#update-button')
const qoutesContainer = document.getElementById("qoutesContainer")


const renderQoustes = function(data){
    for (let i = 0; i < data.length; i++) {
        const name = document.createElement('h1')
        name.innerText=data[i].name
        const qoute = document.createElement('h2')
        qoute.innerText=data[i].qoute
        qoutesContainer.append(name,qoute)
    }
}

$.get('/quotes').then(data=>{
    renderQoustes(data)
})


update.addEventListener('click', async () => {
   const qoutes = await $.get('/quotes')
   
renderQoustes(qoutes)

})




//https://zellwk.com/blog/crud-express-mongodb/