import styled from 'styled-components'
import Header from '../components/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

export default function Home() {
  const sendCrypto = async () => {
    console.log('sending crypto')
  }

  const getBalance = async token => {
    const balance = await token.balanceOf(
      '0xB4EbD453D80A01A0dC7De077c61B1c9b336F05E3',
    )

    console.log(await balance)
  }

  useEffect(() => {
    const sdk = new ThirdwebSDK(
      new ethers.Wallet(
        // Your wallet private key
        process.env.NEXT_PUBLIC_PRIVATE_KEY,
        // RPC URL, we'll use Polygon Mumbai
        ethers.getDefaultProvider('https://rpc-mumbai.maticvigil.com'),
      ),
    )

    console.log(sdk)

    const token = sdk.getTokenModule(
      '0x114F6884005a5a818fFC51C464E5b802a6E07771',
    )

    console.log(token)

    getBalance(token)
  }, [])

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header sendCrypto={sendCrypto} />
        <Main />
      </MainContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  width: 100vw;
  background-color: #0a0b0d;
  color: white;
`

const MainContainer = styled.div`
  flex: 1;
`
