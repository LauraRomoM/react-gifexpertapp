import React, { useState} from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({ setCategory }) => {	//destructuramos para poder llamar a setCategories directamente de GifExpertApp
	const [inputVal, setInputVal] = useState('');	//barra de texto vacia

	//extraer valor del onChange detectado por la caja de texto del <input>
	const handleInpunChange = (event) => {
		setInputVal(event.target.value);	//Establecemos el valor de entrada sea igual al valor detectado por teclado que se obtiene en la ruta event.target.value
	}

	//
	const handleSubmnit = (ev) => {
		ev.preventDefault();	//Detectar enter

		//condiciones de validacion para evitar posibles errores
		if (inputVal.trim().length > 2) {
			setCategory(categ => [inputVal, ...categ]);		//primero lo agregado y despues lo que ya estaba en la lista de gifs

			//limpiar barra de entradad de texto
			setInputVal('');
		}
	}

	return (
		<form onSubmit={ handleSubmnit }>
			{/*tipo de entrada=texto, valor o texto de la caja = inpulVal, al detectar un cambio llamar a funcion handleInputChange*/}
			<input
				type="text"
				value={inputVal}
				onChange={handleInpunChange}
			/>
		</form>
	)
}

//la funcion setCaregory es requerido dentro de AddCategory
AddCategory.propTypes = {
	setCategory: PropTypes.func.isRequired 
}

