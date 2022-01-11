import React from 'react'
import { TitleClients } from '../Components/TitleClients';
import ClientFunctions from '../Functii Client/ClientFunctions';

export interface HomeClientProps {
  }
  
  export const HomeClient = () => {
  
    return (
      <>
      <TitleClients />
      <ClientFunctions/>
      </>
    );
  }