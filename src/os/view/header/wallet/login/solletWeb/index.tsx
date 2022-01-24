import { Row, Card, Col, Avatar } from 'antd'

import SOLLET from 'os/static/images/sollet.png'
import { useRootDispatch, RootDispatch } from 'os/store'
import { connectWallet } from 'os/store/wallet.reducer'
import { SolletWallet } from '../../lib'

const SolletWeb = () => {
  const dispatch = useRootDispatch<RootDispatch>()

  const connect = async () => {
    const wallet = new SolletWallet()
    try {
      await dispatch(connectWallet(wallet)).unwrap()
    } catch (er: any) {
      return window.notify({ type: 'error', description: er.message })
    }
  }

  return (
    <Card
      onClick={connect}
      style={{ cursor: 'pointer', borderRadius: 8, boxShadow: 'unset' }}
      className="card-wallet-item"
      bordered={false}
      hoverable
      bodyStyle={{ padding: '12px 16px' }}
    >
      <Row gutter={[16, 16]} align="middle">
        <Col>
          <Avatar size={32} shape="square" src={SOLLET} />
        </Col>
        <Col>
          <p style={{ margin: 0, textAlign: 'center' }}>Sollet Web</p>
        </Col>
      </Row>
    </Card>
  )
}

export default SolletWeb
