import styled from 'styled-components'
import Coin from './Coin'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { coins } from '../static/coins'
import BalanceChart from './BalanceChart'

const Portfolio = () => {
  return (
    <Wrapper>
      <Content>
        <Chart>
          <ChartTop>
            <Balance>
              <BalanceTitle>Portfolio balance</BalanceTitle>
              <BalanceValue>$0.00</BalanceValue>
            </Balance>
          </ChartTop>
          <BalanceChart />
        </Chart>
        <PortfolioTable>
          <TableItem>
            <Title>Your Assets</Title>
          </TableItem>
          <Divider />
          <Table>
            <TableItem>
              <TableRow>
                <th style={{ flex: 3 }}>Name</th>
                <th style={{ flex: 2 }}>Balance</th>
                <th style={{ flex: 1 }}>Price</th>
                <th style={{ flex: 1 }}>Allocation</th>
                <th style={{ flex: 0, color: '#0a0b0d' }}>
                  <BsThreeDotsVertical />
                </th>
              </TableRow>
            </TableItem>
            <Divider />
            <tbody>
              {coins.map(coin => (
                <>
                  <Coin key={coin.name} coin={coin} />
                  <Divider />
                </>
              ))}
            </tbody>
          </Table>
        </PortfolioTable>
      </Content>
    </Wrapper>
  )
}

export default Portfolio

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`
const Content = styled.div`
  width: 100%;
  max-width: 1000px;
  padding: 2rem 1rem;
`

const Chart = styled.div`
  border: 1px solid #282b2f;
  padding: 1rem 2rem;
`

const Balance = styled.div``

const BalanceTitle = styled.div`
  color: #8a919e;
  font-size: 0.9rem;
`

const BalanceValue = styled.div`
  font-size: 1.8rem;
  font-weight: 700;
  margin-top: 0.5rem;
`

const ChartTop = styled.div``

const PortfolioTable = styled.div`
  margin-top: 1rem;
  border: 1px solid #282b2f;
`

const Table = styled.table`
  width: 100%;
`

const TableRow = styled.tr`
  width: 100%;
  display: flex;
  justify-content: space-between;

  & > th {
    text-align: left;
  }
`

const TableItem = styled.div`
  padding: 1rem 2rem;
`

const Divider = styled.div`
  border-bottom: 1px solid #282b2f;
`

const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 600;
`
