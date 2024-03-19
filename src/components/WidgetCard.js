import React from 'react';
import styled from 'styled-components';
import { CardWrapper, TitleWidget, CountStyled } from '../styled';
import { widget_icons } from '../assets/icons';

export default function WidgetCard({ value, title, id }) {
  const Icon = widget_icons[id];
  return (<>
    <CardWrapper>
      {/* </IconWrapperParent> */}

      <FlexDiv>
        <IconWrapper>
          <img src={Icon} height={25} width={25} alt={''} />
        </IconWrapper>
        <TitleWidget> {title} </TitleWidget>
      </FlexDiv>

      <CountStyled>{value || "__"}</CountStyled>


    </CardWrapper>

  </>

  )
}


const FlexDiv = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
`;

const IconWrapper = styled.div`
height: 18px;
width: 18px;
margin: 8px;

`;
