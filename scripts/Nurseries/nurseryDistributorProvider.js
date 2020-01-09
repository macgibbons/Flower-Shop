let nurseryDistributor = []

export const useNurseryDistributor = () => nurseryDistributor.slice()

export const getNurseryDistributor = () => fetch("http://localhost:3000/nurseryDistributor")
    .then(res => res.json())
    .then(parsedNurseryDistributor => nurseryDistributor = parsedNurseryDistributor)


