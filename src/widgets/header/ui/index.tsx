import { Form, Input } from 'antd';
import { HeaderWrapper } from './header.styled';
import { LogoIcon } from 'app/icon';
import { useModal } from 'features';
import { BaseForm, Button, Modal } from 'shared';

export const Header = () => {
  const { isModalOpen, handleCancel, handleOk, showModal } = useModal();
  return (
    <HeaderWrapper>
      <LogoIcon />
      <Button onClick={showModal}>Создать доску</Button>
      <Modal title="Создать доску" open={isModalOpen} cancel={handleCancel} ok={handleOk}>
        <BaseForm>
          <Form.Item label="Заголовок доски" name="boardName">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </BaseForm>
      </Modal>
    </HeaderWrapper>
  );
};
