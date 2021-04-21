import axios from "axios";

export default {
    getAllUsers: function() {
        return axios.get("/api/users");
    },
    getUsers: function(q) {
        return axios.get("/api/users/query", { params: { q: "firstname:" + q } });
    },
    
};