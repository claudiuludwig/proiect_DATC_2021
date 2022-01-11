import React, { useState } from 'react'
import { Button, Card } from 'react-bootstrap'
import { CardListItem } from '../Models/models';

export interface CardsProps{
    cards: CardListItem;
}

export const Cards = ({ cards }: CardsProps) => {
   
    return(
        <>
        <Card style={{ width: '18rem', display: "center" }}>
        <Card.Img variant="top" src={cards.cardImage} />
        <Card.Body>
            <Card.Title>{cards.cardTitle}</Card.Title>
            <Card.Text> {cards.cardSubtitle} </Card.Text>
            <Card.Text> {cards.cardVotes} </Card.Text>
            <Button variant="primary" onClick={() => console.log("ceau")}>Votează</Button>
        </Card.Body>
        </Card>
        </>
    );
}