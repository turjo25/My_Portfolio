import { ImageResponse } from 'next/og'
import { PERSONAL_INFO } from '@/data/constants'

export const alt = `${PERSONAL_INFO.name} - ${PERSONAL_INFO.role}`
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 60,
          background: 'linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          padding: '80px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 'bold',
              background: 'linear-gradient(135deg, #60a5fa 0%, #6366f1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {PERSONAL_INFO.name}
          </div>
          <div style={{ fontSize: 36, color: '#9ca3af', marginTop: '20px' }}>
            {PERSONAL_INFO.role}
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}




