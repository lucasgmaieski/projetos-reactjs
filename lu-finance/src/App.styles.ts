import styled from 'styled-components';
import bgMain from './assets/bg.svg';

export const Container = styled.div`
    background-image: URL(${bgMain});
    height: 500px;
`;

export const Header = styled.div`
    background-color: #ffffff12;
    height: 130px;
    text-align: center;
`;

export const HeaderText = styled.h1`
    margin: 0;
    padding: 0;
    color: #fff;
    padding-top: 30px;
`;

export const Body = styled.div`
    max-width: 980px;
    margin: auto;
    min-height: 600px;
    margin-bottom: 50px;
`;