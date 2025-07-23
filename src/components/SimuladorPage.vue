<template>
  <div class="card-container">
    <div class="tabs-container">
      <button :class="{ active: tab === 'flight' }" @click="tab = 'flight'">
        <i class="fas fa-plane-departure"></i> SIMULADOR-LINE
      </button>
    </div>
    
    <div v-if="tab === 'flight'" class="form-container">
      <div class="option-group">
        <label>
          <input type="radio" v-model="tripType" value="oneway"> 
         <font-awesome-icon :icon="['fas', 'arrow-right']" /> Apenas Ida
        </label>
        <label>
          <input type="radio" v-model="tripType" value="round"> 
           <font-awesome-icon :icon="['fas', 'exchange-alt']" /> Ida e Volta
        </label>
      </div>

      <div class="destinos">
        <div class="input-group">
          <label for="departure"><font-awesome-icon :icon="['fas', 'location-dot']" /> Partida</label>
          <div class="input-icon-wrapper">
                    <font-awesome-icon :icon="['fas', 'plane-departure']" class="input-icon" />
            <select id="departure" v-model="form.departure" required>
              <option v-for="location in loc" :key="location.id" :value="location.local">
                {{ location.local }}
              </option>
            </select>
          </div>
        </div>
        <div class="input-group">
          <label for="destination"><font-awesome-icon :icon="['fas', 'flag-checkered']" /> Chegada</label>
          <div class="input-icon-wrapper">
            <font-awesome-icon :icon="['fas', 'map-marker-alt']" class="input-icon" />
            <select id="destination" v-model="form.destination" required>
              <option v-for="location in dests" :key="location.id" :value="location.local">
                {{ location.local }}
              </option>
            </select>
          </div>
        </div>
      </div>
      
      <div class="date-container">
        <div class="input-group">
          <label><font-awesome-icon :icon="['fas', 'calendar-day']" /> Data de Ida</label>
          <div class="input-icon-wrapper">
            <font-awesome-icon :icon="['fas', 'calendar-days']" class="input-icon" />
            <input v-model="departureDate" type="date">
          </div>
        </div>
        <div class="input-group" v-if="tripType === 'round'">
          <label><font-awesome-icon :icon="['fas', 'calendar-alt']" /> Data de Volta</label>
          <div class="input-icon-wrapper">
            <font-awesome-icon :icon="['fas', 'calendar-week']" class="input-icon" />
            <input v-model="returnDate" type="date">
          </div>
        </div>
      </div>
      
      <div class="passenger-container">
        <div class="input-group">
          <label><font-awesome-icon :icon="['fas', 'user']" /> Adultos</label>
          <div class="input-icon-wrapper">
            <font-awesome-icon :icon="['fas', 'user-tie']" class="input-icon" />
            <input v-model.number="adults" type="number" min="1">
          </div>
        </div>
        <div class="input-group">
          <label><font-awesome-icon :icon="['fas', 'child']" /> Crianças</label>
          <div class="input-icon-wrapper">
            <font-awesome-icon :icon="['fas', 'baby']" class="input-icon" />
            <input v-model.number="children" type="number" min="0">
          </div>
        </div>
      </div>

      <!-- Botão para abrir o modal de seleção de assento -->
      <div class="seat-selection">
        <button class="select-seat-btn" @click="openSeatModal">
          <i class="fas fa-chair"></i>
          Selecionar Assento
          <span v-if="selectedSeat"> - Assento {{ selectedSeat }}</span>
        </button>
      </div>
      
      <div class="total-price">
        <strong><i class="fas fa-money-bill-wave"></i> Total: Mts {{ totalPrice }}</strong>
      </div>
      
      <button class="submit-btn"  @click=" nextPg"><i class="fas fa-ticket-alt"></i> onclick  Comprar Bilhete</button>
    </div>
    
    <!-- Modal de seleção de assentos -->
    <div v-if="showSeatModal" class="modal-overlay">
      <div class="modal-content">
        <h3><i class="fas fa-chair"></i> Selecione o Assento</h3>
        <div class="bus-seating">
          <!-- Seção esquerda: Assentos 1 a 20 -->
          <div class="left-section">
            <button v-for="seat in leftSeats" :key="seat" 
                    :class="{ seat: true, selected: seat === selectedSeat }"
                    @click="selectSeat(seat)">
              {{ seat }}
            </button>
          </div>
          <!-- Corredor -->
          <div class="aisle"></div>
          <!-- Seção direita: Assentos 21 a 40 -->
          <div class="right-section">
            <button v-for="seat in rightSeats" :key="seat" 
                    :class="{ seat: true, selected: seat === selectedSeat }"
                    @click="selectSeat(seat)">
              {{ seat }}
            </button>
          </div>
        </div>
        <button class="close-modal" @click="closeSeatModal">
          Fechar
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLocationDot, faPlaneDeparture, faFlagCheckered, faMapMarkerAlt, faCalendarDay, faCalendarDays, faCalendarAlt, faCalendarWeek, faUser, faUserTie, faChild, faBaby, faArrowRight, faExchangeAlt, faChair, faMoneyBillWave, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faLocationDot, faPlaneDeparture, faFlagCheckered, faMapMarkerAlt, faCalendarDay, faCalendarDays, faCalendarAlt, faCalendarWeek, faUser, faUserTie, faChild, faBaby, faArrowRight, faExchangeAlt, faChair, faMoneyBillWave, faTicketAlt);

export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      tab: 'flight',
      tripType: 'round',
      departureDate: '',
      returnDate: '',
      adults: 1,
      children: 0,
      form: {
        departure: '',
        destination: '',
        seat: null
      },
      loc: [
        { id: 1, local: 'Maputo', dest: [2, 3] },
        { id: 2, local: 'Gaza', dest: [] },
        { id: 3, local: 'Inhambane', dest: [] },
        { id: 5, local: 'Beira', dest: [6, 9] },
        { id: 6, local: 'Chimoio', dest: [1, 5, 9] },
        { id: 9, local: 'Tete', dest: [1, 5, 6] }
      ],
      selectedSeat: null,
      showSeatModal: false
    };
  },
  computed: {
    totalPassengers() {
      return this.adults + this.children;
    },
    totalPrice() {
      if (!this.form.departure || !this.form.destination) return 0;
      return 500 * this.totalPassengers;
    },
    dests() {
      const selected = this.loc.find(loc => loc.local === this.form.departure);
      return selected ? this.loc.filter(loc => selected.dest.includes(loc.id)) : [];
    },
    leftSeats() {
      return Array.from({ length: 20 }, (_, i) => i + 1);
    },
    rightSeats() {
      return Array.from({ length: 20 }, (_, i) => i + 21);
    }
  },
  methods: {
    nextPg() {
      this.$router.push('/dados');
    },
    openSeatModal() {
      this.showSeatModal = true;
    },
    closeSeatModal() {
      this.showSeatModal = false;
    },
    selectSeat(seat) {
      this.selectedSeat = seat;
      this.form.seat = seat;
      this.closeSeatModal();
    }
  }
};
</script>

<style scoped>
.card-container {
  
  max-width: 1500px;
  margin: auto;
  border-radius: 12px;
  background: white;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
}

.tabs-container {
  display: flex;
  justify-content: center;
  background: linear-gradient(to right, #ffb300, #cc7e00);
  padding: 6px;
}

.tabs-container button {
  background: none;
  color: white;
  font-size: 16px;
  border: none;
  cursor: pointer;
}

.tabs-container button.active {
  font-weight: bold;
  text-decoration: underline;
}

.form-container {
  padding: 13px;
  /* height: 320px; */
  font-size: 14px;
}

/* Responsividade e alinhamento para tabela e campos do formulário */
.destinos, .date-container, .passenger-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.2vw;
  margin: 10px 0;
}
.input-group {
  min-width: 120px;
  max-width: 180px;
  flex: 1 1 120px;
  margin-bottom: 0;
  display: flex;
  flex-direction: column;
}
.input-group label {
  font-weight: bold;
  margin-bottom: 3px;
  font-size: 0.97em;
}
.input-group select,
.input-group input {
  width: 100%;
  padding: 7px 7px 7px 2em;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 1em;
  background: #fff;
}
.input-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.input-icon {
  position: absolute;
  left: 10px;
  color: #e6007e;
  font-size: 1.1em;
  pointer-events: none;
}
.input-icon-wrapper select,
.input-icon-wrapper input {
  padding-left: 2em;
}
@media (max-width: 900px) {
  .destinos, .date-container, .passenger-container {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  .input-group {
    min-width: 100%;
    max-width: 100%;
  }
}
@media (max-width: 600px) {
  .destinos, .date-container, .passenger-container {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  .input-group label {
    font-size: 1em;
  }
  .input-group select,
  .input-group input {
    font-size: 1em;
    padding: 8px 8px 8px 2em;
  }
}

/* Novos estilos para os ícones dentro dos campos */
.input-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}
.input-icon {
  position: absolute;
  left: 10px;
  color: #e6007e;
  font-size: 1.1em;
  pointer-events: none;
}
.input-icon-wrapper select,
.input-icon-wrapper input {
  padding-left: 2em;
}

.seat-selection {
  margin: 20px 0;
  text-align: center;
}

.select-seat-btn {
  padding: 10px 15px;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease;
}

.select-seat-btn:hover {
  background: #0056b3;
}

/* Modal de seleção de assentos */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 5px;
  padding: 20px;
  width: 90%;
  max-width: 260px;
  text-align: center;
}

.bus-seating {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin: 15px 0;
}

.left-section, .right-section {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 5px;
}

.aisle {
  width: 20px;
}

.seat {
  background: #e0e0e0;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.3s ease;
}

.seat:hover {
  background: #ccc;
}

.seat.selected {
  background: #e6007e;
  color: white;
}

.close-modal {
  margin-top: 15px;
  padding: 8px 12px;
  background: #dc3545;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}

/* Estilo do total e botão de envio */
.total-price {
  text-align: center;
  margin-top: 15px;
  font-size: 13px;
  font-weight: bold;
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.submit-btn i {
  margin-right: 8px;
}
</style>
