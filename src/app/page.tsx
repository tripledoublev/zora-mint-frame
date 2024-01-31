import { SITE_URL, FRAME_METADATA } from '@/config'
import { Metadata } from 'next'

export const metadata: Metadata = {
  metadataBase: SITE_URL ? new URL(SITE_URL) : undefined,
  title: 'Mint on Zora (free mints fund ran out)',
  other: FRAME_METADATA,
}

export default function Home() {
  return (
    <div style={{ minHeight: '95dvh', display: 'flex', flexDirection: 'column'}}>
      <h1 style={{ margin: 'auto', color: 'white', fontFamily: 'sans-serif', fontSize: '3rem' }}>Free mint on Zora in a Frame on Farcaster is now OVER!</h1>
      <h2 style={{ margin: 'auto', color: 'white', fontFamily: 'sans-serif', fontSize: '2.5rem' }}><a style={{ color: 'white' }} href="https://zora.co/collect/zora:0x1f1f8f9ab11c6d37170c33d3c04317ef447d47c2/1">Go on Zora to mint it yourself</a></h2>
    </div>
  )
}
