<template>
    <div class="container">
      <h1>Gestão de Utilizadores</h1>
  
      <!-- Formulário de Registo -->
      <form @submit.prevent="submitForm" class="user-form">
        <div class="form-group" v-for="(field, key) in formFields" :key="key">
          <label :for="key">{{ field.label }}</label>
          <input
            v-if="field.type !== 'file'"
            :id="key"
            v-model="form[key]"
            :placeholder="field.label"
          />
          <input
            v-else
            type="file"
            :id="key"
            @change="handleFileUpload($event, key)"
          />
        </div>
  
        <input type="password" v-model="form.password" placeholder="Password" />
        <input type="password" v-model="form.password_confirmation" placeholder="Confirmar Password" />
  
        <button type="submit">Registrar</button>
      </form>
  
      <!-- Tabela de Utilizadores -->
      <table class="user-table">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Email</th>
            <th>Contacto</th>
            <th>Documento</th>
            <th>Endereço</th>
            <th>Experiência</th>
            <th>Aprovado</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.contact }}</td>
            <td>{{ user.document }}</td>
            <td>{{ user.address }}</td>
            <td>{{ user.expirience }}</td>
            <td>{{ user.aprooved ? 'Sim' : 'Não' }}</td>
            <td>
              <button @click="toggleAproval(user)">{{ user.aprooved ? 'Desativar' : 'Ativar' }}</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UserManagement',
    data() {
      return {
        form: {
          name: '',
          email: '',
          contact: '',
          document: '',
          address: '',
          expirience: '',
          photo: null,
          password: '',
          password_confirmation: '',
        },
        formFields: {
          name: { label: 'Nome' },
          email: { label: 'Email' },
          contact: { label: 'Contacto' },
          document: { label: 'Documento' },
          address: { label: 'Endereço' },
          expirience: { label: 'Experiência' },
          photo: { label: 'Foto', type: 'file' },
        },
        users: [],
      };
    },
    methods: {
      async fetchUsers() {
        const res = await fetch('/api/users');
        const data = await res.json();
        this.users = data.users;
      },
      handleFileUpload(event, key) {
        this.form[key] = event.target.files[0];
      },
      async submitForm() {
        const formData = new FormData();
        for (const key in this.form) {
          formData.append(key, this.form[key]);
        }
  
        await fetch('/api/users/register', {
          method: 'POST',
          body: formData,
        });
        this.fetchUsers();
      },
      async toggleAproval(user) {
        await fetch(`/api/users/${user.aprooved ? 'disable' : 'activate'}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ user_id: user.id }),
        });
        this.fetchUsers();
      },
    },
    mounted() {
      this.fetchUsers();
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
    margin: auto;
    padding: 20px;
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .user-form {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    justify-content: center;
    margin-bottom: 40px;
  }
  
  .user-form .form-group {
    flex: 1 1 45%;
    display: flex;
    flex-direction: column;
  }
  
  .user-form input,
  .user-form button {
    padding: 10px;
    font-size: 14px;
  }
  
  .user-table {
    width: 100%;
    border-collapse: collapse;
    margin: auto;
  }
  
  .user-table th,
  .user-table td {
    padding: 10px;
    border: 1px solid #ccc;
    text-align: center;
  }
  
  .user-table th {
    background-color: #f2f2f2;
  }
  
  button {
    cursor: pointer;
    background-color: #007BFF;
    border: none;
    color: white;
    padding: 8px 16px;
    border-radius: 5px;
  }
  
  button:hover {
    background-color: #0056b3;
  }
  </style>
