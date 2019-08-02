import React from 'react';
<<<<<<< HEAD
import './card-list.styles.css';
import { Card } from '../card/card.component'

export const CardList = props => (
    <div className="card-list">
        {props.monsters.map(monster => (
            <Card key={monster.id} monster={monster} />
        ))}
    </div>
)
=======
import { Card } from '../card/card.component';
import './card-list.styles.css';

export const CardList = (props) => {
	return (
		<div className="card-list">
        {
          props.monsters.map(monster => (
		  <Card key={monster.id} monster={monster}></Card>
		  ))
        }
		</div>
	)
}
>>>>>>> 3d7d8c24381afc8c8e9358aee4985c910c62278a
