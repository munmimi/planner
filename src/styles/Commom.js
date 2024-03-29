import { css } from "styled-components";
import Theme from "./Theme";

export const flexCenterCenter = css`
display: flex;
align-items: center;
justify-content: center;
`
export const flexRowCenter =css`
display: flex;
        align-items: center;
`
export const flexRowSpacebeweenFlexend = css`
  display: flex;
      justify-content: space-between;
      align-items: flex-end;
`
export const flexColumnSpaceBetween= css`
display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
`
export const flexColumnFlexEnd = css`
      display: flex;
        flex-direction: column;
        align-items: flex-end;
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

