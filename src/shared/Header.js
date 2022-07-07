import styled from 'styled-components';

export default function Header({ children }) {
  return <Header_Style>{children}</Header_Style>;
}

const Header_Style = styled.header`
  height: 78px;
  width: 100%;

  h2 {
    font-weight: 700;
    font-size: 26px;
    line-height: 31px;
    color: white;
  }
`;
