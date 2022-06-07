import API from "./APIs";

export async function AddOpeningClosing(openCloseModel) {
    console.log("openCloseModel", openCloseModel)
    try {
        const response = await fetch(`${API.ADD_OPENINGCLOSING}`, {
            method: "POST",
            body: JSON.stringify(openCloseModel),
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

export async function GetOpenningClosing(openCloseModel) {
    console.log(openCloseModel, "openingClosingReached")
    try {
        const response = await fetch(`${API.GET_OPENINGCLOSING}`, {
            method: "POST",
            body: JSON.stringify(openCloseModel),
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