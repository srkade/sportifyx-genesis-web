import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Placeholder gallery images - in a real app these would be fetched from a backend
  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800",
      alt: "Football Training Session",
      category: "Football",
      title: "Youth Football Training"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=800",
      alt: "Cricket Academy",
      category: "Cricket",
      title: "Cricket Skills Development"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=800",
      alt: "Badminton Tournament",
      category: "Badminton",
      title: "Inter-School Championship"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1546519638-68e109498ffc?w=800",
      alt: "Basketball Training",
      category: "Basketball",
      title: "Basketball Skills Training"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1593341646782-e0763dd20402?w=800",
      alt: "Football Match",
      category: "Football",
      title: "Football Championship"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800",
      alt: "Cricket Match",
      category: "Cricket",
      title: "Cricket Tournament"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?w=800",
      alt: "Badminton Match",
      category: "Badminton",
      title: "Badminton Competition"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?w=800",
      alt: "Basketball Game",
      category: "Basketball",
      title: "Basketball Championship"
    }
  ];

  const categories = ["All", "Football", "Cricket", "Badminton", "Basketball"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    const newIndex = direction === 'prev' 
      ? (selectedImage - 1 + filteredImages.length) % filteredImages.length
      : (selectedImage + 1) % filteredImages.length;
    
    setSelectedImage(newIndex);
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-gallery">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-gradient-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <Camera className="inline-block w-4 h-4 mr-2" />
            Our Gallery
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Moments of </span>
            <span className="bg-gradient-hero bg-clip-text text-transparent">Excellence</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Capturing the spirit of sportsmanship, dedication, and achievement across all our programs
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "sport" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredImages.map((image, index) => (
            <Card 
              key={image.id} 
              className="group cursor-pointer overflow-hidden border-0 shadow-card hover:shadow-sport transition-all duration-300 transform hover:-translate-y-2"
              onClick={() => openLightbox(index)}
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <span className="inline-block bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium mb-2">
                    {image.category}
                  </span>
                  <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <Button variant="outline" size="lg">
            Load More Images
          </Button>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            {/* Close Button */}
            <Button
              variant="outline"
              size="icon"
              className="absolute top-4 right-4 z-10 bg-background/80 backdrop-blur-sm"
              onClick={closeLightbox}
            >
              <X className="h-4 w-4" />
            </Button>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
              onClick={() => navigateImage('prev')}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm"
              onClick={() => navigateImage('next')}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            {/* Image */}
            <div className="relative">
              <img
                src={filteredImages[selectedImage].src}
                alt={filteredImages[selectedImage].alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-background/80 backdrop-blur-sm rounded-lg p-4">
                <span className="inline-block bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-medium mb-2">
                  {filteredImages[selectedImage].category}
                </span>
                <h3 className="text-foreground font-semibold text-lg">
                  {filteredImages[selectedImage].title}
                </h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;