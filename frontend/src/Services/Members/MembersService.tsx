import { CardListItem } from "../../Models/models";
import { IMembersService } from "./IMembersService";

export class MembersService implements IMembersService {
    GetCards(id: number): Promise<CardListItem[]> {
        throw new Error("Method not implemented.");
    }
    AddCards(cards: CardListItem): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    UpdateCards(cards: CardListItem): Promise<Response> {
        throw new Error("Method not implemented.");
    }
    DeleteCards(cards: CardListItem): Promise<Response> {
        throw new Error("Method not implemented.");
    }
}