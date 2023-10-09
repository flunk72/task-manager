import { ButtonStyled } from './button.styled';

export const Button = ({ children, onClick }: any) => {
  return (
    <ButtonStyled onClick={onClick} type="text" className="custom-button">
      {children}
    </ButtonStyled>
  );
};
