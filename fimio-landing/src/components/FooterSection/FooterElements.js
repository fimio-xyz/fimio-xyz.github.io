import styled from 'styled-components'
import FooterBg from '../../images/footer.svg'

export const FooterContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30vh;
  background: url(${ FooterBg }) no-repeat;
  background-position: center;
  background-repeat: none;
`;

export const Copyright = styled.div`
  position: relative;
  font-size: 12px;
  line-height: 28px;
  color: white;
  top: 15px;
`;