<template>
  <div class="sobre-container">
    <div class="sobre-img-box">
      <img src="/Imagens/WhatsApp%20.jpg" alt="Imobiliária Samuca" class="sobre-img" />
    </div>
    <div class="sobre-content">
      <div class="sobre-header">
        <!-- <i class="fas fa-building sobre-icon"></i> -->
        <h1> Space Liners</h1>
      </div>
      <section class="sobre-section">
        <h2><i class="fas fa-users"></i> Quem Somos</h2>
        <p>
A Space Liners é uma empresa moçambicana que atua no setor de transporte terrestre interprovincial de passageiros em Moçambique. Foi criada com o propósito de oferecer soluções acessíveis, seguras e eficientes de mobilidade entre províncias, respondendo às necessidades de deslocação de diversos perfis de utilizadores. Para além do transporte de passageiros, a empresa disponibiliza também serviços de transporte de carga, permitindo o envio fiável de mercadorias entre as principais cidades do país..</p>
      </section>
      <section class="sobre-section">
        <h2><i class="fas fa-cogs"></i> Nossos Serviços</h2>
        <ul class="servicos-lista">
          <li><i class="fas fa-home"></i>  Transporte de Passageiros</li>
          <li><i class="fas fa-user-tie"></i>  Transporte de Carga</li>
          <li><i class="fas fa-handshake"></i>  Transporte de encomendas</li>
          <li><i class="fas fa-key"></i> Gestão de propriedades</li>
          
        
          

        </ul>
      </section>
    </div>
  </div>
  <div class="tabela">
    <h2><i class="fas fa-map-marked-alt"></i> Destinos e Horários</h2>
    <table class="tabela-destinos">
      <thead>
        <tr>
          <th><i class="fas fa-map-pin"></i> Origem</th>
          <th><i class="fas fa-location-arrow"></i> Destino</th>
          <th><i class="fas fa-clock"></i> Horário de Partida</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Tete</td>
          <td>Maputo</td>
          <td>04:00</td>
        </tr>
        <tr>
          <td>Tete</td>
          <td>Beira</td>
          <td>04:00</td>
        </tr>
        <tr>
          <td>Tete</td>
          <td>Chimoio</td>
          <td>04:00</td>
        </tr>
        <tr>
          <td>Tete</td>
          <td>Chimoio</td>
          <td>13:00</td>
        </tr>
      </tbody>
    </table>
  </div>
  <div class="cards-row">
    <div class="sobre-card missao">
      <h2><i class="fas fa-bullseye"></i> Nossa Missão</h2>
      <p>
Proporcionar experiências de viagem memoráveis, seguras e acessíveis, conectando pessoas a destinos incríveis com qualidade, conforto e atendimento personalizado.

      </p>
    </div>
    <div class="sobre-card visao">
      <h2><i class="fas fa-eye"></i> Visão</h2>
      <p>
Ser reconhecida como a principal referência em turismo terrestre em Moçambique e na região, promovendo inovação, sustentabilidade e excelência nos serviços de viagens.      </p>
    </div>
    <div class="sobre-card valores">
      <h2><i class="fas fa-heart"></i> Valores</h2>
      <ul class="valores-lista">
        <li>Atendimento com empatia e dedicação, foco na excelência, uso de tecnologia para inovação, garantia de segurança nas viagens, responsabilidade ambiental e atuação com ética e transparência..</li>
      
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SobreEmpresa',
};
</script>

<style scoped>
.sobre-container {
  max-width: 1400px;
  margin: 10px auto 0 auto;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 4px 24px rgba(30,136,229,0.08);
  padding: 36px 28px 32px 28px;
  display: flex;
  flex-direction: row;
  gap: 36px;
  height: 600px;
  align-items: flex-start;
}
.sobre-img-box {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 740px;
  width: 35vw;
  height: 600px;
  background: #f7f8fa;
  border-radius: 8px;
  box-shadow: 0 4px 24px rgba(30,136,229,0.06);
  overflow: hidden;
}
.sobre-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  max-width: 100vw;
  max-height: 100%;
  border-radius: 8px;
  display: block;
}
@media (max-width: 900px) {
  .sobre-img {
    height: auto;
    min-height: 80px;
    max-height: 180px;
    max-width: 100vw;
  }
}
@media (max-width: 700px) {
  .sobre-img {
    max-height: 120px;
  }
}
@media (max-width: 500px) {
  .sobre-img {
    max-height: 80px;
  }
}
.sobre-content {
  display: flex;
  flex-direction: column;
  gap: 32px;
  flex: 1;
}
.sobre-header {
  display: flex;
  align-items: center;
  gap: 18px;
  border-bottom: 2px solid #e3eaf2;
  padding-bottom: 18px;
}
.sobre-icon {
  font-size: 2.6rem;
  color: #1e88e5;
}
.sobre-header h1 {
  font-size: 2.1rem;
  color:black;
  font-weight: 700;
}
.sobre-section h2 {
  font-size: 1.25rem;
  color: black;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.sobre-section p {
  color: #444;
  font-size: 1.08rem;
  margin-bottom: 0;
}
.servicos-lista, .valores-lista {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.servicos-lista li i {
  color: #1e88e5;
  margin-right: 8px;
}
.cards-row {
  display: flex;
  flex-direction: row;
  gap: 29px;
  margin-top: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 48px; /* Espaço extra para afastar do footer */
}
.sobre-card {
  background: orange;
  border-radius: 14px;
  box-shadow: 0 2px 12px rgba(30,136,229,0.07);
  padding: 32px 28px 28px 28px;
  flex: 1 1 320px;
  min-width: 60px;
  max-width: 420px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  font-size: 1.01rem;
  transition: max-width 0.3s, padding 0.3s, font-size 0.3s;
}
.sobre-card h2 {
  font-size: 1.13rem;
  margin-bottom: 6px;
  color: white;
  display: flex;
  align-items: center;
  gap: 8px;
}
.sobre-card.missao h2 i {
  color:black
}
.sobre-card.visao h2 i {
  color: #43a047;
}
.sobre-card.valores h2 i {
  color: #fbc02d;
}
.sobre-card ul {
  margin: 0;
  padding-left: 18px;
  color: #444;
  font-size: 1.01rem;
}
.tabela {
  margin: 32px auto 24px auto;
  background: linear-gradient(90deg, #fffbe7 60%, #f3c97a 100%);
  border-radius: 16px;
  box-shadow: 0 4px 18px rgba(30,136,229,0.10);
  padding: 32px 24px 24px 24px;
  max-width: 800px;
  text-align: center;
  transition: box-shadow 0.2s;
}
.tabela:hover {
  box-shadow: 0 8px 32px rgba(30,136,229,0.18);
}
.tabela h2 {
  color: #1e88e5;
  margin-bottom: 18px;
  font-size: 1.35rem;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
}
.tabela-destinos {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  margin-top: 10px;
  background: #fff;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 2px 8px rgba(243,201,122,0.10);
}
.tabela-destinos th, .tabela-destinos td {
  border: none;
  padding: 14px 18px;
  font-size: 1.08rem;
  text-align: center;
}
.tabela-destinos th {
  background: #f3c97a;
  color: #333;
  font-weight: 700;
  font-size: 1.12rem;
  letter-spacing: 0.5px;
}
.tabela-destinos tr {
  transition: background 0.2s;
}
.tabela-destinos tr:nth-child(even) {
  background: #fff6e0;
}
.tabela-destinos tr:nth-child(odd) {
  background: #fff;
}
.tabela-destinos tr:hover {
  background: #ffe0a3;
}
@media (max-width: 1200px) {
  .sobre-container {
    gap: 18px;
    height: auto;
    padding: 24px 2vw 24px 2vw;
  }
  .sobre-img-box {
    width: 45vw;
    max-width: 400px;
    height: 320px;
  }
}
@media (max-width: 900px) {
  .sobre-container {
    flex-direction: column;
    align-items: center;
    gap: 18px;
    padding: 16px 4vw 18px 4vw;
    height: auto;
  }
  .sobre-img-box {
    width: 90vw;
    max-width: 500px;
    height: 180px;
  }
  .cards-row {
    flex-direction: column;
    gap: 18px;
    align-items: stretch;
  }
  .sobre-card {
    min-width: 0;
    max-width: 100%;
    width: 100%;
    align-items: flex-start;
    padding: 18px 10px 16px 10px;
    font-size: 0.97rem;
  }
  .tabela {
    padding: 16px 4vw 16px 4vw;
    max-width: 98vw;
  }
  .tabela-destinos th, .tabela-destinos td {
    padding: 8px 4px;
    font-size: 0.98rem;
  }
}
@media (max-width: 700px) {
  .sobre-card {
    padding: 12px 4px 10px 4px;
    font-size: 0.93rem;
  }
}
@media (max-width: 500px) {
  .sobre-card {
    padding: 8px 2px 8px 2px;
    font-size: 0.89rem;
  }
}
</style>
