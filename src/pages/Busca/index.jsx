import { useState } from 'react';
import { BarraPesquisa } from '../../components/BarraPesquisa';
import { Filtros } from '../../components/Filtros';
import { veiculosMock } from '../veiculosMock';

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

	function limparFiltros() {
		setMarcaSelecionada('');
		setAnoSelecionado('');
		setSituacaoSelecionada('');
		setOrdenacao('');
	}

	function filtrarVeiculos() {
		const textoBusca = busca.toLowerCase();

		let resultado = veiculosMock.filter((veiculo) => {
			const buscaGlobal =
				veiculo.placa.toLowerCase().includes(textoBusca) ||
				veiculo.modelo.toLowerCase().includes(textoBusca) ||
				veiculo.marca.toLowerCase().includes(textoBusca);

			const filtroMarca =
				marcaSelecionada === '' || veiculo.marca === marcaSelecionada;
			const filtroAno =
				anoSelecionado === '' || veiculo.ano.toString() === anoSelecionado;
			const filtroSituacao =
				situacaoSelecionada === '' || veiculo.situacao === situacaoSelecionada;

			return buscaGlobal && filtroMarca && filtroAno && filtroSituacao;
		});

		if (ordenacao === "menorValor") {
			resultado = resultado.sort((a, b) => a.valor - b.valor);
		}
		if (ordenacao === "maiorValor") {
			resultado = resultado.sort((a, b) => b.valor - a.valor);
		}

		return resultado;
	}

	const veiculosFiltrados = filtrarVeiculos();

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
				setValorBusca={setBusca}
			/>

			<Filtros
				marcaSelecionada={marcaSelecionada}
				setMarcaSelecionada={setMarcaSelecionada}
				anoSelecionado={anoSelecionado}
				setAnoSelecionado={setAnoSelecionado}
				situacaoSelecionada={situacaoSelecionada}
				setSituacaoSelecionada={setSituacaoSelecionada}
				ordenacao={ordenacao}
				setOrdenacao={setOrdenacao}
				limparFiltros={limparFiltros}
			/>

			<ResultadoTexto>
				{veiculosFiltrados.length} veiculo(s) encontrado(s)
			</ResultadoTexto>

			{veiculosFiltrados.lenght > 0 ? (
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
								<strong>Ano:</strong> {veiculo.ano}
							</InfoVeiculo>

							<InfoVeiculo>
								<strong>Tipo:</strong> {veiculo.tipo}
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