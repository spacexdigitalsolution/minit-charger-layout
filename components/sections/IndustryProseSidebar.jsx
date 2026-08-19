import Link from 'next/link';
import SmartImage from '../ui/SmartImage';

/**
 * IndustryProseSidebar Component
 * 
 * Renders rich text content on the left and a sidebar with recommended products
 * and category link on the right.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID
 * @param {Array<{id: string, type: 'heading2'|'heading3'|'paragraph'|'list', content: any}>} props.contentBlocks - The main rich text content
 * @param {Array<{id: string, title: string, description: string, imageSrc: string, imageAlt: string, imageDescription: string, href: string}>} props.sidebarProducts - Sidebar recommended products
 * @param {Object} props.sidebarCategory - Sidebar category link {title, description, buttonText, href}
 * @returns {JSX.Element}
 */
export default function IndustryProseSidebar({
  id,
  contentBlocks,
  sidebarProducts,
  sidebarCategory
}) {
  return (
    <section className="bg-white py-24" id={id}>
      <div className="mx-auto max-w-[1240px] px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2 text-[#4C5C54] prose-custom">
            {contentBlocks.map((block) => {
              if (block.type === 'heading2') {
                return <h2 key={block.id} className="text-3xl font-display font-semibold text-ink-950 mb-4 mt-8 first:mt-0">{block.content}</h2>;
              }
              if (block.type === 'heading3') {
                return <h3 key={block.id} className="text-xl font-display font-semibold mt-10 mb-4 text-ink-950">{block.content}</h3>;
              }
              if (block.type === 'paragraph') {
                return <p key={block.id} className="mb-4 leading-relaxed">{block.content}</p>;
              }
              if (block.type === 'list') {
                return (
                  <ul key={block.id} className="list-disc pl-5 space-y-2 mb-8">
                    {block.content.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                );
              }
              return null;
            })}
          </div>

          <div className="space-y-8">
            <div className="bg-paper-dim rounded-3xl p-8 ring-1 ring-black/5 shadow-sm">
              <h3 className="font-display font-semibold text-ink-950 mb-4">Recommended Products</h3>
              <div className="space-y-4">
                {sidebarProducts.map((prod) => (
                  <Link key={prod.id} href={prod.href} className="flex items-center gap-4 group">
                    <div className="h-16 w-16 rounded-xl bg-ink-900 flex-shrink-0 flex items-center justify-center overflow-hidden relative">
                      <div className="w-12 h-12 relative group-hover:scale-110 transition">
                        <SmartImage
                          src={prod.imageSrc}
                          alt={prod.imageAlt}
                          description={prod.imageDescription || prod.imageAlt}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>
                    <div>
                      <h4 className="font-bold text-ink-950 group-hover:text-volt-dim transition">{prod.title}</h4>
                      <p className="text-xs text-[#4C5C54]">{prod.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-ink-950 rounded-3xl p-8 text-white">
              <h3 className="font-display font-semibold mb-2">{sidebarCategory.title}</h3>
              <p className="text-sm text-mist mb-6">{sidebarCategory.description}</p>
              <Link href={sidebarCategory.href} className="block text-center rounded-full bg-volt-dim px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-volt hover:text-ink-950">
                {sidebarCategory.buttonText}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
