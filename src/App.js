import styled from 'styled-components'
import LeftBar from './components/LeftBar'
import MainBoard from './components/MainBoard'
import RightBar from './components/RightBar'

const App = () => {
  return (
    <AppContainer>
      <AppBody>
        <LeftBar />
        <MainBoard />
        <RightBar />
      </AppBody>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  min-width: 1000px;
  margin: 25px;
  border-radius: 10px;
  box-shadow: 0 0 10px #ddd; 
  padding: 50px 30px;
  background-color: white;
`

const AppBody = styled.div`
  display: flex;
  align-items: center;
  height: 700px;
`
