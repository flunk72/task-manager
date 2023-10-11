import { ButtonStyled } from './button.styled';

export const Button = ({ children, onClick, htmlType }: any) => {
  return (
    <ButtonStyled onClick={onClick} type="text" className="custom-button" htmlType={htmlType}>
      {children}
    </ButtonStyled>
  );
};
