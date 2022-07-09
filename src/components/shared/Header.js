import styled from 'styled-components';

export default function Header({ children }) {
  return <HeaderStyle>{children}</HeaderStyle>;
}

const HeaderStyle = styled.header`
  height: 78px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
