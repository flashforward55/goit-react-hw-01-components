import PropTypes from 'prop-types';
import {
  TransactionBody,
  TransactionTable,
  TransactionTd,
  TransactionTh,
  TransactionThead,
  TransactionTr,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable>
      <TransactionThead>
        <TransactionTr>
          <TransactionTh>Type</TransactionTh>
          <TransactionTh>Amount</TransactionTh>
          <TransactionTh>Currency</TransactionTh>
        </TransactionTr>
      </TransactionThead>

      <TransactionBody>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionTr key={id}>
            <TransactionTd>{type}</TransactionTd>
            <TransactionTd>{amount}</TransactionTd>
            <TransactionTd>{currency}</TransactionTd>
          </TransactionTr>
        ))}
      </TransactionBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};
