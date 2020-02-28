import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { numberWithCommas } from '../utils/format';

export const DetailList = () => {
  const { property } = useContext(GlobalContext);

  const payment =
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

  return (
    <>
      <h3>Details Summary</h3>
      <ul className='list'>
        {property.rent > 0 && (
          <li className='plus'>
            Monthly Rent <span>+${numberWithCommas(property.rent)}</span>
          </li>
        )}
        {property.otherIncome > 0 && (
          <li className='plus'>
            Other Income <span>+${numberWithCommas(property.otherIncome)}</span>
          </li>
        )}
        {payment > 0 ? (
          <li className='minus'>
            Monthly Debt PMT
            <span>
              -$
              {numberWithCommas(payment)}
            </span>
          </li>
        ) : (
          ''
        )}
        {property.annualTaxes > 0 && (
          <li className='minus'>
            Taxes
            <span>
              -$
              {numberWithCommas(
                parseFloat(property.annualTaxes / 12).toFixed(2)
              )}
            </span>
          </li>
        )}
        {property.insurance > 0 && (
          <li className='minus'>
            Insurance
            <span>
              -${numberWithCommas(parseFloat(property.insurance).toFixed(2))}
            </span>
          </li>
        )}
        {property.utilities > 0 && (
          <li className='minus'>
            Utilities
            <span>
              -${numberWithCommas(parseFloat(property.utilities).toFixed(2))}
            </span>
          </li>
        )}
        {property.vacancy > 0 && (
          <li className='minus'>
            Vacancy
            <span>
              -${numberWithCommas(parseFloat(property.vacancy).toFixed(2))}
            </span>
          </li>
        )}
        {property.hoa > 0 && (
          <li className='minus'>
            Hoa
            <span>
              -${numberWithCommas(parseFloat(property.hoa).toFixed(2))}
            </span>
          </li>
        )}
        {property.repairs > 0 && (
          <li className='minus'>
            Repairs
            <span>
              -${numberWithCommas(parseFloat(property.repairs).toFixed(2))}
            </span>
          </li>
        )}
        {property.management > 0 && (
          <li className='minus'>
            Management
            <span>
              -${numberWithCommas(parseFloat(property.management).toFixed(2))}
            </span>
          </li>
        )}
      </ul>
    </>
  );
};
