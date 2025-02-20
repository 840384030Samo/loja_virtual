<template>
  <div class="card-container">
    <div class="tabs-container">
      <button :class="{ active: tab === 'flight' }" @click="tab = 'flight'">AUTOCARRO</button>
      <!-- <button :class="{ active: tab === 'booking' }" @click="tab = 'booking'">My Booking</button> -->
    </div>
    
    <div v-if="tab === 'flight'" class="form-container">
      <div class="option-group">
        <label><input type="radio" v-model="tripType" value="oneway"> Apenas Ida</label>
        <label><input type="radio" v-model="tripType" value="round"> Ida e Volta</label>        
      </div>

      <div class="destinos" style="display: flex;justify-content: space-between;">
        <div class="partida" style="display: table-caption;">
            <label for="destination" style="text-wrap: nowrap;">Local de partida</label>
        <select id="departure" v-model="form.departure" required>
          <p class="d">partida</p>
            <!-- <option value="" disabled></option> -->
            <!-- <option v-for="location in locations" :key="location" :value="location">{{ location }}</option> -->
            <option v-for="location in loc" :key="location.id" :value="location.local">{{ location.local }}</option>
        </select>
      </div>
      <div class="chegada" style="display: table-caption;">
        <label for="destination" style="text-wrap: nowrap;">Local de Chegada</label>
        <select id="destination" v-model="form.destination" required>
            <!-- <option value="" disabled></option> -->
            <!-- <option v-for="location in locations" :key="location" :value="location">{{ location }}</option> -->
            <option v-for="location in dests" :key="location.id" :value="location.local">{{ location.local }}</option>
        </select>
      </div>
      </div>
      
      <div class="date-container">
        <input v-model="departureDate" type="date" class="date-input">
        <input v-model="returnDate" type="date" v-if="tripType === 'round'" class="date-input">
      </div>
      
      <!-- Área para entrada dos passageiros -->
      <div class="passenger-container">
        <label for="destination" style="text-wrap: nowrap;">Adultos</label>
        <input v-model.number="adults" type="number" min="1" placeholder="Adultos" class="input-field">
        <label for="destination" style="text-wrap: nowrap;">Crianças</label>
        <input v-model.number="children" type="number" min="0" placeholder="Crianças" class="input-field">
      </div>
      
      <!-- Exibição do valor total atualizado em tempo real -->
      <div class="total-price" >
         Total: Mts {{ totalPrice }}
      </div>
      
      <label class="checkbox">
        <!-- <input type="checkbox" v-model="flexibleDates"> Flexible dates? Use the low fare finder -->
      </label>
      
      <button class="submit-btn" to="">Comprar Bilhete</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'flight',
      tripType: 'round',
      departureDate: '2025-02-05',
      returnDate: '2025-02-06',
      adults: 1,
      children: 0,
      form: {
        departure: '',
        destination: ''
      },
      loc: [
        { id: 1, local: 'Maputo', dest: [2, 3] },
        { id: 2, local: 'Gaza', dest: [] },
        { id: 3, local: 'Inhambane', dest: [] },
        { id: 4, local: 'Sofala', dest: [] },
        { id: 5, local: 'Beirra', dest: [6,9] },
        { id: 6, local: 'Chimoio', dest: [1,5,9] },
        { id: 7, local: 'Zambezia', dest: [] },
        { id: 8, local: 'Nampula', dest: [] },
        { id: 9, local: 'Tete', dest: [1,5,6] },
        { id: 10, local: 'Niassa', dest: [] },
        { id: 11, local: 'Quelimane', dest: [] },
        { id: 12, local: 'Cabo Delgado', dest: [] }
      ],
      // Caso haja uma lista específica de destinos
      //dests: [],
      locations: ["Maputo","Caza","Inhambane", "Sofala","Beirra","Chimoio","Zambazia", "Nampula", "Tete", "Niassa","Quelimane", "Cabo Delgado"], 
      flexibleDates: false
    };
  },
  computed: {
    // Soma total de passageiros
    totalPassengers() {
      return this.adults + this.children;
    },
    // Cálculo do preço total
    totalPrice() {
      // Se os locais não forem selecionados, retorna 0
      if (!this.form.departure || !this.form.destination) return 0;
      // Procura os índices dos locais na lista unificada
      const departureIndex = this.locations.indexOf(this.form.departure);
      const destinationIndex = this.locations.indexOf(this.form.destination);
      if (departureIndex === -1 || destinationIndex === -1) return 0;
      // Exemplo de cálculo: quanto maior a diferença entre os índices, maior o preço
      const distanceFactor = Math.abs(destinationIndex - departureIndex);
      // Define um preço base que varia conforme a "distância"
      const basePrice = (distanceFactor * 5) + 10;
      return basePrice * this.totalPassengers;
    },
    dests() {   
      const select = this.loc.find(value => value.local == this.form.departure)
      const ids = select?.dest ? select.dest : []
      const destinos = this.loc.filter(loc => {
        if (ids.includes(loc.id)) {
          return loc
        }
      })
      return destinos
    }
  },
};
</script>

<style scoped>
.card-container {
  max-width: 400px;
  margin: auto;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  padding: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.tabs-container {
  display: flex;
  background: linear-gradient(to right, #00aaff, #0077cc);
}

.tabs-container button {
  flex: 1;
  padding: 12px;
  border: none;
  background: none;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.tabs-container button.active {
  background: rgba(255, 255, 255, 0.2);
}

.form-container {
  padding: 16px;
}

.option-group label {
  display: block;
  margin: 8px 0;
}

.input-field, .date-input {
  width: 100%;
  padding: 10px;
  margin: 8px 0;
  border: 1px solid #ccc;
  border-radius: 6px;
}

.date-container {
  display: flex;
  gap: 12px;
}

.passenger-container {
  display: flex;
  gap: 12px;
  margin-top: 12px;
}

.total-price {
  margin-top: 12px;
  font-weight: bold;
  text-align: center;
}

.checkbox {
  display: block;
  margin-top: 12px;
}

.submit-btn {
  width: 100%;
  padding: 12px;
  background: #e6007e;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 12px;
}
.chegada{


  gap: 19px;
  justify-content: space-between;
  color: red;
}
.destination{

  display: flex;
  background-color: #cc0000;
}
</style>
