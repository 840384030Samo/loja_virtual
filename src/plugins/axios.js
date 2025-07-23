"use strict";

import { createApp } from 'vue';
import axios from "axios";

// Configuração base do Axios
const config = {
  baseURL: "http://127.0.0.1:8088/api/",
};

const _axios = axios.create(config);

// Interceptor de requisição
_axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// Interceptor de resposta
_axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

// Criar um plugin para Vue 3
const Plugin = {
  install(app) {
    app.config.globalProperties.$axios = _axios;
  },
};

// Criar e configurar a aplicação Vue 3
const app = createApp({});
app.use(Plugin);

export default Plugin;
