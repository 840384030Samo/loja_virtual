<template>
<!-- carosel  -->

<div class="slideshows-container">
        <div class="mySlides fade" :class="{ active: currentIndex === 0 }">
          <img src="../assets/inhambanee.jpg" style="width:100%;height: 100%;" />
          <div class="text">Natureza</div>
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 1 }">
          <img src="../assets/maputoo.jpg" style="width:100%;height: 100%;" />
          <div class="text">Caption Two</div>
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 2 }">
          <img src="../assets/beirra.jpg" style="width:100%;height: 100%;" />
          <div class="text">Caption Three</div>
        </div>
        <a class="prev" @click="prevSlide">&#10094;</a>
        <a class="next" @click="nextSlide">&#10095;</a>
      </div>
  
      <div style="text-align:center">
        <span class="dot" :class="{ active: currentIndex === 0 }" @click="goToSlide(0)"></span>
        <span class="dot" :class="{ active: currentIndex === 1 }" @click="goToSlide(1)"></span>
        <span class="dot" :class="{ active: currentIndex === 2 }" @click="goToSlide(2)"></span>
      </div>

  <div class="destinos-section">
    <h2>Destinos de Moçambique</h2>

    <div class="cards-container">
      <div v-for="(destino, index) in destinos" :key="index" class="card">
        <img :src="destino.imagem" :alt="destino.nome" class="card-image" />
        <div class="card-content">
          <h3>{{ destino.nome }}</h3>
          <p>{{ destino.descricao }}</p>
          <button @click="verMais(destino.nome)">Ver mais</button>
        </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import maputoImage from '../assets/maputoo.jpg';
import zambeziaImage from '../assets/gaza.jpg';
import gazaImage from '../assets/gaza.jpg';
import InhambaneImage from '../assets/inha4.jpg';
import sofalaImage from '../assets/beirra.jpg';
import manicaImage from '../assets/chimoio.jpg';
import teteImage from '../assets/tete.jpg';
import caboDelgadoImage from '../assets/caboDelgado.jpg';
import niassaImage from '../assets/niassa2.jpg';

export default {
  data() {
    return {
      currentIndex: 0,  // Índice geral para o carrossel
        totalSlides: 3,  // Total de slides
        currentCardIndex1: 0,  // Índice do carrossel do cartão 1
        currentCardIndex2: 0,  // Índice do carrossel do cartão 2
        currentCardIndex3: 0,  // Índice do carrossel do cartão 3
        cardIntervals: {  // Armazena os intervalos de cada cartão
          1: null,
          2: null,
          3: null,
        },
        


      destinos: [
        {
          nome: "Maputo",
          imagem: maputoImage,
          descricao: "A capital de Moçambique, Maputo, é conhecida pela sua costa e cultura vibrante.",
        },
        {
          nome: "Gaza",
          imagem: gazaImage,
          descricao: "A província de Gaza possui belas praias e uma rica cultura local.",
        },
        {
          nome: "Inhambane",
          imagem: InhambaneImage,
          descricao: "A província de Zambézia é famosa pelos seus rios e belas paisagens naturais.",
        },
        {
          nome: "Sofala (Beirra)",
          imagem: sofalaImage,
          descricao: "Niassa é uma província rica em biodiversidade e com grandes parques nacionais.",
        },
        {
          nome: "Manica (Chimoio)",
          imagem: manicaImage,
          descricao: "A capital de Moçambique, Maputo, é conhecida pela sua costa e cultura vibrante.",
        },
        {
          nome: "Zambézia",
          imagem: zambeziaImage,
          descricao: "A província de Zambézia é famosa pelos seus rios e belas paisagens naturais.",
        },
        {
          nome: "Tete",
          imagem: teteImage,
          descricao: "Niassa é uma província rica em biodiversidade e com grandes parques nacionais.",
        },
        {
          nome: "Gaza",
          imagem: gazaImage,
          descricao: "A província de Gaza possui belas praias e uma rica cultura local.",
        },
        {
          nome: "Nampula",
          imagem: maputoImage,
          descricao: "A capital de Moçambique, Maputo, é conhecida pela sua costa e cultura vibrante.",
        },
        {
          nome: "Zambézia",
          imagem: zambeziaImage,
          descricao: "A província de Zambézia é famosa pelos seus rios e belas paisagens naturais.",
        },
        {
          nome: "Niassa",
          imagem: niassaImage,
          descricao: "Niassa é uma província rica em biodiversidade e com grandes parques nacionais.",
        },
        {
          nome: "Cabo Delgado",
          imagem: caboDelgadoImage,
          descricao: "A província de Gaza possui belas praias e uma rica cultura local.",
        },
        
      ],
    };
  },
  methods: {
    verMais(destinoNome) {
      if(destinoNome==="Maputo"){
        this.$router.push('/maputodetalhes');        
      }
   
      if(destinoNome==="Gaza"){
        this.$router.push('/gazadetalhes');   
    }
    if(destinoNome==="Tete"){
        this.$router.push('/tetedetalhes');   
    }
    if(destinoNome==="Inhambane"){
        this.$router.push('/inhambanedetalhess');   
    }
    },

    methods: {
      nextPg() {
        this.$router.push('/dados');
      },
  
      // Navegação para o próximo slide geral
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
      },
  
      // Navegação para o slide anterior geral
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
      },
  
      // Navegação para um slide específico geral
      goToSlide(index) {
        this.currentIndex = index;
      },
  
      // Iniciar o carrossel de um cartão específico
      startCardCarousel(cardNumber) {
        this.cardIntervals[cardNumber] = setInterval(() => {
          this[`nextCardSlide${cardNumber}`]();
        }, 3000);
      },
  
      // Parar o carrossel de um cartão específico
      stopCardCarousel(cardNumber) {
        clearInterval(this.cardIntervals[cardNumber]);
      },
  
      // Navegação para o próximo slide do carrossel do cartão 1
      nextCardSlide1() {
        this.currentCardIndex1 = (this.currentCardIndex1 + 1) % this.totalSlides;
      },
  
      // Navegação para o slide anterior do carrossel do cartão 1
      prevCardSlide1() {
        this.currentCardIndex1 = (this.currentCardIndex1 - 1 + this.totalSlides) % this.totalSlides;
      },
  
      // Navegação para o próximo slide do carrossel do cartão 2
      nextCardSlide2() {
        this.currentCardIndex2 = (this.currentCardIndex2 + 1) % this.totalSlides;
      },
  
      // Navegação para o slide anterior do carrossel do cartão 2
      prevCardSlide2() {
        this.currentCardIndex2 = (this.currentCardIndex2 - 1 + this.totalSlides) % this.totalSlides;
      },
  
      // Navegação para o próximo slide do carrossel do cartão 3
      nextCardSlide3() {
        this.currentCardIndex3 = (this.currentCardIndex3 + 1) % this.totalSlides;
      },
  
      // Navegação para o slide anterior do carrossel do cartão 3
      prevCardSlide3() {
        this.currentCardIndex3 = (this.currentCardIndex3 - 1 + this.totalSlides) % this.totalSlides;
      },
    },
  
    mounted() {
      // Inicia os carrosséis automaticamente
      setInterval(this.nextSlide, 3000);
    },
  
  },
};
</script>

<style scoped>
.destinos-section {
  padding: 30px;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 20px;
}

.cards-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px !important;
  margin: auto;
}

.card {
  width: 280px;
  border-radius: 10px;
  border: 1px solid #ddd;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.card:hover {
  transform: translateY(-10px);
}

.card-image {
  width: 100%;
  height: 180px;
  object-fit: cover;
}

.card-content {
  padding: 15px;
}

.card-content h3 {
  font-size: 1.4rem;
  margin-bottom: 10px;
}

.card-content p {
  font-size: 1rem;
  margin-bottom: 15px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}




   /* Slideshow container */
   .slideshows-container {
    width: 100%;
    height: 500px;
    overflow: hidden;
    position: relative;
    margin: auto;
  }
  
  /* Hide the images by default */
  .mySlides {
    display: none;
  }
  .mySlides img{
    min-height: 200px !important;
  }
  
  .mySlides.active {
    display: block;
  }
  
  /* Next & previous buttons */
  .prev{
    float: left;
    left: 0
  }
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 30%;
    width: auto;
    margin-top: -22px;
    padding: 16px;
    color: white;
    font-weight: bold;
    font-size: 18px;
    transition: 0.6s ease;
    border-radius: 0 3px 3px 0;
    user-select: none;
  }
  
  /* Position the "next button" to the right */
  .next {
    right: 0;
    border-radius: 3px 0 0 3px;
  }
  
  /* On hover, add a black background color with a little bit see-through */
  .prev:hover,
  .next:hover {
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  /* Caption text */
  .text {
    color: #f2f2f2;
    font-size: 15px;
    padding: 8px 12px;
    position: absolute;
    bottom: 8px;
    width: 100%;
    text-align: center;
  }
  
  /* Number text (1/3 etc) */
  .numbertext {
    color: #f2f2f2;
    font-size: 12px;
    padding: 8px 12px;
    position: absolute;
    top: 0;
  }
  
  /* The dots/bullets/indicators */
  .dot {
    cursor: pointer;
    height: 9px;
    width: 9px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }
  
  .active,
  .dot:hover {
    background-color: #717171;
  }
  
  /* Fading animation */
  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }
  
  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
  
</style>
