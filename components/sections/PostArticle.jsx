import SmartImage from '../ui/SmartImage';

/**
 * PostArticle Component
 * 
 * Main article content for blog posts, featuring a hero image and prose content.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {string} props.imageSrc - Main article image source
 * @param {string} props.imageAlt - Main article image alt
 * @param {string} props.imageDescription - Placeholder description
 * @param {Array<{id: string, type: 'lead'|'heading2'|'paragraph', content: any}>} props.contentBlocks - Array of content blocks
 * @returns {JSX.Element}
 */
export default function PostArticle({
  id,
  imageSrc,
  imageAlt,
  imageDescription,
  contentBlocks
}) {
  return (
    <article className="bg-white py-16" id={id}>
      <div className="mx-auto max-w-[900px] px-6 lg:px-8">
        <div className="-mt-32 mb-16 rounded-3xl overflow-hidden shadow-2xl ring-1 ring-white/10 bg-ink-900 aspect-video relative z-10">
          <SmartImage
            src={imageSrc}
            alt={imageAlt}
            description={imageDescription || imageAlt}
            fill
            className="object-cover"
          />
        </div>
        
        <div className="prose prose-lg prose-green max-w-none text-[#4C5C54]">
          {contentBlocks.map((block) => {
            if (block.type === 'lead') {
              return <p key={block.id} className="lead text-xl text-ink-900">{block.content}</p>;
            }
            if (block.type === 'heading2') {
              return <h2 key={block.id} className="font-display font-semibold text-2xl text-ink-950 mt-10 mb-4">{block.content}</h2>;
            }
            if (block.type === 'paragraph') {
              return <p key={block.id}>{block.content}</p>;
            }
            return null;
          })}
        </div>
      </div>
    </article>
  );
}
