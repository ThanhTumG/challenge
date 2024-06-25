const BASE_URL = "https://api.thecatapi.com/v1"
const apikey = process.env.REACT_APP_API_CAT;


export const fetchListCat = async (page) => {
    try {
        const response = await fetch(

            `${BASE_URL}/breeds?limit=10&page=${page}`
        );
        const json = await response.json();
        json.forEach(cat => cat.name = cat.name.toLowerCase());
        return json
    } catch (error) {
        console.error(error);
    }
}

export const getMostSearchList = async () => {
    try {
        const response = await fetch(

            `${BASE_URL}/votes?limit=10&order=DESC`
            , {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': `${apikey}`
                },
            });
        if (!response.ok) {
            const errorText = await response.text();
            console.error('Error:', errorText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const json = await response.json();
        return json
    } catch (error) {
        console.error(error);
    }
}

export const getBreedImage = async (id) => {
    try {
        const response = await fetch(
            `${BASE_URL}/images/search?limit=8&breed_ids=${id}`
        );
        const json = await response.json();
        return json
    } catch (error) {
        console.error(error);
    }
}

export const increaseVoteBreed = async (id) => {
    try {
        const response = await fetch(

            `${BASE_URL}/votes`
            , {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': `${apikey}`
                },
                body: JSON.stringify({
                    "image_id": `${id}`,
                    "sub_id": "tung",
                    "value": 1
                })
            });
        if (!response.ok) {
            // Read the response as text
            const errorText = await response.text();
            console.error('Error:', errorText);
            throw new Error(`HTTP error! status: ${response.status}`);
        }
    } catch (error) {
        console.error(error);
    }
}