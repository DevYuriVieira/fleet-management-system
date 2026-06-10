import { BarraPesquisa } from '../../components/BarraPesquisa';
import { Filtros } from '../../components/Filtros';
import { frotaLocal } from '../../data/Dados';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getDetalhesVeiculoFipe } from '../../services/getDetalhesVeiculo';

import {
	Container,
	Header,
	Titulo,
	Subtitulo,
	ResultadoTexto,
	ListaVeiculos,
	CardTemporario,
	NomeVeiculo,
	InfoVeiculo,
	MensagemVazia
} from "./style";

export function Busca() {
	const [busca, setBusca] = useState('');
	const [marcaSelecionada, setMarcaSelecionada] = useState('');
	const [anoSelecionado, setAnoSelecionado] = useState('');
	const [situacaoSelecionada, setSituacaoSelecionada] = useState('');
	const [ordenacao, setOrdenacao] = useState('');
	const [modeloSelecionado, setModeloSelecionado] = useState('');
	const [veiculos, setVeiculos] = useState([]);
	const [loading, setLoading] = useState(false);
	const [erro, setErro] = useState('');

	function converterValorFipeParaNumero(valor) {
		if (!valor) {
			return 0;
		}

		return Number(
			valor
				.replace("R$", "")
				.replace(/\./g, "")
				.replace(",", ".")
				.trim()
		);
	}

	useEffect(() => {
		async function carregarVeiculosComFipe() {
			try {
				setLoading(true);
				setErro('');

				const veiculosComFipe = await Promise.all(
					frotaLocal.map(async (veiculo) => {
						const detalhesFipe = await getDetalhesVeiculoFipe(
							veiculo.tipoVeiculo,
							veiculo.codigoMarca,
							veiculo.codigoModelo,
							veiculo.ano
						);

						return {
							...veiculo,
							marca: detalhesFipe.Marca,
							modelo: detalhesFipe.Modelo,
							anoModelo: detalhesFipe.AnoModelo,
							combustivel: detalhesFipe.Combustivel,
							codigoFipe: detalhesFipe.CodigoFipe,
							mesReferencia: detalhesFipe.MesReferencia,
							valorFipeTexto: detalhesFipe.Valor,
							valorFipe: converterValorFipeParaNumero(detalhesFipe.Valor),
						};
					})
				);
				setVeiculos(veiculosComFipe);

			} catch (error) {
				console.error(error);
				setErro("Erro ao carregar dados da FIPE.");
				toast.error("Erro ao carregar dados da FIPE.");
			} finally {
				setLoading(false);
			}
		}
		carregarVeiculosComFipe();
	}, []);

	function limparFiltros() {
		setBusca('');
		setMarcaSelecionada('');
		setAnoSelecionado('');
		setSituacaoSelecionada('');
		setOrdenacao('');
		setModeloSelecionado('');
	}

	function filtrarVeiculos() {
		const textoBusca = busca.toLowerCase();

		let resultado = veiculos.filter((veiculo) => {

			const buscaGlobal =
				veiculo.placa?.toLowerCase().includes(textoBusca) ||
				veiculo.tipoVeiculo?.toLowerCase().includes(textoBusca) ||
				veiculo.marca?.toLowerCase().includes(textoBusca) ||
				veiculo.modelo?.toLowerCase().includes(textoBusca) ||
				veiculo.descricao?.toLowerCase().includes(textoBusca);

			const filtroMarca =
				marcaSelecionada === '' || veiculo.marca === marcaSelecionada;
			const filtroModelo =
				modeloSelecionado === '' || veiculo.modelo === modeloSelecionado;
			const filtroAno =
				anoSelecionado === '' || veiculo.anoModelo?.toString() === anoSelecionado;
			const filtroSituacao =
				situacaoSelecionada === '' || veiculo.situacaoManutencao === situacaoSelecionada;

			return buscaGlobal && filtroMarca && filtroModelo && filtroAno && filtroSituacao;
		});

		if (ordenacao === "menorValor") {
			resultado = [...resultado].sort((a, b) => a.valorFipe - b.valorFipe);
		}
		if (ordenacao === "maiorValor") {
			resultado = [...resultado].sort((a, b) => b.valorFipe - a.valorFipe);
		}

		return resultado;
	}

	const veiculosFiltrados = filtrarVeiculos();

	const marcasDisponiveis = [
		...new Set(
			veiculos
				.map((veiculo) => veiculo.marca)
				.filter(Boolean)
		)
	].sort();

	const modelosDisponiveis = [
		...new Set(
			veiculos
				.filter((veiculo) => marcaSelecionada === '' || veiculo.marca === marcaSelecionada)
				.map((veiculo) => veiculo.modelo)
				.filter(Boolean)
		)
	].sort();

	const anosDisponiveis = [
		...new Set(
			veiculos
				.map((veiculo) => veiculo.anoModelo)
				.filter(Boolean)
		)
	].sort((a, b) => b - a);

	const situacoesDisponiveis = [
		...new Set(
			veiculos
				.map((veiculo) => veiculo.situacaoManutencao)
				.filter(Boolean)
		)
	];

	if (loading) {
		return (
			<Container>
				<MensagemVazia>Carregando veículos...</MensagemVazia>
			</Container>
		);
	}

	if (erro) {
		return (
			<Container>
				<MensagemVazia>{erro}</MensagemVazia>
			</Container>
		);
	}

	return (
		<Container>
			<Header>
				<Titulo>Busca de Veículos</Titulo>
				<Subtitulo>
					Pesquise por placa, modelo ou marca e utilize filtros avançados da frota.
				</Subtitulo>
			</Header>

			<BarraPesquisa
				valorBusca={busca}
				aoBuscar={setBusca}
			/>

			<Filtros
				marcaSelecionada={marcaSelecionada}
				setMarcaSelecionada={(novaMarca) => {
					setMarcaSelecionada(novaMarca);
					setModeloSelecionado('');
				}}
				anoSelecionado={anoSelecionado}
				setAnoSelecionado={setAnoSelecionado}
				situacaoSelecionada={situacaoSelecionada}
				setSituacaoSelecionada={setSituacaoSelecionada}
				ordenacao={ordenacao}
				setOrdenacao={setOrdenacao}
				modeloSelecionado={modeloSelecionado}
				setModeloSelecionado={setModeloSelecionado}
				limparFiltros={limparFiltros}
				marcasDisponiveis={marcasDisponiveis}
				modelosDisponiveis={modelosDisponiveis}
				anosDisponiveis={anosDisponiveis}
				situacoesDisponiveis={situacoesDisponiveis}
			/>

			<ResultadoTexto>
				{veiculosFiltrados.length} veiculo(s) encontrado(s)
			</ResultadoTexto>

			{veiculosFiltrados.length > 0 ? (
				<ListaVeiculos>
					{veiculosFiltrados.map((veiculo) => (
						<CardTemporario key={veiculo.id}>
							<NomeVeiculo>
								{veiculo.marca} {veiculo.modelo}
							</NomeVeiculo>

							<InfoVeiculo>
								<strong>Placa:</strong> {veiculo.placa}
							</InfoVeiculo>

							<InfoVeiculo>
								<strong>Ano:</strong> {veiculo.ano.split("-")[0]}
							</InfoVeiculo>

							<InfoVeiculo>
								<strong>Tipo:</strong> {veiculo.tipoVeiculo}
							</InfoVeiculo>

							<InfoVeiculo>
								<strong>FIPE:</strong>{" "}
								{veiculo.valorFipe.toLocaleString("pt-BR", {
									style: "currency",
									currency: "BRL",
								})}
							</InfoVeiculo>

							<InfoVeiculo>
								<strong>Manutenção:</strong> {veiculo.situacaoManutencao}
							</InfoVeiculo>
						</CardTemporario>
					))}
				</ListaVeiculos>
			) : (
				<MensagemVazia>
					Nenhum veículo encontrado. Tente ajustar os filtros ou a busca.
				</MensagemVazia>
			)}
		</Container>
	);
}