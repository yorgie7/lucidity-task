import React from 'react';
import styled from "styled-components";
import ModalEditInventory from '../ModalEditInventory';
import { initiateEditInventoryData } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import ListInstance from "./ListItem"

const ListItemBottem = () => {
  return (
    <ListItem type={"bottom"}>
      <FlexWrap width='100%'>
        No Data Found.
      </FlexWrap>
    </ListItem>
  )
}

export default function ListContainer({ inventoryData, isLoading, viewId }) {

  const dispatch = useDispatch();

  const handleEditInventory = (data = null) => {
    dispatch(initiateEditInventoryData(data));
  }

  if (isLoading) return <></>;
  const productListData = inventoryData?.data?.data || [];
  const last_index = productListData.length ? productListData.length - 1 : 0;
  
  return (<>
    <ListWrapper>
      <ListInstance listType={"header"} />
      {productListData?.map((el, i) => {
        const isDisable = viewId && viewId !== el?.id;
        return (
          <ListInstance key={i} data={el} id={el.id}
            handleEditInventory={handleEditInventory}
            isDisable={isDisable} listType={last_index === i ? 'bottom' : ''} />
        )
      }
      )}
      {productListData?.length === 0 && <ListItemBottem />}
    </ListWrapper>

    {inventoryData?.editInventoryData &&
      <ModalEditInventory data={inventoryData?.editInventoryData} />}
  </>

  )
}


const ListWrapper = styled.div`
border: 1px solid #38393b;
background: #38393b;
border-radius: 8px;
padding: 0;
margin: 16px 16px 0;
`;
const ListItem = styled.div`
display: flex;
flex-direction: row;
width: ${({ type }) => type === "bottom"
    ?
    "100%" : "fit-content"};
justify-content: space-between;  
align-items: center;
border: 1px solid black;
border-radius: ${({ type }) => !type ? 0 : type === "bottom"
    ?
    "0 0 8px 8px" : "8px 8px 0 0"};
height: 40px;
background-color: "#38393b";
padding: 0 8px;
align-items: center;
color: #fff;
`;

const FlexWrap = styled.div`
width : ${({ width }) => width || 'fit-content'};
`;