import React, { useState } from "react"
import Container from "./components/Container/Container"
import CircleButton from "./components/CircleButton/CircleButton"
import Body from "./components/Body/Body"
import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import Footer from "./components/Footer/Footer"

function App() {
  const [isOpen, hundleToggle] = useState(true)

  return (
    <Container>
      <CircleButton onClick={() => hundleToggle(!isOpen)}>
        {!isOpen ? "Open" : "Close"}
      </CircleButton>
      <Body isOpen={isOpen}>
        <Header
          title={"Accessibility Menu"}
          onClick={() => hundleToggle(!isOpen)}
        />
        <Content />
        <Footer />
      </Body>
    </Container>
  )
}

export default App
