import React, { useState } from 'react';
import { FaBuilding, FaChevronDown, FaChevronRight } from 'react-icons/fa';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const getPaddingLeft = (level, type) => {
  let paddingLeft = level * 20;
  if (type === 'file') paddingLeft += 20;
  return paddingLeft;
}

const StyledTreeNode = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 8px;
  padding-left: ${props => getPaddingLeft(props.level, props.type)}px;
  &:hover {
    background: lightgray;
  }
`;

const NodeIcon = styled.div`
  font-size: 12px;
  margin-right: ${props => props.marginRight ? props.marginRight : 5}px;
`;

const Company = (props) => {
  const { node, level } = props;

  const [open, setOpen] = useState(false);

  return (
    <div>
      <StyledTreeNode level={level} type={node.type}>
        <NodeIcon onClick={() => setOpen(!open)}>
          { (open ? <FaChevronDown /> : <FaChevronRight />) }
        </NodeIcon>
        
        <NodeIcon marginRight={10}>
          <FaBuilding />
        </NodeIcon>

        <span role="button" >
          { node.name }
        </span>
      </StyledTreeNode>
      { open && node.companies.map(company => (
        <Company 
          key={ company.account_id } 
          node={ company }          
          level={ level + 1 }
        />
      ))}
    </div>
  );
}

Company.propTypes = {
  node: PropTypes.object.isRequired,
  level: PropTypes.number.isRequired
};

Company.defaultProps = {
  level: 0,
};

export default Company;