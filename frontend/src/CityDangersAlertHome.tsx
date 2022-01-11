import React, { useEffect } from 'react';
import { Cards } from './Components/Cards';
import { Title } from './Components/Title';
import { CardListItem } from './Models/models';
import { HomeAdmin } from './Pages/HomeAdmin';
import { HomeClient } from './Pages/HomeClient';
import { useApp } from './useApp';

export interface CityDangersAlertHomeProps {
  cards: CardListItem;
}

export const CityDangersAlertHome = () => {

  const {
    onCards,
    cardsToShow
  } = useApp();

  return (
    <><Title />
    {/* <Cards cards={cardsToShow} /> */}
    {/* aici trebuie sa ii transmiti login sau sign up token ca sa faci un statement de if si sa afisezi in functie de asta una 
    din cele 3 (adica home citydangersalert, homeadmin sau homeclient) */}
    <HomeAdmin/>
    <HomeClient/>
    </>
  );
}
