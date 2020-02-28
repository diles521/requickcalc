import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const Cashflow = () => {
  const { property } = useContext(GlobalContext);

  const loanPmt = !property.cashDeal
    ? (
        ((property.interestRate / 100 / 12) *
          (property.purchasePrice - property.downPayment)) /
        (1 -
          (1 + property.interestRate / 100 / 12) **
            (property.amortized * 12 * -1))
      ).toFixed(2)
    : (
        ((property.purchasePrice - property.downPayment) *
          (property.interestOnlyRate / 100)) /
        12
      ).toFixed(2);

  return (
    <>
      <h4>Your Monthly Cashflow</h4>
      <h1>
        $
        {property.rent > 0
          ? numberWithCommas(
              (
                parseFloat(property.rent) +
                parseFloat(property.otherIncome) -
                parseFloat(loanPmt) -
                parseFloat(property.annualTaxes / 12) -
                parseFloat(property.insurance) -
                parseFloat(property.utilities) -
                parseFloat(property.hoa) -
                parseFloat(property.vacancy) -
                parseFloat(property.repairs) -
                parseFloat(property.management) *
                  parseFloat(property.percentOwnership / 100)
              ).toFixed(2)
            )
          : '0.00'}
      </h1>
    </>
  );
};
