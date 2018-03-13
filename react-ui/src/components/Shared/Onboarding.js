import styled from 'styled-components';

export const TitleWrapper = styled.div`
  margin-top: 7%;
  width: 70%;
  text-align: center;
  font-family: 'Open Sans';
	font-size: 30px;
	font-weight: 300;
	line-height: 1.5;
	color: #454545;
`;

export const Footer = styled.div`
  width: 100%;
  padding-top: 30px;
`;

export const FooterText = styled.div`
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  font-family: 'Open Sans';
  font-size: 16px;
  line-height: 3;
  color: #bfbfbf;
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  background-color: #55b6ff;
  box-shadow: 0 5px 18px 0 rgba(85, 182, 255, 0.5);
  font-family: 'Open Sans';
	font-size: 20px;
	text-align: center;
	color: #ffffff;
  outline: 0;
  border: 0;
  :hover {
    background-color: #5fb9fc;
    box-shadow: 0 5px 30px 0 rgba(85, 182, 255, 0.8);
  }
`;
