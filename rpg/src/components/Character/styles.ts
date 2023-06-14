import { styled } from "styled-components";

export const Container =  styled.div<{ left: number, top: number, size: number, sidepos: number}>`
    width: ${props=> props.size}px;
    height: ${props=> props.size}px;
    position: absolute;
    left: ${props=> props.left}px;
    top: ${props=> props.top}px;
    background-image: url('/assets/char.png');
    background-position: 0px ${props=> props.sidepos}px;

    span {
        position: absolute;
        left: 0px;
        top: -25px;
    }
`;