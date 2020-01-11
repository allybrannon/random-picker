import styled from "styled-components";

export const AppWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background: linear-gradient(rgba(255,255,255, 0.8), rgba(200, 200,230, 0.9), rgba(255,255,230, 1));
`;

export const LeftSideBar = styled.div`
  left: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: absolute;
  overflow-y: scroll;
  top: 0;
  width: 200px;
  background: linear-gradient(rgba(255,255,255, 0.8), rgba(200, 200,230, 0.9), rgba(255,255,230, 1));

  @media (max-width: 768px) {
    display: none;
  }

`;

export const RightSideBar = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow-y: scroll;
  position: absolute;
  right: 0;
  top: 0;
  width: 200px;
  background: linear-gradient(rgba(255,255,255, 0.8), rgba(200, 200,230, 0.9), rgba(255,255,230, 1));

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TopBar = styled.div`
  width: 100%;
  height: 100px;
`
export const MainArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const SpinnerContainer = styled.div`
  width: 300px;
  height: 300px;
  border-radius: 100%;
  margin: 0 auto;
  box-shadow: 1px 1px 5px rgba(0,0,0,0.5), 2px 2px 10px rgba(0,0,0,0.5), 3px 4px 12px rgba(0,0,0,0.5)
`
