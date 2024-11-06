import React from 'react';

const BrandCarousel = () => {
  const brands = [
    { name: 'Microsoft', logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec' },
    { name: 'Google', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd' },
    { name: 'Amazon', logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec' },
    { name: 'Meta', logo: 'https://images.unsplash.com/photo-1573804633927-bfcbcd909acd' },
    { name: 'Apple', logo: 'https://images.unsplash.com/photo-1633419461186-7d40a38105ec' },
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="flex animate-scroll">
        {/* First set of brands */}
        <div className="flex items-center gap-12 whitespace-nowrap">
          {brands.map((brand, index) => (
            <div
              key={`brand-1-${index}`}
              className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img src={brand.logo} alt={brand.name} className="h-12 w-auto" />
            </div>
          ))}
        </div>
        {/* Duplicate set for seamless loop */}
        <div className="flex items-center gap-12 whitespace-nowrap">
          {brands.map((brand, index) => (
            <div
              key={`brand-2-${index}`}
              className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img src={brand.logo} alt={brand.name} className="h-12 w-auto" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandCarousel;