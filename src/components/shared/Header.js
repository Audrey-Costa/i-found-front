import styled from 'styled-components';

export default function Header({ children, title }) {
  return (
    <Header_Style>
      {children}
    </Header_Style>
  );
}

const Header_Style = styled.header`
  height: 78px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
