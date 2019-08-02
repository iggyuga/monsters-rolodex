import React from 'react';
<<<<<<< HEAD
import './card.styles.css'


export const Card = props => (
    <div className="card-container">
        <img
            alt="monster"
            src={`https://robohash.org/${props.monster.id}?set=set2&size=240x240`}
        />
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email} </p>
    </div>
)
=======
import './card.styles.css';
import { tsPropertySignature } from '@babel/types';

export const Card = (props) => {
	return (
		<div className="card-container">
			<img alt="monster" src={`https://robohash.org/${props.monster.id}?set=set2&size=240x240	`} />
			<h2>{props.monster.name}</h2>
			<p>{props.monster.email}</p>
		</div>
	);
}
>>>>>>> 3d7d8c24381afc8c8e9358aee4985c910c62278a
