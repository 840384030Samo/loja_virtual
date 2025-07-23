<template>
  <div class="contact-container">
    <div class="action-cards">
      <div class="action-card">
        <i class="fas fa-user-plus action-icon"></i>
        <h3>Quer fazer parte da familia?</h3>
        <p>Cadastre-se para anunciar imóveis ou atuar como corretor na nossa plataforma.</p>
        <button @click="irParaCadastro">Clique aqui</button>
      </div>
    
      <div class="action-card">
        <i class="fas fa-home action-icon"></i>
        <h3>Quer viajar?</h3>
        <p>Cada destino é uma nova chance de descobrir quem você é, de viver histórias que não cabem em palavras e colecionar momentos que o tempo jamais apaga.</p>
        <button @click="irParaAnunciar">Clique aqui</button>
      </div>
    </div>
    <div class="info-form-row">
      <div class="contact-card">
        <div class="contact-header">
          <i class="fas fa-phone-alt contact-icon"></i>
          <h2>Contacte-nos</h2>
        </div>
        <div class="contact-info">
          <div class="info-item">
            <i class="fas fa-map-marker-alt"></i>
            <span>Av. Julius Nyerere, 1234, Maputo, Moçambique</span>
          </div>
          <div class="info-item">
            <i class="fas fa-envelope"></i>
            <span>info@imobiliariasamuca.co.mz</span>
          </div>
          <div class="info-item">
            <i class="fas fa-phone"></i>
            <span>+258 84 123 4567</span>
          </div>
          <div class="info-item">
            <i class="fab fa-whatsapp"></i>
            <span>+258 87 765 4321</span>
          </div>
          <div class="info-item horario">
            
            <div class="horario-table">
                <h4> <i class="fas fa-clock"></i>Horário de Atendimento</h4>
                <div><strong>Segunda-feira</strong> 08h às 18h</div>
                <div><strong>Terca-feira</strong> 08h às 18h</div>
                <div><strong>Quarta-feira:</strong> 08h às 18h</div>
                <div><strong>Quinta-feira</strong> 08h às 18h</div>
                <div><strong>Sexta-feira</strong> 08h às 18h</div>
                <div><strong>Sábado:</strong> 09h às 16h</div>
                <div><strong>Domingo:</strong> Fechado</div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-form-card">
        <form class="contact-form" @submit.prevent="enviarFormulario">
          <h3><i class="fas fa-paper-plane"></i> Envie-nos uma mensagem</h3>
          <div class="input-group">
            <i class="fas fa-user"></i>
            <input type="text" v-model="form.nome" placeholder="Seu nome" required />
          </div>
          <div class="input-group">
            <i class="fas fa-phone"></i>
            <input type="text" v-model="form.contacto" placeholder="Seu contacto" required />
          </div>
          <div class="input-group">
            <i class="fas fa-envelope"></i>
            <input type="email" v-model="form.email" placeholder="Seu email" required />
          </div>
          <div class="input-group">
            <i class="fas fa-comment-dots"></i>
            <textarea v-model="form.mensagem" placeholder="Mensagem" rows="4" required></textarea>
          </div>
          <button type="submit"><i class="fas fa-paper-plane"></i> Enviar</button>
          <p v-if="mensagemEnviada" class="msg-sucesso">Mensagem enviada com sucesso!</p>
        </form>
      </div>
    </div>
  </div>
  <div class="contact-map-full">
    <iframe
      src="https://www.google.com/maps?q=-25.9653,32.5832&z=15&output=embed"
      width="100%"
      height="340"
      style="border:0; border-radius: 12px;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>

<script>
// import Formulariopedidos from './formulariopedidos.vue';

export default {
  name: 'HomeContacto',
  data() {
    return {
      form: {
        nome: '',
        email: '',
        contacto: '',
        mensagem: ''
      },
      mensagemEnviada: false
    };
  },
  methods: {
    irParaCadastro() {
      this.$router.push('/cadastro');
    },
    irParaImoveis() {
      this.$router.push('/');
    },
    irParaAnunciar() {
      this.$router.push('/cadastro'); // ajuste para rota de anúncio se houver
    },
    irParaFormularioPedidos() {
      this.$router.push('/formulariopedidos');
    },
    async enviarFormulario() {
      // Simulação de envio de email (substitua por integração real com backend ou serviço de email)
      try {
        // Exemplo de integração:
        // await fetch('https://seu-backend.com/api/contact', {
        //   method: 'POST',
        //   headers: { 'Content-Type': 'application/json' },
        //   body: JSON.stringify(this.form)
        // });
        this.mensagemEnviada = true;
        setTimeout(() => {
          this.mensagemEnviada = false;
          this.form = { nome: '', email: '', contacto: '', mensagem: '' };
        }, 3000);
      } catch (e) {
        alert('Erro ao enviar mensagem. Tente novamente.');
      }
    }
  }
};
</script>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  min-height: 70vh;
  background: #f7f8fa;
  padding: 40px 0 0 0;
  gap: 32px;
}
.action-cards {
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 24px;
}
@media (min-width: 900px) {
  .action-cards {
    flex-direction: row;
    margin-bottom: 0;
  }
}
.info-form-row {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  justify-content: center;
  align-items: center;
}
@media (min-width: 900px) {
  .info-form-row {
    flex-direction: row;
    gap: 32px;
    width: auto;
    justify-content: center;
    align-items: flex-start;
  }
}
.action-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(30,136,229,0.10);
  padding: 28px 32px 20px 32px;
  max-width: 320px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
  border-left: 5px solid rgb(243, 166, 23);
}
.action-card:nth-child(2) {
  border-left: 5px solidr  rgb(243, 166, 23);
}
.action-card:nth-child(3) {
  border-left: 5px solid  rgb(243, 166, 23);
}
.action-card h3 {
  margin: 0 0 6px 0;
  font-size: 1.18rem;
  color: black;
}
.action-card:nth-child(2) h3 {
  color:  rgb(243, 166, 23);
}
.action-card:nth-child(3) h3 {
  color: rgb(243, 166, 23);
}
.action-card p {
  margin: 0 0 10px 0;
  color: #444;
  font-size: 1rem;
}
.action-card button {
  background: linear-gradient(90deg, #1e88e5 40%, #43a047 70%, #fbc02d 100%);
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 24px;
  font-size: 1.08rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
  box-shadow: 0 2px 8px rgba(30,136,229,0.08);
}
.action-card button:hover {
  background: linear-gradient(90deg, #1565c0 40%, #388e3c 70%, #f9a825 100%);
}
.contact-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 32px 36px 24px 36px;
  max-width: 520px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.contact-form-card {
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.08);
  padding: 32px 36px 24px 36px;
  max-width: 520px;
    height: 440px;

  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.contact-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 8px;
  width: 700px;
}
.contact-icon {
  font-size: 2rem;
  color: #f3a617;
}
.contact-info {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.info-item {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.08rem;
  color: #444;
}
.info-item i {
  color: #f3a617;
  font-size: 1.2rem;
}
.contact-form {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 0;
}
.input-group {
  display: flex;
  align-items: center;
  background: #f8fafc;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  margin-bottom: 8px;
  padding: 0 8px;
}
.input-group i {
  color: #f3a617;
  font-size: 1.1rem;
  margin-right: 8px;
}
.input-group input,
.input-group textarea {
  border: none;
  outline: none;
  background: transparent;
  flex: 1;
  padding: 10px 0;
  font-size: 1rem;
}
.input-group textarea {
  resize: vertical;
}
.contact-form button {
  background: #1e88e5;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 10px 0;
  font-size: 1.08rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}
.contact-form button:hover {
  background: #1565c0;
}
.msg-sucesso {
  color: #388e3c;
  font-size: 0.98rem;
  margin-top: 4px;
}
.contact-map-full {
  width: 100vw;
  max-width: 100%;
  margin: 0 auto;
  margin-top: 32px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(30,136,229,0.08);
}
@media (max-width: 900px) {
  .contact-container {
    flex-direction: column;
    align-items: center;
    gap: 18px;
  }
  .contact-card, .contact-form-card {
    max-width: 98vw;
    padding: 18px 8px 12px 8px;
  }
}
@media (max-width: 600px) {
  .contact-map-full {
    margin-top: 18px;
    height: 220px;
  }
}
.horario-table {
  display: flex;
  flex-direction: column;
  gap: 2px;
  font-size: 0.98rem;
  margin-left: 4px;
}
.horario-table strong {
  color: #1e88e5;
  font-weight: 600;
}
.horario {
  align-items: flex-start;
}
.action-icon {
  font-size: 2.1rem;
  color: #f3a617;
  margin-bottom: 8px;
}
.action-card:nth-child(2) .action-icon {
  color: #f3a617;
}
.action-card:nth-child(3) .action-icon {
  color: #f3a617;
}
.contact-icon,
.info-item i,
.input-group i,
.horario-table h4 i,
.contact-form h3 i,
.contact-form button i,
.action-icon,
.action-card:nth-child(2) .action-icon,
.action-card:nth-child(3) .action-icon {
  color: #f3c97a !important;
}
</style>
