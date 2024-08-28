import axios from 'axios';

const API_URL = 'http://localhost:3000';

class AuthService {

    name = undefined;
    userId = undefined;

    async isAuthenticated() {
        try {
            const response = await axios.get(`${API_URL}/api/user/check-auth`, {
                withCredentials: true,
            });
            return response.data.valid;
        } catch (error) {
            return false;
        }
    }

    setName(name) {
        this.name = name;
    }

    setUserId(userId) {
        this.userId = userId;
    }

    getName() {
        return this.name;
    }

    getUserID() {
        return this.userId;
    }
}

export default new AuthService();
