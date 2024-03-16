import styled from "styled-components";
import Theme from "../../styles/Theme";
import { displayCenter } from "../../styles/Commom";

const S = {};

S.Section = styled.section`
  color: ${Theme.colors.grey};
`;
S.Div = styled.div`
  display: flex;
  border-bottom: solid 1px #404040;
  &.top {
    height: 470px;
    .imgBox {
      width: 504px;
      padding: 40px;
      border-left: solid 1px #404040;
        ${displayCenter}
      img {
        width: 100%;
      }
    }
  }
  &.bot {
    height: 454px;
  }
`;
export default S;
