<template>
  <div id="app">
    <Navbar @toggle-sidebar="toggleSidebar" />
    <div class="container">
      <Sidebar :isHidden="isSidebarHidden" />
      <div class="content">
        <router-view />
        <WeatherWidget v-if="selectedTask === 'task1'" />
      </div>
    </div>
    <footer class="footer">
      <p>&copy; Said Lubawi.</p>
    </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'; 
import Sidebar from './components/Sidebar.vue'; 

export default {
  name: 'App',

  components: {
    Navbar,
    Sidebar,
  },

  data() {
    return {
      isSidebarHidden: true,
      selectedTask: null
    };
  },

  methods: {
    toggleSidebar() {
      this.isSidebarHidden = !this.isSidebarHidden;
    }
  }
};
</script>

<style scoped>
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden; 
}


.container {
  width: 100%; 
  height: 100%; 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}


.footer {
  background: linear-gradient(to bottom, #4a00e0, #8e2de2);
  color: #fff;
  text-align: center;
  padding: 1rem;
  width: 100%;
  position: fixed;
  bottom: 0;
}
</style>


