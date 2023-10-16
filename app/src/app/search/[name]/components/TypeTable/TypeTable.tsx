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
import {
  FunctionType,
  AnimalType,
  TemperamentType,
  getFunctionModality,
  isDoubleActivated,
} from '@/_models/typed-person-helper';
import { OPSTypedPerson } from '@/_models/ops-typed-people.models';
import { isEmpty } from '@/utilities/string';

type TypeTableRow = {
  activation: string;
  sex: 'M' | 'F' | undefined;
  function: FunctionType;
  saviorFunction: string;
  saviorAnimal: string;
  animal: string;
};

type TypeTableProps = {
  person: OPSTypedPerson;
};

const TypeTable: FC<TypeTableProps> = (props: TypeTableProps) => {
  const {
    FirstFunction: firstFunction,
    SecondFunction: secondFunction,
    ThirdFunction: thirdFunction,
    FourthFunction: fourthFunction,
    FirstAnimal: firstAnimal,
    SecondAnimal: secondAnimal,
    ThirdAnimal: thirdAnimal,
    FourthAnimal: fourthAnimal,
    Temperament: temperament,
    Jumper: jumper,
    Modality: modality,
  } = props.person;

  const generateRows = (): TypeTableRow[] => {
    const functions = [
      firstFunction,
      jumper ? thirdFunction : secondFunction,
      jumper ? secondFunction : thirdFunction,
      fourthFunction,
    ];
    const animals = [firstAnimal, secondAnimal, fourthAnimal, thirdAnimal];

    const rows: TypeTableRow[] = [];
    functions.forEach((func: FunctionType, index: number) => {
      const doubleActivated = isDoubleActivated(func, fourthAnimal);
      const animal = animals[index];
      const row: TypeTableRow = {
        activation:
          doubleActivated === true
            ? '2'
            : doubleActivated === false
            ? '1'
            : '-',
        sex: getFunctionModality(func, modality),
        function: func,
        saviorFunction: isEmpty(func)
          ? ''
          : {
              [firstFunction]: '1',
              [secondFunction]: '2',
              [thirdFunction]: 'A',
              [fourthFunction]: '-',
            }[func],
        saviorAnimal: isEmpty(animal)
          ? ''
          : {
              [firstAnimal]: '1',
              [secondAnimal]: '2',
              [thirdAnimal]: 'A',
              [fourthAnimal]: '-',
            }[animal],
        animal: animal?.[0],
      };
      rows.push(row);
    });

    return rows;
  };

  const rows = generateRows();

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
          {rows.map((row: TypeTableRow, index: number) => (
            <TableRow key={row.function || index}>
              <StyledTypeTableCell>
                <Typography variant="paragraphLargeBold">
                  {row.activation}
                </Typography>
              </StyledTypeTableCell>
              <StyledTypeTableCell>
                <Typography variant="paragraphLargeBold">{row.sex}</Typography>
              </StyledTypeTableCell>
              <StyledTypeTableCell>
                <Typography variant="paragraphLargeBold">
                  {row.function}
                </Typography>
              </StyledTypeTableCell>
              <StyledTypeTableCell>
                <Typography variant="paragraphLargeBold">
                  {row.saviorFunction}
                </Typography>
              </StyledTypeTableCell>
              <StyledTypeTableCell highlight>
                <Typography variant="paragraphLargeBold">
                  {row.saviorAnimal}
                </Typography>
              </StyledTypeTableCell>
              <StyledTypeTableCell highlight>
                <Typography variant="paragraphLargeBold">
                  {row.animal}
                </Typography>
              </StyledTypeTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TypeTable;
