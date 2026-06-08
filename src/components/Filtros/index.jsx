import {
	Container,
	GrupoFiltro,
	Label,
	Select,
	BotaoLimpar
} from "./style";

export function Filtros({
	marcaSelecionada,
	setMarcaSelecionada,
	anoSelecionado,
	setAnoSelecionado,
	situacaoSelecionada,
	setSituacaoSelecionada,
	ordenacao,
	setOrdenacao,
	limparFiltros
}) {
	return (
		<Container>
			<GrupoFiltro>
				<Label>Marca:</Label>
				<Select value={marcaSelecionada} onChange={(e) => setMarcaSelecionada(e.target.value)}>
					<option value="">Todas</option>
					<option value="Toyota">Toyota</option>
					<option value="Honda">Honda</option>
					<option value="Ford">Ford</option>
				</Select>
			</GrupoFiltro>

			<GrupoFiltro>
				<Label>Ano:</Label>
				<Select value={anoSelecionado} onChange={(e) => setAnoSelecionado(e.target.value)}>
					<option value="">Todas</option>
					<option value="Toyota">Toyota</option>
					<option value="Honda">Honda</option>
					<option value="Volkswagen">Volkswagen</option>
					<option value="Fiat">Fiat</option>
					<option value="Renault">Renault</option>
					<option value="Mercedes-Benz">Mercedes-Benz</option>
					<option value="Volvo">Volvo</option>
					<option value="Chevrolet">Chevrolet</option>
				</Select>
			</GrupoFiltro>

			<GrupoFiltro>
				<Label>Ano</Label>
				<Select value={anoSelecionado} onChange={(event) => setAnoSelecionado(event.target.value)}
				>
					<option value="">Todos</option>
					<option value="2024">2024</option>
					<option value="2023">2023</option>
					<option value="2022">2022</option>
					<option value="2021">2021</option>
					<option value="2020">2020</option>
					<option value="2019">2019</option>
					<option value="2018">2018</option>
					<option value="2017">2017</option>
				</Select>
			</GrupoFiltro>

			<GrupoFiltro>
				<Label>Manutenção</Label>
				<Select value={situacaoSelecionada} onChange={(event) => setSituacaoSelecionada(event.target.value)}
				>
					<option value="">Todas</option>
					<option value="Em dia">Em dia</option>
					<option value="Próxima">Próxima</option>
					<option value="Vencida">Vencida</option>
				</Select>
			</GrupoFiltro>

			<GrupoFiltro>
				<Label>Ordenar por FIPE</Label>
				<Select value={ordenacao} onChange={(event) => setOrdenacao(event.target.value)}
				>
					<option value="">Sem ordenação</option>
					<option value="menorValor">Menor valor</option>
					<option value="maiorValor">Maior valor</option>
				</Select>
			</GrupoFiltro>

			<BotaoLimpar onClick={limparFiltros}>Limpar Filtros</BotaoLimpar>
		</Container>
	);
}