import EmbededView from 'shared/embededView'

import configs from 'app/configs'

const {
  manifest: { appId },
} = configs
const BACKGORUND = { light: '#1b142b', dark: '#1b142b' }

const View = () => {
  return (
    <EmbededView
      appId={appId}
      src="https://app.sypool.io"
      title="Sypool: Synthetic Asset Pools Management"
      background={BACKGORUND}
    />
  )
}

export default View
