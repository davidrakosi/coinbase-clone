import styled from 'styled-components'

const Header = ({ sendCrypto }) => {
  return (
    <Wrapper>
      <Title>Assets</Title>
      <ButtonsContainer>
        <Button onClick={() => sendCrypto()}>Send / Receive</Button>
        <Button style={{ backgroundColor: '#3773f5', color: '#000' }}>
          Buy / Sell
        </Button>
        <Button>Send / Receive</Button>
      </ButtonsContainer>
      <Separator />
      <ProfileIcon />
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.div`
  width: calc(100% - 3rem);
  /* TRouBLe */
  padding: 1rem 1.5rem;
  border-bottom: 1px solid #282b2f;
  display: flex;
  align-items: center;
`
const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
  flex: 1;
`

const ButtonsContainer = styled.div`
  display: flex;
`

const Button = styled.div`
  border: 1px solid #282b2f;
  padding: 0.8rem;
  font-size: 1.3rem;
  font-weight: 500;
  border-radius: 0.4rem;
  margin-right: 1rem;

  &:hover {
    cursor: pointer;
  }
`

const Separator = styled.div``

const ProfileIcon = styled.div``
