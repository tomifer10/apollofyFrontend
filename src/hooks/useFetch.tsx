

export const useFetchDBJSON = async () => {

    const response = await fetch('src/data/db.json')
    const data = await response.json()

    console.log(data)

    return data
}
