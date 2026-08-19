import SmartImage from '../ui/SmartImage';
import Button from '../ui/Button';

/**
 * ImageGalleryStrip Component
 * 
 * Renders a small eyebrow text, a row of small grayscale images,
 * and optional call-to-action buttons below them.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.eyebrow - Small uppercase text
 * @param {Array<{id: string, src: string, alt: string, description: string}>} props.images - Array of small images
 * @param {Array<{id: string, text: string, href: string, variant?: 'primary'|'secondary'|'outline'}>} [props.buttons] - Array of CTA buttons
 * @returns {JSX.Element}
 */
export default function ImageGalleryStrip({
  id,
  eyebrow,
  images,
  buttons
}) {
  return (
    <section className="border-t border-black/5 bg-white py-14" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <p className="font-mono text-center text-[11px] uppercase tracking-wider text-[#4C5C54]">
          {eyebrow}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-10 lg:gap-16">
          {images.map((img) => (
            <div key={img.id} className="relative h-12 w-24 sm:w-32 opacity-50 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300">
              <SmartImage
                src={img.src}
                alt={img.alt}
                description={img.description}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
        
        {buttons && buttons.length > 0 && (
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {buttons.map((btn) => (
              <Button key={btn.id} href={btn.href} variant={btn.variant || 'primary'}>
                {btn.text}
              </Button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
