import { Provider } from 'react-redux'
import { UIProvider } from '@senhub/providers'

import View from 'app/view'

import model from 'app/model'
import configs from 'app/configs'

const {
  manifest: { appId },
} = configs

export const Page = () => {
  return (
    <UIProvider appId={appId} antd>
      <Provider store={model}>
        <View />
      </Provider>
    </UIProvider>
  )
}

export * from 'app/static.app'
