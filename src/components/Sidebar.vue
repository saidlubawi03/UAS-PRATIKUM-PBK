<template>
  <div :class="['sidebar', { 'sidebar-hidden': isHidden }]">
    <div class="sidebar-header">
      <i class="fas fa-book-open logo"></i>
      <h1 class="app-name">Project/Tugas</h1>
    </div>
    <div class="sidebar-profile">
      <img src="../images/profile.jpg" alt="Profile Picture" class="profile-pic">
      <h2 class="profile-name">Said Lubawi</h2>
    </div>
    <hr class="divider">
    <div class="sidebar-content">
      <ul>
        <li class="task-item"><a href="https://tugas-pbk-cv.vercel.app/" target="_blank"><i class="fas fa-tasks"></i> Tugas 1</a></li>
        <li class="task-item"><a href="https://tugas2-pbk.vercel.app/" target="_blank"><i class="fas fa-tasks"></i> Tugas 2</a></li>
        <li class="task-item"><a href="https://tugas3-pbk.vercel.app/" target="_blank"><i class="fas fa-tasks"></i> Tugas 3</a></li>
        <li class="task-item"><a href="https://tugas4pbk-nu.vercel.app/" target="_blank"><i class="fas fa-tasks"></i> Tugas 4</a></li>
        <li class="task-item"><a href="https://tugas5pbk-rosy.vercel.app/" target="_blank"><i class="fas fa-tasks"></i> Tugas 5</a></li>
        <li class="task-item"><a href="https://tugas5pbk-rosy.vercel.app/" target="_blank"><i class="fas fa-tasks"></i> Tugas 6</a></li>
      </ul>
      <hr class="divider">
      <div class="sidebar-social">
        <a href="#"><i class="fab fa-facebook-f"></i></a>
        <a href="#"><i class="fab fa-twitter"></i></a>
        <a href="#"><i class="fab fa-linkedin-in"></i></a>
        <a href="#"><i class="fab fa-instagram"></i></a>
      </div>
    </div>
    <div class="sidebar-footer">
      <p>Contact us: info@example.com</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    isHidden: {
      type: Boolean,
      default: true
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

.sidebar {
  width: 280px;
  background: linear-gradient(to bottom, #4a00e0, #8e2de2); /* Gradient dari ungu tua ke ungu muda */
  padding: 1.5rem 1rem;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, width 0.3s ease;
  z-index: 1000;
  border-top-right-radius: 30px;
  border-bottom-right-radius: 30px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
}

.sidebar.sidebar-hidden {
  transform: translateX(-110%);
}

.sidebar-header {
  display: flex;
  align-items: center;
  padding: 1rem;
  text-align: center;
  margin-bottom: 1.5rem;
}

.logo {
  font-size: 2.5rem;
  color: #fff;
  margin-right: 1rem;
}

.app-name {
  font-size: 1.8rem;
  color: #fff;
}

.sidebar-profile {
  text-align: center;
  margin-bottom: 1.5rem;
}

.profile-pic {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
  border: 3px solid #fff;
}

.profile-name {
  font-size: 1.4rem;
  color: #fff;
}

.divider {
  border: none;
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  margin: 1.5rem 0;
}

.sidebar-content {
  flex: 1;
  overflow-y: auto;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.sidebar ul li {
  margin: 0.8rem 0;
}

.sidebar ul li a {
  color: #fff;
  text-decoration: none;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  padding: 1rem;
  transition: background-color 0.3s ease, color 0.3s ease;
  border-radius: 15px;
}

.sidebar ul li a i {
  margin-right: 0.8rem;
  font-size: 1.5rem;
}

.sidebar ul li a:hover {
  background-color: rgba(255, 255, 255, 0.3);
  color: #f5eded;
}

.task-item a {
  background: linear-gradient(to right, #ffc371, #ff5f6d);
}

.task-item a:hover {
  opacity: 0.8;
  background: #f3f3f3;
}

.sidebar-social {
  text-align: center;
  margin-bottom: 1.5rem;
}

.sidebar-social a {
  color: #fff;
  font-size: 1.5rem;
  margin: 0 0.8rem;
  transition: color 0.3s ease;
}

.sidebar-social a:hover {
  color: #ddd;
}

.sidebar-footer {
  text-align: center;
  color: #fff;
  font-size: 1rem;
  padding: 0 1rem;
}
</style>
