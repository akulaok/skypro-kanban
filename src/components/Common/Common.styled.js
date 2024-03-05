import styled from "styled-components";
import { breakpoints } from "..//..//lib/breakpoints";

export const Wrapper = styled.div`
 max-width: 100%;
  width: 100vw;
  min-height: 100vh;
  overflow: hidden;
  background-color: #F1F1F1;
`;

export const Сontainer = styled.div`
 max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
  @media (max-width: ${breakpoints.md}) {
    width: 100%;
    padding: 0 16px;
 }
`;

export const Hover01 = styled.div`
  &:hover {
    background-color: #33399b;
  }
`;

export const Hover02 = styled.div`
  &:hover, .header__user:hover {
    color: #33399b;
  }

  &:hover::after, .header__user:hover::after {
    border-left-color: #33399b;
    border-bottom-color: #33399b;
  }
`;

export const Hover03 = styled.div`
  &:hover {
    background-color: #33399b;
    color: #FFFFFF;
  }

  &:hover a {
    color: #FFFFFF;
  }
`;
