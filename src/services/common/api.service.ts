import queryString from "query-string";
import axios from "axios";

const http = axios.create();

const GetAll = (route: string, data: any) => {
    return http.get(`${route}?${queryString.stringify(data)}`)
        .then((res: any) => {
            return res.data;
        })
        .catch((error) => {
            HandleError(error);
        });
};

const Get = (route: string, id: any) => {
    return http.get(`{${route}/${id}`)
        .then((res: any) => {
            return res.data;
        })
        .catch((error) => {
            HandleError(error);
        });
};

const Create = (route: string, data: any) => {
    return http.post(route, data)
        .then((res: any) => {
            return res.data;
        })
        .catch((error) => {
            HandleError(error);
        });
};

const Update = (route: string, id: any, data: any) => {
    return http.put<any>(`${route}/${id}`, data)
        .then((res: any) => {
            return res.data;
        })
        .catch((error) => {
            HandleError(error);
        });
};

const Remove = (route: string, id: any) => {
    return http.delete<any>(`${route}/${id}`)
        .then((res: any) => {
            return res.data;
        })
        .catch((error) => {
            HandleError(error);
        });
};

// Handle API errors
const HandleError = (error: any) => {
    if (axios.isAxiosError(error)) {
        console.log('Error message: ', error.message);
        return error.message;
    } else {
        console.log('uUnexpected error: ', error);
        return 'An unexpected error occurred';
    }
};

const ApiService = {
    http,
    GetAll,
    Get,
    Create,
    Update,
    Remove
};

export default ApiService;