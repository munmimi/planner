import styled, { css } from "styled-components";
import Theme from "../../styles/Theme";

const fontStyleCss = {
  normal:css`
  font-style:normal;
  `,
  italic:css`
  font-style:italic;
  `
}
const Menu = styled.li`
font-size:${Theme.fontSize.h3}
font-weight:500;
font-style:${props => props.fontStyleValue ? props.fontStyleValue : 'normal'}
`

export default Menu