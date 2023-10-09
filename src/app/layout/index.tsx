import { LayoutWrapper } from './layout.styled';
import { Content } from 'widgets';
import { Header } from 'widgets';
import { BoardNav } from 'widgets';
import { boardList } from 'entities/board';

export const Layout = () => {
  return (
    <LayoutWrapper>
      <Header />
      <BoardNav navigation={boardList} />
      <Content />
    </LayoutWrapper>
  );
};
