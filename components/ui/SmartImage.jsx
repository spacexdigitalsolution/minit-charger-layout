import Image from 'next/image';

/**
 * SmartImage Component
 * 
 * Replaces standard <img> and next/image usage across the application.
 * 
 * Modes:
 * - "dimensions": Shows a debug box with width, height, and safe area.
 * - "placeholder": Shows a graphical mountain placeholder (default).
 * - "image": Renders the actual Next.js <Image /> component.
 * 
 * @param {Object} props
 * @param {string} props.src - The source URL of the image.
 * @param {string} [props.alt] - The alternative text for the image.
 * @param {number} props.width - The width of the image.
 * @param {number} props.height - The height of the image.
 * @param {string} [props.description] - Description used in dimensions mode.
 * @param {string} [props.className] - Additional Tailwind classes.
 * @param {'dimensions' | 'placeholder' | 'image'} [props.mode='placeholder'] - The render mode.
 * @returns {JSX.Element}
 */
export default function SmartImage({
  src,
  alt,
  width,
  height,
  safeAreaHeight,
  safeAreaWidth,
  displayHeight,
  displayWidth,
  description,
  className = '',
  mode = 'placeholder',
  ...props
}) {
  // Environment variable can override the default mode across the app
  const currentMode = process.env.NEXT_PUBLIC_IMAGE_MODE || mode;

  if (currentMode === 'dimensions') {
    // Compute safe area dimensions (90% of width and height)
    safeAreaWidth = safeAreaWidth || (width ? Math.round(width * 0.9) : 0);
    safeAreaHeight = safeAreaHeight || (height ? Math.round(height * 0.9) : 0);

    return (
      <div
        className={`relative flex flex-col items-center justify-center bg-gray-100 border-2 border-dashed border-gray-300 text-gray-500 overflow-hidden p-4 text-center ${className}`}
        style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
      >
        <div className="text-sm font-semibold text-gray-700">
          {displayWidth}x{displayHeight} (Safe: {safeAreaWidth}x{safeAreaHeight})
        </div>
        <div className="text-xs font-mono bg-white px-2 py-1 rounded shadow-sm break-all mt-2">
          {src}
        </div>
        <div className="text-xs font-medium text-gray-600 mt-2">
          Alt: {alt || 'MISSING'}
        </div>
        {description && (
          <div className="text-xs text-gray-500 mt-2 italic max-w-full px-2">
            {description}
          </div>
        )}
      </div>
    );
  }

  if (currentMode === 'placeholder') {
    return (
      <div
        className={`relative flex items-center justify-center bg-[#D0D6DC] overflow-hidden ${className}`}
        style={{ width: width ? `${width}px` : '100%', height: height ? `${height}px` : '100%' }}
      >
        <svg
          viewBox="0 0 200 150"
          preserveAspectRatio="none"
          className="w-full h-full text-[#EDF1F5]"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sun */}
          <circle cx="50" cy="50" r="12" />
          {/* Left Mountain */}
          <path d="M-20 150 C 10 100 40 80 70 120 C 85 140 95 150 110 150 L -20 150 Z" />
          {/* Right Mountain */}
          <path d="M50 150 C 90 80 130 30 170 100 C 190 135 210 150 230 150 L 50 150 Z" />
        </svg>
      </div>
    );
  }

  // currentMode === 'image'
  return (
    <Image
      src={src}
      alt={alt || ''}
      width={width}
      height={height}
      className={className}
      sizes={props.fill ? (props.sizes || "100vw") : props.sizes}
      {...props}
    />
  );
}
