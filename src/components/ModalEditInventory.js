import React, { useState } from 'react';
import styled from "styled-components";
import { terminateEditInventory, saveEditInventoryData } from "../redux/actions"
import { useDispatch } from 'react-redux';



const InputBox = ({ label, ...props }) => (
  <SingleInputWrapper>
    <label >{label} </label>
    <Input {...props} />
  </SingleInputWrapper>)



export default function ModalEditInventory({ data }) {
  const dispatch = useDispatch();
  const [productData, setProductData] = useState({ ...data });

  const cancelEditInventory = () => dispatch(terminateEditInventory());

  const handleSaveInventory = () => {
    dispatch(saveEditInventoryData(productData));
  }

  const handleChange = ({ target: { name, value } }) => {
    let value_new = value;
    let total_value = productData.value;

    if (name === 'quantity') {
      value = parseFloat(value);
    }
    if (name === 'price' && !value) {
      value_new = `$${value}`
    }
    if (name === 'price' && !value) {
      value_new = `$${value}`
    }

    if (name === 'price') {
      total_value = `$${parseFloat(value?.slice(1) || 0) * parseInt(productData.quantity)}`;
    }

    if (name === 'quantity') {
      total_value = `$${parseFloat(productData.price?.slice(1) || 0) * parseInt(value)}`;
    }
    setProductData(state => ({ ...state, [name]: value_new, value: total_value }))
  }



  return (<ModalWrapper>
    <ModalWrapperContent>
      <CloseBtnWpr>
        <CloseButton onClick={cancelEditInventory}>
          X
        </CloseButton>
      </CloseBtnWpr>
      <ModalTitle>Edit Product</ModalTitle>
      <ProductName>
        {productData?.name}
      </ProductName>

      <InputWrapper>
        <InputBox name={'category'} label="Categoty"
          value={productData.category} placeholder={'Categoty'}
          onChange={handleChange} />

        <InputBox name={'price'} label={'Price'}
          value={productData.price} placeholder={'Price'}
          onChange={handleChange} />

        <InputBox name={'quantity'} label={'Quantity'}
          value={productData.quantity} placeholder={'Quantity'}
          onChange={handleChange} />

        <InputBox name={'value'} label={'Value'}
          value={productData.value} placeholder={'Value'} />
      </InputWrapper>

      <ButtonWrapper >
        <CancelButton onClick={cancelEditInventory} >
          Cancel
        </CancelButton>

        <SaveButton onClick={handleSaveInventory}>
          Save
        </SaveButton>
      </ButtonWrapper>

    </ModalWrapperContent>
  </ModalWrapper>
  )
}


const ModalWrapper
  = styled.div`
display: flex;
position: fixed;
width: 100%;
height: 100%;
top: 0;
right: 0;
bottom: 0;
left: 0;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: rgb(0, 0, 0, 0.6);
padding: 4px;
`;
const ModalWrapperContent = styled.div`
height: fit-content;
width: 28rem;
min-height: 200px;
min-width: 400px;
border: 1px solid #38393b;
align-items: center;
justify-content: center;
background-color: #3a3d42;
padding: 14px;
`;

const CloseButton = styled.button`
    font-size: 20px;
    font-weight: 500;
    background-color: #38393b;
    border: 0;
    color: #fff;
    cursor: pointer;
`;

const CloseBtnWpr = styled.div`
   text-align: right;
`;
const SaveButton = styled.button`
    font-size: 18px;
    font-weight: 500;
    background-color: #38393b;
    border: 1px solid black;
    border-radius: 4px;
    padding: 8px 12px;
    color: #fff;
    cursor: pointer;
`;
const CancelButton = styled.button`
    font-size: 18px;
    font-weight: 500;
    background-color: #38393b;
    border: 0;
    padding: 4px 12px;
    color: #dbd74f;
    cursor: pointer;
`;
const ButtonWrapper = styled.div`
   display : flex;
   flex-direction: row;
   margin: 16px 16px 8px;
   justify-content: right;
`;
const ModalTitle = styled.p`
font-size: 24px;
fornt-weight: 400;
margin: 0;
color : #fff;
`;

const ProductName = styled.p`
font-size: 18px;
color : #fff;
`;

const SingleInputWrapper = styled.div`
display: flex;
flex-direction: column;
font-size: 16px;
color : #fff;
`;
const InputWrapper = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
font-size: 16px;
width: 100%;  
color : #fff;
gap: 1rem;
`;
const Input = styled.input`
  outline: none;
  color: blue;
  border: 1px solid black;
  text-decoration: none;
  box-shadow: 0 1px 6px 0 rgba(0, 0, 0, 0.5);
  border-radius: 0.2rem;
  height: 32px;
  margin: 4px;
  padding: 4px 12px;
`;
