import { api } from "./api/api.jsx";

export const getDetalhesVeiculoFipe = async (tipoVeiculo, codigoMarca, codigoModelo, ano) => {
  try {
    const response = await api.get(`/${tipoVeiculo}/marcas/${codigoMarca}/modelos/${codigoModelo}/anos/${ano}`);
    return response.data;
  } catch (error) {
    console.error("Erro no Service da FIPE:", error);
    throw error; 
  }
};