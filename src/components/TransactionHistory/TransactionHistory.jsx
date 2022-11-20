import PropTypes from 'prop-types';

import {
  Transactions,
  TableHead,
  TableHeadRowElement,
  TableBody,
  TableRow,
  TableRowElement,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Transactions>
      <TableHead>
        <TableRow>
          <TableHeadRowElement>Type</TableHeadRowElement>
          <TableHeadRowElement>Amount</TableHeadRowElement>
          <TableHeadRowElement>Currency</TableHeadRowElement>
        </TableRow>
      </TableHead>

      <TableBody>
        {items.map(item => {
          return (
            <TableRow key={item.id}>
              <TableRowElement>{item.type}</TableRowElement>
              <TableRowElement>{item.amount}</TableRowElement>
              <TableRowElement>{item.currency}</TableRowElement>
            </TableRow>
          );
        })}
      </TableBody>
    </Transactions>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
