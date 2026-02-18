function getAllTareas() {
    return fetch('https://mocki.io/v1/ad7fa5ae-0a97-4b71-9b30-d2fcf4567033')
        .then((response) => { 
              console.log("Tareas disponibles para RA:", response.lista);
            return (response.json())

})
.catch ((error) => {
    return ([])
})      
}

export default getAllTareas;