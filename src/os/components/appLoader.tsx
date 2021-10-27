import { Suspense, forwardRef, cloneElement } from 'react'
import { useRemoteModule } from 'react-dynamic-remote-component'
import { RemoteModule } from 'react-dynamic-remote-component/dist/types/types'

import { Skeleton } from 'antd'
import ErrorBoundary from 'os/components/errorBoundary'

import { ComponentManifest } from 'senhub.register'

/**
 * App Loading
 */
const AppLoading = () => {
  return <Skeleton active />
}

/**
 * Remote Static
 */
const RemoteStatic = forwardRef<
  HTMLElement,
  {
    type?: string
    manifest: RemoteModule
    render: (src: string) => JSX.Element
  }
>(({ type = 'default', manifest, render }, ref) => {
  const { [type]: src } = useRemoteModule(manifest)
  return cloneElement(render(src), { ref })
})

/**
 * Static Loader
 */
export const StaticLoader = forwardRef<
  HTMLElement,
  {
    type: 'logo' | 'panel' | 'readme'
    render: (url: string) => JSX.Element
  } & ComponentManifest
>(({ type, url, appId, render }, ref) => {
  const manifest = { url, scope: appId, module: './static' }
  return (
    <ErrorBoundary remoteUrl={url || 'Unknown'}>
      <Suspense fallback={<AppLoading />}>
        <RemoteStatic
          type={type}
          manifest={manifest}
          render={render}
          ref={ref}
        />
      </Suspense>
    </ErrorBoundary>
  )
})

/**
 * Remote component
 */
const RemoteComponent = forwardRef<
  HTMLElement,
  { type?: string; manifest: RemoteModule }
>(({ manifest, ...props }, ref) => {
  const { default: Component } = useRemoteModule(manifest)
  return <Component {...props} ref={ref} />
})

/**
 * App Loader
 */
const AppLoader = forwardRef<
  HTMLElement,
  { type: 'page' | 'widget' } & ComponentManifest
>(({ type, url, appId, ...props }, ref) => {
  const manifest = { url, scope: appId, module: `./${type}` }
  return (
    <ErrorBoundary remoteUrl={url || 'Unknown'}>
      <Suspense fallback={<AppLoading />}>
        <RemoteComponent manifest={manifest} {...props} ref={ref} />
      </Suspense>
    </ErrorBoundary>
  )
})

export default AppLoader
