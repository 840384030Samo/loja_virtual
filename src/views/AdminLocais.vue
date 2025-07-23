<template>
    <div class="admin-layout">
      <!-- Barra Lateral -->
      <aside class="sidebar">
        <h2>Administração</h2>
        <ul>
          <li v-for="provincia in provincias" :key="provincia" @click="selecionarProvincia(provincia)">
            {{ provincia }}
          </li>
        </ul>
      </aside>
  
      <!-- Conteúdo Principal -->
      <main class="content">
        <h1>Gerir Destinos - {{ provinciaSelecionada || 'Selecione uma Província' }}</h1>
  
        <div v-if="provinciaSelecionada">
          <!-- Formulário de Adição -->
          <form @submit.prevent="adicionarDestino">
            <input v-model="novoDestino" placeholder="Adicionar destino" required />
            <input v-model="valorDestino" type="number" placeholder="Valor" required />
            <input v-model="horaDestino" type="time" required />
            <button type="submit">Adicionar</button>
          </form>
  
          <!-- Lista de Destinos -->
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Destino</th>
                <th>Valor MTs</th>
                <th>Hora</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(destino, index) in destinos" :key="index">
                <td>{{ index + 1 }}</td>
                <td>{{ destino[0] }}</td>
                <td>{{ destino[1] }}</td>
                <td>{{ destino[2] }}</td>
                <td>
                  <button @click="removerDestino(destino[0], destino[1], destino[2])">Remover</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    data() {
      return {
        provincias: ["Maputo", "Gaza", "Inhambane", "Sofala", "Zambézia", "Nampula", "Tete", "Niassa", "Cabo Delgado"],
        provinciaSelecionada: null,
        destinos: [],
        novoDestino: "",
        valorDestino: 0,
        horaDestino: "",
        prov_id: null,
        loc: [
          { id: 1, local: "Maputo" },
          { id: 2, local: "Gaza" },
          { id: 3, local: "Inhambane" },
          { id: 4, local: "Sofala" },
          { id: 5, local: "Zambézia" },
          { id: 6, local: "Nampula" },
          { id: 7, local: "Tete" },
          { id: 8, local: "Niassa" },
          { id: 9, local: "Cabo Delgado" },
        ],
        apiUrl: "http://127.0.0.1:8088/api/provincias",
      };
    },
    methods: {
      async selecionarProvincia(provincia) {
        this.provinciaSelecionada = provincia;
        const provObj = this.loc.find((item) => item.local === provincia);
        this.prov_id = provObj ? provObj.id : null;
  
        if (this.prov_id) {
          await this.carregarDestinos();
        }
      },
      async carregarDestinos() {
        try {
          const response = await axios.get(`${this.apiUrl}/${this.prov_id}`);
          this.destinos = response.data.pontochegada ? JSON.parse(response.data.pontochegada) : [];
        } catch (error) {
          console.error("Erro ao carregar destinos:", error);
          this.destinos = [];
        }
      },
      async adicionarDestino() {
        if (!this.novoDestino.trim() || !this.prov_id || !this.valorDestino || !this.horaDestino) return;
  
        try {
          await axios.put(`${this.apiUrl}/update/p/${this.prov_id}`, {
            destino: this.novoDestino,
            valor: this.valorDestino,
            hora: this.horaDestino,
          });
  
          this.destinos.push([this.novoDestino, this.valorDestino, this.horaDestino]);
  
          // Resetar campos do formulário
          this.novoDestino = "";
          this.valorDestino = 0;
          this.horaDestino = "";
        } catch (error) {
          console.error("Erro ao adicionar destino:", error);
        }
      },
      async removerDestino(destino, valor, hora) {
        try {
          await axios.put(`${this.apiUrl}/removerDestino/${this.prov_id}`, {
            destino,
            valor,
            hora,
          });
  
          this.destinos = this.destinos.filter((d) => !(d[0] === destino && d[1] === valor && d[2] === hora));
  
          console.log("Destino removido com sucesso!");
        } catch (error) {
          console.error("Erro ao remover destino:", error);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .admin-layout {
    display: flex;
    min-height: 100vh;
    background: #f4f6fa;
    margin: 100px auto;
    max-width: 1100px;
    box-shadow: 0 2px 16px rgba(0,0,0,0.06);
    border-radius: 16px;
  }
  
  .sidebar {
    width: 220px;
    background: #2c3e50;
    color: white;
    padding: 30px 18px 18px 18px;
    min-height: 100vh;
    box-shadow: 2px 0 8px rgba(0,0,0,0.04);
    border-top-left-radius: 16px;
    border-bottom-left-radius: 16px;
  }
  
  .sidebar h2 {
    font-size: 1.2rem;
    margin-bottom: 16px;
    font-weight: 700;
    letter-spacing: 1px;
  }
  
  .sidebar ul {
    list-style: none;
    padding: 0;
  }
  
  .sidebar li {
    padding: 10px 8px;
    cursor: pointer;
    border-radius: 6px;
    margin-bottom: 6px;
    transition: 0.2s;
    font-size: 1rem;
  }
  
  .sidebar li:hover, .sidebar li.selected {
    background: #34495e;
    color: #4CAF50;
  }
  
  .content {
    flex: 1;
    padding: 36px 24px 24px 24px;
    min-width: 0;
    border-top-right-radius: 16px;
    border-bottom-right-radius: 16px;
    background: #fff;
  }
  
  .content h1 {
    font-size: 1.3rem;
    margin-bottom: 20px;
    color: #2c3e50;
    font-weight: 700;
  }
  
  form {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    align-items: flex-end;
    margin-bottom: 22px;
    background: #f7faff;
    padding: 18px 12px;
    border-radius: 10px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.03);
  }
  
  form input[type="text"], form input[type="number"], form input[type="time"] {
    padding: 8px 10px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 1rem;
    min-width: 120px;
  }
  
  form button[type="submit"] {
    background: #27ae60;
    color: white;
    border: none;
    border-radius: 6px;
    padding: 10px 18px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
  }
  
  form button[type="submit"]:hover {
    background: #219150;
  }
  
  table {
    width: 100%;
    border-collapse: collapse;
    background: #fafbfc;
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 1px 4px rgba(0,0,0,0.03);
    margin-top: 10px;
  }
  
  th, td {
    padding: 10px 8px;
    text-align: left;
    font-size: 0.98rem;
  }
  
  th {
    background: #f4f4f4;
    font-weight: 600;
    color: #2c3e50;
  }
  
  td button {
    background: #c0392b;
    color: #fff;
    border: none;
    border-radius: 6px;
    padding: 7px 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
  }
  
  td button:hover {
    background: #a93226;
  }
  
  @media (max-width: 900px) {
    .admin-layout {
      flex-direction: column;
      max-width: 100vw;
      border-radius: 0;
      box-shadow: none;
      margin: 0;
    }
    .sidebar {
      width: 100vw;
      min-height: unset;
      box-shadow: none;
      border-radius: 0;
      padding: 18px 10px;
    }
    .content {
      padding: 18px 6px 18px 6px;
      border-radius: 0;
    }
    form {
      flex-direction: column;
      gap: 8px;
      padding: 10px 4px;
    }
    th, td {
      padding: 7px 4px;
    }
  }
  </style>
