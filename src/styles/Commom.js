import { css } from "styled-components";
import Theme from "./Theme";

export const displayCenter = css`
display: flex;
align-items: center;
justify-content: center;
`

export const borderBottom = css`
    content: '';
    display: inline-block;
    width: 100%;
    height: 1px;
    background-color: ${Theme.colors.grey};
    position: absolute;
    left: 0;
    bottom: 0;

`