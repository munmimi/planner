import styled from "styled-components";
import Theme from '../../styles/Theme';

const C = {};


C.Container = styled.div`
  display: flex;
  height: 100vh;
`
C.CanlendarInner = styled.div`
  width: calc(100% - 247px);
`
C.CanledarInfo = styled.div`
  width: 247px;
  height: 100%;
  background-color: ${Theme.colors.exLightGrey};
  border-left: solid 1px ${Theme.colors.grey};
`
C.CalendarHead = styled.div`
height: 60px;
border-bottom: solid 1px ${Theme.colors.grey};
font-size: ${props=>props.fs};
font-style: ${props=>props.fSt};
  display: flex;
  align-items: center;
  justify-content: right;
  padding-right: ${props=>props.pdr};
`
export default C;