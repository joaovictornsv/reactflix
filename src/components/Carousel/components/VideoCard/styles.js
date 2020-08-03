/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;

  transition: opacity .3s;
  &:hover,
  &:focus {
    opacity: 0.5;
  }

  &:not(:first-child) {
    margin-left: 20px;
  }

  &::before {
    position: absolute;
    top: 0px;
    left: 0px;
    content: 'Assistido';
    font-family: Roboto;
    font-size: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
    width: 298px;
    height: 197px;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.9);
    transition: opacity 0.3s;
  }
`;
