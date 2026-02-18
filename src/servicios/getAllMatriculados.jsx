function getAllMatriculados() {
    return fetch('https://mocki.io/v1/1783a462-0e51-48e5-b4d0-4c0ccb2d95d4')
        .then((response) => { 
            return (response.json())

})
.catch ((error) => {
    return ([])
})      
}

export default getAllMatriculados;