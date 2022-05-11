//en el nombre del archivo se coloca primero la palabra use, es un estndar
//para identificar que se trata de un hook, como el useState, useEffect, etc

import { useState, useEffect} from 'react'
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

	//objeto
	const initialState = {
		data: [],
		loading: true
	}

	const [state, setState] = useState(initialState);

	useEffect(() => {
		getGifs(category)	//hace peticion http
			.then(imgs => {	//obtenemos las imagenes

				//ponemos tiempo de e spera
				setTimeout(() => {
					//cambiamos la info con el setState
					setState({
						data: imgs,
						loading: false
					})
				},3000)				
			}
		)
		
	}, [category])	//evalua efecto cuando la category cambia y renderiza
		
	return state;	//retorna { data:[], loading: true }
}

