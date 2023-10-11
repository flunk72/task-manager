import { useModal } from 'features';
import { BoardHeaderWrapper } from './board-header.styled';
import { BaseForm, Button, Modal } from 'shared';
import { Form, Input } from 'antd';

export const BoardHeader = () => {
  const { handleCancel, handleOk, isModalOpen, showModal } = useModal();
  const { form, ...formProps } = useBoard();

  return (
    <BoardHeaderWrapper>
      <Button onClick={showModal}>Создать доску</Button>
      <Modal title="Создать доску" open={isModalOpen} cancel={handleCancel} ok={handleOk}>
        <Form layout="vertical" size="middle" form={form} {...formProps}>
          <Form.Item label="Заголовок доски" name="boardName">
            <Input />
          </Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Modal>
    </BoardHeaderWrapper>
  );
};

function useBoard() {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log(values);
  };

  return {
    form,
    onFinish,
  };
}
