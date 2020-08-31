import axios from "axios";
import Endpoints from "../constants/Endpoints";


class UsersAPI {
    getUsers = () => axios.get(Endpoints.GET_USERS, {baseURL: 'http://localhost:3001'});
}

export default new UsersAPI();