import { useState } from 'react';
import { BarraPesquisa } from '../../components/BarraPesquisa';
import { veiculosMock } from '../veiculosMock';



export function Busca() {
	const [busca, setBusca] = useState('');

	const veiculosFiltrados = veiculosMock.filter((veiculo) => {
		const textoBusca = busca.toLowerCase();

		return (
			veiculo.placa.toLowerCase().includes(textoBusca) ||
			veiculo.modelo.toLowerCase().includes(textoBusca) ||
			veiculo.marca.toLowerCase().includes(textoBusca)
		);
	});

	return (
		<div>
			<h1>Busca de Veículos</h1>

			<BarraPesquisa
				valorBusca={busca}
				setValorBusca={setBusca}
			/>

			<p>{veiculosFiltrados.length} veículos encontrados</p>

			{veiculosFiltrados.map((veiculo) => (
				<div key={veiculo.placa}>
					<h2>{veiculo.modelo}</h2>
					<p>Placa: {veiculo.placa}</p>
					<p>Marca: {veiculo.marca}</p>
				</div>
			))}
		</div>
	)
}