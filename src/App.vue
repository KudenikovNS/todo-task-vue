<template>
  <div class="app">
    <h1>Task Manager</h1>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
.app {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f7f7f7;
  height: 100vh;
  font-family: Arial, sans-serif;
  color: #333333;
}

.app h1 {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>
