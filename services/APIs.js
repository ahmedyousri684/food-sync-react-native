const baseUrl = "http://foodsync-001-site1.itempurl.com";


export default {
    GET_ALL_PRODUCTS: `${baseUrl}/api/Products/GetPrducts`,
    GET_RAW_MATERIALS: `${baseUrl}/api/RawMaterial/GetRMsByBrandId`,
    LOGIN: `${baseUrl}/api/User/Login`,
    ADD_DAILY_OPERATION: `${baseUrl}/api/DailyOperations/AddDailyOperations`,
    GET_DAILY_OPERATIONS: `${baseUrl}/api/DailyOperations/GetDailyOperation`,
    ADD_SALE: `${baseUrl}/api/Sales/AddSale`,
    GET_SALES: `${baseUrl}/api/Sales/GetSales`,
    ADD_OPENINGCLOSING: `${baseUrl}/api/OpenningClosing/AddOpenningClosing`,
    GET_OPENINGCLOSING: `${baseUrl}/api/OpenningClosing/GetOpenningClosing`,
    CALCULATE_CONSUMBTION: `${baseUrl}/api/Consumbtion/CalculateConsumbtion`,
};
