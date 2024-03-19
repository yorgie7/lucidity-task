import React from 'react';
import styled from "styled-components";
import { DeleteIcon, EditIcon, ViewIcon, UnseenIcon } from "../../assets/icons";
import { viewInventoryAction, deleteInventoryData } from '../../redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const IconWrapperParent = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 4px;
`;

const IconWrapper = styled.div`
height: 18px;
width: 18px;
margin: 5px;
cursor: ${({ ismode_user }) => ismode_user ? '' : 'pointer'};
opacity: ${({ ismode_user }) => ismode_user ? '0.2' : '1'};

@media only screen and (max-width: 550px) {
  width: 12px;
  height: 12px;
  margin: 2px;

  } 
`;

const IconImg = styled.img`
height: 18px;
width: 18px;
@media only screen and (max-width: 550px) {
width: 12px;
height:12px;
}
`;


const ActionButtonSet = ({ data, id, handleEditInventory }) => {
  const dispatch = useDispatch()
  const inventoryData = useSelector(state => state?.inventoryData);
  const viewId = inventoryData?.viewInventoryId;
  const ismode_user = inventoryData?.mode === 'USER';

  const isDisable = viewId !== id;

  const viewClickHandler = (id) => {
    if (viewId === null) {
      dispatch(viewInventoryAction(id));
      return;
    }
    if (viewId === id) {
      dispatch(viewInventoryAction(null));
    }
  }

  const handleDeleteInventory = (id) => {
    dispatch(deleteInventoryData(id));
  }

  return (<IconWrapperParent>
    <IconWrapper isDisable={isDisable} ismode_user={ismode_user}>
      <IconImg src={EditIcon} height={18} width={18}
        onClick={() => !ismode_user && handleEditInventory(data)} alt={''} />
    </IconWrapper>

    <IconWrapper isDisable={isDisable} ismode_user={ismode_user}>
      {isDisable ?
        <IconImg src={ViewIcon} height={18} width={18} alt={''}
          onClick={() => !ismode_user && viewClickHandler(id)} />
        :
        <IconImg src={UnseenIcon} height={18} width={18} alt={''}
          onClick={() => !ismode_user && viewClickHandler(id)} />
      }
    </IconWrapper>
    <IconWrapper isDisable={isDisable} ismode_user={ismode_user}>
      <IconImg src={DeleteIcon} height={'100%'} width={'100%'} alt={''}
        onClick={() => !ismode_user && handleDeleteInventory(id)} />
    </IconWrapper>
  </IconWrapperParent>
  )
}
export default ActionButtonSet;