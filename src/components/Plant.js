import React from 'react';


const Plant = ( {plant} ) => {
    return (
        <div>
            <li key={plant.id}>
                 Name: {plant.attributes.name}<br />
                 AKA: {plant.attributes.aka}<br />
                 Description: {plant.attributes.description}<br />
                 Recomended pot size: {plant.attributes.size_pot} inch<br />
                 Pet friendly: {plant.attributes.pet_friendly ?  "Yes" : "No"}
            </li><br />
        </div>
    )
}

export default Plant;