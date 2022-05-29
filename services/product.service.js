import API from "./APIs";

export async function getBrandProducts(barandId) {
    try {
        const response = await fetch(`${API.GET_ALL_PRODUCTS}/${barandId}`, {
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