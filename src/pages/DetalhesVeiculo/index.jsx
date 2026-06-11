import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { FaHeart } from "react-icons/fa";
import { ImArrowLeft2 } from "react-icons/im";
import { ImArrowRight2 } from "react-icons/im";
import { frotaLocal } from "../../data/Dados.jsx";
import { getDetalhesVeiculoFipe } from "../../services/getDetalhesVeiculo.jsx";
import BotaoFavorito from "../../components/BotaoFavorito/index.jsx";
import { 
  Container,
  HeaderContainer, 
  TagStatus, 
  ContentWrapper, 
  CarrosselContainer, 
  ImagemDestaque, 
  BotaoSeta, 
  IndicadorFotos,
  CardDetalhes, 
  FichaGrid, 
  ValorFipeText, 
  LoadingText, 
  LinkVoltar,
  PlacaBadge
} from "./style.jsx";

export const DetalhesVeiculo = () => {
  const { id } = useParams();
  const [carroCompleto, setCarroCompleto] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [indiceFoto, setIndiceFoto] = useState(0);

  useEffect(() => {
    async function montarCarro() {
      const dadoLocal = frotaLocal.find((carro) => carro.id === Number(id));

      if (!dadoLocal) {
        toast.error("Veículo não encontrado na frota local.");
        setIsLoading(false);
        return;
      }

      try {
        const dadoApi = await getDetalhesVeiculoFipe(
          dadoLocal.tipoVeiculo, 
          dadoLocal.codigoMarca, 
          dadoLocal.codigoModelo, 
          dadoLocal.ano
        );

        setCarroCompleto({ 
          ...dadoLocal, 
          marca: dadoApi.Marca,
          modelo: dadoApi.Modelo,
          anoModelo: dadoApi.AnoModelo,
          combustivel: dadoApi.Combustivel,
          valor: dadoApi.Valor
        });
        
        setIsLoading(false);
      } catch (error) {
        setCarroCompleto({
          ...dadoLocal,
          marca: "Sem conexão",
          modelo: "API Fipe offline",
          anoModelo: "---",
          combustivel: "---",
          valor: "Indisponível"
        });
        setIsLoading(false);
      }
    }

    montarCarro();
  }, [id]);

  const fotoAnterior = () => {
    if (!carroCompleto?.imagens) return;
    setIndiceFoto((prev) => (prev === 0 ? carroCompleto.imagens.length - 1 : prev - 1));
  };

  const proximaFoto = () => {
    if (!carroCompleto?.imagens) return;
    setIndiceFoto((prev) => (prev === carroCompleto.imagens.length - 1 ? 0 : prev + 1));
  };

  if (isLoading) {
    return <Container><LoadingText>A buscar dados oficiais...</LoadingText></Container>;
  }

  if (!carroCompleto) {
    return (
      <Container>
        <h2>Veículo não encontrado.</h2>
        <LinkVoltar><Link to="/">⬅ Voltar ao Início</Link></LinkVoltar>
      </Container>
    );
  }

  return (
    <Container>
      <LinkVoltar style={{ marginBottom: "24px", marginTop: 0 }}>
        <Link to="/veiculos">⬅ Voltar para a listagem</Link>
      </LinkVoltar>

      <HeaderContainer>
        <h1>{carroCompleto.modelo}</h1>       
        <BotaoFavorito veiculoId={Number(id)}/>  
      </HeaderContainer>

      <ContentWrapper>

        <CarrosselContainer>
          {carroCompleto.imagens && carroCompleto.imagens.length > 0 ? (
            <>
              {carroCompleto.imagens.length > 1 && (
                <BotaoSeta esquerda onClick={fotoAnterior}> <ImArrowLeft2/></BotaoSeta>
              )}
              
              <ImagemDestaque src={carroCompleto.imagens[indiceFoto]} alt="Foto do veículo" />
              
              {carroCompleto.imagens.length > 1 && (
                <BotaoSeta onClick={proximaFoto}> <ImArrowRight2/> </BotaoSeta>
              )}

              <IndicadorFotos>
                {indiceFoto + 1} / {carroCompleto.imagens.length}
              </IndicadorFotos>
            </>
          ) : (
            <div style={{ padding: "48px" }} className="sem-foto">Sem imagem disponível</div>
          )}
        </CarrosselContainer>

        <CardDetalhes>
          <div className="section">
            <h3>Preço de Mercado</h3>
            <ValorFipeText>{carroCompleto.valor}</ValorFipeText>
          </div>

          <div className="section">
            <h3>Ficha Técnica Oficial (FIPE)</h3>
            <FichaGrid>
              <p><strong>Fabricante:</strong> {carroCompleto.marca}</p>
              <p><strong>Modelo:</strong> {carroCompleto.modelo}</p>
              <p><strong>Ano Modelo:</strong> {carroCompleto.anoModelo}</p>
              <p><strong>Combustível:</strong> {carroCompleto.combustivel}</p>
            </FichaGrid>
          </div>

          <div className="section">
            <FichaGrid>
              <p><strong>Placa:</strong> <PlacaBadge>{carroCompleto.placa}</PlacaBadge></p>
              <p><strong>Quilometragem:</strong> {carroCompleto.quilometragem}</p>
            </FichaGrid>
            <p style={{ marginTop: "16px" }}><strong>Histórico e Observações:</strong></p>
            <p className="descricao">{carroCompleto.descricao}</p>
          </div>
        </CardDetalhes>
      </ContentWrapper>
    </Container>
  );
};