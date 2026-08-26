import SmartImage from '../ui/SmartImage';

/**
 * GalleryFeaturesGrid Section Component
 * 
 * Reusable dark section featuring a 5-image gallery grid (typically angles of a product)
 * followed by a 4-column list of features with icons.
 * 
 * @param {Object} props
 * @param {string} [props.id] - Optional ID for the section
 * @param {Array<{id: string, imageSrc: string, imageAlt: string, imageDescription: string, label: string}>} props.gallery - Array of exactly 5 gallery items
 * @param {Array<{id: string, icon: React.ReactNode, title: string, description: string}>} props.features - Array of exactly 4 feature items
 * @returns {JSX.Element}
 */
export default function GalleryFeaturesGrid({
  id,
  gallery,
  features
}) {
  return (
    <section className="bg-[#07100C] py-24 border-t border-white/5" id={id}>
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">

        {/* 5 Angles Gallery */}
        {gallery && gallery.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {gallery.map((item) => (
              <div key={item.id} className="flex flex-col items-center gap-3">
                <div className="w-full aspect-[4/5] rounded-3xl overflow-hidden flex items-center justify-center relative">
                  <SmartImage
                    src={item.imageSrc}
                    alt={item.imageAlt}
                    description={item.imageDescription}
                    displayHeight={1080}
                    displayWidth={540}
                    safeAreaHeight={1080}
                    safeAreaWidth={540}
                    fill
                    className="object-cover"
                  />
                </div>
                <span className="font-mono text-xs uppercase tracking-wider text-mist">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        )}

        {/* Features Row */}
        {features && features.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-20 pt-10 border-t border-white/10">
            {features.map((feature) => (
              <div key={feature.id} className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-volt/30 flex items-center justify-center text-volt">
                  {feature.icon}
                </div>
                <div>
                  <h4 className="text-white font-bold mb-1">{feature.title}</h4>
                  <p className="text-white/60 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
