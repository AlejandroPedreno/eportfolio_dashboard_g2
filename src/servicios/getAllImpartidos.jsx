function getAllImpartidos() {
    return fetch('https://mocki.io/v1/0652283b-5d7f-4897-99de-3ad45066e9ae')
        .then((response) => { 
            return (response.json())

})
.catch ((error) => {
    return ([])
})      
}

export default getAllImpartidos;