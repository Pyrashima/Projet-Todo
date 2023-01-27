import constants from '../constants';
import AuthService from './auth-service';

class TodosService {
    url = constants.apiUrl;
    apiKey = constants.apiKey;

    // Pour tous les Todos
    async getTodos() {
        const endpoint = 'todos/all';
        const id = this.authService.getUserId();

        if (!id) throw new Error("User ID is not found");

        try {
            const response = await fetch(`${this.url}/${endpoint}/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.apiKey,
                }
            });

            if (!response.ok) {
                throw new Error(`Could not fetch ${this.endpoint}, received ${response.status}`);
            }

            const json = await response.json();

            if (json.success) {
                return json.data;
            } else {
                throw new Error(`Could not fetch ${this.endpoint}, received ${json.message}`);
            }
        } catch (error) {
            console.error(error);

            return [];
        }
    }
    // Todo par id
    async getTodo(id) {
        const endpoint = "todos";

        try {
            const response = await fetch(`${this.url}/${endpoint}/${id}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.apiKey,
                }
            });

            if (!response.ok) {
                throw new Error(`Could not fetch ${this.endpoint}, received ${response.status}`);
            }

            const json = await response.json();

            return json;

        } catch (error) {
            console.error(error);
        }
    }

    // Création de la Todo
    async createTodo(todo) {
        const endpoint = "todos";

        try {
            const response = await fetch(`${this.url}/${endpoint}`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.apiKey,
                },
                body: JSON.stringify({ input: todo })
            });

            if (!response.ok) {
                throw new Error(`Could not fetch ${this.endpoint}, received ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    // Modification de la Todo
    async updateTodo(id, todo) {
        const endpoint = "todos";

        try {
            const response = await fetch(`${this.url}/${id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": this.apiKey,
                },
                body: JSON.stringify({ _id: id, input: todo })
            });

            if (!response.ok) {
                throw new Error(`Could not fetch ${this.endpoint}, received ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }

    // Supprimer une Todo
    async deleteTodo(id) {
        const endpoint = "todos";

        try {
            const response = await fetch(`${this.url}${id}`, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json",
                    "Authorization": this.apiKey,
                },
            });

            if (!response.ok) {
                throw new Error(`Could not fetch ${this.endpoint}, received ${response.status}`);
            }

            return await response.json();
        } catch (error) {
            console.error(error);
        }
    }


}

export default TodosService;