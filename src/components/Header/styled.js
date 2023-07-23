import styled from 'styled-components'

export const NavMainContainer = styled.nav`
  display: flex;
  width: 100%;
  min-height: 15vh;
  margin-left: 20px;
  margin-right: 20px;
  justify-content: center;
  align-items: center;

`
export const NavContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: space-between;
  width: 80%;

`

export const NavLogoContainer = styled.div`
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
`

export const NavLogo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`

export const NavHead = styled.h1`
   color: #12022f;
   font-size: 15px;
   font-weight: bold;
   @media screen and (max-width: 576px){
      font-size: 12px;
   }
   @media screen and (max-width: 376px){
      font-size: 8px;
   }
   
`
export const NavListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`
export const NavItem = styled.li`
   color: #12022f;
   font-size: 15px;
   font-weight: bold;
   margin-left:8px ;
   cursor: pointer;
   text-decoration: none;
   outline: none;
   border: none;
   @media screen and (max-width: 576px){
      font-size: 12px;
   }
   @media screen and (max-width: 376px){
      font-size: 8px;
   }

`