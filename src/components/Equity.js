import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Equity = () => {
  const { property } = useContext(GlobalContext);

  const equity =
    parseFloat(property.arv) -
    (parseFloat(property.purchasePrice) - parseFloat(property.downPayment));

  const sign = equity > 0 ? '+' : '-';

  return (
    <div className='equity-container'>
      <div>
        <h4>Equity</h4>
        <p className={equity > 0 ? 'money plus' : 'money minus'}>
          {sign}${numberWithCommas(Math.abs(equity).toFixed(2))}
        </p>
      </div>
    </div>
  );
};
