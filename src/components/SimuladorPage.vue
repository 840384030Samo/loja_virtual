<template>
  <div class="card-container">
    <div class="tabs-container">
      <button :class="{ active: tab === 'flight' }" @click="tab = 'flight'">AUTOCARRO</button>
      <!-- <button :class="{ active: tab === 'booking' }" @click="tab = 'booking'">My Booking</button> -->
    </div>
    
    <div v-if="tab === 'flight'" class="form-container">
      <div class="option-group">
        <label><input type="radio" v-model="tripType" value="round"> Ida e Volta</label>
        <label><input type="radio" v-model="tripType" value="oneway"> Apenas Ida</label>
        <!-- <label><input type="radio" v-model="tripType" value="special"> Special assistance</label> -->
      </div>
      
      <input v-model="departure" placeholder="Departure Airport" class="input-field">
      <input v-model="arrival" placeholder="Arrival Airport" class="input-field">
      
      <div class="date-container">
        <input v-model="departureDate" type="date" class="date-input">
        <input v-model="returnDate" type="date" v-if="tripType === 'round'" class="date-input">
      </div>
      
      <div class="passenger-container">
        <span>Adult</span>
        <div class="btn-toggle">
          <button v-for="option in adultOptions" :key="option.value" @click="adults = option.value" :class="{ active: adults === option.value }">
            {{ option.label }}
          </button>
        </div>
      </div>
      
      <input v-model.number="children" type="number" placeholder="Child" class="input-field">
      <input v-model.number="infants" type="number" placeholder="Infant" class="input-field">
      
      <label class="checkbox">
        <input type="checkbox" v-model="flexibleDates"> Flexible dates? Use the low fare finder
      </label>
      
      <button class="submit-btn">Comprar Bilhete</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tab: 'flight',
      tripType: 'round',
      departure: '',
      arrival: '',
      departureDate: '2025-02-05',
      returnDate: '2025-02-06',
      adults: 1,
      adultOptions: [
        { label: '1', value: 1 },
        { label: '2', value: 2 },
        { label: '3', value: 3 },
        { label: 'More', value: 'more' }
      ],
      children: 0,
      infants: 0,
      flexibleDates: false
    };
  }
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
  align-items: center;
  gap: 12px;
  margin-top: 12px;
}

.btn-toggle button {
  padding: 6px 12px;
  border: none;
  background: #f1f1f1;
  cursor: pointer;
  margin-right: 4px;
  border-radius: 6px;
}

.btn-toggle button.active {
  background: #00aaff;
  color: white;
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
</style>
