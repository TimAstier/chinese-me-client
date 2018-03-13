import styled from 'styled-components';

const Frame = styled.div`
  margin-top: 15px;
  margin-bottom: 15px;
  border: 3px solid red;
  padding-top: 30px;
  padding-bottom: 30px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  @media print {
    display: none;
  }
`;

export default Frame;
