import { Container, InputBusca } from "./style";

export function BarraPesquisa({ valorBusca, setValorBusca }) {
	return (
		<Container>
			<InputBusca
				type="text"
				placeholder="Buscar por placa, modelo ou marca..."
				value={valorBusca}
				onChange={(e) => setValorBusca(e.target.value)}
			/>
		</Container>
	);
}