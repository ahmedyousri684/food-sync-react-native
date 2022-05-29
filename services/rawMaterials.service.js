import API from "./APIs";

export async function getRawMaterials(brandId) {
    try {
        const response = await fetch(`${API.GET_RAW_MATERIALS}/3`, {
            method: "get",
            headers: {
                "Access-Control-Allow-Origin": "*",
                "Content-type": "application/json"

            },
        });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log(error, 'error')
        return error;
    }
}