import { useLayoutEffect } from 'react'

export type EmbededViewProps = {
  id?: string
  src: string
  title: string
}

const EmbededView = ({
  id = Math.round(Math.random() * 10 ** 8).toString(),
  src,
  title,
}: EmbededViewProps) => {
  useLayoutEffect(() => {
    const { contentWindow } = document.getElementById(id) as HTMLIFrameElement
    if (contentWindow) contentWindow.sentre = window.sentre
  }, [id])

  return (
    <iframe
      id={id}
      src={src}
      title={title}
      style={{
        height: 'calc(100vh - 64px)',
        margin: -12,
        marginTop: -24,
        border: 'none',
        width: '100vw',
      }}
      loading="lazy"
      allowFullScreen
    />
  )
}

export default EmbededView
