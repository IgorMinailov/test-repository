import styled from "styled-components"

export const Container = styled.div`
  width: 250px;
  height: 700px;
  border-radius: 10px;
  position: relative;
  top: 25px;
  right: 20px;
  box-shadow: 0px 3px 13px -6px rgba(0, 0, 0, 0.75);
  display: ${props => (props.isOpen ? "flex" : "none")};
  background-color: #484f63;
  flex-direction: column;
`
