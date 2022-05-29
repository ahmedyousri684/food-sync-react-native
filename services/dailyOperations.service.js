import API from "./APIs";

export async function AddDailyOperation(dailyModel) {
    try {
        const response = await fetch(`${API.ADD_DAILY_OPERATION}`, {
            method: "POST",
            body: JSON.stringify(dailyModel),
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

export async function GetDailyOperations(dailyModel) {
    try {
        const response = await fetch(`${API.GET_DAILY_OPERATIONS}`, {
            method: "POST",
            body: JSON.stringify(dailyModel),
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