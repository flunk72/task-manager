import { Button } from 'shared';
import { ColumnStyled } from './board-column.styled';

export const BoardColumn = () => {
  return (
    <ColumnStyled>
      <Button>Создать карточку</Button>
    </ColumnStyled>
  );
};
