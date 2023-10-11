import React from 'react';
import { Form } from './base-form.styled';

export const BaseForm = ({ children, form }: any) => {
  return (
    <Form layout="vertical" form={form}>
      {children}
    </Form>
  );
};
