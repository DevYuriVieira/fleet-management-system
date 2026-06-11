import { Container, InputBusca } from "./style";

export function BarraPesquisa({ valorBusca, aoBuscar }) {
	return (
		<Container>
			<InputBusca
				type="text"
				placeholder="Buscar por placa, modelo ou marca..."
				value={valorBusca}
				onChange={(e) => aoBuscar(e.target.value)}
			/>
		</Container>
	);
}