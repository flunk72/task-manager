import React from 'react';
import { Wrapper } from 'shared';
import { BoardColumn } from 'widgets';

export const HomePage = () => {
  return (
    <Wrapper>
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
    </Wrapper>
  );
};
