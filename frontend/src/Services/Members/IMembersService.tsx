import { CardListItem } from "../../Models/models";

export interface IMembersService{
    GetCards(id:number): Promise<CardListItem[]>;
    UpdateCards(cards: CardListItem): Promise<Response>;
    DeleteCards(cards: CardListItem): Promise<Response>; 
}