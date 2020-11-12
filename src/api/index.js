import axios from "axios";

const URL_API = "http://localhost:3001";

// call Api
class AP {
    async GET(link, config = {}) {
        let pet;
        if (link[0].length > 1) {
            pet = [];
            link.forEach(link => {
                pet.push(axios.get(`${URL_API}/${link}`));
            });
        } else {
            pet = await axios.get(`${URL_API}${link}`, config)
                .then((resp) => {
                    return resp;
                });
        }
        return pet;
    }
    async POST(link, datos, config = {}) {
        return await axios.post(`${URL_API}${link}`, datos, config)
            .then((resp) => {
                return resp;
            });
    }
    async PUT(link, datos, config = {}) {
        return await axios.put(`${URL_API}${link}`, datos, config)
            .then((resp) => {
                return resp;
            });
    }
    async PATCH(link, datos, config = {}) {
        return await axios.patch(`${URL_API}${link}`, datos, config)
            .then((resp) => {
                return resp;
            });
    }
    async DEL(link, datos, config = {}) {
        return await axios.delete(`${URL_API}${link}`, datos, config)
            .then((resp) => {
                return resp;
            });
    }
}

const API = new AP();

export {
    API,
    URL_API
}