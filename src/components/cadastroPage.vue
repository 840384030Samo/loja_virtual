<template>
    <div class="register-container">
      <h2>Cadastro</h2>
      <form @submit.prevent="register">
        <div class="form-group">
          <label for="name">Nome</label>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Digite seu nome"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Digite seu email"
            required
          />
        </div>
        <div class="form-group">
          <label for="password">Senha</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Digite sua senha"
            required
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirmar Senha</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="Confirme sua senha"
            required
          />
        </div>
        <button type="submit">Cadastrar</button>
      </form>
      <p>
        Já tem uma conta? <router-link to="/login">Login</router-link>
      </p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        name: '',
        email: '',
        password: '',
        confirmPassword: ''
      }
    },
    methods: {
      register() {
        if (this.password !== this.confirmPassword) {
          alert('As senhas não coincidem')
          return
        }
        // Aqui você pode adicionar a lógica para registro, como uma requisição API.
        console.log('Cadastro realizado com:', this.name, this.email, this.password)
      }
    }
  }
  </script>
  
  <style scoped>
  .register-container {
    width: 300px;
    max-height: 1900px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  
  h2 {
    text-align: center;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  </style>
  