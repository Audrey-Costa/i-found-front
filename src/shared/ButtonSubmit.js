import styled from 'styled-components';

export default function ButtonSubmit({ backgroundcolor, children }) {
  return (
    <ButtonSubmitStyle backgroundcolor={backgroundcolor} type="submit">
      {children}
    </ButtonSubmitStyle>
  );
}

const ButtonSubmitStyle = styled.button`
  width: 303px;
  height: 45px;
  background: ${props => props.backgroundcolor};
  border-radius: 4.63636px;
  border: none;
  font-size: 20.976px;
  color: white;
  font-family: 'Jost', sans-serif;
  :hover {
    cursor: pointer;
  }
`;
