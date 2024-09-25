import styled from "styled-components";
import Theme from "../../styles/theme";

const { colors } = Theme;

const HeaderContent = styled.header`
  /* Aplica o reset aos elementos internos do Header */
  * {
    all: unset; /* Remove todos os estilos herdados */
    box-sizing: border-box;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${colors.blueLogo};
  position: relative;
  height: 35px;

  .text-container {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    .rolling-text {
      color: ${colors.yellow};
      position: absolute;
      text-align: center;
      transition: transform 1s ease, opacity 1s ease;
      opacity: 0;

      img {
        margin-top: 13px;
        width: 60px;
        height: 50px;
      }

      p {
        font-size: 10px;
      }

      &.active {
        opacity: 1;
        transform: translateX(0);
      }

      &.left {
        transform: translateX(-100%);
        opacity: 0;
      }

      &.right {
        transform: translateX(100%);
        opacity: 0;
      }
    }
  }
`;

const Nav = styled.nav`
  * {
    all: unset; /* Remove todos os estilos herdados */
    box-sizing: border-box;
  }

  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    width: 65px;
    margin-left: 30px;
  }

  .nav-list {
    list-style: none;
    display: flex;
    justify-content: space-between;
    cursor: pointer;

    li {
      a {
        font-family: Arial;
        font-weight: bold;
        text-decoration: none;
        width: 80px;
        margin-left: 30px;
        position: relative;

        &::after {
          content: " ";
          width: 0%;
          height: 3px;
          background-color: ${colors.blueLogo};
          position: absolute;
          bottom: 0;
          left: 0;
          transition: 0.5s ease-in-out;
        }

        &:hover::after {
          width: 75%;
        }
      }
    }
  }

  .hamburguer {
    display: none;
    border: none;
    background: none;
    cursor: pointer;
    flex-direction: column;
    justify-content: space-around;
    height: 20px;
    width: 30px;
    z-index: 2;

    span {
      display: block;
      width: 100%;
      height: 3px;
      background: ${colors.blueLogo};
      transition: 0.3s;
    }

    /* Media query para o botão hamburguer em telas menores */
    @media (max-width: 949px) {
      display: flex;
      position: absolute;
      top: 26px;
      right: 10px;
    }
  }

  /* Esconder o contato em telas menores que 950px */
  @media (max-width: 949px) {
    .nav-contact {
      display: none !important;
    }
  }

  .nav-contact {
    background-color: ${colors.yellow};
    margin-right: 30px;
    padding: 0.4rem 1rem;
    border-radius: 5px;
    text-decoration: none;
    color: ${colors.blueLogo};

    &:hover {
      background-color: ${colors.blueLogo};
      color: ${colors.yellow};
    }
  }

  .nav-link {
    color: ${colors.blueLogo};
    width: 100px;
    display: flex;
    position: relative;

    &:hover::after {
      content: " ";
      width: 75%;
      height: 3px;
      background-color: ${colors.blueLogo};
      position: absolute;
      bottom: 0;
      left: 0;
      transition: width 0.5s ease-in-out;
    }
  }

  /* Media query para telas entre 950px e 1100px */
  @media (max-width: 1100px) and (min-width: 950px) {
    img {
      width: 50px; /* Reduz o tamanho da imagem no nav */
    }

    .nav-list li a {
      font-size: 0.9rem; /* Diminui o tamanho da fonte */
    }

    .nav-contact {
      padding: 0.3rem 0.8rem; /* Ajusta o tamanho do botão de contato */
      font-size: 0.9rem; /* Diminui o tamanho da fonte do botão */
    }
    .nav-list {
      margin-left: 10px;
    }
  }
`;

export { HeaderContent, Nav };
