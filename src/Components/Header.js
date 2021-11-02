import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import styled from 'styled-components';

const Header = styled.header`
  color: white;
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height: 50px;
  display: flex;
  align-items: center;
  padding: 0 10px;
  background-color: rgba(20,20,20, 0.8);
  box-shadow: 0px 1px 5px 2px rgba(0,0,0,0.8);
  z-index: 100;
`;

const List = styled.ul`
  display: flex;
`;

const Item = styled.li`
  width:50px;
  height: 50px;
  border-bottom: 5px solid 
  ${props => (props.current ? "red" : "transparent")};
  transition: border-bottom 0.2s ease-in-out;
`;

const SLink = styled(Link)`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 600;
  `;

const Page = styled.a`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const header = ({location : {pathname}}) => (
  <Header>
    <List>
      <Item current={pathname === "/"}>
        <SLink to="/">Movies</SLink>
      </Item>
      <Item current={pathname === "/tv"}>
        <SLink to="/tv">TV</SLink>
      </Item>
      <Item current={pathname === "/search"}>
        <SLink to="/search">Search</SLink>
      </Item>
    </List>
    <Page href="https://jiho3894.github.io/CharleyBlog/#/">
      <br/>
      <img width="50px" height="50px" src={process.env.PUBLIC_URL + '/image/home.gif'} alt=""/>
    </Page>
  </Header>
);

export default withRouter(header);