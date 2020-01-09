let nurseryFlower = []

export const useNurseryFlower = () => nurseryFlower.slice()

export const getNurseryFlower = () => fetch("http://localhost:3000/nurseryFlower")
    .then(res => res.json())
    .then(parsedNurseryFlower => nurseryFlower = parsedNurseryFlower)


