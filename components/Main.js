import styled from 'styled-components'
import Portfolio from './Portfolio'
import Promos from './Promos'

const Main = ({ twTokens, sanityTokens }) => {
  return (
    <Wrapper>
      <Portfolio twTokens={twTokens} sanityTokens={sanityTokens} />
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
