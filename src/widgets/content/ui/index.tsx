import { Modal } from 'shared';
import { ContentWrapper } from './content.styled';
import { Routing } from 'app/routing';
import { useModal } from 'features';

export const Content = () => {
  const { handleCancel, handleOk, isModalOpen } = useModal();
  return (
    <ContentWrapper>
      <Routing />
      <Modal cancel={handleCancel} ok={handleOk} open={isModalOpen}></Modal>
    </ContentWrapper>
  );
};
