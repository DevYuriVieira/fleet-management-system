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
    favoritado: false,
    imagens: [pegarImagem("https://http2.mlstatic.com/D_NQ_NP_986520-MLB109092821302_042026-O-volkswagen-amarok-highcd-20-16v-tdi-4x4-dies-aut.webp")]
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
    favoritado: false,
    imagens: [pegarImagem("https://carango.com.br/f.php?w=810&h=620&cc=0&zc=1&src=upload/ver31/veiculos/2022/10/jeep-renegade-2017-1-8-16v-flex-sport-4p-automatico-gasolina-e-alcool-108712-0uegnb.jpg")]
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
    favoritado: false,
    imagens: [pegarImagem("https://mclarenautomoveis.com.br/uploads/2026/05/15-476287934-toyota-corolla-cross-2025-e-lancado-design-conforto-e-tecnologia-1.jpg")]
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
    favoritado: false,
    imagens: [pegarImagem("https://http2.mlstatic.com/D_NQ_NP_986271-MLB111576451852_062026-O-honda-civic-hyb-trng-2024.webp")]
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
    favoritado: false,
    imagens: [pegarImagem("https://www.comprecar.com.br/storage/vehicles/big/4535c930-61ac-449d-80d6-b835030f3077.webp")]
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
    favoritado: false,
    imagens: [pegarImagem("https://mpauto.com.br/carros/vw-volkswagen/amarok-highline-cd-3-0-4x4-tb-dies-aut/2019/630184")]
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
    favoritado: false,
    imagens: [pegarImagem("https://storage.googleapis.com/images-homolog-moto.usadosbr.com/img/2012/03/30/img49834-1333129044-v580x435.jpg  ")]
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
    favoritado: false,
    imagens: [pegarImagem("https://production.autoforce.com/uploads/used_model/profile_image/26703430/used_model_webp_comprar-xtz-150-crosser-s-flex-yamaha-xtz-150-crosser-s-flex-vermelho-2024-4912_88dbf9fa79.jpg.webp")]
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
    favoritado: false,
    imagens: [pegarImagem("https://s3.ecompletocarros.dev/images/lojas/295/veiculos/75110/veiculoInfoVeiculoImagesMobile/vehicle_image_1634158786_50f36b347674954f4ee6ab00212ab2ca.jpeg")]
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
    favoritado: false,
    imagens: [pegarImagem("https://jnrljyswiunximkilggh.supabase.co/storage/v1/object/public/truck-images/trucks/2b454049-c427-4549-aba9-52b2c8d49b2f/1774617739033_pk6yxo417pc_photo.png")]
  }
];