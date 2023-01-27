<script setup>
import { ref, onMounted, watch } from "vue";
import TodosService from "../services/todos-service";
import Modal from "./Modal.vue";
import UpdateTodo from "./UpdateTodo.vue";


const todosService = new TodosService();

const todo = ref(null);
const todos = ref([]);
const isCreateModalOpen = ref(false);

const getTodos = async () => (todos.value = await todosService.getTodos());

const onTodoClick = (t) => {
    todo.value = t;
};

const onModalClose = () => {
    todo.value = null;
};

const onToggleCreateModal = () => {
    isCreateModalOpen.value = !isCreateModalOpen.value;
};

onMounted(getTodos);
</script>

<template>
    <div class="container">
        <button type="buttons" class="btn btn-success" @click="onToggleCreateModal">Create</button>
        <Modal :isOpen="isCreateModalOpen" :toggleModal="onToggleCreateModal">
            <CreateTodo />
        </Modal>
    </div>

    <div class="card">
        <div class="card-body">
            <button type="button" class="btn-danger m-2" >Tâches dépassées</button>
            <button type="button" class="btn-danger m-2" >Tâches sans limites</button>
            <button type="button" class="btn-danger m-2" >Tâches encore dans les temps</button>
            <button type="button" class="btn-danger m-2" >Tâches terminées dans les temps</button>
            <button type="button" class="btn-danger m-2" >Tâches terminées hors des temps</button>
        </div>
    </div>

    <div class="list-group">
        <div @click="onTodoClick(todo)" v-for="todos in todos" class="todos">
            {{ todo.title }}
        </div>
    </div>

    <Modal :toggleModal="onModalClose" :isOpen="!!todo">
    <UpdateTodo :todoId=todo._id />
  </Modal>
    
</template>