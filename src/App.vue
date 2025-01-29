<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="/logo.png" alt="Logo" />
        <h1>Minha Plataforma</h1>
      </div>
      <div class="menu-toggle" @click="toggleMenu">
        <!-- Ícone do menu hambúrguer -->
        <div :class="{ 'bar': true, 'open': isMenuOpen }"></div>
        <div :class="{ 'bar': true, 'open': isMenuOpen }"></div>
        <div :class="{ 'bar': true, 'open': isMenuOpen }"></div>
      </div>
      <nav :class="{ 'nav-links': true, 'active': isMenuOpen }">
        <a href="#home">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <div class="header-actions">
        <button>Login</button>
        <button class="primary">Registre-se</button>
      </div>
    </div>
  </header>

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
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style>
/* Base styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.header {
  background-color: #333;
  color: white;
  padding: 15px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

.container {
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
}

.nav-links a {
  color: white;
  text-decoration: none;
  transition: color 0.3s;
}

.nav-links a:hover {
  color: #42b983;
}

.header-actions {
  display: flex;
  gap: 10px;
}

button {
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button.primary {
  background-color: #42b983;
  color: white;
}

button:hover {
  background-color: #45a049;
}

/* Hamburger menu */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
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

/* Responsive styles */
@media (max-width: 768px) {
  .nav-links {
    display: none;
    flex-direction: column;
    gap: 15px;
    position: absolute;
    top: 60px;
    right: 20px;
    background-color: #333;
    border-radius: 5px;
    padding: 15px;
  }

  .nav-links.active {
    display: flex;
  }

  .menu-toggle {
    display: flex;
  }

  .header-actions {
    display: none;
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
  border-top: 1px solid #4caf50;
  padding-top: 10px;
  font-size: 0.8rem;
}

/* Responsive styles */
@media (max-width: 768px) {
  .nav-links {
    flex-direction: column; /* Stack links vertically */
    gap: 10px;
    align-items: center;
  }

  .header-actions {
    flex-direction: column; /* Stack buttons vertically */
    gap: 10px;
  }

  .footer-container {
    flex-direction: column; /* Stack footer sections */
    align-items: center;
  }
}

@media (max-width: 480px) {
  .logo h1 {
    font-size: 1.2rem; /* Adjust logo text size */
  }

  button {
    font-size: 0.9rem; /* Adjust button size */
  }

  .footer-section {
    min-width: 200px; /* Further reduce section size */
  }
}
</style>
