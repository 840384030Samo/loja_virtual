<template>
  <div class="container">
    <div v-if="loading" class="loading">Carregando...</div>

    <div v-else>
      <!-- Seção da tabela -->
      <div class="tabela-container">
        <h2 class="titulo-tabela">Destinos Disponíveis</h2> <!-- Novo título acima da tabela -->
        
        <table class="tabela">
          <thead>
            <tr>
              <th><i class="fas fa-map-marker-alt"></i> Partida</th>
              <th><i class="fas fa-money-bill-wave"></i> Valor (MT)</th>
              <th><i class="fas fa-map-signs"></i> Chegada</th>
              <th><i class="fas fa-clock"></i> Hora</th>
              <th><i class="fas fa-shopping-cart"></i> Ação</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(destino, index) in destinos" :key="index">
              <td>{{ partida }}</td>
              <td>{{ destino[1] }} MT</td>
              <td>{{ destino[0] }}</td>
              <td>{{ destino[2] }}</td>
              <td>
                <button @click="comprar(destino)" class="btn-buy">
                  <span>Comprar</span> 🛒
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  setup() {
    const partida = ref("");
    const destinos = ref([]);
    const loading = ref(true);

    // Função para buscar os dados do backend
    const fetchDados = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8088/api/provincias/3");
        const data = response.data;

        console.log("Dados recebidos:", data.pontochegada);

        partida.value = data.pontopartida;
        destinos.value = JSON.parse(data.pontochegada);

        loading.value = false;
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
        loading.value = false;
      }
    };

    // Função de compra
    const comprar = (destino) => {
      alert(`Você comprou um ingresso de ${partida.value} para ${destino[0]} no valor de ${destino[1]} MT.`);
    };

    // Carrega os dados ao iniciar o componente
    onMounted(fetchDados);

    return {
      partida,
      destinos,
      loading,
      comprar,
    };
  },
};
</script>

<style scoped>
/* Estilos gerais */
.container {
  padding: 25px;
  max-width: 800px;
  margin: 0 auto;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  color: #007bff;
}

/* Tabela */
.tabela-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

/* Novo título acima da tabela */
.titulo-tabela {
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-weight: bold;
}

.tabela {
  width: 100%;
  max-width: 700px;
  border-collapse: collapse;
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Estilizando cabeçalho da tabela */
th {
  background-color: #007bff;
  color: white;
  padding: 12px;
  text-transform: uppercase;
}

/* Estilizando células */
td {
  padding: 12px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  text-align: center;
}

/* Botão de compra */
.btn-buy {
  padding: 10px 16px;
  background-color: #ff7f00;
  color: white;
  font-size: 14px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.btn-buy:hover {
  background-color: #218838;
}

.loading {
  text-align: center;
  font-size: 18px;
}
</style>
