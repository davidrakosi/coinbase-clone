import styled from 'styled-components'
import Portfolio from './Portfolio'
import Promos from './Promos'

const Main = () => {
  return (
    <Wrapper>
      <Portfolio />
      <Promos />
    </Wrapper>
  )
}

export default Main

const Wrapper = styled.div`
  display: flex;

  & div {
    border-radius: 0.4rem;
  }
`
