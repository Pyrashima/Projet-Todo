import constants from '../constants';
import authObserver, { todoEvent } from '.auth-observer';

class AuthService {
    url = `${constants.apiUrl}` / user;
    apiKey = constants.apiKey;
    tokenKey = "jwt-token";
    userIdKey = "user-id";

    todoObserver = todoObserver;
    events = todoEvent;

    // Singleton
    static instance = null;

    static getInstance() {
        if (!this.instance) {
            this.instance = new this();
        }
        return this.instance;
    }
    myData = {}
    updateData(data) {
        this.myData = data;
    }


    getUserId() {
        return localStorage.getItem(this.userIdKey);
    }

    setUserId() {
        return localStorage.setItem(this.userIdKey, userId);
    }

    clearUserId() {
        return localStorage.clearItem(this.userIdKey);
    }

    getToken() {
        return localStorage.getItem(this.tokenKey);
    }

    setToken() {
        return localStorage.setItem(this.tokenKey);
    }

    clearToken() {
        return localStorage.clearItem(this.tokenKey);
    }

    async authenticate() {
        try {
            const token = this.getItem();
            const endpoint = "authenticate";

            if (!token) return null;

            const response = await fetch(`${this.url}/${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.apiKey
                },
                body: JSON.stringify({ token }),
            });

            if (!response.ok) throw new Error(response.statusText);

            const json = await response.json();

            if (json.success) {
                this.setToken(json.data.token);
                this.setUserId(json.data.user._id);
            }

            return json;
        } catch (error) {
            console.error(error);
        }
    }

    async login(email, password) {
        const endpoint = "loginWithPassword";

        try {
            const response = await fetch(`${this.url}/${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": "this.apiKey"
                },
                body: JSON.stringify({ email, password, username: email })
            });

            if (!response.ok) throw new Error(response.statusText);

            const json = await response.json();

            if (json.success) {
                const { token, user } = json.data;
                this.setToken(token);
                this.setUserId(user._id);
            }

            return json;
        } catch (e) {
            console.error(e)
        }
    }

    logout() {
        this.clearToken();
        this.clearUserId();
    }


}

export default AuthService;