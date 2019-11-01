import styled from "styled-components"

export const Table = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-row-gap: 1em;
  border: 1px solid rgba(255, 255, 255, 0.1);
  grid-gap: 1px;
  background-color: rgba(255, 255, 255, 0.1);
`

export const TableCell = styled.div`
  background-color: #484f63;
  font-weight: 300;
  padding: 10px 5px 0;
  box-sizing: border-box;
  font-size: 12px;
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  align-content: center;
  &:hover {
    background-color: #6f7075;
    transition: 250ms;
  }
`
