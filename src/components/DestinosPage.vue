<template>
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
</style>
