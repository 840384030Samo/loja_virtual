<template>
  <div class="booking-page">
    <h1>Simulação de Compra de Bilhetes</h1>

    <form >
      <div class="form-group">
        <label for="departure">Local de Partida:</label>
        <select id="departure" v-model="form.departure" required>
          <option value="" disabled>Selecione o local de partida</option>
          <option v-for="location in loc" :key="location.id" :value="location.local">{{ location.local }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="destination">Local de Chegada:</label>
        <select id="destination" v-model="form.destination" required>
          <option value="" disabled>Selecione o local de chegada</option>
          <option v-for="location in dests" :key="location.id" :value="location.local">{{ location.local }}</option>
        </select>
      </div>

      <div class="form-group">
        <label for="departureDate">Data de Partida:</label>
        <input type="date" id="departureDate" v-model="form.departureDate" required />
      </div>

      <div class="form-group">
        <label for="passengers">Número de Passageiros:</label>
        <input
          type="number"
          id="passengers"
          v-model.number="form.passengers"
          min="1"
          required
        />
      </div>

      <div v-if="form.passengers > 0" class="total-cost">
        <p>Valor total: {{ totalCost }} MZN</p>
      </div>

      <button @click="proceedToPayment" >Comprar Bilhete</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        departure: '',
        destination: '',
        departureDate: '',
        passengers: 0,
      },
      ticketPrice: 500, // Preço por passageiro,
      

      loc: [
        {
          id:1,
          local: 'Maputo',
          dest: [2, 3]
        },
        {
          id:2,
          local:'Gaza',
          dest:[]
        },
        {
          id:3,
          local:'Inhambane',
          dest:[]
        },
        {
          id:4,
          local:'Sofala',
          dest:[]
        },
        {
          id:5,
          local:'Beirra',
          dest:[6,9]
        },
        {
          id:6,
          local:'Chimoio',
          dest:[1,5,9]
        },
        {
          id:7,
          local:'Zambezia',
          dest:[]
        },
        {
          id:8,
          local:'Nampula',
          dest:[]
        },
        {
          id:9,
          local:'Tete',
          dest:[1,5,6]
          
        },
        {
          id:10,
          local:'Niassa',
          dest:[]
        },
        {
          id:11,
          local:'Quelimane',
          dest:[]
        },
        {
          id:12,
          local:'Cabo Delgado',
          dest:[]
        }
      ],
      dest: [],
      locations: ["Maputo","Caza","Inhambane", "Sofala","Beirra","Chimoio","Zambazia", "Nampula", "Tete", "Niassa","Quelimane", "Cabo Delgado"], // Vetor de locais
    };
  },
  computed: {
    totalCost() {
      return this.form.passengers * this.ticketPrice;
    },
    isFormValid() {
      const { departure, destination, departureDate, passengers } = this.form;
      return departure && destination && departureDate && passengers > 0;
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
  methods: {
    proceedToPayment() {      
      this.$router.push('/dados');
      // this.$router.push('/login');
    },
  }
};
</script>

<style scoped>
.booking-page {
  max-width: 600px;
  margin: 0 auto;
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

select,
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}

.total-cost {
  margin-top: 15px;
  font-size: 18px;
  font-weight: bold;
}

button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
