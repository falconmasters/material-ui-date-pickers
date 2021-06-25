import React, {useState} from 'react';
import {DatePicker, TimePicker, DateTimePicker} from '@material-ui/pickers';

const App = () => {
	const [fechaSeleccionada, cambiarFechaSelecionada] = useState(new Date());

	// console.log(fechaSeleccionada)

	return (
		<div className="contenedor">
			<div className="grupo">
				<label>Fecha</label>
				<DatePicker value={fechaSeleccionada} onChange={cambiarFechaSelecionada} />
			</div>

			<div className="grupo">
				<label>Hora</label>
				<TimePicker value={fechaSeleccionada} onChange={cambiarFechaSelecionada} />
			</div>

			<div className="grupo">
				<label>Fecha y Hora</label>
				<DateTimePicker value={fechaSeleccionada} onChange={cambiarFechaSelecionada} />
			</div>
		</div>
	);
}
 
export default App;