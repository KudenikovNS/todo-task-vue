const generateId = () => {
  return Math.random().toString(36);
};

const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};

const loadTasksFromLocalStorage = () => {
  const tasks = localStorage.getItem("tasks");
  return tasks ? JSON.parse(tasks) : [];
};

const state = {
  tasks: loadTasksFromLocalStorage(),
};

const mutations = {
  addTask(state, task) {
    state.tasks.push(task);
    saveTasksToLocalStorage(state.tasks);
  },
  deleteTask(state, taskId) {
    state.tasks = state.tasks.filter((task) => task.id !== taskId);
    saveTasksToLocalStorage(state.tasks);
  },
  updateTask(state, updatedTask) {
    const taskIndex = state.tasks.findIndex(
      (task) => task.id === updatedTask.id
    );
    if (taskIndex !== -1) {
      state.tasks.splice(taskIndex, 1, updatedTask);
      saveTasksToLocalStorage(state.tasks);
    }
  },
};

const actions = {
  addTask({ commit }, task) {
    const newTask = { id: generateId(), ...task };
    commit("addTask", newTask);
  },
  deleteTask({ commit }, taskId) {
    commit("deleteTask", taskId);
  },
  updateTask({ commit }, updatedTask) {
    commit("updateTask", updatedTask);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
