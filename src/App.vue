<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <!-- <img src="/logo.png" alt="Logo" /> -->
        <h2>Space Liners</h2>
      </div>
    
      <div class="header-actions">
        <button class="login" @click="$router.push('/homeLogin')">
          <i class="fas fa-sign-in-alt"></i> Login
        </button>
        <button class="primary" @click="$router.push('/cadastro')">
          <i class="fas fa-user-plus"></i> Registre-se
        </button>
      </div>
    </div>
  </header>
  <nav class="subheader-nav">
      <button class="menu-toggle left" @click="toggleMenu" aria-label="Abrir menu">
        <i :class="menuOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
      </button>
      <div :class="['subheader-container', { open: menuOpen }]" ref="navLinks">
        <router-link to="/" class="subheader-link" exact @click="closeMenu">Início</router-link>
        <router-link to="/destinos" class="nav-item" @click="closeMenu">Destinos</router-link>
        <router-link to="/reservas" class="subheader-link" @click="closeMenu">Reservas</router-link>
        <router-link to="/contactos" class="subheader-link" @click="closeMenu">Contactos</router-link>
        <router-link to="/layoutSobre" class="subheader-link" @click="closeMenu">Sobre Nós</router-link>
      </div>
  </nav>

  
  <router-view />
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>Contacte-nos</h3>
        <p><strong>Telefone:</strong> +258 84 123 4567</p>
        <p><strong>Email:</strong> contacto@exemplo.com</p>
        <p><strong>Endereço:</strong> Avenida 25 de Setembro, Maputo, Moçambique</p>
      </div>

      <div class="footer-section">
        <h3>Siga-nos</h3>
        <div class="social-icons">
          <a href="https://facebook.com" target="_blank" class="social-icon">
            <i class="fab fa-facebook"><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/facebook-new.png" alt="facebook-new"/></i>
          </a>
          <a href="https://instagram.com" target="_blank" class="social-icon">
            <i class="fab fa-instagram"><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/instagram-new--v1.png" alt="instagram-new--v1"/></i>
          </a>
          <a href="https://twitter.com" target="_blank" class="social-icon">
            <i class="fab fa-twitter"><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/twitterx--v1.png" alt="twitterx--v1"/></i>
          </a>
          <a href="https://linkedin.com" target="_blank" class="social-icon">
            <i class="fab fa-linkedin"><img width="50" height="50" src="https://img.icons8.com/ios/50/FFFFFF/linkedin.png" alt="linkedin"/></i>
          </a>
        </div>
      </div>

      <div class="footer-section">
        <h3>Links úteis</h3>
        <ul>
          <li><a href="#">Sobre nós</a></li>
          <li><a href="#">Termos e condições</a></li>
          <li><a href="#">Política de privacidade</a></li>
          <li><a href="#">Ajuda</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Nome da Empresa. Todos os direitos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import LoginPage from './components/loginPage.vue';
import HomeLogin from './views/homeLogin.vue';

const menuOpen = ref(false);
const navLinks = ref(null);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}
function closeMenu() {
  menuOpen.value = false;
}

// Fecha o menu ao clicar fora do menu ou em qualquer lugar da tela
function handleClickOutside(event) {
  const nav = navLinks.value;
  if (menuOpen.value && nav && !nav.contains(event.target) && !event.target.closest('.menu-toggle')) {
    closeMenu();
  }
}
onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});
onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style>
/* Base styles  do cabelalho*/
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.header {
  background-color: brown;
  color: white;
  padding: 6px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  position: fixed;
  z-index: 1100;
  height: 70px; /* altura fixa para header */
  box-sizing: border-box;
}

.container {
  width: 100%;
  max-width: 1200px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
}


.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img {
  height: 40px;
}

.nav-links {
  display: flex;
  gap: 20px;
  position: fixed;
  right: 20%;
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: red;
}

.header-actions {
  display: flex;
  gap: 10px;
  position: fixed;
  right: 2%;
}

button {
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.login{
  background-color: red;
  color: white;
  font-size: 11px;
}
button.primary {
  background-color:orange;
  color: white;
  font-size: 11px;
}

button:hover {
  background-color:red;
}

/* Hamburger menu */
.menu-toggle {
  display: flex; /* Exibe o ícone do menu hambúrguer em telas pequenas */
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  z-index: 1200;
}

.menu-toggle .bar {
  width: 30px;
  height: 3px;
  background-color: white;
  transition: transform 0.3s;
}

.menu-toggle .bar.open:nth-child(1) {
  transform: rotate(45deg) translate(5px, 5px);
}

.menu-toggle .bar.open:nth-child(2) {
  opacity: 0;
}

.menu-toggle .bar.open:nth-child(3) {
  transform: rotate(-45deg) translate(5px, -5px);
}

/* Subheader styles */
.subheader-nav {
  width: 100%;
  background: #f4e8e8;
  border-bottom: 2px solid #e0e0e0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.03);
  display: flex;
  align-items: center;
  justify-content: center;
  position: static;
  z-index: 1000px;
  height: 60px;
  margin-top: 70px;
}

.subheader-container {
  display: flex;
  gap: 20px;
  max-width: 1300px;
  margin: 0 auto;
  padding: 8px 0;
  width: 100%;
  justify-content: center;
  transition: max-height 0.3s, opacity 0.3s;
}
.menu-toggle.left {
  display: none;
  background: none;
  border: none;
  font-size: 1.7rem;
  color: #b22222;
  margin-right: 10px;
  cursor: pointer;
}
@media (max-width: 900px) {
  .subheader-nav {
    flex-direction: row;
    justify-content: flex-start;
    padding: 0;
    height: 50px;
    position: relative;
    z-index: 1001;
    display: flex !important;
    visibility: visible !important;
    opacity: 1 !important;
  }
  .menu-toggle.left {
    display: block;
    position: relative;
    z-index: 1002;
    margin-left: 10px;
  }
  .subheader-container {
    flex-direction: column;
    align-items: flex-start;
    gap: 0;
    max-height: 0;
    overflow: hidden;
    opacity: 0;
    background: #fafafa;
    width: 100vw;
    position: absolute;
    left: 0;
    top: 100%;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    z-index: 1001;
    padding: 0;
    transition: max-height 0.3s, opacity 0.3s;
    display: flex !important;
    visibility: visible !important;
  }
  .subheader-container.open {
    max-height: 300px;
    opacity: 1;
    padding: 10px 0;
    overflow: visible;
    display: flex !important;
    visibility: visible !important;
  }
  .subheader-link {
    width: 100%;
    padding: 12px 20px;
    font-size: 1.1rem;
    border-radius: 0;
    border-bottom: 1px solid #eee;
    text-align: left;
    display: block;
    background: none;
  }
}
@media (max-width: 500px) {
  .subheader-link {
    font-size: 1rem;
    padding: 10px 12px;
  }
}
@media (min-width: 901px) {
  .menu-toggle.left {
    display: none !important;
  }
  .subheader-container {
    flex-direction: row;
    align-items: center;
    gap: 20px;
    max-height: none !important;
    opacity: 1 !important;
    overflow: visible !important;
    position: static !important;
    background: transparent !important;
    width: 100%;
    padding: 8px 0;
  }
  .subheader-link {
    display: inline-block;
    border-bottom: none;
    padding: 8px 16px;
    font-size: 1rem;
    background: none;
  }
}
/* Footer styles */
.footer {
  background-color: #2c3e50;
  color: white;
  padding: 20px 0;
  text-align: center;
}

.footer-container {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap; /* Makes sections stackable */
  gap: 20px;
  max-width: 1200px;
  margin: auto;
}

.footer-section {
  flex: 1;
  min-width: 250px; /* Ensures proper resizing */
  padding: 10px;
}

.footer-section h3 {
  color: #4caf50;
}
.footer-section ul{
  list-style: none;
}
.footer-section ul a{
  color:white;
  text-decoration: none;
}

.social-icons {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-icon {
  color: white;
  font-size: 1.5rem;
  transition: color 0.3s;
}

.social-icon:hover {
  color: #4caf50;
}

.footer-bottom {
  margin-top: 20px;
  border-top: 1px solid yellow;
  padding-top: 10px;
  font-size: 0.8rem;
}

/* Adiciona espaçamento para o conteúdo não ficar escondido atrás do header fixo */
.main-content, router-view {
  display: block;
  padding-top: 70px; /* Espaço para o header fixo */
}
</style>
