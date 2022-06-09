import API from "./APIs";

export async function CalculateConsumbtion(consumbtionModel) {
    console.log("consumbtionModel", consumbtionModel)
    try {
        const response = await fetch(`${API.CALCULATE_CONSUMBTION}`, {
            method: "POST",
            body: JSON.stringify(consumbtionModel),
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