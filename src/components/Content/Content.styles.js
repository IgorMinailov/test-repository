import styled from "styled-components"

export const Container = styled.div`
  padding: 15px;
  color: white;
  flex: 1 0 auto;
`

export const Button = styled.div`
  padding: 15px;
  color: white;
  font-size: 13px;
  background-color: #333d5a;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${props => (props.half ? "50%" : "98%")};
  box-sizing: border-box;
  margin: 15px 2px;
  &:hover {
    background-color: #6f7075;
    transition: 250ms;
  }
`

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
`
