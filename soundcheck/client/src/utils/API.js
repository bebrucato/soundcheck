import axios from "axios";

export default {
    getUsers: function(q) {
        return axios.get("/api/users", { params: { q: "firstname:" + q } });
    },
    
};