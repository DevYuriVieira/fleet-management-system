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
	modeloSelecionado,
	setModeloSelecionado,
	anoSelecionado,
	setAnoSelecionado,
	situacaoSelecionada,
	setSituacaoSelecionada,
	ordenacao,
	setOrdenacao,
	limparFiltros,
	marcasDisponiveis = [],
	modelosDisponiveis = [],
	anosDisponiveis = [],
	situacoesDisponiveis = []
}) {
	return (
		<Container>
			<GrupoFiltro>
				<Label>Marca:</Label>
				<Select value={marcaSelecionada} onChange={(e) => setMarcaSelecionada(e.target.value)}>
					<option value="">Todas</option>

					{marcasDisponiveis.map((marca) => (
						<option key={marca} value={marca}> {marca} </option>
					))}
				</Select>
			</GrupoFiltro>

			<GrupoFiltro>
				<Label>Modelo:</Label>
				<Select value={modeloSelecionado} onChange={(e) => setModeloSelecionado(e.target.value)}>
					<option value="">Todos</option>

					{modelosDisponiveis.map((modelo) => (
						<option key={modelo} value={modelo}> {modelo} </option>
					))}
				</Select>
			</GrupoFiltro>

			<GrupoFiltro>
				<Label>Ano:</Label>
				<Select value={anoSelecionado} onChange={(e) => setAnoSelecionado(e.target.value)}>
					<option value="">Todos</option>
					{anosDisponiveis.map((ano) => (
						<option key={ano} value={ano}> {ano} </option>
					))}
				</Select>
			</GrupoFiltro>

			<GrupoFiltro>
				<Label>Manutenção</Label>
				<Select value={situacaoSelecionada} onChange={(e) => setSituacaoSelecionada(e.target.value)}>
					<option value="">Todos</option>

					{situacoesDisponiveis.map((situacao) => (
						<option key={situacao} value={situacao}>
							{situacao}
						</option>
					))}
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