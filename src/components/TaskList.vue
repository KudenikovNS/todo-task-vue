<template>
  <div class="task-list">
    <h2>Task List</h2>
    <form @submit.prevent="addTask" class="task-form">
      <input
        type="text"
        v-model="newTask"
        placeholder="Enter task title"
        required
        class="input-field"
      />
      <button class="button" type="submit">Add Task</button>
    </form>
    <ul>
      <li class="task-item" v-for="task in tasks" :key="task.id">
        {{ task.title }}
        <div class="task-buttons">
          <button @click="deleteTask(task.id)" class="delete-button">
            Delete
          </button>
          <button @click="editTask(task.id)" class="edit-button">Edit</button>
        </div>
      </li>
    </ul>
    <router-link :to="{ name: 'Home' }" class="back-link"
      >Go back to Home</router-link
    >
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  name: "TaskList",
  setup() {
    const store = useStore();
    const router = useRouter();
    const newTask = ref("");

    const addTask = () => {
      const task = { title: newTask.value };
      store.dispatch("tasks/addTask", task);
      newTask.value = "";
    };

    const deleteTask = (taskId) => {
      store.dispatch("tasks/deleteTask", taskId);
    };

    const editTask = (taskId) => {
      router.push({ name: "TaskEdit", params: { taskId } });
    };

    const tasks = computed(() => store.state.tasks.tasks);

    return {
      newTask,
      tasks,
      addTask,
      deleteTask,
      editTask,
    };
  },
};
</script>

<style>
.task-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-list h2 {
  font-size: 20px;
  margin-bottom: 20px;
}

.task-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px;
}

.input-field {
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 300px;
}

.button {
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #45a049;
}

.task-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
  border-bottom: 1px solid #e0e0e0;
  width: 300px;
}

.task-buttons {
  display: flex;
  gap: 8px;
}

.delete-button,
.edit-button {
  background-color: #f44336;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 4px 8px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.delete-button:hover,
.edit-button:hover {
  background-color: #d32f2f;
}

.back-link {
  margin-top: 20px;
  color: #555555;
  text-decoration: none;
  font-size: 14px;
}

.back-link:hover {
  text-decoration: underline;
}
</style>
