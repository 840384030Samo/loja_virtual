<template>
    <div class="admin-container">
      <h1>Visualização de Compras de Bilhetes</h1>
      
      <div v-if="loading" class="loading">Carregando dados...</div>
      
      <div v-else>
        <table class="purchases-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Passageiro</th>
              <th>Origem</th>
              <th>Destino</th>
              <th>Data</th>
              <th>Assento</th>
              <th>Preço (MT)</th>
              <th>Status</th>
              <!-- Coluna para ações, se necessário -->
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="purchase in purchases" :key="purchase.id">
              <td>{{ purchase.id }}</td>
              <td>{{ purchase.passengerName }}</td>
              <td>{{ purchase.departure }}</td>
              <td>{{ purchase.destination }}</td>
              <td>{{ formatDate(purchase.date) }}</td>
              <td>{{ purchase.seat }}</td>
              <td>{{ purchase.price }}</td>
              <td>{{ purchase.status }}</td>
              <td>
                <button class="btn-emola-red" @click="editPurchase(purchase)">Emola</button>
                <button class="btn-emola-orange" @click="editPurchase(purchase)">P Emola</button>
                <button class="btn-emola-blue" @click="editPurchase(purchase)">Emola Azul</button>
                <button class="btn-paypal" @click="editPurchase(purchase)">Paypal</button>
                <button @click="deletePurchase(purchase.id)">Excluir</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AdminTicketPurchases',
    data() {
      return {
        purchases: [],
        loading: true
      };
    },
    created() {
      this.fetchPurchases();
    },
    methods: {
      fetchPurchases() {
        axios.get('http://127.0.0.1:8088/api/ticket-purchases')
          .then(response => {
            // Supondo que a API retorne um array de compras de bilhetes com os campos adequados
            this.purchases = response.data;
          })
          .catch(error => {
            console.error("Erro ao buscar as compras:", error);
          })
          .finally(() => {
            this.loading = false;
          });
      },
      formatDate(dateStr) {
        const date = new Date(dateStr);
        return date.toLocaleDateString('pt-PT');
      },
      editPurchase(purchase) {
        // Lógica para editar a compra, por exemplo, redirecionar para uma página de edição
        alert(`Editar compra ${purchase.id}`);
      },
      deletePurchase(id) {
        // Lógica para excluir a compra, possivelmente com uma confirmação
        if (confirm(`Tem certeza que deseja excluir a compra ${id}?`)) {
          axios.delete(`http://127.0.0.1:8088/api/ticket-purchases/${id}`)
            .then(() => {
              this.purchases = this.purchases.filter(purchase => purchase.id !== id);
              alert('Compra excluída com sucesso.');
            })
            .catch(error => {
              console.error("Erro ao excluir a compra:", error);
            });
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .admin-container {
    max-width: 900px;
    margin: 40px auto;
    padding: 20px;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #333;
  }
  
  .loading {
    text-align: center;
    font-size: 18px;
    margin-top: 20px;
  }
  
  .purchases-table {
    width: 100%;
    border-collapse: collapse;
  }
  
  .purchases-table th,
  .purchases-table td {
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
  }
  
  .purchases-table th {
    background-color: #007bff;
    color: #fff;
    text-transform: uppercase;
  }
  
  .purchases-table tbody tr:nth-child(even) {
    background-color: #f9f9f9;
  }
  
  button {
    padding: 6px 10px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    margin: 2px;
    font-size: 14px;
  }
  
  button:hover {
    opacity: 0.8;
  }
  
  button:first-of-type {
    background-color: #28a745;
    color: white;
  }
  
  button:last-of-type {
    background-color: #dc3545;
    color: white;
  }
  
  .btn-emola-red {
    background-color: #dc3545;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 6px 10px;
    margin: 2px;
    font-size: 14px;
    cursor: pointer;
  }
  .btn-emola-orange {
    background-color: #ff9800;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 6px 10px;
    margin: 2px;
    font-size: 14px;
    cursor: pointer;
  }
  .btn-emola-blue {
    background-color: #2196f3;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 6px 10px;
    margin: 2px;
    font-size: 14px;
    cursor: pointer;
  }
  .btn-paypal {
    background-color: #0070ba;
    color: #fff;
    border: none;
    border-radius: 4px;
    padding: 6px 10px;
    margin: 2px;
    font-size: 14px;
    cursor: pointer;
  }
  .btn-emola-red:hover,
  .btn-emola-orange:hover,
  .btn-emola-blue:hover,
  .btn-paypal:hover {
    opacity: 0.85;
  }
  </style>
