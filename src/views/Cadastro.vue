// eslint-disable-next-line vue/multi-word-component-names
<template>
  <div class="cadastro-container">
    <form class="cadastro-card" @submit.prevent="register">
      <img src="/logo.png" alt="Logo" class="cadastro-logo" />
      <h2 class="cadastro-title">Criar Conta</h2>
      <div class="cadastro-group">
        <label for="nome">Nome</label>
        <div class="input-icon-wrapper">
          <span class="input-icon-bg"><i class="fas fa-user input-icon"></i></span>
          <input id="nome" type="text" v-model="nome" required placeholder="Nome" />
        </div>
      </div>
      <div class="cadastro-group">
        <label for="apelido">Apelido</label>
        <div class="input-icon-wrapper">
          <span class="input-icon-bg"><i class="fas fa-user-tag input-icon"></i></span>
          <input id="apelido" type="text" v-model="apelido" required placeholder="Apelido" />
        </div>
      </div>
      <div class="cadastro-group">
        <label for="email">Email</label>
        <div class="input-icon-wrapper">
          <span class="input-icon-bg"><i class="fas fa-envelope input-icon"></i></span>
          <input id="email" type="email" v-model="email" required placeholder="Email" />
        </div>
      </div>
      <div class="cadastro-group">
        <label for="senha">Senha</label>
        <div class="input-icon-wrapper">
          <span class="input-icon-bg"><i class="fas fa-lock input-icon"></i></span>
          <input id="senha" type="password" v-model="senha" required placeholder="Senha" />
        </div>
      </div>
      <div class="cadastro-group">
        <label for="confirmarSenha">Confirmar Senha</label>
        <div class="input-icon-wrapper">
          <span class="input-icon-bg"><i class="fas fa-lock input-icon"></i></span>
          <input id="confirmarSenha" type="password" v-model="confirmarSenha" required placeholder="Confirmar Senha" />
        </div>
      </div>
      <button class="cadastro-btn" type="submit"><i class="fas fa-user-plus"></i> Cadastrar</button>
      <div class="cadastro-footer">
        <router-link to="/homeLogin"><i class="fas fa-sign-in-alt"></i> Já tem conta? Entrar</router-link>
      </div>
    </form>
  </div>
</template>

<script setup>
// eslint-disable-next-line vue/multi-word-component-names
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import '@fortawesome/fontawesome-free/css/all.css';

const nome = ref('');
const apelido = ref('');
const email = ref('');
const senha = ref('');
const confirmarSenha = ref('');
const router = useRouter();

function register() {
  if (!nome.value || !apelido.value || !email.value || !senha.value || !confirmarSenha.value) {
    alert('Preencha todos os campos!');
    return;
  }
  if (senha.value !== confirmarSenha.value) {
    alert('As senhas não coincidem!');
    return;
  }
  // Aqui você pode integrar com sua API de cadastro
  alert('Cadastro realizado com sucesso!');
  router.push('/homeLogin');
}
</script>

<style scoped>
.cadastro-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(120deg, #f8fafc 0%, #ffe0b2 100%);
}
.cadastro-card {
  background: #fff;
  border-radius: 14px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 32px 22px 24px 22px;
  max-width: 360px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
}
.cadastro-logo {
  width: 54px;
  margin-bottom: 6px;
}
.cadastro-title {
  margin: 0 0 8px 0;
  color: #e6007e;
  font-size: 1.3rem;
  font-weight: 700;
  letter-spacing: 1px;
}
.cadastro-group {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
}
.cadastro-group label {
  font-weight: 600;
  margin-bottom: 4px;
  color: #333;
  font-size: 0.98rem;
}
.input-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}
.input-icon-bg {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 2.2em;
  pointer-events: none;
}
.input-icon {
  color: #e6007e;
  font-size: 1.1em;
  margin-left: 0.2em;
  margin-right: 0.2em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.input-icon-wrapper input {
  padding-left: 2.4em;
  width: 100%;
  background: #fafafa;
  border: 1px solid #e0e0e0;
  border-radius: 7px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
  height: 44px;
  box-sizing: border-box;
}
.input-icon-wrapper input:focus {
  border: 1.5px solid #e6007e;
  background: #fff;
}
.cadastro-btn {
  width: 100%;
  padding: 11px;
  background: #e6007e;
  color: #fff;
  border: none;
  border-radius: 7px;
  font-size: 1.08rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 4px;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.cadastro-btn i {
  font-size: 1.1em;
  display: flex;
  align-items: center;
  justify-content: center;
}
.cadastro-btn:hover {
  background: #b8005c;
}
.cadastro-footer {
  margin-top: 8px;
  text-align: center;
}
.cadastro-footer a {
  color: #e6007e;
  text-decoration: none;
  font-weight: 600;
  font-size: 0.98rem;
  transition: color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
}
.cadastro-footer a:hover {
  color: #ffb300;
}
@media (max-width: 700px) {
  .cadastro-card {
    padding: 18px 4vw 14px 4vw;
    max-width: 98vw;
  }
  .cadastro-title {
    font-size: 1.05rem;
  }
}
@media (max-width: 400px) {
  .cadastro-card {
    padding: 10px 2vw 10px 2vw;
  }
  .cadastro-title {
    font-size: 0.95rem;
  }
}
</style>
