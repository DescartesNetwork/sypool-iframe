import { useEffect } from 'react'
import { useUI } from '@sentre/senhub'

import EmbededView from '@sentre/embeded-view'

import configs from 'configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  const { setBackground } = useUI()

  useEffect(() => {
    setBackground({ light: '#1b142b', dark: '#1b142b' })
  }, [setBackground])

  return (
    <EmbededView
      wallet={window.sentre.wallet}
      appId={appId}
      src="https://app.sypool.io"
      title="Sypool: Synthetic Asset Pools Management"
    />
  )
}

export default View
