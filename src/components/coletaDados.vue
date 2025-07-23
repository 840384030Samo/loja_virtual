<template>
  <div class="passenger-form-container">
    <h2>🚌Preencha os dados dos Passageiros</h2>

    <!-- Número de passageiros -->
    <div class="passenger-count">
      <label for="passengerCount">Número de Passageiros: <b>{{ passengers.length }}</b></label>
    </div>

    <!-- Lista de passageiros -->
    <form @submit.prevent="submitForm">
      <div v-for="(passenger, index) in passengers" :key="index" class="passenger-group">
        <div class="form-group">
          <label :for="'passengerName' + index">👤 Nome do Passageiro {{ index + 1 }}</label>
          <input
            type="text"
            :id="'passengerName' + index"
            v-model="passenger.name"
            placeholder="Digite o nome completo"
            required
          />
        </div>

        <div class="form-group">
          <label :for="'gender' + index">👩‍👦 Gênero</label>
          <select v-model="passenger.gender" :id="'gender' + index" required>
            <option value="">Selecione</option>
            <option value="Masculino">Masculino</option>
            <option value="Feminino">Feminino</option>
          </select>
        </div>

        <div class="form-group">
          <label :for="'email' + index">📧 Email</label>
          <input
            type="email"
            :id="'email' + index"
            v-model="passenger.email"
            placeholder="Digite o email"
            required
          />
        </div>

        <div class="form-group">
          <label :for="'contact' + index">📞 Contacto</label>
          <input
            type="text"
            :id="'contact' + index"
            v-model="passenger.contact"
            placeholder="Digite o telefone"
            required
          />
        </div>

        <div class="form-group">
          <label :for="'documentPhoto' + index">📄 Foto do Documento</label>
          <input
            type="file"
            :id="'documentPhoto' + index"
            accept="image/*"
            @change="handleFileUpload($event, index)"
          />
          <p v-if="passenger.documentPhoto">✅ Foto selecionada: {{ passenger.documentPhoto.name }}</p>
        </div>

        <button type="button" @click="removePassenger(index)" class="btn-remove">🗑️ Remover
        </button>
        
        <hr v-if="index !== passengers.length - 1" />
      </div>

      <!-- Botões de ação -->
      <div class="button-group">
        <button type="button" @click="addPassenger" class="btn-add">➕ Adicionar Passageiro</button>
        <button type="submit" class="btn-submit">📤 Enviar</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      passengers: [],
    };
  },
  methods: {
    addPassenger() {
      this.passengers.push({
        name: '',
        gender: '',
        email: '',
        contact: '',
        documentPhoto: null,
      });
      sessionStorage.setItem("passageiro", JSON.stringify(this.passengers))
    },

    removePassenger(index) {
      this.passengers.splice(index, 1);
    },

    handleFileUpload(event, index) {
      const file = event.target.files[0];
      if (file) {
        this.passengers[index].documentPhoto = file;
      }
    },

    submitForm() {
  for (let passenger of this.passengers) {
    if (!passenger.name || !passenger.gender || !passenger.email || !passenger.contact) {
      alert("⚠️ Preencha todos os campos antes de enviar.");
      return;
    }
  }

  // Criar cópia sem os arquivos (documentPhoto)
  const passengersData = this.passengers.map(passenger => ({
    name: passenger.name,
    gender: passenger.gender,
    email: passenger.email,
    contact: passenger.contact,
    documentPhoto: passenger.documentPhoto ? { name: passenger.documentPhoto.name } : null
  }));

  // Salvar no localStorage
  localStorage.setItem('listaPassageiros', JSON.stringify(passengersData));

  // Redirecionar para página de resumo
  this.$router.push('/PreVisualizacao');
}

  }
};
</script>

<style scoped>
.passenger-form-container {
  width: 450px;
  margin: 110px auto;
  padding: 25px;
  border-radius: 12px;
  background: white;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  color: #007bff;
}

.passenger-count {
  margin-bottom: 15px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input, select {
  width: 100%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 14px;
}

.button-group {
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

button {
  padding: 10px 15px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s;
}

.btn-add {
  background: #28a745;
  color: white;
}

.btn-remove {
  background: #dc3545;
  color: white;
  margin-top: 10px;
}

.btn-submit {
  background: #007bff;
  color: white;
  width: 100%;
}

hr {
  margin: 20px 0;
  border: none;
  border-top: 1px solid #ddd;
}
</style>
