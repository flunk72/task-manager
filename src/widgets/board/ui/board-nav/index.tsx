import { BoardCard } from 'entities/board';
import { NavWrapper } from './board-nav.styled';

export const BoardNav = ({ navigation }: any) => {
  return (
    <NavWrapper>
      {navigation.map((nav: any) => {
        const { id, path, name, img } = nav;
        return <BoardCard key={id} id={id} path={path} name={name} img={img} />;
      })}
    </NavWrapper>
  );
};
