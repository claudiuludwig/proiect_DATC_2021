import { CardListItem } from "../../Models/models";

export interface ICardsService{
    GetCards(): Promise<CardListItem[]>;
    UpdateCards(cards: CardListItem): Promise<Response>;
    DeleteCards(cards: CardListItem): Promise<Response>; 
}