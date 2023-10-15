'use client';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import { FC } from 'react';
import {
  StyledTypeTableCell,
  StyledTypeTableHeaderCell,
} from './TypeTable.styles';
import Typography from '@mui/material/Typography';

type TypeTableProps = {
  //
};

const TypeTable: FC<TypeTableProps> = (props: TypeTableProps) => {
  return (
    <TableContainer sx={{ width: { xs: 225, sm: 275, md: 430 } }}>
      <Table aria-label="Functions & Animals">
        <TableHead>
          <TableRow>
            <StyledTypeTableHeaderCell component="th" highlight>
              <Typography variant="paragraphBold">Activate</Typography>
            </StyledTypeTableHeaderCell>
            <StyledTypeTableHeaderCell component="th" highlight>
              <Typography variant="paragraphBold">Sex</Typography>
            </StyledTypeTableHeaderCell>
            <StyledTypeTableHeaderCell component="th" highlight>
              <Typography variant="paragraphBold">Functions</Typography>
            </StyledTypeTableHeaderCell>
            <StyledTypeTableHeaderCell component="th" highlight>
              <Typography variant="paragraphBold">Saviors F</Typography>
            </StyledTypeTableHeaderCell>
            <StyledTypeTableHeaderCell component="th" highlight>
              <Typography variant="paragraphBold">Saviors A</Typography>
            </StyledTypeTableHeaderCell>
            <StyledTypeTableHeaderCell component="th" highlight>
              <Typography variant="paragraphBold">Animals</Typography>
            </StyledTypeTableHeaderCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">1</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">M</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">Fi</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">1</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell highlight>
              <Typography variant="paragraphLargeBold">1</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell highlight>
              <Typography variant="paragraphLargeBold">C</Typography>
            </StyledTypeTableCell>
          </TableRow>
          <TableRow>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">2</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">M</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">Ne</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">2</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell highlight>
              <Typography variant="paragraphLargeBold">2</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell highlight>
              <Typography variant="paragraphLargeBold">P</Typography>
            </StyledTypeTableCell>
          </TableRow>
          <TableRow>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">1</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">F</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">Si</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">-</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell highlight>
              <Typography variant="paragraphLargeBold">-</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell highlight>
              <Typography variant="paragraphLargeBold">S</Typography>
            </StyledTypeTableCell>
          </TableRow>
          <TableRow>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">2</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">F</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">Te</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell>
              <Typography variant="paragraphLargeBold">A</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell highlight>
              <Typography variant="paragraphLargeBold">A</Typography>
            </StyledTypeTableCell>
            <StyledTypeTableCell highlight>
              <Typography variant="paragraphLargeBold">B</Typography>
            </StyledTypeTableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TypeTable;
