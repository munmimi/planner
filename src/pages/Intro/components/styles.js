import styled from "styled-components";
import Theme from "../../../styles/Theme";
import { borderBottom } from "../../../styles/Commom";

const S = {};
S.Div = styled.div`
  width: calc(100% - 504px);
  height: 100%;
  font-size: ${Theme.fontSize.h3};
  color: ${Theme.colors.grey};
  button {
    width: 100%;
    height: 100%;
    max-height: 80px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    font-size: ${Theme.fontSize.h3};
    padding: 18px 30px;
    position: relative;
    color: inherit;
    overflow: hidden;
    padding-bottom: 40px;
    &::after{
        ${borderBottom}

    }
   &:last-child::after{
    display: none;
   }
    &.is-active{
        max-height: calc(100% - 160px);
        background-color: ${Theme.colors.grey};
        color: ${Theme.colors.exLightGrey};
        font-weight: 300;
    }
    p{
        margin-top: 40px;
        text-align: right;
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        span{
            display: inline-block;
            margin-bottom: 10px;
            font-size: ${Theme.fontSize.body};

            
            &:last-child{
                margin-bottom: 0;
            }
            a{
                color: inherit;
                padding-left: 10px;
            }
        }
    }
  }
`;


export default S;