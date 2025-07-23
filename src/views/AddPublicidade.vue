<template>
  <div class="add-publicidade-container">
    <h2>Adicionar Publicidade</h2>
    <form @submit.prevent="handleSubmit" class="publicidade-form">
      <div class="form-group">
        <label for="titulo"><i class="fas fa-heading"></i> Título</label>
        <input type="text" id="titulo" v-model="titulo" required placeholder="Título da publicidade" />
      </div>
      <div class="form-group">
        <label for="tipo"><i class="fas fa-photo-video"></i> Tipo</label>
        <select id="tipo" v-model="tipo" required>
          <option value="imagem">Imagem</option>
          <option value="video">Vídeo</option>
        </select>
      </div>
      <div class="form-group">
        <label for="arquivo">
          <i class="fas fa-upload"></i> Selecione {{ tipo === 'imagem' ? 'uma imagem' : 'um vídeo' }}
        </label>
        <input type="file" id="arquivo" @change="handleFileChange" :accept="tipo === 'imagem' ? 'image/*' : 'video/*'" required />
      </div>
      <div v-if="previewUrl" class="preview">
        <img v-if="tipo === 'imagem'" :src="previewUrl" alt="Pré-visualização" />
        <video v-else controls :src="previewUrl" style="max-width: 100%; max-height: 300px;"></video>
      </div>
      <button type="submit" class="btn-primary">
        <i class="fas fa-plus"></i> Adicionar
      </button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AddPublicidade',
  data() {
    return {
      titulo: '',
      descricao: '',
      tipo: 'imagem',
      arquivo: null,
      previewUrl: null
    };
  },
  methods: {
    handleFileChange(e) {
      const file = e.target.files[0];
      this.arquivo = file;
      if (file) {
        this.previewUrl = URL.createObjectURL(file);
      } else {
        this.previewUrl = null;
      }
    },
    handleSubmit() {
      // Aqui você pode integrar com backend ou emitir evento
      alert('Publicidade adicionada com sucesso!');
      this.titulo = '';
      this.descricao = '';
      this.tipo = 'imagem';
      this.arquivo = null;
      this.previewUrl = null;
    }
  }
};
</script>

<style scoped>
.add-publicidade-container {
  max-width: 400px;
  margin: 40px auto;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 16px rgba(0,0,0,0.08);
  padding: 32px 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.add-publicidade-container h2 {
  margin-bottom: 24px;
  color: #1e88e5;
  font-weight: 700;
}
.publicidade-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.form-group {
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.form-group label {
  font-weight: 500;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
}
input[type="text"], textarea, select {
  border: 1px solid #bdbdbd;
  border-radius: 6px;
  padding: 8px 10px;
  font-size: 1rem;
  outline: none;
  transition: border 0.2s;
}
input[type="text"]:focus, textarea:focus, select:focus {
  border: 1.5px solid #1e88e5;
}
input[type="file"] {
  margin-top: 4px;
}
.preview {
  margin: 12px 0 0 0;
  display: flex;
  justify-content: center;
}
.preview img, .preview video {
  max-width: 100%;
  max-height: 220px;
  border-radius: 8px;
  box-shadow: 0 1px 8px rgba(30,136,229,0.08);
}
.btn-primary {
  background: #1e88e5;
  color: #fff;
  border: none;
  border-radius: 6px;
  padding: 10px 0;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: background 0.2s;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}
.btn-primary:hover {
  background: #1565c0;
}
@media (max-width: 600px) {
  .add-publicidade-container {
    padding: 18px 6px;
    max-width: 98vw;
  }
}
</style>
<!-- Adicione o CSS do Font Awesome no main.js ou index.html se ainda não estiver -->
