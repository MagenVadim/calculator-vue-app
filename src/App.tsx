import { useState } from 'react'
import GlobalStyle1 from "./Styles/theme1"
import GlobalStyle2 from "./Styles/theme2"
import GlobalStyle3 from "./Styles/theme3"

import { Container, Header, WrapperSwitch, Switch, SwitcherContainer, Switcher } from "./Styles/App.style"

function App() {

  return (
    <>
      <Container>

        <Header>
          Calc
          <WrapperSwitch>
            theme

            <Switch>
              <div>
                <span>1</span>
                <span>2</span>
                <span>3</span>
              </div>
              <SwitcherContainer>

                <Switcher/>
                
              </SwitcherContainer>
            </Switch>


          </WrapperSwitch>
        </Header>

      </Container>
    </>
  )
}

export default App
