import TitlePage from '../../../shared/TitlePage';
import H1 from '../../../shared/H1';
import ButtonSubmit from '../../../shared/ButtonSubmit';
import Main from '../../../shared/Main';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export default function ProductRegisteredPage() {
  return (
    <>
      <TitlePage>
        <H1>Produto cadastrado com sucesso!</H1>
      </TitlePage>
      <Main>
        <ContainerStyle>
          <Link
            to={'/add-product'}
            style={{
              textDecoration: 'none'
            }}
          >
            <ButtonSucessStyle
              border={'none'}
              color={'white'}
              backgroundcolor={'#16112B'}
            >
              Continuar registrando
            </ButtonSucessStyle>
          </Link>
          <Link
            to={'/home'}
            style={{
              textDecoration: 'none'
            }}
          >
            <ButtonSucessStyle
              color={'#16112B'}
              border={'1px solid #16112B'}
              backgroundcolor={'transparent'}
            >
              Voltar para a Home
            </ButtonSucessStyle>
          </Link>
        </ContainerStyle>
      </Main>
    </>
  );
}

const ContainerStyle = styled.div`
  margin-top: 150px;
  display: flex;

  justify-content: space-between;
  width: 40%;

  @media (max-width: 800px) {
    width: 90%;
  }
`;
const ButtonSucessStyle = styled.button`
  width: 100%;
  height: 200px;
  background: ${props => props.backgroundcolor};
  border-radius: 4.63636px;
  border: ${props => props.border};
  font-size: 20.976px;
  color: ${props => props.color};
  font-family: 'Jost', sans-serif;
  transition: box-shadow 0.5s;
  :hover {
    cursor: pointer;
    box-shadow: 0 0 1em grey;
  }

  @media (max-width: 800px) {
    font-size: 14px;
    height: 100px;
    width: 100%;
  }
`;
