<template>
  <div class="task-edit">
    <h2>Edit Task</h2>
    <form @submit.prevent="updateTask">
      <input
        class="input-field"
        type="text"
        v-model="updatedTask.title"
        required
      />
      <button class="button" type="submit">Save</button>
    </form>
    <router-link :to="{ name: 'TaskList' }" class="back-link"
      >Go back to Task List</router-link
    >
  </div>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "TaskEdit",
  setup() {
    const store = useStore();
    const router = useRouter();
    const route = useRoute();
    const taskId = route.params.taskId;
    const updatedTask = ref({ title: "" });

    const updateTask = () => {
      const task = { id: taskId, title: updatedTask.value.title };
      store.dispatch("tasks/updateTask", task);
      router.push({ name: "TaskList" });
    };

    const task = computed(() =>
      store.state.tasks.tasks.find((task) => task.id === taskId)
    );
    updatedTask.value.title = task.value ? task.value.title : "";

    return {
      updatedTask,
      updateTask,
    };
  },
};
</script>

<style>
.task-edit {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffffff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.task-edit h2 {
  font-size: 20px;
  margin-bottom: 20px;
}

.input-field {
  padding: 8px;
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  margin-bottom: 10px;
  width: 300px;
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
