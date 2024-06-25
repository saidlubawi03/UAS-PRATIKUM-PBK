<template>
  <nav class="navbar">
    <div class="navbar-title">
      Weather Widget
    </div>
    <div class="navbar-links">
      <button @click="toggleSidebar">Pilih Tugas</button>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar');
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background: linear-gradient(to bottom, #4a00e0, #8e2de2); /* Gradient biru */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  color: #fff;
  font-family: 'Roboto', sans-serif;
  position: fixed;
  width: 100%;
  z-index: 1000;
}

.navbar-title {
  font-size: 1.8rem;
  font-weight: bold;
  letter-spacing: 1px;
}

.navbar-links button {
  background: linear-gradient(to right, #ffc371, #ff5f6d);
  border: none;
  color: white;
  padding: 0.7rem 1.2rem;
  cursor: pointer;
  font-size: 1rem;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.navbar-links button:hover {
  background: #ff5f6d;
  transform: scale(1.05);
  box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
}
</style>
