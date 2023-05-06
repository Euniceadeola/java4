const button = document.getElementById ('btn')

button .addEventListener ('click', (e) =>{
    e.preventDefault()
    const name = document.getElementById('name').value
    const age = document.getElementById('age').value
    const country = document.getElementById('country').value

   //const value = 'Hello ${name}, welcome to our amazing, ${country} '
   const value = 'hello' + ' ' + name + ' ' + 'welcome to our amazing ' +' '+ country
   
    //console.log(value)
    console.log(value)
    
    

})