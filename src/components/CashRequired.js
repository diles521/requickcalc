import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const CashRequired = () => {
  const { property } = useContext(GlobalContext);

  const cash = property.cashDeal
    ? parseFloat(property.purchasePrice) +
      parseFloat(property.closingCosts) +
      parseFloat(property.repairCosts)
    : parseFloat(property.downPayment) +
      parseFloat(property.closingCosts) +
      parseFloat(property.repairCosts);

  return (
    <div className='equity-container'>
      <div>
        <h4>Cash Required</h4>
        <p className='money plus'>+${numberWithCommas(cash.toFixed(2))}</p>
      </div>
    </div>
  );
};
