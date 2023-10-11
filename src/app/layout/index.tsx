import { LayoutWrapper } from './layout.styled';
import { BoardHeader, BoardNav } from 'widgets';
import { boardList } from 'entities/board';
import { Content, Header, Sider } from 'shared';
import { Routing } from 'app/routing';
import { LogoIcon } from 'app/icon';
import { UserCard } from 'entities/user';

export const Layout = () => {
  // const savedUser = JSON.parse(localStorage.getItem('user') || '{}');
  // console.log(savedUser.user.board);

  return (
    <LayoutWrapper>
      <Header>
        <LogoIcon />
        <BoardHeader />
      </Header>
      <Sider>
        <UserCard />
        <BoardNav navigation={boardList} />
      </Sider>
      <Content>
        <Routing />
      </Content>
    </LayoutWrapper>
  );
};
