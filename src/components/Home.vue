<template>
  <div class="home">
    <h2>Home Page</h2>
    <router-link :to="{ name: 'TaskList' }">Go to Task List</router-link>
  </div>
</template>

<style>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ffe082;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.home h2 {
  font-size: 20px;
  margin-bottom: 20px;
}

.button {
  background-color: #4caf50;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 12px;
  text-decoration: none;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button:hover {
  background-color: #45a049;
}
</style>
