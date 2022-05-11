import React, { useState} from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);

    return (
        <>
            <h2>GifExpertApp</h2>
            <hr />  { /*linea divisora en la pagina*/}
            <br />  {/*Crea salto de linea*/}
            <AddCategory setCategory = {setCategories} />
            <hr />  { /*linea divisora en la pagina*/}
            
            <ol>
                {                    
                    categories.map((category) => (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    ))
                }
            </ol>          

        </>
    )
};

