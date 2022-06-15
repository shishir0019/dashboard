let API_URL = 'https://apitest.iqfulfillment.com/v1/test';

export const GetDashboardAPI = () => {
    const data = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'POST, GET'
        }
    }
    const URL = API_URL + '/dashboard';
    return fetch(URL, data).then((res) => {
        if (res.ok) return res.json()
        else throw new Error('Error')
    });
}
export const SearchAPI = (body) => {
    const data = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Credentials': true,
            'Access-Control-Allow-Methods': 'POST, GET'
        },
        body: JSON.stringify(body)
    }
    const URL = API_URL + '/search';
    return fetch(URL, data).then((res) => {
        if (res.ok) return res.json()
        else throw new Error('Error')
    });
}