import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddDetails = () => {
  const [amount, setAmount] = useState({
    purchasePrice: 0,
    annualTaxes: 0,
    cashDeal: false,
    interestOnly: false,
    downPayment: 0,
    interestRate: 0,
    interestOnlyRate: 0,
    amortized: 0,
    arv: 0,
    closingCosts: 0,
    repairCosts: 0,
    percentOwnership: 100,
    rent: 0,
    otherIncome: 0,
    utilities: 0,
    hoa: 0,
    insurance: 0,
    vacancy: 0,
    repairs: 0,
    management: 0
  });

  const { addProperty } = useContext(GlobalContext);

  const {
    purchasePrice,
    annualTaxes,
    cashDeal,
    interestOnly,
    downPayment,
    interestRate,
    interestOnlyRate,
    amortized,
    arv,
    closingCosts,
    repairCosts,
    percentOwnership,
    rent,
    otherIncome,
    utilities,
    hoa,
    insurance,
    vacancy,
    repairs,
    management
  } = amount;

  const onChange = e =>
    setAmount({ ...amount, [e.target.name]: e.target.value });

  const onCheck = e =>
    setAmount({
      ...amount,
      [e.target.name]: !cashDeal
    });
  const onCheck2 = e =>
    setAmount({
      ...amount,
      [e.target.name]: !interestOnly
    });

  const onSubmit = e => {
    e.preventDefault();

    addProperty(amount);
    setAmount({
      ...amount,
      purchasePrice: 0,
      annualTaxes: 0,
      cashDeal: false,
      interestOnly: false,
      downPayment: 0,
      interestRate: 0,
      interestOnlyRate: 0,
      amortized: 0,
      arv: 0,
      closingCosts: 0,
      repairCosts: 0,
      percentOwnership: 100,
      rent: 0,
      otherIncome: 0,
      utilities: 0,
      hoa: 0,
      insurance: 0,
      vacancy: 0,
      repairs: 0,
      management: 0
    });
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // All others
  };

  return (
    <>
      <h3>Property Detail</h3>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label htmlFor='percentOwnership'>Percent Ownership (%)</label>
          <input
            type='number'
            name='percentOwnership'
            value={percentOwnership}
            onChange={e => onChange(e)}
          />
          <label htmlFor='purchasePrice'>Purchase Price ($)</label>
          <input
            type='number'
            name='purchasePrice'
            value={purchasePrice}
            onChange={e => onChange(e)}
          />
          <label htmlFor='cashDeal'>Cash Deal?</label>
          <input
            type='checkbox'
            name='cashDeal'
            value={cashDeal}
            checked={cashDeal}
            onChange={e => onCheck(e)}
          />
          <br />
          {cashDeal === true ? (
            ''
          ) : (
            <span>
              <label htmlFor='downPayment'>Down Payment ($)</label>
              <input
                type='number'
                name='downPayment'
                value={downPayment}
                onChange={e => onChange(e)}
              />

              <label htmlFor='interestRate'>Interest Rate (%)</label>
              <input
                type='number'
                name='interestRate'
                value={interestRate}
                onChange={e => onChange(e)}
              />
              <label htmlFor='amortized'>Amortized Years</label>
              <input
                type='number'
                name='amortized'
                value={amortized}
                onChange={e => onChange(e)}
              />
            </span>
          )}
          <label htmlFor='interestOnly'>Interest Only Loan?</label>
          <input
            type='checkbox'
            checked={interestOnly}
            name='interestOnly'
            value={interestOnly}
            onChange={e => onCheck2(e)}
          />
          <br />
          {interestOnly === false ? (
            ''
          ) : (
            <span>
              <label htmlFor='interestOnlyRate'>Interest Only Rate (%)</label>
              <input
                type='number'
                name='interestOnlyRate'
                value={interestOnlyRate}
                onChange={e => onChange(e)}
              />
            </span>
          )}
          <label htmlFor='closingCosts'>Closing Costs ($)</label>
          <input
            type='number'
            name='closingCosts'
            value={closingCosts}
            onChange={e => onChange(e)}
          />
          <label htmlFor='repairCosts'>Repair Costs ($)</label>
          <input
            type='number'
            name='repairCosts'
            value={repairCosts}
            onChange={e => onChange(e)}
          />
          <label htmlFor='arv'>After Repair Value ($)</label>
          <input
            type='number'
            name='arv'
            value={arv}
            onChange={e => onChange(e)}
          />

          <label htmlFor='annualTaxes'>Annual Taxes ($)</label>
          <input
            type='number'
            name='annualTaxes'
            value={annualTaxes}
            onChange={e => onChange(e)}
          />

          <h3>Monthly Income</h3>
          <label htmlFor='rent'>Rent ($)</label>
          <input
            type='number'
            name='rent'
            value={rent}
            onChange={e => onChange(e)}
          />
          <label htmlFor='otherIncome'>Other Income ($)</label>
          <input
            type='number'
            name='otherIncome'
            value={otherIncome}
            onChange={e => onChange(e)}
          />

          <h3>Monthly Expenses</h3>
          <label htmlFor='utilities'>Utilities ($)</label>
          <input
            type='number'
            name='utilities'
            value={utilities}
            onChange={e => onChange(e)}
          />
          <label htmlFor='hoa'>HOA ($)</label>
          <input
            type='number'
            name='hoa'
            value={hoa}
            onChange={e => onChange(e)}
          />
          <label htmlFor='insurance'>Insurance ($)</label>
          <input
            type='number'
            name='insurance'
            value={insurance}
            onChange={e => onChange(e)}
          />
          <label htmlFor='vacancy'>Vacancy ($)</label>
          <input
            type='number'
            name='vacancy'
            value={vacancy}
            onChange={e => onChange(e)}
          />
          <label htmlFor='repairs'>Repairs ($)</label>
          <input
            type='number'
            name='repairs'
            value={repairs}
            onChange={e => onChange(e)}
          />
          <label htmlFor='management'>Management ($)</label>
          <input
            type='number'
            name='management'
            value={management}
            onChange={e => onChange(e)}
          />
        </div>
        <button type='submit' className='btn'>
          Calculate
        </button>
      </form>
    </>
  );
};
