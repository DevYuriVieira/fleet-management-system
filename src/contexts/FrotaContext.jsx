import React, { createContext, useState, useEffect } from 'react';
import { frotaLocal } from '../data/Dados';
import { getDetalhesVeiculoFipe } from '../services/getDetalhesVeiculo.jsx';

export const FrotaContext = createContext();

export const ProvedorFrota = ({ children }) => {
  const [veiculos, setVeiculos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const carregandoVeiculos = async () => {
      try {
        setCarregando(true);

        const consultaFrota = frotaLocal.map(async (veiculoLocal) => {
          try {
            const dadosFipe = await getDetalhesVeiculoFipe(
              veiculoLocal.tipoVeiculo,
              veiculoLocal.codigoMarca,
              veiculoLocal.codigoModelo,
              veiculoLocal.ano
            );

            return {
              //dados locais
              id: veiculoLocal.id,
              placa: veiculoLocal.placa,
              quilometragem: veiculoLocal.quilometragem,
              descricao: veiculoLocal.descricao,
              imagens: veiculoLocal.imagens,
               status: veiculoLocal.status,
              favoritado: veiculoLocal.favoritado,
              tipoVeiculo: veiculoLocal.tipoVeiculo,
              anoFabricacao: veiculoLocal.ano?.split('-')[0],
              //dados fipe
              marca: dadosFipe.Marca,
              modelo: dadosFipe.Modelo,
              anoModelo: dadosFipe.AnoModelo,
              combustivel: dadosFipe.Combustivel,
              valor: dadosFipe.Valor
            };
          } catch (erroApi) {
            console.error(`Erro ao buscar dados FIPE para o veículo ID ${veiculoLocal.id}:`, erroApi);
            return {
              ...veiculoLocal,
              anoFabricacao: veiculoLocal.ano?.split('-')[0],
              marca: 'Indisponível',
              modelo: "Indisponível",
               anoModelo: '---',
              combustivel: '---',
              valor: "N/A"
            };
          }
        });

        const frotaCompleta = await Promise.all(consultaFrota);
        setVeiculos(frotaCompleta);
      } catch (err) {
        setError('Erro ao processar e carregar os valores da frota.');
      } finally {
        setCarregando(false);
      }
    };

    carregandoVeiculos();
  }, []);

  return (
    <FrotaContext.Provider value={{ veiculos, carregando, error }}>
      {children}
    </FrotaContext.Provider>
  );
};