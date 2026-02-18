function getAllFamiliasProfesionales() {
  return fetch('https://mocki.io/v1/bc9f800e-f8a5-45c2-a900-68f0ef38e108')
    .then((response) => response.json())
    .catch(() => ({ data: [] }));
}

export default getAllFamiliasProfesionales;
