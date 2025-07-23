<template>
    <div v-if="showResumo" class="resumo-container">
      <h2>🧾 Resumo da Reserva</h2>
  
      <section class="resumo-detalhes">
        <h3>Detalhes da Viagem</h3>
        <p><strong>Tipo de Viagem:</strong> {{ tripType === 'round' ? 'Ida e Volta' : 'Apenas Ida' }}</p>
        <p><strong>Partida:</strong> {{ form?.departure }}</p>
        <p><strong>Chegada:</strong> {{ form?.destination }}</p>
        <p><strong>Data de Ida:</strong> {{ departureDate }}</p>
        <p v-if="tripType === 'round'"><strong>Data de Volta:</strong> {{ returnDate }}</p>
        <p><strong>Assento Selecionado:</strong> {{ selectedSeat }}</p>
      </section>
  
      <section class="resumo-passageiros">
        <h3>Passageiros</h3>
        <div v-for="(passageiro, index) in passageiros" :key="index" class="passageiro-detalhes">
          <p><strong>Nome:</strong> {{ passageiro?.name }}</p>
          <p><strong>Gênero:</strong> {{ passageiro?.gender }}</p>
          <p><strong>Email:</strong> {{ passageiro?.email }}</p>
          <p><strong>Contacto:</strong> {{ passageiro?.contact }}</p>
          <p v-if="passageiro.documentPhoto"><strong>Documento:</strong> {{ passageiro.documentPhoto.name }}</p>
          <hr v-if="index !== passageiros.length - 1" />
        </div>
      </section>
  
      <section class="resumo-total">
        <h3>Total a Pagar</h3>
        <p><strong>Total:</strong> Mts {{ totalPrice }}</p>
      </section>
  
      <div class="acoes">
        <button @click="editar" class="btn-editar">✏️ Editar</button>
      </div>
      <div class="pagamento">
        <div class="pagamento-title"><i class="fas fa-credit-card"></i> Métodos de Pagamento</div>
        <div class="pagamento-btns">
          <button class="btn-mpesa-red" @click="pagar('M-Pesa')"> M-Pesa</button>
          <button class="btn-emola-orange" @click="pagar('E-mola')"> E-mola</button>
          <button class="btn-paypal" @click="pagar('Paypal')"><i class="fab fa-paypal"></i> Paypal</button>
        </div>
      </div>
    </div>
    <div v-if="mensagemPagamento" class="mensagem-pagamento">
      <span>{{ mensagemPagamento }}</span>
    </div>
  </template>
  
  <script>
  export default {
  
    props: {
      tripType: String,
      form: Object,
      departureDate: String,
      returnDate: String,
      selectedSeat: [String, Number],
      passageiros: Array,
      totalPrice: Number
    },
    data() {
      return {
        mensagemPagamento: '',
        showResumo: true
      };
    },
    methods: {
      editar() {
        this.$emit('editar');
      },
      pagar(metodo) {
        this.mensagemPagamento = `Pagamento via ${metodo} iniciado! Aguarde instruções no seu dispositivo.`;
        this.showResumo = false;
        setTimeout(() => {
          this.mensagemPagamento = 'Pagamento realizado com sucesso!';
          setTimeout(() => {
            this.mensagemPagamento = '';
            this.showResumo = true;
          }, 2500);
        }, 2500);
      }
    }
  };
  </script>
  
  <style scoped>
  .resumo-container {
    max-width: 700px;
    margin: 80px auto 60px auto;
    padding: 36px 36px 28px 36px;
    background: linear-gradient(120deg, #fffbe7 60%, #f3c97a 100%);
    border-radius: 24px;
    box-shadow: 0 8px 32px rgba(30,136,229,0.13);
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1.5px solid #e0e0e0;
  }
  
  .resumo-container h2 {
    color: #1e88e5;
    font-size: 2.2rem;
    margin-bottom: 18px;
    font-weight: 700;
    letter-spacing: 1px;
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .resumo-detalhes, .resumo-passageiros, .resumo-total {
    margin-bottom: 28px;
    width: 100%;
    background: #fff;
    border-radius: 14px;
    padding: 20px 26px 12px 26px;
    box-shadow: 0 2px 8px rgba(30,136,229,0.08);
  }
  
  .resumo-detalhes h3, .resumo-passageiros h3, .resumo-total h3 {
    color: #1e88e5;
    font-size: 1.18rem;
    margin-bottom: 10px;
    font-weight: 700;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .preco {
    color: #43a047;
    font-weight: 700;
    font-size: 1.15rem;
  }
  
  .passageiro-detalhes {
    background: #f7faff;
    padding: 14px 20px;
    border-radius: 10px;
    margin-bottom: 12px;
    width: 100%;
    border: 1px solid #e0e0e0;
    box-shadow: 0 1px 4px rgba(30,136,229,0.04);
  }
  
  .passageiro-detalhes:last-child {
    margin-bottom: 0;
  }
  
  .passageiro-detalhes hr {
    border: none;
    border-top: 1px solid #e0e0e0;
    margin: 10px 0 0 0;
  }
  
  .acoes {
    display: flex;
    justify-content: flex-end;
    gap: 18px;
    width: 100%;
    margin-top: 10px;
  }
  
  .btn-editar {
    background: #ffc107;
    color: #fff;
    padding: 10px 28px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    box-shadow: 0 2px 8px rgba(0,0,0,0.04);
    transition: background 0.2s, color 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .btn-editar:hover {
    background: #e0a800;
  }
  
  .pagamento {
    margin-top: 32px;
    width: 100%;
    background: #fff;
    border-radius: 14px;
    padding: 20px 26px 20px 26px;
    box-shadow: 0 2px 8px rgba(30,136,229,0.08);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  
  .pagamento-title {
    font-size: 1.13rem;
    font-weight: 700;
    color: #1e88e5;
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .pagamento-btns {
    display: flex;
    gap: 18px;
  }
  
  .btn-mpesa-red {
    background: #dc3545;
    color: #fff;
    border: 2px solid #dc3545;
    border-radius: 8px;
    padding: 10px 28px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 1px 4px rgba(220,53,69,0.08);
    transition: background 0.2s, color 0.2s, border 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .btn-mpesa-red:hover {
    background: #b71c1c;
    border: 2px solid #b71c1c;
  }
  
  .btn-emola-orange {
    background: #ff9800;
    color: #fff;
    border: 2px solid #ff9800;
    border-radius: 8px;
    padding: 10px 28px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 1px 4px rgba(255,152,0,0.08);
    transition: background 0.2s, color 0.2s, border 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .btn-emola-orange:hover {
    background: #f57c00;
    border: 2px solid #f57c00;
  }
  
  .btn-paypal {
    background: #fff;
    color: #0070ba;
    border: 2px solid #0070ba;
    border-radius: 8px;
    padding: 10px 28px;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 1px 4px rgba(0,112,186,0.08);
    transition: background 0.2s, color 0.2s, border 0.2s;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  
  .btn-paypal:hover {
    background: #0070ba;
    color: #fff;
    border: 2px solid #005ea6;
  }
  
  .mensagem-pagamento {
    margin: 120px auto 0 auto;
    padding: 32px 24px;
    background: #e6fff2;
    color: #1a7f37;
    border: 2px solid #28a745;
    border-radius: 12px;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
    max-width: 500px;
    box-shadow: 0 2px 8px rgba(40,167,69,0.08);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  @media (max-width: 800px) {
    .resumo-container {
      max-width: 98vw;
      padding: 12px 2vw 12px 2vw;
    }
    .resumo-detalhes, .resumo-passageiros, .resumo-total {
      padding: 12px 6px 8px 6px;
    }
    .passageiro-detalhes {
      padding: 8px 6px;
    }
    .pagamento {
      padding: 12px 6px;
      gap: 10px;
    }
    .pagamento-btns {
      gap: 8px;
    }
    .pagamento button {
      padding: 8px 10px;
      font-size: 0.95rem;
    }
  }
  </style>
