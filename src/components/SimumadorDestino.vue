<template>
  <div class="card-container">
    <!-- <div class="tabs-container"> -->
      <!-- <button :class="{ active: tab === 'flight' }" @click="tab = 'flight'"> -->
        <!-- <i class="fas fa-plane-departure"></i> SIMULADOR-LINES -->
      <!-- </button> -->
    <!-- </div> -->
    
    <div v-if="tab === 'flight'" class="form-table-bg">
      <table class="form-table">
        <tbody>
          <tr>
            <td colspan="2" class="td-center">
              <div class="row-options">
                <div class="option-group">
                  <label class="radio-label">
                    <input type="radio" v-model="tripType" value="oneway"> 
                    <font-awesome-icon :icon="['fas', 'arrow-right']" /> Apenas Ida
                  </label>
                  <label class="radio-label">
                    <input type="radio" v-model="tripType" value="round"> 
                    <font-awesome-icon :icon="['fas', 'exchange-alt']" /> Ida e Volta
                  </label>
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div class="single-row-form">
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
                <div class="input-group">
                  <label><font-awesome-icon :icon="['fas', 'calendar-day']" /> Ida</label>
                  <div class="input-icon-wrapper">
                    <font-awesome-icon :icon="['fas', 'calendar-days']" class="input-icon" />
                    <input v-model="departureDate" type="date">
                  </div>
                </div>
                <div class="input-group" v-if="tripType === 'round'">
                  <label><font-awesome-icon :icon="['fas', 'calendar-alt']" /> Volta</label>
                  <div class="input-icon-wrapper">
                    <font-awesome-icon :icon="['fas', 'calendar-week']" class="input-icon" />
                    <input v-model="returnDate" type="date">
                  </div>
                </div>
                <div class="input-group">
                  <label><font-awesome-icon :icon="['fas', 'user']" /> Adultos</label>
                  <div class="input-icon-wrapper">
                    <font-awesome-icon :icon="['fas', 'user']" class="input-icon" />
                    <input v-model.number="adults" type="number" min="1">
                  </div>
                </div>
                <div class="input-group">
                  <label><font-awesome-icon :icon="['fas', 'child']" /> Crianças</label>
                  <div class="input-icon-wrapper">
                    <font-awesome-icon :icon="['fas', 'child']" class="input-icon" />
                    <input v-model.number="children" type="number" min="0">
                  </div>
                </div>
                <div class="seat-selection">
                  <button class="select-seat-btn" @click="openSeatModal">
                    <i class="fas fa-chair"></i>
                    Selecionar Assento
                    <span v-if="selectedSeat"> - Assento {{ selectedSeat }}</span>
                  </button>
                </div>
                <div class="total-price" >
                  <strong><i class="fas fa-money-bill-wave"></i> Total:{{ totalPrice }}</strong>
                </div>
                <button class="submit-btn" @click="nextPg"><i class="fas fa-ticket-alt"></i> Comprar Bilhete</button>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
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
import { faLocationDot, faPlaneDeparture, faFlagCheckered, faMapMarkerAlt, faCalendarDay, faCalendarDays, faCalendarAlt, faCalendarWeek, faUser, faChild, faArrowRight, faExchangeAlt, faChair, faMoneyBillWave, faTicketAlt } from '@fortawesome/free-solid-svg-icons';

library.add(faLocationDot, faPlaneDeparture, faFlagCheckered, faMapMarkerAlt, faCalendarDay, faCalendarDays, faCalendarAlt, faCalendarWeek, faUser, faChild, faArrowRight, faExchangeAlt, faChair, faMoneyBillWave, faTicketAlt);

export default {
  components: {
    FontAwesomeIcon
  },
  data() {
    return {
      tab: 'flight',
      tripType: 'round',
      classe: 'economica',
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
  width: 100%;
  max-width: 1240px;
  margin: auto;
  border-radius: 12px;
  /* background: rgb(117, 30, 30); */
  /* padding: 3vw 2vw; */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
 

}

.tabs-container {
  display: flex;
  justify-content: center;
  background: linear-gradient(to right, #ffb300, #cc7e00);
  padding: 10px;
  background-color: #cc7e00;
  height: 10px;
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
  padding: 20px;
}

.row-options {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 32px;
  margin-bottom: 18px;
}

/* Responsividade e alinhamento para tabela e campos do formulário */
.form-table-bg {
  width: 100%;
  min-width: 0;
  background: orange;
  border-radius: 16px;
  padding: 10px 10px 10px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  margin-top: 20px;
}

.form-table {
  width: 100%;
  max-width: 1200px;
  background: transparent;
  border-collapse: separate;
  border-spacing: 0 0;
}

.single-row-form {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  gap: 1.2vw;
  width: 100%;
  font-size: 13px;
}

.single-row-form > .input-group {
  min-width: 120px;
  max-width: 180px;
  flex: 1 1 120px;
  margin-bottom: 0;
}

.input-group {
  display: flex;
  flex-direction: column;
  min-width: 100px;
  max-width: 180px;
  flex: 1 1 100px;
  margin-bottom: 0;
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

/* Botão para abrir o modal de seleção de assento */
.seat-selection {
  margin: 0 0 0 8px;
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
  font-size: 10px;
}

.modal-content {
  background: white;
  border-radius: 5px;
  padding: 14px;
  width: 80%;
  max-width: 250px;
  text-align: center;
  font-size: 10px;
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
  margin: 0 0 0 8px;
  font-size: 1em;
  font-weight: bold;
  display: flex;
  align-items: center;
  font-size: 12px;
}

.submit-btn {
  padding: 8px 6px;
  background: #e6007e;
  color: white;
  font-weight: bold;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
  height: 27px;
}

.submit-btn i {
  margin-right: 6px;
}
.td-center {
  text-align: center;
  padding-bottom: 12px;
}
@media (max-width: 900px) {
  .card-container {
    padding: 2vw 1vw;
  }
  .form-table-bg {
    padding: 18px 2vw 18px 2vw;
    margin-top: 30px;
  }
  .form-table {
    width: 100%;
    max-width: 100vw;
  }
  .single-row-form {
    flex-direction: column;
    align-items: stretch;
    gap: 12px;
  }
  .single-row-form > .input-group {
    min-width: 100%;
    max-width: 100%;
  }
}

@media (max-width: 600px) {
  .form-table-bg {
    padding: 8px 0 8px 0;
    margin-top: 10px;
  }
  .form-table {
    width: 100%;
    max-width: 100vw;
  }
  .single-row-form {
    flex-direction: column;
    align-items: stretch;
    gap: 10px;
  }
  .single-row-form > .input-group {
    min-width: 100%;
    max-width: 100%;
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
</style>
