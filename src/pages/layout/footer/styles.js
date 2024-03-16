import styled from "styled-components";


const S = {};

S.Footer = styled.footer`
 width: 100%;
  height: 60px;
  background-color: #fff;
  border-top: solid 1px #0d0d0d;
  display: flex;
  p{
    padding: 0 40px;
    border-right: solid 1px #0d0d0d;
    line-height: 60px;
    &:last-child{
      border-right: none;
    }
    a{
      text-decoration: underline;
    }
  }
`

export default S;