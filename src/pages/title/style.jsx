import styled from "styled-components";

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 420px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }
`;

export const PageContent = styled.div`
  flex-grow: 1;
  overflow-y: scroll;
`;

export const HeaderWrapper = styled.div`
  top: 0;
  width: 100%;
  max-width: 420px;
  padding-top: 20px;
  padding-bottom: 15px;

  padding: 0px 15px;
  margin-bottom: 20px;

  z-index: 2;
`;

export const HeaderContent = styled.div`
  width: 100%;

  font-size: 24px;
  border-bottom: 2px solid white;
  padding-top: 20px;
  padding-bottom: 15px;

  z-index: 2;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BlackBoardInput = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0px 0px 0px;
`;

export const BlackBoardContent = styled.label`
  font-size: 16px;
  font-weight: 'Regular';
  text-align: left;
  align-self: flex-start;
  padding: 10px 0px 8px 20px;
`;

export const BlackBoardInputBox = styled.input`
    font-family: 'Pretendard';
    width: 345px;
    height: 49px;
    border-radius: 5px;
    color: white;
    background-color: #AEBAB3; 
    font-size: 16px;
    ::placeholder {
        font-family: 'Pretendard';
        font-size: 16px; 
        color: #AEBAB3; 
    }
    align-self: center;
`;

export const BlackBoardInputWrapper = styled.div`
  width: 100%;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  input::placeholder {
    font-family: "Pretendard";
    color: ${props => props.theme.colors.font1};
  }
`;
export const BlackBoardInputArea = styled.input`
  font-size: 16px;
  color: white;
  padding: 15px 20px;

  border-radius: 10px;
  background-color: ${props => props.theme.colors.grey1};
  font-family: "Pretendard";

  /* Remove the default arrow icon */
  appearance: none;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="M7 10l5 5 5-5H7z"/></svg>');
  background-repeat: no-repeat;
  background-position: right 15px center;
  background-size: 24px;
`;

export const InputCount = styled.div`
  width: 100%;
  padding: 5px 10px;
  display: flex;
  justify-content: end;

  font-size: 12px;
  font-family: "Pretendard";
  color: ${props => props.theme.colors.font1};
`;