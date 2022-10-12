import dynamic from 'next/dynamic'

export const RichText = dynamic(() => import('@mantine/rte'), {
  ssr: false,
  loading: () => null
})
