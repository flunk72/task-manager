import React from 'react';
import { Form } from './base-form.styled';

export const BaseForm = ({ children }: any) => {
  return <Form layout="vertical">{children}</Form>;
};
