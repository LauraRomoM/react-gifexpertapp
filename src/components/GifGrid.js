import React from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

	const { data: images, loading} = useFetchGifs(category);

	<getGifs category={ category } />

	/* En lugar de mostrarlo como lista, importamos y llamamos el archivo GifGridItem al que le pasamos parametro de url*/ 
	return (
		<>
			<h2 className="card-category animate__animated animate__fadeIn">{category}</h2>
			{//si loading es true, se muestra loading, si es false, no hace nada
				loading && <p className='animate__animated animate__flash'>Loading</p>
			}

			<div clasName="card-grid">
				{
					images.map((img) => (
						<GifGridItem key={ img.id } {...img} />
					))
				}
			</div>
		</>
	);
}

