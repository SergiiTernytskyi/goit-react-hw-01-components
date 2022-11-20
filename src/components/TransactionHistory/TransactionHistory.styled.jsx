import styled from 'styled-components';

export const Transactions = styled.table`
  width: 600px;
  box-shadow: ${props => props.theme.shadows.third};
`;

export const TableHead = styled.thead`
  background-color: ${props => props.theme.colors.primaryText};
  text-transform: uppercase;
`;

export const TableHeadRowElement = styled.th`
  color: ${props => props.theme.colors.white};
`;

export const TableBody = styled.tbody`
  text-transform: capitalize;
  text-align: center;
`;

export const TableRow = styled.tr`
  height: 60px;

  :nth-child(even) {
    background-color: ${props => props.theme.colors.secondary};
  }
`;

export const TableRowElement = styled.td`
  width: calc(100% / 3);
  color: ${props => props.theme.colors.primaryText};
`;
