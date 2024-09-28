import styled from 'styled-components';
import Theme from "../../styles/theme";


const { colors } = Theme;

const FooterContainer = styled.footer`
  background-color: ${colors.blueLogo};
  color: white;
  padding: 20px 0;

  .footer-content {
    display: flex;
    justify-content: space-around;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;

    .footer-section {
      flex: 1;
      margin: 0 10px;

      h3 {
        margin-bottom: 10px;
      }

      ul {
        list-style: none;
        padding: 0;

        li {
          margin: 5px 0;

          a {
            color: white;
            text-decoration: none;
            transition: color 0.2s;

            &:hover {
              color: #f0c14b;
            }
          }
        }
      }
    }
  }

  .footer-bottom {
    text-align: center;
    margin-top: 20px;
    font-size: 14px;
  }
`;
export {FooterContainer};