
function getAllRoles() {
    return fetch('https://mocki.io/v1/c2823740-9060-40fd-aa2c-65736902ac73')
        .then((response) => { 
            return (response.json())

})
.catch ((error) => {
    return ([])
})      
}

export default getAllRoles;