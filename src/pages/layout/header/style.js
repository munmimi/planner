import styled from "styled-components";
import Theme from "../../../styles/Theme";
import {
  borderColAni,
  borderRowAni,
  flexCenterCenter,
  flexRowCenter,
  flexRowSpacebeweenFlexend,
  rotateKeyframes,
} from "../../../styles/Commom";
import { useRef } from "react";

const H = {};

H.Header = styled.header`
  width: 100%;
  height: 100px;
  /* border-bottom: solid 2px ${Theme.colors.grey}; */
  position: relative;
  z-index: 10;
  ${flexRowCenter}
  justify-content: space-between;
  &::after {
    content: "";
    display: inline-block;
    width: 0%;
    height: 1px;
    position: absolute;
    left: 0;
    bottom: 0;
    background-color: ${Theme.colors.grey};
    animation: borderRowAni 1.4s linear forwards;
    ${borderRowAni}
  }
`;
H.Logo = styled.p`
  width: 200px;
  height: 50%;
  /* border-right: solid 1px ${Theme.colors.grey}; */
  a {
    width: 100%;
    height: 100%;
    display: inline-block;
  }
`;
H.Button = styled.button`
  width: 100px;
  height: 100%;
  /* border-left: solid 2px ${Theme.colors.grey}; */
  transition: all .1s ease-out;
  position: relative;
  &::before {
    content: "";
    display: inline-block;
    width: 1px;
    height: 0%;
    position: absolute;
    left: 0;
    top: 0;
    background-color: ${Theme.colors.grey};

    animation: borderColAni 0.8s linear forwards;
    ${borderColAni}
  }

  .path {
    width: 0;
    height: 1px;
    background-color: ${Theme.colors.grey};
    display: inline-block;
    position: absolute;
    right: 30px;
    top: 50%;
    transition: all 0.1s ease-out;
    animation: menuPathAni .8s linear forwards;
    @keyframes menuPathAni {
      0% {
        width: 0%;
        opacity: 0;
      }
      100% {
        width: 38px;
        opacity: 1;
      }
    }
    &:first-child {
      transform: translateY(-7px);
    }
    &:last-child {
      transform: translateY(7px);
      animation-delay: .4s;
    }
  }
  &:hover {
    .path:last-child {
      width: 22px;
    }
  }
  &.is-x {
    background-color: ${Theme.colors.grey};

    .path {
      background-color: #fff;
      &:first-child {
        transform: rotate(45deg);
      }
      &:last-child {
        transform: rotate(-45deg);
      }
    }
    &:hover {
      .path:last-child {
        width: 38px;
      }
    }
  }
`;
H.Nav = styled.nav`
  width: fit-content;
  position: absolute;
  top: 100px;
  right: 0;
  overflow: hidden;
  &.is-active {
    ul {
      transform: translateY(0%);
      li.mark i{
        ${rotateKeyframes}

        animation: rotateAni 5s infinite linear;
      }
    }
  }
  ul {
    display: flex;
    transform: translateY(-100%);
    transition: all 0.4s ease-out;

    li {
      border: solid 1px ${Theme.colors.grey};
      border-top: none;
      border-right: none;
      background-color: #fff;
      position: relative;
      overflow: hidden;
      a {
        padding: 27px 40px;
        font-size: ${Theme.fontSize.h3};
        color: ${Theme.colors.grey};
        /* font-weight: 300; */
        display: inline-block;
        position: relative;
        transition: all 0.4s ease-out;
      }
      &:nth-child(2) a {
      }
      &:last-child {
        border-right: none;
      }
      &.mark {
        width: 100px;
        ${flexCenterCenter}
        background-color: rgba(255,255,255,0.2);
        backdrop-filter: blur(10px);

        i {
          width: 38px;
          height: 38px;
          display: inline-block;
          background: url(/images/icons/mark_bk_small.png) no-repeat;
          background-size: cover;
         
        }
      }

      .layer {
        position: absolute;
        left: 0;
        bottom: -100%;
        width: 100%;
        height: 100%;
        background-color: ${Theme.colors.grey};
        transition: all 0.4s ease-out;
      }
      &.is-active .layer {
        bottom: 0;
      }
      &.is-active a {
        color: #fff;

      }
    }
  }
`;
export default H;
