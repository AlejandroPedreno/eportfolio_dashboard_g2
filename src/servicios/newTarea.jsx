const newTarea = (nuevaTarea) => {
  return fetch('https://mocki.io/v1/ad7fa5ae-0a97-4b71-9b30-d2fcf4567033', {
    method: 'POST',
    body: JSON.stringify(nuevaTarea),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
      Accept: 'application/json',
    },
  })
    .then((response) => response.json())
    .catch(() => ({ conexion: 'Error no se pudo registrar la tarea' }));
};

export default newTarea;