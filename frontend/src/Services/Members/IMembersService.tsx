import { CardListItem } from "../../Models/models";

export interface IMembersService{
    GetCards(id:number): Promise<CardListItem[]>;
    AddCards(cards: CardListItem): Promise<Response>;
    UpdateCards(cards: CardListItem): Promise<Response>;
    DeleteCards(cards: CardListItem): Promise<Response>; 
}