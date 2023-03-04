import todosObserver from "./todos-observer";

export const todoEvents = {
    onLogin: "onLogin",
    onLogout: "onLogout",
}

const todoObserver = new todosObserver(todoEvents);

export default todoObserver;