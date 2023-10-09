import { useContext } from 'react';
import { NavLink } from './board-card.styled';
import { ImageContext } from 'app';

export const BoardCard = ({ path, name, img }: any) => {
  const { setBackground } = useContext(ImageContext);
  return (
    <NavLink to={path} img={img} onClick={() => setBackground(img)}>
      {name}
    </NavLink>
  );
};
