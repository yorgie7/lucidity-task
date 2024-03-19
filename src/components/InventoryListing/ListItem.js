import React from 'react';
import styled from "styled-components";
import ActionButtonSet from './ActionListItem';

const ListInstance = ({ data, listType, handleEditInventory, id, isDisable = false }) => {

  return (
    <ListItem type={listType} isDisable={isDisable}>
      <FlexWrap width={'25%'}>
        {data ? data.name :
          <ButtonWrapper>
            <ButtonText>
              Name
            </ButtonText>
          </ButtonWrapper>
        }

      </FlexWrap>

      <FlexWrap width={'15%'}>
        {data ? data.category :
          <ButtonWrapper>
            <ButtonText>
              Category
            </ButtonText>
          </ButtonWrapper>
        }

      </FlexWrap>

      <FlexWrap width={'10%'}>
        {data ? data.price :
          <ButtonWrapper>
            <ButtonText>
              Price
            </ButtonText>
          </ButtonWrapper>
        }

      </FlexWrap>
      <FlexWrap width={'15%'}>
        {data ? data.quantity :
          <ButtonWrapper>
            <ButtonText>
              Quantity
            </ButtonText>
          </ButtonWrapper>
        }

      </FlexWrap>

      <FlexWrap width={'10%'}>
        {data ? data.value :
          <ButtonWrapper>
            <ButtonText>
              Value
            </ButtonText>
          </ButtonWrapper>
        }

      </FlexWrap>
      <FlexWrap width={'15%'}>
        {data ? <ActionButtonSet data={data} id={id} isDisable={isDisable}
          handleEditInventory={handleEditInventory} /> :
          <ButtonWrapper>
            <ButtonText>
              ACTION
            </ButtonText>
          </ButtonWrapper>
        }
      </FlexWrap>
    </ListItem>)
};


export default ListInstance;


const ListItem = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;  
align-items: center;
border: 1px solid #000000;
border-radius: ${({ type }) => !type ? 0 : type === "bottom"
    ?
    "0 0 8px 8px" : "8px 8px 0 0"};
height: 40px;
background-color: ${({ isDisable }) => isDisable ? "#000000 " : "38393b"};
padding: 0 8px;
align-items: center;
color: #fff;
opacity: ${({ isDisable }) => isDisable ? 0.2 : 1};
`;

const ButtonWrapper = styled.div`
display: flex;
justify-content: center;
border: 2px solid #000000;
border-radius: 8px;
padding: 0 8px;
height: 24px;
background-color: #000000;
width: fit-content;
@media only screen and (max-width: 550px) {
    height: 20px;
}
`;

const ButtonText = styled.p`
    font-size: 12px;
    font-weight: 500;
    color: #eef56e;
    margin: 5px;
    @media only screen and (max-width: 550px) {
      font-size: 10px;
      font-weight: 400;
    }
`;

const FlexWrap = styled.div`
width : ${({ width }) => width || 'fit-content'};
min-width : ${({ width }) => width || '140px'};
@media only screen and (max-width: 550px) {
    font-size: 12px;
}
`;