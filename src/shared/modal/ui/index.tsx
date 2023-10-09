import { ModalStyled } from './modal.styled';

export const Modal = ({ open, ok, cancel, title, children }: any) => {
  return (
    <ModalStyled title={title} open={open} onOk={ok} onCancel={cancel} centered footer={null}>
      {children}
    </ModalStyled>
  );
};
