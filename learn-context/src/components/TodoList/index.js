import React from "react";
import styled from "styled-components";

const List = styled.ul`
  background: ${(props) => props.theme.theme.background};
  color: ${(props) => props.theme.theme.color};
  font-size: 18px;

  li {
    line-height: 36px;
  }
`;

const TodoList = (currentTheme) => {
  return (
    <List
      style={{
        ...currentTheme.theme,
      }}
    >
      <li>Item 01</li>
      <li>Item 02</li>
      <li>Item 03</li>
    </List>
  );
};

export default TodoList;
