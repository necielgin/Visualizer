import styled from "styled-components";
import { Link as RouterLink } from 'react-router-dom';

export const Button = styled(RouterLink) `
border-radius: 50px;
background: ${({primary})=>(primary? 'aqua':'#010606')};
padding: ${({big})=> (big? '14px 48px':'12px 30px')};
color: ${({dark})=>(dark?'#010606':'#fff')};
font-size ${({fontBig})=>(fontBig?'32px':'24px')};
outline: none;
border: none;
cursor: pointer;
display: flex;
justify-content: center;
align-items: center;
transition: all 0.2s ease-in-out;
text-decoration:none;

&:hover{
	transition: all 0.2s ease-in-out;
	background: ${({ primary }) => primary ? '#fff' : 'aqua'};
	color: #010606;
      }
` 