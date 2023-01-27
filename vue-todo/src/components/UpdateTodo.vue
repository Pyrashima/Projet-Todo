<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import AuthService from "../services/auth-service";
import TodosService from "../services/todos-service";

const authService = new AuthService();
const todosService = new TodosService();
const todo = ref(null);
const title = ref("");
const content = ref("");
const timelimit = ref(null);
const doneAt = ref(null);

const getTodo = async () => {
  todo.value = await todosService.getTodo(props.todoId)
  title.value = await todo.value.title;
  content.value = await todo.value.content;
  timelimit.value = await todo.value.timelimit;
  doneAt.value = await todo.value.doneAt;
};

const updateTodo = async () => {
  const todo = {
       title: title.value,
       content: content.value,
       done: done.value,
       user: user.value,
       doneAt: doneAt.value, 
    };

    const updateTodo = await todosService.updateTodo(todo);
}
onMounted(getTodo);
</script>

<template>
  <template>
    <div class="container-fluid">
        <form class="container w-100">
            <div class="form-control">
                <label for="title">Titre</label>
                <input type="text" id="title" v-model="title" placeholder="Titre" />
            </div>

            <div class="form-control">
                <label for="donneAt">Date limite</label>
                <input type="datetime-local" id="doneAt" v-model="timelimit" placeholder="Date limite" />
            </div>

            <div class="form-control">
                <label for="content">Description</label>
                <input class="w-100" type="text" id="content" v-model="content" placeholder="Description" />
            </div>

            <button
                type="button"
                class="btn btn-primary mt-a w-100"
                @click="updateTodo"
            >
                Mise à jour Todo
            </button>
        </form>
    </div>
</template>
</template>
