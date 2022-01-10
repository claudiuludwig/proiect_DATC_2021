//import { BASEURL } from "../../Common/constants";
import { CardListItem } from "../../Models/models";
import { ICardsService } from "./ICardsService";

export class CardsService implements ICardsService {
    GetCards(): Promise<CardListItem[]> {
        //return this.get(`${BASEURL}`, "", "json");
        throw new Error("Method not implemented.");
    }
    UpdateCards(cards: CardListItem): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    DeleteCards(cards: CardListItem): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    
}