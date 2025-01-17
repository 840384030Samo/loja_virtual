<template>
    <div class="passenger-form-container">
      <h2>Preencha os dados dos Passageiros</h2>
  
      <!-- Número de passageiros -->
      <div class="passenger-count">
        <label for="passengerCount">Número de Passageiros: {{ passengers.length }}</label>
    </div>
    
    <!-- Lista de passageiros -->
    <form @submit.prevent="submitForm">
        <div v-for="(passenger, index) in passengers" :key="index" class="passenger-group">
            <div class="form-group">
                <label :for="'passengerName' + index">Nome do Passageiro {{ index + 1 }}</label>
                <input
                type="text"
                :id="'passengerName' + index"
                v-model="passenger.name"
                placeholder="Digite o nome do passageiro"
                required
                />
            </div>
            
            <div class="form-group">
                <label :for="'documentPhoto' + index" required>Foto do Documento (BI, passaporte, Carta de conducao)</label>
                <input
                type="file"
                :id="'documentPhoto' + index"
                accept="image/*"
                @change="handleFileUpload($event, index)"
                />
                <p v-if="passenger.documentPhoto">Foto selecionada: {{ passenger.documentPhoto.name }}</p>
            </div>
            <hr v-if="index !== passengers.length - 1" />
        </div>
        
        <!-- Botão de envio -->
        <div class="form-group">
            <button type="button" @click="addPassenger" style="margin: 10px; float: left;">+</button>
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        passengers: [], // Lista de passageiros
      };
    },
    methods: {
      // Função para adicionar um novo passageiro
      addPassenger() {
        this.passengers.push({
          name: '',
          documentPhoto: null,
        });
      },
  
      // Função para lidar com o upload do arquivo de documento
      handleFileUpload(event, index) {
        const file = event.target.files[0];
        if (file) {
          this.passengers[index].documentPhoto = file;
        }
      },
  
      // Função para enviar o formulário
      submitForm() {
        // Validação para garantir que todos os passageiros tenham um nome
        for (let passenger of this.passengers) {
          if (!passenger.name) {
            alert("Por favor, insira o nome de todos os passageiros.");
            return;
          }
        }
  
        // Criação de um objeto FormData para enviar os dados
        const formData = new FormData();
        this.passengers.forEach((passenger, index) => {
          formData.append(`passengerName${index}`, passenger.name);
          if (passenger.documentPhoto) {
            formData.append(`documentPhoto${index}`, passenger.documentPhoto);
          }
        });
  
        // Aqui você pode enviar os dados para um servidor ou processar conforme necessário
        console.log("Formulário enviado", formData);
        alert('Dados enviados com sucesso!');
        
        // Limpar os campos após o envio
        this.passengers = [];
      }
    }
  };
  </script>
  
  <style scoped>
  .passenger-form-container {
    width: 400px;
    margin: 50px auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 10px;
    background-color: #f9f9f9;
  }
  
  h2 {
    text-align: center;
  }
  
  .passenger-count {
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  button {
    background-color: #4CAF50;
    color: white;
    padding: 5px 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input[type="text"],
  input[type="file"] {
    width: 100%;
    padding: 8px;
    margin: 5px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  hr {
    margin-top: 20px;
  }
  
  button[type="submit"] {
    width: 100%;
    padding: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  button[type="submit"]:hover {
    background-color: #45a049;
  }
  </style>
  