import { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const images = [
  { src: '/images/digital.jpg', alt: 'Digital art' },
  { src: '/images/folk-gif.gif', alt: 'Folk animation' },
  { src: '/images/frenchpress.gif', alt: 'French press animation' },
  { src: '/images/gaussian.jpg', alt: 'Gaussian art' },
  { src: '/images/halftone-vamp.jpg', alt: 'Halftone vamp' },
  { src: '/images/pixelart-fruit.png', alt: 'Pixel art fruit' },
  { src: '/images/svankmajer-animation.gif', alt: 'Svankmajer animation' },
  { src: '/images/vamp-hands.jpg', alt: 'Vamp hands' },
  { src: '/images/word%20art.png', alt: 'Word art' },
  { src: '/images/zenin.png', alt: 'Zenin' },
]

const Creative = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [lightbox, setLightbox] = useState<string | null>(null)

  useGSAP(() => {
    gsap.from('.creative-header', {
      y: 50,
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
      delay: 0.2,
    })
    gsap.from('.creative-item', {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
      stagger: 0.08,
      delay: 0.4,
    })
  }, { scope: containerRef })

  return (
    <section id="creative" className="section" ref={containerRef}>
      <div className="container">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 creative-header">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-heading">Creative</h2>
          </div>

          {/* Masonry Grid */}
          <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="creative-item break-inside-avoid cursor-pointer group relative overflow-hidden rounded-xl md:rounded-2xl border border-white/10"
                onClick={() => setLightbox(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 rounded-xl md:rounded-2xl" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            alt="Full size"
            className="max-w-full max-h-[90vh] rounded-xl md:rounded-2xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
          <button
            onClick={() => setLightbox(null)}
            className="absolute top-6 right-6 text-white/80 hover:text-white text-3xl leading-none"
            aria-label="Close"
          >
            &times;
          </button>
        </div>
      )}
    </section>
  )
}

export default Creative
