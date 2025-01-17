<template>
    <div class="carousel-container">
      <!-- Botão de Navegação Anterior -->
      <button class="carousel-nav prev" @click="prevSlide">❮</button>
  
      <!-- Carrossel -->
      <div class="carousel-wrapper" :style="{ transform: `translateX(-${this.currentIndex * 33.33}%)` }">
        <div class="carousel-slide" v-for="(item, index) in items" :key="index">
          <div class="card">
            <img :src="item.image" :alt="item.title" class="card-image" />
            <div class="card-content">
              <h3>{{ item.title }}</h3>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Botão de Navegação Próxima -->
      <button class="carousel-nav next" @click="nextSlide">❯</button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // Lista de cards com imagem, título e descrição
        items: [
          { image: "https://via.placeholder.com/300x200?text=Card+1", title: "Card 1", description: "Descrição do Card 1" },
          { image: "https://via.placeholder.com/300x200?text=Card+2", title: "Card 2", description: "Descrição do Card 2" },
          { image: "https://via.placeholder.com/300x200?text=Card+3", title: "Card 3", description: "Descrição do Card 3" },
          { image: "https://via.placeholder.com/300x200?text=Card+4", title: "Card 4", description: "Descrição do Card 4" },
          { image: "https://via.placeholder.com/300x200?text=Card+5", title: "Card 5", description: "Descrição do Card 5" },
          { image: "https://via.placeholder.com/300x200?text=Card+6", title: "Card 6", description: "Descrição do Card 6" }
        ],
        currentIndex: 0, // Índice do slide atual
        autoSlideInterval: null, // Referência para o intervalo de auto-slide
      };
    },
    methods: {
      // Mover para o próximo slide (1 card de cada vez)
      nextSlide() {
  // Se estiver no final da lista, vai para o primeiro conjunto de 3 slides
  if (this.currentIndex + 3 >= this.items.length) {
    this.currentIndex = 0;
  } else {
    this.currentIndex++;
  }
}
,
      // Mover para o slide anterior (1 card de cada vez)
      prevSlide() {
        if (this.currentIndex > 0) {
          this.currentIndex--;
        } else {
          this.currentIndex = this.items.length - 3; // Vai para o último conjunto de 3
        }
      },
  
      // Iniciar o movimento automático do carrossel
      startAutoSlide() {
        // Adiciona um intervalo para mover o carrossel automaticamente
        this.autoSlideInterval = setInterval(() => {
          this.nextSlide(); // Avança para o próximo slide
        }, 3000); // Muda a cada 3 segundos
      },
  
      // Parar o movimento automático do carrossel
      stopAutoSlide() {
        // Limpa o intervalo quando não for mais necessário
        if (this.autoSlideInterval) {
          clearInterval(this.autoSlideInterval);
        }
      }
    },
    mounted() {
      // Quando o componente for montado, inicia o movimento automático
      this.startAutoSlide();
    },
    beforeUnmount() {
      // Quando o componente for destruído, para o movimento automático
      this.stopAutoSlide();
    }
  };
  </script>
  
  <style scoped>
  /* Estilo básico do carrossel */
  .carousel-container {
    position: relative;
    width: 80%;
    max-width: 1000px;
    margin: 0 auto;
    overflow: hidden;
    display: flex;
    align-items: center;
  }
  
  .carousel-wrapper {
    display: flex;
    transition: transform 0.5s ease-in-out;
  }
  
  .carousel-slide {
    min-width: 33.33%; /* Exibe 3 cards ao mesmo tempo */
    display: flex;
    justify-content: center;
  }
  
  .card {
    width: 100%;
    margin: 0 10px;
    background-color: white;
    border-radius: 10px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    transition: transform 0.3s ease;
  }
  
  .card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-content {
    padding: 20px;
  }
  
  .card-content h3 {
    margin-bottom: 10px;
    font-size: 18px;
  }
  
  .card-content p {
    font-size: 14px;
    color: #555;
  }
  
  .carousel-nav {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    font-size: 2rem;
    border: none;
    padding: 10px;
    cursor: pointer;
    z-index: 10;
    transition: background-color 0.3s;
  }
  
  .carousel-nav:hover {
    background-color: rgba(0, 0, 0, 0.7);
  }
  
  .carousel-nav.prev {
    left: 10px;
  }
  
  .carousel-nav.next {
    right: 10px;
  }
  </style>
  