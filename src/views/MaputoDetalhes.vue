<template>
    <div class="page-container">
      <!-- Carrossel Full-Width -->
      <div class="slideshow-container">
        <div
          class="mySlides fade"
          :class="{ active: currentIndex === 0 }"
        >
          <!-- <div class="numbertext">1 / 3</div> -->
          <img src="../assets/maputo.jpg" style="width:100%;height: 100%;" />
          <div class="text">Caption Text</div>
        </div>
  
        <div
          class="mySlides fade"
          :class="{ active: currentIndex === 1 }"
        >
          <!-- <div class="numbertext">2 / 3</div> -->
          <img src="../assets/maputoo.jpg" style="width:100%;height: 100%;" />
          <div class="text">Caption Two</div>
        </div>
  
        <div
          class="mySlides fade"
          :class="{ active: currentIndex === 2 }"
        >
          <!-- <div class="numbertext">3 / 3</div> -->
          <img src="../assets/beirra.jpg" style="width:100%;height: 100%;" />
          <div class="text">Caption Three</div>
        </div>
  
        <!-- Next and previous buttons -->
        <a class="prev" @click="prevSlide">&#10094;</a>
        <a class="next" @click="nextSlide">&#10095;</a>
      </div>
  
      <!-- The dots/circles -->
      <div style="text-align:center">
        <span
          class="dot"
          :class="{ active: currentIndex === 0 }"
          @click="goToSlide(0)"
        ></span>
        <span
          class="dot"
          :class="{ active: currentIndex === 1 }"
          @click="goToSlide(1)"
        ></span>
        <span
          class="dot"
          :class="{ active: currentIndex === 2 }"
          @click="goToSlide(2)"
        ></span>
      </div>
  
      <!-- Texto abaixo do Carrossel -->
      <div class="text-center">
        <h2>Bem-vindo a Maputo</h2>
        <p>Confira a abaixo e explore pontos da ciadade deconteúdo.</p>
      </div>
  
      <!-- Cartões com Imagens e Botões -->
      <div class="cards-container">
        <div class="card">
          <img src="../assets/beirra.jpg" alt="Imagem 1" class="card-img" />
          <div class="card-body">
            <h5 class="card-title">Hotel Gloria</h5>
            <p class="card-text">Perfeito para uma estadia confortavel.</p>
            <button class="btn" @click="nextPg">Comprar Bilhete</button>
          </div>
        </div>
  
        <div class="card">
          <img src="../assets/beirra.jpg" alt="Imagem 2" class="card-img" />
          <div class="card-body">
            <h5 class="card-title">Ponta de Hora</h5>
            <p class="card-text">Descrição do Cartão 2.</p>
            <button class="btn" @click="nextPg">Comprar Bilhete</button>
          </div>
        </div>
  
        <div class="card" >
          <img src="../assets/beirra.jpg" alt="Imagem 3" class="card-img" />
          <div class="card-body">
            <h5 class="card-title">Cartão 3</h5>
            <p class="card-text">Descrição do Cartão 3.</p>
            <button class="btn" @click="nextPg">Comprar Bilhete</button>
          </div>
        </div>
      </div>
   

    ///

    <div class="text-center">
        <h2>Bem-vindo a Maputo</h2>
        <p>Confira a abaixo e explore pontos da ciadade deconteúdo.</p>
      </div>
  
      <!-- Cartões com Imagens e Botões -->
      <div class="cards-container">
        <div class="card">
          <img src="../assets/beirra.jpg" alt="Imagem 1" class="card-img" />
          <div class="card-body">
            <h5 class="card-title">Hotel Gloria</h5>
            <p class="card-text">Perfeito para uma estadia confortavel.</p>
            <button class="btn" @click="nextPg">Comprar Bilhete</button>
          </div>
        </div>
  
        <div class="card">
          <img src="../assets/beirra.jpg" alt="Imagem 2" class="card-img" />
          <div class="card-body">
            <h5 class="card-title">Ponta de Hora</h5>
            <p class="card-text">Descrição do Cartão 2.</p>
            <button class="btn" @click="nextPg">Comprar Bilhete</button>
          </div>
        </div>
  
        <div class="card" >
          <img src="../assets/beirra.jpg" alt="Imagem 3" class="card-img" />
          <div class="card-body">
            <h5 class="card-title">Cartão 3</h5>
            <p class="card-text">Descrição do Cartão 3.</p>
            <button class="btn" @click="nextPg">Comprar Bilhete</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "HomePage",
    data() {
      return {
        currentIndex: 0,
        totalSlides: 3,
      };
    },
    methods: {
      // Move to the next slide
      nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.totalSlides;
      },
      // Move to the previous slide
      prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.totalSlides) % this.totalSlides;
      },
      // Go to a specific slide
      goToSlide(index) {
        this.currentIndex = index;
      },
      nextPg(){
        this.$router.push('/dados');
      }
    },
    mounted() {
      // Start an interval to automatically change slides every 3 seconds
      setInterval(this.nextSlide, 3000);
    },
  };
  </script>
  
  <style scoped>
  /* Container geral */
  .page-container {
    width: 100%;
  }
  
  /* Slideshow container */
  .slideshow-container {
    width: 100%;
    height: 700px;
    overflow: hidden;
    position: relative;
    margin: auto;
  }
  
  /* Hide the images by default */
  .mySlides {
    display: none;
  }
  
  .mySlides.active {
    display: block;
  }
  
  /* Next & previous buttons */
  .prev{
    float: left;
    left: 0;
  }
  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
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
    height: 15px;
    width: 15px;
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
    justify-content: center;
    margin-top: 40px;
    flex-wrap: wrap;
}

.card {
      margin: 10px;
    width: 30%;
    min-width: 300px;
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
  </style>
  