import './App.css'
import ChromaGrid from './component/ChromaGrid'

const items = [
  {
    image: '/lotus.jpeg',
    title: 'Nature’s Beauty',
    subtitle: 'A beautiful lotus blooming with grace and elegance',
    accent: '#ffd23f'
  },
  {
    image: '/peacock.jpeg',
    title: 'Wings of Elegance',
    subtitle: 'A stunning display of vibrant feathers and natural beauty',
    accent: '#3fb8ff',
  },
  {
    image: '/lion.jpeg',
    title: 'King of the Wild',
    subtitle: 'Strength, courage, and the majestic beauty of nature',
    accent: '#73BDEB',
  },
  {
    image: '/sunset.jpeg',
    title: 'Golden Horizons',
    subtitle: 'Beautiful sunsets painting the sky with warm golden colors',
    accent: '#E6A6B9',
  },
  {
    image: '/house.jpeg',
    title: 'Dream Home',
    subtitle: 'A peaceful home surrounded by greenery and natural beauty',
    accent: '#8BC6A5',
  },
  {
    image: '/waves.jpeg',
    title: 'Ocean Waves',
    subtitle: 'Feel the power and beauty of the endless blue ocean',
    accent: '#3fb8ff',
  }
];

function App() {
  

  return (
    <>
<ChromaGrid items={items} columns={3} radius={260}
    reveal="spotlight"
    
    minCardWidth={180}
    gap={12}
    
    aspectRatio="3 / 2"
    cardRadius={22}
    showInfo
    frame={false}
    softness={0.6}
    damping={0.45}
    fadeOut={0.6}
    grayscale={1}
    dim={0.12}
    glow={0.5}
    borderGlow={1}
/>
      
    </>
  )
}

export default App