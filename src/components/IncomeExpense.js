import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const IncomeExpense = () => {
  const { property } = useContext(GlobalContext);

  const loanPmt =
    !property.cashDeal && property.purchasePrice > 0
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

  console.log(loanPmt);

  const expense = (
    parseFloat(loanPmt) +
    parseFloat(property.annualTaxes) / 12 +
    parseFloat(property.insurance) +
    parseFloat(property.utilities) +
    parseFloat(property.hoa) +
    parseFloat(property.vacancy) +
    parseFloat(property.repairs) +
    parseFloat(property.management)
  ).toFixed(2);

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p className='money plus'>
          +$
          {numberWithCommas(
            (
              parseFloat(property.rent) + parseFloat(property.otherIncome)
            ).toFixed(2)
          )}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className='money minus'>-${numberWithCommas(expense)}</p>
      </div>
    </div>
  );
};
