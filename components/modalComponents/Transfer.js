import styled from 'styled-components'
import { FaWallet } from 'react-icons/fa'
import { useEffect, useState } from 'react'

const Transfer = ({ setAction, myToken }) => {
  const [amount, setAmount] = useState('')
  const [recipient, setRecipient] = useState(
    '0x8Cd390f697ffDc176f1B70D2F3BB3083698434fD',
  )

  //   console.log(amount, amount.toString().concat('000000000000000000'))

  const sendCrypto = async () => {
    // const toAddress = '0x8Cd390f697ffDc176f1B70D2F3BB3083698434fD'
    console.log('sending crypto')

    if (myToken && amount && recipient) {
      console.log('object')
      const result = await myToken.transfer(
        recipient,
        amount.toString().concat('000000000000000000'),
      )

      console.log(result)
    } else {
      console.log('missing data')
    }
  }

  return (
    <Wrapper>
      <Amount>
        <FlexInputContainer>
          <FlexInput
            placeholder='0'
            type='number'
            value={amount}
            onChange={e => setAmount(e.target.value)}
          />
          <span>CPT</span>
        </FlexInputContainer>
        <Warning style={{ color: amount && '#0a0b0d' }}>
          Amount is a required field
        </Warning>
      </Amount>
      <TransferForm>
        <Row>
          <FieldName>To</FieldName>
          <Icon>
            <FaWallet />
          </Icon>
          <Recipient
            placeholder='Address'
            value={recipient}
            onChange={e => setRecipient(e.target.value)}
          />
        </Row>
        <Divider />
        <Row>
          <FieldName>Pay with</FieldName>
        </Row>
      </TransferForm>
      <Row>
        <Continue onClick={() => sendCrypto()}>Continue</Continue>
      </Row>
      <Row>
        <BalanceTitle>CPT Balance</BalanceTitle>
        <Balance>2000 CPT</Balance>
      </Row>
    </Wrapper>
  )
}

export default Transfer

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 1;
`

const TransferForm = styled.div`
  border: 1px solid #282b2f;
  border-radius: 0.4rem;
`

const Amount = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

const FlexInputContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  & > span {
    font-size: 4.5rem;
    color: #3773f5;
  }
`

const FlexInput = styled.input`
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
  text-align: right;
  max-width: 45%;
  margin-right: 1rem;
  font-size: 4.5rem;
  color: #3773f5;

  &::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`

const Warning = styled.div`
  /* TRouBLe */
  padding: 1rem 0 2rem 0;
  text-align: center;
  color: #8a919e;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #8a919e;
  padding: 1rem 0;
  font-size: 1.2rem;
`
const FieldName = styled.div`
  flex: 0.25;
  padding-left: 2rem;
`
const Icon = styled.div`
  margin: 0 2rem;
`

const Recipient = styled.input`
  flex: 1;
  border: none;
  background: none;
  outline: none;
  color: white;
  font-size: 1.2rem;
  text-wrap: wrap;
`

const Continue = styled.button`
  color: white;
  width: 100%;
  background-color: #3773f5;
  padding: 1rem;
  text-align: center;
  border-radius: 0.4rem;
  font-size: 1.2rem;

  &:hover {
    cursor: pointer;
    background-color: #4a80f6;
  }
`

const BalanceTitle = styled.div``

const Balance = styled.div``
