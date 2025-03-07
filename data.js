export async function getData() {
    const url = `https://apidata.mos.ru/v1/datasets/2985/features?api_key=${process.env.API_KEY_DATA}`

    const response = await fetch(url)
    const json = await response.json()

    return json.features
}

export function formatData(data) {
    const localBase = []

    data.forEach(item => {
        localBase.push({
            name: item.properties.attributes.Name,
            address: item.properties.attributes.Address,
            coordinates: item.geometry.coordinates.reverse()
        })
    })

    return localBase
}

