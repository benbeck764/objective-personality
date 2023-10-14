import { FC } from 'react';
import { OPSTypedPerson } from '@/_models/ops-typed-people.models';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import { StyledPersonImage } from './TypedPersonResult.styles';
import TypeStack from './TypeStack';
import { FunctionType } from '@/_models/typed-person-helper';

type TypedPersonResultProps = {
  person: OPSTypedPerson;
};

const TypedPersonResult: FC<TypedPersonResultProps> = (
  props: TypedPersonResultProps
) => {
  const { person } = props;

  return (
    <Box>
      <Typography mb={1} variant="h5">
        {person.Name}
      </Typography>
      <Divider />
      <Stack
        sx={{ flexDirection: { xs: 'column', lg: 'row' } }}
        py={1}
        alignItems="center"
      >
        <Stack gap={1} alignItems="center" justifyContent="center">
          <Box width={250} height={250} display="block" position="relative">
            <StyledPersonImage
              src={person.PictureUrl}
              alt={person.Name}
              quality={100}
              placeholder="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAYAAAA5ZDbSAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOZSURBVHgB7dxrThNRGMbxd6YNNTS9IF8UQ0MJqMSY4E7YAjvQlbAEtqArAYMEBaEEY4hI7b1Y0s5x3iGjtVRuDek5j88vIWUmJEzy57wznU7wJLRTOp5LJWTdGLMcbuaF3Ob5b897Z2+WisVDT+NO+GZjKpfJ5zJp8X1PyF1BYKTRbEu5Wq+eB51XyQnPrE1PZaO45D5doLlsWgIT5Kt1WffFk5VMelIIiy5YY2TZ1w2OZTy+H6XN+0LQGBgcA4NjYHAMDI6BwTEwOAYGx8DgGBgcA4NjYHAMDI6BwTEwOAYGx8DgGBgcA4NjYHAMDI6BwTEwOAYGx8DgGBgcA4NjYHAMDI6BwTEwOAYGx8DgGBgcA4NjYHAMDI6BwTEwOAYGlxQH1OoNOfryNXytiw1y2azMFwuSnrT/PwRav4I17tb2jjVxlR7LxvsP0bHZzvrAunJtZfOxxawf0YMrV8fjOPUfj01T5V+cOAfHNO7LF89lnLa2PzoRNsaraHAQgbvdbvRFlzk1ogf97HRk73Pp98icfjgl83MFSaVSQhecXsH9cVX5R0V2w330h7OBu93e0Isd3XfTca0/t/NpTw4OjwSV0yN6FBpXr4hb7Xa03Qu3FxfmBY2zKziZTAx9T6z7ksmr/24H46pv30/DkX8gaJw+By8uFP+KrN8/DfddZVjcGGJkp0f0g/BqWW98xOfcu6zcQRpZoYxriHPwdWHVTeLGkCLD3MmKP1Ic5jZxYyjjGmIFn5ycyu7+RYxOePOjf+XdJW5MI6fTkzLz+JG4yvkV3B9X9a+8UeLG9P22y5xewdGdq/3LYzQ+hzZb7ZHiInA6cKt1/dXw/44fF4JjYHBOj+hcLiMFeSL3SX+Hy9wOHN6aHPczWrbjiAbHwOCcGtH6Yb7euBj3MbjE+sB6jrX1WWQXzv/Wj+jC7P1eJY+iMDsjtrM+cC6bkaVni9FNf1vED+C7sIKdOAfr47D6RbfHq2hwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAODY2BwDAyOgcExMDgGBsfA4BgYHAOD08DVIDBCWIIgiF5948lmrdEUwtJonYkJ5J2f6HmrlVqzWmu0hCvZfdqwUmtIuVKvJqTz2tOdpdLxXOCZNfFkRch1VWNkM2E6q8Vi8fAX39Zd6fkKHkQAAAAASUVORK5CYII="
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </Box>
          <Typography textAlign="center" variant="h6">
            {person.Type}
          </Typography>
        </Stack>
        <Box>
          <TypeStack
            firstFunction={person.FirstFunction}
            secondFunction={person.SecondFunction}
            thirdFunction={person.ThirdFunction}
            fourthFunction={person.FourthFunction}
            firstAnimal={person.FirstAnimal}
            secondAnimal={person.SecondAnimal}
            thirdAnimal={person.ThirdAnimal}
            fourthAnimal={person.FourthAnimal}
            jumper={person.Jumper}
          />
        </Box>
      </Stack>
    </Box>
  );
};

export default TypedPersonResult;
