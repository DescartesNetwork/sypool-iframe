import { Row, Card, Col, Avatar } from 'antd'

import SLOPE from 'os/static/images/slope.svg'
import { useRootDispatch, RootDispatch } from 'os/store'
import { connectWallet } from 'os/store/wallet.reducer'
import { SlopeWallet } from '../../lib'

const Slope = () => {
  const dispatch = useRootDispatch<RootDispatch>()

  const connect = async () => {
    const { Slope } = window
    if (!Slope)
      return window.notify({
        type: 'warning',
        description:
          'Slope Wallet is not installed. If this is the first time you install Slope wallet, please restart your browser to complete the setup.',
      })
    const wallet = new SlopeWallet()
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
      bordered={false}
      className="card-wallet-item"
      hoverable
      bodyStyle={{ padding: '12px 16px' }}
    >
      <Row gutter={[16, 16]} align="middle">
        <Col>
          <Avatar size={32} shape="square" src={SLOPE} />
        </Col>
        <Col>
          <p style={{ margin: 0, textAlign: 'center' }}>Slope</p>
        </Col>
      </Row>
    </Card>
  )
}

export default Slope
