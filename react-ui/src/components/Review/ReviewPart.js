import React, { Component } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';
import practiceNames from '../../constants/practiceNames';
import iconCheck from '../../images/iconCheck.svg';

const Wrapper = styled.div`
  flex-grow: 1;
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 10px;
  margin-right: 10px;
  display: flex;
  flex-direction: column;
  max-width: 480px;
  min-height: 250px;
  background-color: #F2F7FA;
  border-radius: 25px;
`;

const Title = styled.div`
  margin-top: 10px;
  font-weight: bold;
  font-size: 22px;
  font-family: 'Open Sans';
  color: #4F81BD;
  text-align: center;
  margin-bottom: 10px;
`;

const Items = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 30px;
  font-size: 18px;
  font-family: 'Open Sans';
`;

const Item = styled.div`
  margin-bottom: 10px;
  display: flex;
`;

const CheckmarkWrapper = styled.div`
  width: 20px;
  margin-right: 10px;
`;

const ItemName = styled.div`
  cursor: pointer;
`;

class ReviewPart extends Component {
  _renderItems() {
    return this.props.items.map(e => {
      const name = practiceNames.hasOwnProperty(e.type)
        ? practiceNames[e.type].name
        : `{ERROR: unknown practice type:${e.type}}`;
      return (
        <Item
          key={e.type}
        >
          <CheckmarkWrapper>
            {
              e.userPractices.length > 0 &&
                <img src={iconCheck} alt="" width={20} />
            }
          </CheckmarkWrapper>
          <ItemName onClick={() => this.props.itemClick(e.id)}>
            {name}
          </ItemName>
        </Item>
      );
    });
  }

  render() {
    return (
      <Wrapper>
        <Title>
          {this.props.title}
        </Title>
        <Items>
          {this._renderItems()}
        </Items>
      </Wrapper>
    );
  }
}

ReviewPart.propTypes = {
  title: propTypes.string.isRequired,
  items: propTypes.array.isRequired,
  itemClick: propTypes.func.isRequired
};

export default ReviewPart;
