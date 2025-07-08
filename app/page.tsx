// app/page.tsx
import dynamic from 'next/dynamic'

// This ensures it only loads on client side (SSR disabled)
const Viewer = dynamic(() => import('@/components/Viewer'), { ssr: false })

export default function Page() {
  return (
    <main>
      <Viewer />
    </main>
  )
}
