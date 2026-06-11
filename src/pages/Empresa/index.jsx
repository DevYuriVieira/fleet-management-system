import React, { useState } from 'react';
import {
  EmpresaContainer,
  CabecalhoSecao,
  TituloPagina,
  SubtituloPagina,
  GridConsultas,
  CardConsulta,
  CardConsultaHeader,
  CardConsultaIcone,
  CardConsultaTitulo,
  CardConsultaDescricao,
  InputGroup,
  CampoConsulta,
  BotaoBuscar,
  MensagemStatus,
} from './style';

const formatarCNPJ = (v) =>
  v.replace(/\D/g, '').slice(0, 14)
    .replace(/^(\d{2})(\d)/, '$1.$2')
    .replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
    .replace(/\.(\d{3})(\d)/, '.$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');

const formatarCEP = (v) =>
  v.replace(/\D/g, '').slice(0, 8).replace(/^(\d{5})(\d)/, '$1-$2');

const Empresa = () => {
  const [cnpj, setCnpj] = useState('');
  const [cep, setCep] = useState('');
  const [mensagem, setMensagem] = useState('');

  const consultar = () => setMensagem('Funcionalidade em desenvolvimento.');

  return (
    <EmpresaContainer>
      <CabecalhoSecao>
        <TituloPagina>🏢 Dados da Empresa</TituloPagina>
        <SubtituloPagina>
          Consulte informações de CNPJ e CEP para manter os dados empresariais atualizados.
        </SubtituloPagina>
      </CabecalhoSecao>

      <GridConsultas>
        <CardConsulta>
          <CardConsultaHeader>
            <CardConsultaIcone>🏛️</CardConsultaIcone>
            <CardConsultaTitulo>Consulta de CNPJ</CardConsultaTitulo>
          </CardConsultaHeader>
          <CardConsultaDescricao>
            Digite o CNPJ para consultar razão social e situação cadastral.
          </CardConsultaDescricao>
          <InputGroup>
            <CampoConsulta
              placeholder="00.000.000/0000-00"
              value={cnpj}
              onChange={(e) => setCnpj(formatarCNPJ(e.target.value))}
            />
            <BotaoBuscar onClick={consultar}>🔍 Consultar</BotaoBuscar>
          </InputGroup>
        </CardConsulta>

        <CardConsulta>
          <CardConsultaHeader>
            <CardConsultaIcone>📍</CardConsultaIcone>
            <CardConsultaTitulo>Consulta de CEP</CardConsultaTitulo>
          </CardConsultaHeader>
          <CardConsultaDescricao>
            Informe o CEP para buscar logradouro, bairro e cidade.
          </CardConsultaDescricao>
          <InputGroup>
            <CampoConsulta
              placeholder="00000-000"
              value={cep}
              onChange={(e) => setCep(formatarCEP(e.target.value))}
            />
            <BotaoBuscar onClick={consultar}>🔍 Consultar</BotaoBuscar>
          </InputGroup>
        </CardConsulta>
      </GridConsultas>

      {mensagem && <MensagemStatus>{mensagem}</MensagemStatus>}
    </EmpresaContainer>
  );
};

export default Empresa;
