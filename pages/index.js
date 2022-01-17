import styled from 'styled-components'
import Header from '../components/Header'
import Main from '../components/Main'
import Sidebar from '../components/Sidebar'
import { ThirdwebSDK } from '@3rdweb/sdk'
import { ethers } from 'ethers'
import { useEffect, useState } from 'react'

export default function Home({ data }) {
  const [twTokens, setTwTokens] = useState([])
  const [sanityTokens, setSanityTokens] = useState(data)

  useEffect(() => {
    const sdk = new ThirdwebSDK(
      new ethers.Wallet(
        process.env.NEXT_PUBLIC_PRIVATE_KEY,
        ethers.getDefaultProvider('https://rpc-mumbai.maticvigil.com'),
      ),
    )

    data.map(tokenItem => {
      const currentToken = sdk.getTokenModule(tokenItem.contractAddress)

      setTwTokens(prevState => [...prevState, currentToken])
    })
  }, [])

  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header twTokens={twTokens} sanityTokens={sanityTokens} />
        <Main twTokens={twTokens} sanityTokens={sanityTokens} />
      </MainContainer>
    </Wrapper>
  )
}

export async function getServerSideProps(context) {
  const getCoinsList = async () => {
    const coins = await fetch(
      'https://u5i352de.api.sanity.io/v1/data/query/production?query=*%5B_type%20%3D%3D%20%27coins%27%5D%20%7B%0A%20%20name%2C%0A%20%20symbol%2C%0A%20%20contractAddress%2C%0A%20%20logo%2C%0A%20%20usdPrice%0A%7D',
    )
    const sanityTokens = await coins.json()
    return sanityTokens.result
  }

  try {
    const data = await getCoinsList()

    return {
      props: { data },
    }
  } catch (error) {
    console.error(error)
  }
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
