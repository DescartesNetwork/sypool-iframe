import EmbededView from 'shared/embededView'

import configs from 'app/configs'

const {
  manifest: { appId },
} = configs

const View = () => {
  return (
    <EmbededView
      appId={appId}
      src="https://app.sypool.io"
      title="Sypool: Synthetic Asset Pools Management"
    />
  )
}

export default View
