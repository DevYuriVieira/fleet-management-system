const pegarImagem = (imgVeiculo) => {
  return new URL(`../assets/${imgVeiculo}`, import.meta.url).href;
};

export const frotaLocal = [
  {
    id: 1,
    tipoVeiculo: "carros",
    codigoMarca: "59",
    codigoModelo: "5940",
    ano: "2014-3",
    placa: "PWA-8192",
    quilometragem: "125.400 km",
    descricao: "Veículo em excelente estado de conservação, com histórico completo de manutenções preventivas. Acompanha manual do proprietário e chave reserva. Pneus em boas condições e documentação rigorosamente em dia.",
    situacaoManutencao: "Em dia",
    favoritado: false,
    imagens: [pegarImagem("")]
  },
  {
    id: 2,
    tipoVeiculo: "carros",
    codigoMarca: "29",
    codigoModelo: "7507",
    ano: "2017-5",
    placa: "QTP3A12",
    quilometragem: "89.000 km",
    descricao: "Veículo de segundo proprietário, com laudo cautelar aprovado. Apresenta excelente estado de conservação interno e externo. Sistemas de climatização e elétrica em perfeito funcionamento. Excelente relação custo-benefício.",
    situacaoManutencao: "Próxima",
    favoritado: false,
    imagens: [pegarImagem("")]
  },
  {
    id: 3,
    tipoVeiculo: "carros",
    codigoMarca: "56",
    codigoModelo: "9326",
    ano: "2025-5",
    placa: "RXI-1029",
    quilometragem: "2.500 km",
    descricao: "Veículo seminovo com baixíssima quilometragem, em padrão de concessionária e ainda sob vigência da garantia de fábrica. Único dono, com interior impecável e estrutura livre de avarias.",
    situacaoManutencao: "Vencida",
    favoritado: false,
    imagens: [pegarImagem("")]
  },
  {
    id: 4,
    tipoVeiculo: "carros",
    codigoMarca: "25",
    codigoModelo: "10366",
    ano: "2024-6",
    placa: "SDA9J34",
    quilometragem: "18.500 km",
    descricao: "Veículo seminovo em perfeitas condições operacionais e estéticas. Versão com pacote completo de opcionais, incluindo central multimídia, câmera de ré e sensores de estacionamento. Primeira revisão realizada em concessionária autorizada.",
    situacaoManutencao: "Em dia",
    favoritado: false,
    imagens: [pegarImagem("")]
  },
  {
    id: 5,
    tipoVeiculo: "carros",
    codigoMarca: "123",
    codigoModelo: "5190",
    ano: "2025-1",
    placa: "FWB-4451",
    quilometragem: "800 km",
    descricao: "Veículo recém-faturado com quilometragem irrisória. Condição de zero quilômetro, com IPVA quitado. Excelente oportunidade para aquisição imediata, sem necessidade de aguardar prazos de fabricação.",
    situacaoManutencao: "Vencida",
    favoritado: false,
    imagens: [pegarImagem("")]
  },
  {
    id: 6,
    tipoVeiculo: "carros",
    codigoMarca: "59",
    codigoModelo: "5940",
    ano: "2014-3",
    placa: "JKL5C88",
    quilometragem: "142.000 km",
    descricao: "Veículo com conjunto mecânico inteiramente revisado e confiável. Motor e transmissão operando em parâmetros ideais. Apresenta marcas de uso condizentes com o ano de fabricação, mantendo estrutura íntegra.",
    situacaoManutencao: "Próxima",
    favoritado: false,
    imagens: [pegarImagem("")]
  },
  {
    id: 7,
    tipoVeiculo: "motos",
    codigoMarca: "99",
    codigoModelo: "5633",
    ano: "2015-1",
    placa: "OQP-1122",
    quilometragem: "68.000 km",
    descricao: "Motocicleta com excelente eficiência energética e baixo custo de manutenção, ideal para mobilidade urbana e logística. Componentes de transmissão substituídos recentemente e fluídos novos. Documentação regularizada.",
    situacaoManutencao: "Em dia",
    favoritado: false,
    imagens: [pegarImagem("")]
  },
  {
    id: 8,
    tipoVeiculo: "motos",
    codigoMarca: "101",
    codigoModelo: "6766",
    ano: "2017-1",
    placa: "NEP8B55",
    quilometragem: "45.300 km",
    descricao: "Motocicleta em estado de conservação premium, com uso restrito e armazenamento em ambiente coberto. Equipada com sistema de exaustão esportivo e pneus novos. Alto padrão de acabamento.",
    situacaoManutencao: "Vencida",
    favoritado: false,
    imagens: [pegarImagem("")]
  },
  {
    id: 9,
    tipoVeiculo: "caminhoes",
    codigoMarca: "109",
    codigoModelo: "10435",
    ano: "2024-3",
    placa: "MHZ-6014",
    quilometragem: "85.000 km",
    descricao: "Veículo comercial pesado de único dono, com plano de manutenção ativo na rede autorizada. Implemento tipo baú em perfeitas condições de vedação e estrutura. Cabine leito em estado de nova.",
    situacaoManutencao: "Em dia",
    favoritado: false,
    imagens: [pegarImagem("")]
  },
  {
    id: 10,
    tipoVeiculo: "caminhoes",
    codigoMarca: "116",
    codigoModelo: "5849",
    ano: "2020-3",
    placa: "KJL2G91",
    quilometragem: "315.000 km",
    descricao: "Caminhão trucado (6x2) com procedência comprovada e histórico livre de sinistros. Motor recentemente retificado com peças originais e conjunto de pneus em conformidade com as normas de segurança. Equipamento em pleno estado de funcionamento, pronto para operação logística imediata.",
    situacaoManutencao: "Próxima",
    favoritado: false,
    imagens: [pegarImagem("")]
  }
];