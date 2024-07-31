import styled from "@emotion/styled"
import { NavLink, Link as SimpleLink } from "react-router-dom"

import backgroundImage from "assets/1a8a9bb19893d9b0ef5acb10326ff9b1.jfif"

export const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  background-image: url(${backgroundImage});
`

export const Header = styled.div`
  display: flex;
  width: 100%;
  min-height: 80px;
  padding: 10px;
  gap: 10px;
  background-color: rgba(18, 45, 77, 0.5);
  border-bottom: 1px solid rgba(210, 210, 210, 1);
`

export const Logo = styled.div`
  height: 100%;
  width: 80px;
  cursor: pointer;
`

export const NavigationContainer = styled.nav`
  display: flex;
  gap: 30px;
  height: 100%;
  align-items: center;
`

export const Link = styled(NavLink)`
  color: white;
  font-size: 20px;
  font-weight: normal;
  text-decoration: none;
`;

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 40px;
`;