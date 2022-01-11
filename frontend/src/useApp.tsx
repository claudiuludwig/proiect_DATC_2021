import { useState } from "react";
import { CardListItem } from "./Models/models"

export const useApp = () =>
{
    const [cardsToShow, setCardsToShow] = useState<CardListItem>();

    const onCards = (item: CardListItem) => {
        setCardsToShow(item);
    }

    return {
        cardsToShow,
        onCards
    }
}   