import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import styled from "styled-components";
import { changeModeUserAdmin } from "../../redux/actions";

const USER = "USER";
const ADMIN = "ADMIN";


const Header = ({ data }) => {
  const dispatch = useDispatch();

  const inventoryData = useSelector(state => state?.inventoryData);
  const mode = inventoryData?.mode;

  const handleMode = (targetMode) => (mode) => {
    if (mode !== targetMode) {
      dispatch(changeModeUserAdmin(targetMode));
    }
  }
  const isAdminActive = mode === ADMIN;
  return (<Wrapper>
    <ActionWrapper>
      <ModeName active={!isAdminActive} >{"User"}</ModeName>
      <RadioActionWrapper>

        <Button active={!isAdminActive} onClick={handleMode(USER)}>
        </Button>
        <Button active={isAdminActive} onClick={handleMode(ADMIN)}>
        </Button>

      </RadioActionWrapper>
      <ModeName active={isAdminActive} >{"Admin"}</ModeName>
    </ActionWrapper>

  </Wrapper>
  )
}

export default React.memo(Header);

const Wrapper = styled.div`
display: flex;
flex-direction: column; 
align-items: end;
justify-content: center;
height: 32px;
padding: 4px 8px;
margin: 8px;
`;

const RadioActionWrapper = styled.div`
display: flex;
flex-direction: row;
border: 1px solid #349429;
background: #fff;
border-radius: 20px;
width: 40px;
height: 20px;
justify-content: center;
align-items: center;
`;

const ActionWrapper = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const Button = styled.button`
width: 30px;
height: 20px;
background-color: ${({ active }) => active ? "#349429" : "#fff"};
border: 1px solid ${({ active }) => active ? "#349429" : "#fff"};
border-radius: 20px;
cursor: pointer;
transition: 0.5s;
`;
const ModeName = styled.p`
margin: auto 4px;
color: ${({ active }) => active ? "#dbd74f" : "white"};
font-weight: 500;
`;
