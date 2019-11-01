import React from "react"
import { Container, Button, LogoContainer } from "./Content.styles"
import ButtonsTable from "../ButtonsTable/ButtonsTable"
import logo from "../../assets/logo.svg"
import { MdSettings } from "react-icons/md"
import { FiMessageCircle } from "react-icons/fi"

function Content(props) {
  return (
    <Container>
      <ButtonsTable />
      <div style={{ display: "flex", marginBottom: "-10px" }}>
        <Button half>Reset all</Button>
        <Button half>Move/Hide panel</Button>
      </div>
      <Button>White label this widget</Button>
      <LogoContainer>
        <img src={logo} alt="logo" />
        <div>
          <FiMessageCircle style={{ padding: "0 20px" }} />
          <MdSettings />
        </div>
      </LogoContainer>
    </Container>
  )
}

export default Content
