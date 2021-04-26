import axios from "axios";

export default {
    getAllUsers: function() {
        return axios.get("/api/users");
    },
    getUsers: function(q) {
        return axios.get("/api/users/query", { params: { q: "firstname:" + q } });
    },
    signUp: function(info) {
        return axios.post("/api/users", info);
    },
    getUser: function() {
        return axios.get("/api/users/id");
    },
    login: function(info) {
        return axios.post("/api/users/login", info);
    }
};