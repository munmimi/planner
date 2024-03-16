import styled from "styled-components";
import Theme from "../../../styles/Theme";

const S = {};

S.Header = styled.header`
  width: 100%;
  height: 100px;
  padding: 0 40px;
  padding-bottom: 15px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 2px solid ${Theme.colors.black};
`;
S.Nav = styled.nav`
    display: flex;
    align-items: center;
    & a{
        /* font-weight: 500; */
        font-size: ${Theme.fontSize.h3};

    }
    & a.intro{
        font-style: italic;
    }
`
export default S;
