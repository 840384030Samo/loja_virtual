
<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <img src="/logo.png" alt="Logo" />
        <h1>Minha Plataforma</h1>
      </div>
      <nav class="nav-links">
        <a href="#home">Início</a>
        <a href="#sobre">Sobre</a>
        <a href="#servicos">Serviços</a>
        <a href="#contacto">Contacto</a>
      </nav>
      <div class="header-actions">
        <button >Login</button>
        <button class="primary" >Registre-se</button>
      </div>
    </div>
  </header>
  <router-view/>
  
    <footer class="footer">
      <div class="footer-container">
        <!-- Informações de contato -->
        <div class="footer-section">
          <h3>Contacte-nos</h3>
          <p><strong>Telefone:</strong> +258 84 123 4567</p>
          <p><strong>Email:</strong> contacto@exemplo.com</p>
          <p><strong>Endereço:</strong> Avenida 25 de Setembro, Maputo, Moçambique</p>
        </div>
  
        <!-- Redes sociais -->
        <div class="footer-section">
          <h3>Siga-nos</h3>
          <div class="social-icons">
            <a href="https://facebook.com" target="_blank" class="social-icon">
              <i class="fab fa-facebook"></i>
            </a>
            <a href="https://instagram.com" target="_blank" class="social-icon">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="https://twitter.com" target="_blank" class="social-icon">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" class="social-icon">
              <i class="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
  
        <!-- Links úteis -->
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

  <script setup lang="ts">
 
  </script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
/* ------------------- */
.footer {
    background-color: #2c3e50;
    color: white;
    padding: 20px 0;
    text-align: center;
  }
  
  .footer-container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 1200px;
    margin: auto;
  }
  
  .footer-section {
    flex: 1;
    min-width: 250px;
    padding: 10px;
  }
  
  .footer-section h3 {
    margin-bottom: 15px;
    font-size: 1.5rem;
    color: #4CAF50;
  }
  
  .footer-section p,
  .footer-section ul {
    font-size: 0.9rem;
    line-height: 1.6;
  }
  
  .footer-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-section ul li a {
    color: white;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .footer-section ul li a:hover {
    color: #4CAF50;
  }
  
  .social-icons {
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 10px;
  }
  
  .social-icon {
    color: white;
    font-size: 1.5rem;
    transition: color 0.3s;
  }
  
  .social-icon:hover {
    color: #4CAF50;
  }
  
  .footer-bottom {
    margin-top: 20px;
    font-size: 0.8rem;
    border-top: 1px solid #4CAF50;
    padding-top: 10px;
  }
  
  .header {
  background-color: #333;
  color: white;
  padding: 15px 20px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo img {
  height: 40px;
}

.logo h1 {
  font-size: 1.5rem;
  margin: 0;
}

.nav-links {
  display: flex;
  gap: 20px;
}

.nav-links a {
  text-decoration: none;
  color: white;
  font-size: 1rem;
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
</style>
