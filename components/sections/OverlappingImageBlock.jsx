import SmartImage from '../ui/SmartImage';

/**
 * OverlappingImageBlock Component
 * 
 * Renders a large image block that pulls up to overlap the section above it.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {string} props.imageSrc - Source of the image
 * @param {string} props.imageAlt - Alt text for the image
 * @param {string} [props.imageDescription] - Description for placeholder mode
 * @returns {JSX.Element}
 */
export default function OverlappingImageBlock({
  id,
  imageSrc,
  imageAlt,
  imageDescription
}) {
  return (
    <section className="mx-auto max-w-[1240px] px-6 lg:px-8 -mt-24 lg:-mt-32 relative z-10" id={id}>
      <div className="rounded-3xl overflow-hidden shadow-2xl h-[300px] lg:h-[500px] relative bg-[#f0f0f0]">
        <SmartImage
          src={imageSrc}
          alt={imageAlt}
          description={imageDescription || imageAlt}
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </section>
  );
}
