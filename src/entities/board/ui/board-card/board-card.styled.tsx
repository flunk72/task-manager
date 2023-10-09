import styled from 'styled-components';
import * as router from 'react-router-dom';

export const NavLink = styled(router.NavLink)<{ img: string }>`
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  border-radius: 5px;
  text-decoration: none;
  color: var(--white);
  background: ${(props) => `url(${props.img})`};
  background-repeat: no-repeat;
  background-size: 100%;
  transition: background-size 0.8s ease-in-out;
  background-position: center;

  &:hover {
    background-size: 200%;
    transition: background-size 0.8s ease-in-out;
    background-position: center;
    background-repeat: no-repeat;
  }
`;
