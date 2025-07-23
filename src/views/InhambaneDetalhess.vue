<template>
    <div class="pages-container">
      <!-- Carrossel Full-Width 
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
    -->
      <!-- <div style="text-align:center">
        <span class="dot" :class="{ active: currentIndex === 0 }" @click="goToSlide(0)"></span>
        <span class="dot" :class="{ active: currentIndex === 1 }" @click="goToSlide(1)"></span>
        <span class="dot" :class="{ active: currentIndex === 2 }" @click="goToSlide(2)"></span>
      </div> -->
      <div class="bilheteria">
        <SimumadorDestino/>
      </div>
  <div class="cards-container" style="display:flex; flex-wrap:wrap; justify-content:center">
  <div class="card card-horizontal" style="display: flex; flex-direction: row; align-items: stretch; max-width: 900px;  width: 100%; margin-bottom: 39px;">
    <div class="card-image-side" style="flex: 1; display: flex; align-items: center; justify-content: center;  max-width: 410px;">
      <img :src="require('@/assets/gaza.jpg')" alt="Inhambane" class="card-side-img" style="width: 100%; height: 386px; border-radius: 10px 0 0 10px; object-fit: cover;" />
    </div>
    <div class="info" style="flex: 2; padding: 24px 10px; display: flex; flex-direction: column; justify-content: center;">
      <h3 style="font-style: italic; text-align:left; margin-bottom: 12px;">Sobre Inhambane</h3>
      <div class="parg">
        <p>Geografia: Inhambane, localizada no sul de Moçambique, é conhecida por cultura vibrante e beleza natural. Sua capital, também chamada Inhambane, é conhecida como "Terra de Boa Gente". A província é banhada pelo Oceano Índico e possui praias deslumbrantes.</p>
        <p>Atrações: Destacam-se praias como Tofo, Barra e Vilankulo, ideais para mergulho e snorkeling, o Arquipélago de Bazaruto e a Lagoa de Inharrime.</p>
        <p>História: Uma das cidades mais antigas do país, Inhambane tem influências árabes, portuguesas e africanas, e preserva arquitetura colonial.</p>
      </div>
    </div>
  </div >
  <div>
     <LocaisChegada/>
  </div>
 
  </div>
  
      <div class="text-center">
        <h2>Bem-vindo à Inhambane</h2>    
      </div>
  
      <div class="cards-container">
  <!-- Primeira Linha de Cartões -->
  <div class="card" @mouseenter="startCardCarousel(1)" @mouseleave="stopCardCarousel(1)">   
    <div class="slideshows-container">
        <div class="mySlides fade" :class="{ active: currentIndex === 0 }">
          <img src="../assets/tofo1.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Natureza</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 1 }">
          <img src="../assets/hotelTofo.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Two</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 2 }">
          <img src="../assets/beirra.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Three</div> -->
        </div>
        <a class="prev" @click="prevSlide">&#10094;</a>
        <a class="next" @click="nextSlide">&#10095;</a>
      </div>
      <div style="text-align:center">
        <span class="dot" :class="{ active: currentIndex === 0 }" @click="goToSlide(0)"></span>
        <span class="dot" :class="{ active: currentIndex === 1 }" @click="goToSlide(1)"></span>
        <span class="dot" :class="{ active: currentIndex === 2 }" @click="goToSlide(2)"></span>
      </div>
    <div class="card-body">
      <h5 class="card-title">Praia do Tofo</h5>
      <p class="card-text">Perfeito para uma estadia confortável.</p>
      <button class="btn" @click="nextPg">Comprar Bilhete</button>
    </div>
  </div>

  <!-- Replicação da estrutura para outros cartões -->
  <div class="card" @mouseenter="startCardCarousel(2)" @mouseleave="stopCardCarousel(2)">
    <div class="slideshow-container">
        <div class="mySlides fade" :class="{ active: currentIndex === 0 }">
          <img src="../assets/vilanculos-beach-06.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Natureza</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 1 }">
          <img src="../assets/VILANCULOS.b.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Two</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 2 }">
          <img src="../assets/vilank.rest.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Three</div> -->
        </div>
        <a class="prev" @click="prevSlide">&#10094;</a>
        <a class="next" @click="nextSlide">&#10095;</a>
      </div>
      <div style="text-align:center">
        <span class="dot" :class="{ active: currentIndex === 0 }" @click="goToSlide(0)"></span>
        <span class="dot" :class="{ active: currentIndex === 1 }" @click="goToSlide(1)"></span>
        <span class="dot" :class="{ active: currentIndex === 2 }" @click="goToSlide(2)"></span>
      </div>
        <!--  -->
    <div class="card-body">
      <h5 class="card-title">Vilanculos</h5>
      <p class="card-text">Descrição do Cartão 2.</p>
      <button class="btn" @click="nextPg">Comprar Bilhete</button>
    </div>
  </div>
  <div class="card" @mouseenter="startCardCarousel(3)" @mouseleave="stopCardCarousel(3)">   
    <div class="slideshows-container">
        <div class="mySlides fade" :class="{ active: currentIndex === 0 }">
          <img src="../assets/tofo1.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Natureza</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 1 }">
          <img src="../assets/hotelTofo.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Two</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 2 }">
          <img src="../assets/beirra.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Three</div> -->
        </div>
        <a class="prev" @click="prevSlide">&#10094;</a>
        <a class="next" @click="nextSlide">&#10095;</a>
      </div>
      <div style="text-align:center">
        <span class="dot" :class="{ active: currentIndex === 0 }" @click="goToSlide(0)"></span>
        <span class="dot" :class="{ active: currentIndex === 1 }" @click="goToSlide(1)"></span>
        <span class="dot" :class="{ active: currentIndex === 2 }" @click="goToSlide(2)"></span>
      </div>
    <div class="card-body">
      <h5 class="card-title">Praia da Barra</h5>
      <p class="card-text">Perfeito para uma estadia confortável.</p>
      <button class="btn" @click="nextPg">Comprar Bilhete</button>
    </div>
  </div>  

 <div class="card" @mouseenter="startCardCarousel(1)" @mouseleave="stopCardCarousel(1)">   
    <div class="slideshows-container">
        <div class="mySlides fade" :class="{ active: currentIndex === 0 }">
          <img src="../assets/tofo1.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Natureza</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 1 }">
          <img src="../assets/hotelTofo.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Two</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 2 }">
          <img src="../assets/beirra.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Three</div> -->
        </div>
        <a class="prev" @click="prevSlide">&#10094;</a>
        <a class="next" @click="nextSlide">&#10095;</a>
      </div>
      <div style="text-align:center">
        <span class="dot" :class="{ active: currentIndex === 0 }" @click="goToSlide(0)"></span>
        <span class="dot" :class="{ active: currentIndex === 1 }" @click="goToSlide(1)"></span>
        <span class="dot" :class="{ active: currentIndex === 2 }" @click="goToSlide(2)"></span>
      </div>
    <div class="card-body">
      <h5 class="card-title">Ilha de Inhambane</h5>
      <p class="card-text">Perfeito para uma estadia confortável.</p>
      <button class="btn" @click="nextPg">Comprar Bilhete</button>
    </div>
  </div>


   <div class="card" @mouseenter="startCardCarousel(1)" @mouseleave="stopCardCarousel(1)">   
    <div class="slideshows-container">
        <div class="mySlides fade" :class="{ active: currentIndex === 0 }">
          <img src="../assets/tofo1.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Natureza</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 1 }">
          <img src="../assets/hotelTofo.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Two</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 2 }">
          <img src="../assets/beirra.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Three</div> -->
        </div>
        <a class="prev" @click="prevSlide">&#10094;</a>
        <a class="next" @click="nextSlide">&#10095;</a>
      </div>
      <div style="text-align:center">
        <span class="dot" :class="{ active: currentIndex === 0 }" @click="goToSlide(0)"></span>
        <span class="dot" :class="{ active: currentIndex === 1 }" @click="goToSlide(1)"></span>
        <span class="dot" :class="{ active: currentIndex === 2 }" @click="goToSlide(2)"></span>
      </div>
    <div class="card-body">
      <h5 class="card-title">Bazaruto</h5>
      <p class="card-text">Perfeito para uma estadia confortável.</p>
      <button class="btn" @click="nextPg">Comprar Bilhete</button>
    </div>
  </div>

  <!-- Replicação da estrutura para outros cartões -->
  <div class="card" @mouseenter="startCardCarousel(1)" @mouseleave="stopCardCarousel(1)">   
    <div class="slideshows-container">
        <div class="mySlides fade" :class="{ active: currentIndex === 0 }">
          <img src="../assets/tofo1.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Natureza</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 1 }">
          <img src="../assets/hotelTofo.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Two</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 2 }">
          <img src="../assets/beirra.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Three</div> -->
        </div>
        <a class="prev" @click="prevSlide">&#10094;</a>
        <a class="next" @click="nextSlide">&#10095;</a>
      </div>
      <div style="text-align:center">
        <span class="dot" :class="{ active: currentIndex === 0 }" @click="goToSlide(0)"></span>
        <span class="dot" :class="{ active: currentIndex === 1 }" @click="goToSlide(1)"></span>
        <span class="dot" :class="{ active: currentIndex === 2 }" @click="goToSlide(2)"></span>
      </div>
    <div class="card-body">
      <h5 class="card-title">Praia do Tofo</h5>
      <p class="card-text">Perfeito para uma estadia confortável.</p>
      <button class="btn" @click="nextPg">Comprar Bilhete</button>
    </div>
  </div>

  <div class="card" @mouseenter="startCardCarousel(1)" @mouseleave="stopCardCarousel(1)">   
    <div class="slideshows-container">
        <div class="mySlides fade" :class="{ active: currentIndex === 0 }">
          <img src="../assets/tofo1.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Natureza</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 1 }">
          <img src="../assets/hotelTofo.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Two</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 2 }">
          <img src="../assets/beirra.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Three</div> -->
        </div>
        <a class="prev" @click="prevSlide">&#10094;</a>
        <a class="next" @click="nextSlide">&#10095;</a>
      </div>
      <div style="text-align:center">
        <span class="dot" :class="{ active: currentIndex === 0 }" @click="goToSlide(0)"></span>
        <span class="dot" :class="{ active: currentIndex === 1 }" @click="goToSlide(1)"></span>
        <span class="dot" :class="{ active: currentIndex === 2 }" @click="goToSlide(2)"></span>
      </div>
    <div class="card-body">
      <h5 class="card-title">Praia do Tofo</h5>
      <p class="card-text">Perfeito para uma estadia confortável.</p>
      <button class="btn" @click="nextPg">Comprar Bilhete</button>
    </div>
  </div>

 <div class="card" @mouseenter="startCardCarousel(1)" @mouseleave="stopCardCarousel(1)">   
    <div class="slideshows-container">
        <div class="mySlides fade" :class="{ active: currentIndex === 0 }">
          <img src="../assets/tofo1.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Natureza</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 1 }">
          <img src="../assets/hotelTofo.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Two</div> -->
        </div>
        <div class="mySlides fade" :class="{ active: currentIndex === 2 }">
          <img src="../assets/beirra.jpg" style="width:100%;height: 100%;" />
          <!-- <div class="text">Caption Three</div> -->
        </div>
        <a class="prev" @click="prevSlide">&#10094;</a>
        <a class="next" @click="nextSlide">&#10095;</a>
      </div>
      <div style="text-align:center">
        <span class="dot" :class="{ active: currentIndex === 0 }" @click="goToSlide(0)"></span>
        <span class="dot" :class="{ active: currentIndex === 1 }" @click="goToSlide(1)"></span>
        <span class="dot" :class="{ active: currentIndex === 2 }" @click="goToSlide(2)"></span>
      </div>
    <div class="card-body">
      <h5 class="card-title">Praia do Tofo</h5>
      <p class="card-text">Perfeito para uma estadia confortável.</p>
      <button class="btn" @click="nextPg">Comprar Bilhete</button>
    </div>
  </div>
  
  
</div>


      
    </div>
  </template>
  
  <script>
import SimumadorDestino from '@/components/SimumadorDestino.vue';
import LocaisChegada from './LocaisChegada.vue';

  export default {
    name: "HomePage",
    components:{
      LocaisChegada,
      SimumadorDestino
    },
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
      };
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



    
  };
  </script>
  
  
  <style scoped>
  /* Container geral */
  .pages-container {
    width: 100%;
  }
  /* destino e sobre*/
  .parg{
    text-align: left;
    margin: 10px;
  
  }

  .destino{
    text-align: left;
    width: fit-content;
    margin: auto
  }
  /* Slideshow container */
  .slideshows-container {
    width: 100%;
    height: 200px;
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
  
  /* Texto */
  .text-center {
    text-align: center;
    margin-top: 40px;
  }
  
  h2 {
    font-size: 2rem;
  }
  
  p {
    font-size: 1rem;
    margin-top: 10px;
  }
  
  /* Cartões */
  .cards-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin-top: 40px;
  }
  
  .card {
    width: 25%;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    overflow: hidden;
    transition: transform 0.3s ease-in-out;
  }
  
  .card:hover {
    transform: scale(1.05);
  }
  
  .card-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-body {
    padding: 20px;
    text-align: center;
  }
  
  .card-title {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }
  
  .card-text {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  
  .btn {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  /*card*/
  .page-container {
    width: 100%;
  }
  
  .cards-container {
    display: flex;
    justify-content: space-around;
  }
  
  .card {
    width: 23%;
    min-width:250px;
    margin: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .slideshow-container {
    width: 100%;
    height: 200px; /* Ajuste para o tamanho do carrossel dentro dos cartões */
    overflow: hidden;
    position: relative;
    margin: auto;
  }
  
  .mySlides {
    display: none;
  }
  
  .mySlides.active {
    display: block;
  }
  
  .card-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .card-body {
    padding: 20px;
    text-align: center;
  }
  
  .card-title {
    font-size: 1.25rem;
    margin-bottom: 10px;
  }
  
  .card-text {
    font-size: 1rem;
    margin-bottom: 20px;
  }
  
  .btn {
    background-color: orange;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .btn:hover {
    background-color: #0056b3;
  }
  /* media querys */
  @media (max-width: 1084px) {
    .cards-container {
    display: flex;
    justify-content: center;
  }
  
  .card {
    width: 30%;
    min-width:300px;
    margin: 10px;
    border: 1px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
  }
  .bilheteria{
    height: 70px;
    padding: 89px;
  }
}
  </style>
