<template>
       <h3>Publicidade</h3>
  <div class="publicidade-carousel-container">

    
    <div class="carousel">
      <div v-if="publicidades.length" class="carousel-item">
        <img v-if="publicidades[activeIndex].tipo === 'imagem'" :src="publicidades[activeIndex].url" alt="Publicidade" />
        <video v-else controls autoplay loop muted :src="publicidades[activeIndex].url"></video>
      </div>
      <div v-else class="carousel-empty">
        <i class="fas fa-ad"></i> Nenhuma publicidade disponível
      </div>
    </div>
    <!-- Removido os botões de controle -->
  </div>
</template>

<script>
export default {
  name: 'homePublicidade',
  data() {
    return {
      publicidades: [
        // Exemplo de dados. Substitua por dados reais ou integração com backend.
        { tipo: 'imagem', url: require('../assets/gaza.jpg') },
        { tipo: 'imagem', url: require('../assets/vilanculos-beach-06.jpg') },
        { tipo: 'video', url: 'https://www.w3schools.com/html/mov_bbb.mp4' }
      ],
      activeIndex: 0,
      intervalId: null
    };
  },
  mounted() {
    this.startCarousel();
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  },
  methods: {
    startCarousel() {
      this.intervalId = setInterval(() => {
        this.next();
      }, 5000); // Troca a cada 5 segundos
    },
    next() {
      this.activeIndex = (this.activeIndex + 1) % this.publicidades.length;
    },
    prev() {
      this.activeIndex = (this.activeIndex - 1 + this.publicidades.length) % this.publicidades.length;
    }
  }
};
</script>

<style scoped>
.publicidade-carousel-container {
  width: 100%;
  max-width: 1600px;
  margin: 0 auto 32px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 18px 0 12px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.carousel {
  width: 100%;
  min-height: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.carousel-item img, .carousel-item video {
  max-width: 95%;
  max-height: 120px;
  border-radius: 10px;
  box-shadow: 0 1px 8px rgba(30,136,229,0.08);
}
.carousel-empty {
  color: #bdbdbd;
  font-size: 1.2rem;
  display: flex;
  align-items: center;
  gap: 8px;
}
</style>
<!-- Certifique-se de que o Font Awesome está incluído no projeto -->
