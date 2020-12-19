import { FiArrowRight } from 'react-icons/fi';

import logoImage from '../../assets/logo.svg';

import { Container, JoinApp, Location, Wrapper } from './style';

const Landing = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logoImage} alt="Happy" />

        <main>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </main>

        <Location>
          <strong>Rio de Janeiro</strong>
          <span>Rio de Janeiro</span>
        </Location>

        <JoinApp href="#">
          <FiArrowRight size={26} color="rgba(0, 0, 0, 0.6)" />
        </JoinApp>
      </Wrapper>
    </Container>
  );
};

export default Landing;
