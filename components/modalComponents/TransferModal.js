import { useState } from 'react'
import styled from 'styled-components'
import Transfer from './Transfer'
import CoinSelector from './CoinSelector'
import Receive from './Receive'

const TransferModal = ({ twTokens, sanityTokens }) => {
  const [action, setAction] = useState('send')
  const [selectedToken, setSelectedToken] = useState(sanityTokens[0])

  const selectedStyle = {
    color: '#3773f5',
  }

  const unselectedStyle = {
    border: '1px solid #282b2f',
  }

  const renderLogic = () => {
    if (action === 'send') {
      return (
        <Transfer
          setAction={setAction}
          twTokens={twTokens}
          sanityTokens={sanityTokens}
          selectedToken={selectedToken}
        />
      )
    } else if (action === 'receive') {
      return <Receive setAction={setAction} selectedToken={selectedToken} />
    } else if (action === 'select') {
      return (
        <CoinSelector
          setAction={setAction}
          selectedToken={selectedToken}
          setSelectedToken={setSelectedToken}
          sanityTokens={sanityTokens}
          twTokens={twTokens}
        />
      )
    }
  }

  return (
    <Wrapper>
      <Selector>
        <Option
          style={action === 'send' ? selectedStyle : unselectedStyle}
          onClick={() => setAction('send')}
        >
          <p>Send</p>
        </Option>
        <Option
          style={action === 'receive' ? selectedStyle : unselectedStyle}
          onClick={() => setAction('receive')}
        >
          <p>Receive</p>
        </Option>
      </Selector>
      <ModalMain>{renderLogic()}</ModalMain>
    </Wrapper>
  )
}

export default TransferModal

const Wrapper = styled.div`
  height: 35rem;
  width: 27rem;
  color: white;
  border: 1px solid #282b2f;
  display: flex;
  flex-direction: column;
`
const Selector = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 5rem;
`

const Option = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    cursor: pointer;
    background-color: #111214;
  }
`

const ModalMain = styled.div`
  padding: 1rem;
  flex: 1;
`
