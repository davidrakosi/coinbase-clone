import styled from 'styled-components'
import Modal from 'react-modal'
import { useRouter } from 'next/router'
import TransferModal from './modalComponents/TransferModal'
import Link from 'next/link'

Modal.setAppElement('#__next')

const Header = ({ sendCrypto, myToken }) => {
  const router = useRouter()

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      backgroundColor: '#0a0b0d',
      padding: 0,
      border: 'none',
    },
    overlay: {
      backgroundColor: 'rgba(10, 11, 13, 0.75)',
    },
  }

  return (
    <Wrapper>
      <Title>Assets</Title>
      <ButtonsContainer>
        {/* <Button onClick={() => sendCrypto()}>Send / Receive</Button> */}
        <Button style={{ backgroundColor: '#3773f5', color: '#000' }}>
          Buy / Sell
        </Button>
        <Link href={'/?transfer=1'}>
          <Button>Send / Receive</Button>
        </Link>
      </ButtonsContainer>
      <Separator />
      <ProfileIcon />

      <Modal
        isOpen={!!router.query.transfer}
        onRequestClose={() => router.push('/')}
        style={customStyles}
      >
        <TransferModal myToken={myToken} />
      </Modal>
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
