import React, { createContext, useReducer } from 'react';
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  property: {
    purchasePrice: '0',
    annualTaxes: '0',
    cashDeal: false,
    interestOnly: false,
    downPayment: '0',
    interestRate: '0',
    interestOnlyRate: '0',
    amortized: '0',
    arv: '0',
    closingCosts: '0',
    repairCosts: '0',
    percentOwnership: '0',
    rent: '0',
    otherIncome: '0',
    utilities: '0',
    hoa: '0',
    insurance: '0',
    vacancy: '0',
    repairs: '0',
    management: '0'
  }
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function addProperty(property) {
    dispatch({
      type: 'ADD_PROPERTY',
      payload: property
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        property: state.property,
        addProperty
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
