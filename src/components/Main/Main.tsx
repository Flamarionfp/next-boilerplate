import { Description, Illustration, Logo, Title, Wrapper } from './Main.styles';

export const Main = ({
  title = 'React Avançado',
  description = 'TypeScript, ReactJS, NextJS e Styled Components',
}) => {
  return (
    <Wrapper>
      <Logo
        data-testid="logo"
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado."
      />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para uma tela com código."
      />
    </Wrapper>
  );
};
