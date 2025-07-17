"use client"
import React from 'react'
import { 
  IconPhoto, 
  IconSearch, 
  IconFilter, 
  IconLayoutGrid,
  IconStar,
  IconCalendar,
  IconEye,
  IconHeart,
  IconShare,
  IconGrid3x3
} from '@tabler/icons-react'
import Image from 'next/image'
import { galleryImages, galleryCategories, getFeaturedImages, getImagesCount, type GalleryImage } from '@/utils/galleryData'

// Individual Image Card Component
const ImageCard = ({ image, onClick }: { image: GalleryImage; onClick: () => void }) => {
  return (
    <div 
      className="group relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        {image.imageUrl === "/placeholder_img.png" ? (
          // CSS-based placeholder
          <div className="w-full h-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
            <div className="text-center">
              <IconPhoto size={48} className="mx-auto text-gray-400 mb-2" />
              <p className="text-gray-500 text-sm font-medium">{image.title}</p>
            </div>
          </div>
        ) : (
          <Image
            src={image.imageUrl}
            alt={image.alt}
            width={400}
            height={300}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={image.featured}
            unoptimized
            onLoad={() => console.log('Image loaded successfully:', image.imageUrl)}
            onError={() => {
              console.log('Image failed to load:', image.imageUrl);
            }}
          />
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300">
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white rounded-full p-3 shadow-lg">
              <IconEye size={24} className="text-blue-600" />
            </div>
          </div>
        </div>
        
        {/* Featured Badge */}
        {image.featured && (
          <div className="absolute top-3 right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
            <IconStar size={16} />
            Featured
          </div>
        )}
        
        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-black bg-opacity-70 text-white px-3 py-1 rounded-full text-sm font-medium">
          {galleryCategories.find(cat => cat.id === image.category)?.name || image.category}
        </div>
      </div>
      
      {/* Image Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {image.title}
        </h3>
        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {image.description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {image.tags.slice(0, 3).map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
              {tag}
            </span>
          ))}
        </div>
        
        {/* Date */}
        <div className="flex items-center gap-2 text-gray-500 text-sm">
          <IconCalendar size={16} />
          {new Date(image.uploadDate).toLocaleDateString('en-IN', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric' 
          })}
        </div>
      </div>
    </div>
  )
}

// Category Filter Component
const CategoryFilter = ({ 
  selectedCategory, 
  onCategoryChange 
}: { 
  selectedCategory: string; 
  onCategoryChange: (category: string) => void 
}) => {
  const imageCounts = getImagesCount()
  
  return (
    <div className="flex flex-wrap gap-3 justify-center mb-8">
      {galleryCategories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full font-medium transition-all duration-200 flex items-center gap-2 ${
            selectedCategory === category.id
              ? 'bg-blue-600 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-blue-50 border border-gray-200'
          }`}
        >
          <span>{category.name}</span>
          <span className={`text-xs px-2 py-1 rounded-full ${
            selectedCategory === category.id
              ? 'bg-blue-500 text-white'
              : 'bg-gray-200 text-gray-600'
          }`}>
            {imageCounts.byCategory[category.id] || 0}
          </span>
        </button>
      ))}
    </div>
  )
}

// Main Gallery Component
export default function GallerySection() {
  const [selectedCategory, setSelectedCategory] = React.useState('all')
  const [searchQuery, setSearchQuery] = React.useState('')
  const [selectedImage, setSelectedImage] = React.useState<GalleryImage | null>(null)
  
  // Filter images based on category and search
  const filteredImages = React.useMemo(() => {
    let images = selectedCategory === 'all' 
      ? galleryImages 
      : galleryImages.filter(img => img.category === selectedCategory)
    
    if (searchQuery) {
      images = images.filter(img => 
        img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        img.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        img.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      )
    }
    
    return images
  }, [selectedCategory, searchQuery])
  
  const featuredImages = getFeaturedImages()
  const imageCounts = getImagesCount()
  
  return (
    <section className="relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-teal-50 -z-10"></div>
      
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-40 h-40 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-15 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-25 animate-pulse animation-delay-2000"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6">
            <div className="p-3 bg-gradient-to-r from-blue-500 via-teal-500 to-orange-500 rounded-xl shadow-lg">
              <IconPhoto size={32} className="text-white" />
            </div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-wider">School Gallery</span>
          </div>
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            <span className="block">📸 Our School</span>
            <span className="block bg-gradient-to-r from-blue-600 via-teal-600 to-orange-600 bg-clip-text text-transparent">
              Photo Gallery
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore the vibrant life at Jharkhand Public School through our collection of memorable moments, 
            campus facilities, student activities, and special events.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconPhoto size={32} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{imageCounts.total}</div>
            <div className="text-gray-600">Total Photos</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconStar size={32} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{imageCounts.featured}</div>
            <div className="text-gray-600">Featured Images</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconLayoutGrid size={32} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">{galleryCategories.length - 1}</div>
            <div className="text-gray-600">Categories</div>
          </div>
          
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <IconCalendar size={32} className="text-white" />
            </div>
            <div className="text-3xl font-bold text-gray-900 mb-2">2024</div>
            <div className="text-gray-600">Latest Updates</div>
          </div>
        </div>

        {/* Search and Filter Controls */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
          <div className="flex flex-col lg:flex-row gap-4 items-center">
            {/* Search */}
            <div className="relative flex-1">
              <IconSearch size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search photos by title, description, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            
            {/* Filter indicator */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <IconFilter size={16} />
              <span>Showing {filteredImages.length} of {imageCounts.total} photos</span>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <CategoryFilter 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />

        {/* Featured Images Section */}
        {selectedCategory === 'all' && !searchQuery && (
          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl shadow-lg">
                <IconStar size={24} className="text-white" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Featured Photos</h2>
                <p className="text-gray-600">Highlighted moments from our school</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
              {featuredImages.slice(0, 8).map((image) => (
                <ImageCard 
                  key={image.id} 
                  image={image} 
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          </div>
        )}

        {/* Main Gallery Grid */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-teal-500 rounded-xl shadow-lg">
              <IconGrid3x3 size={24} className="text-white" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                {selectedCategory === 'all' ? 'All Photos' : galleryCategories.find(cat => cat.id === selectedCategory)?.name}
              </h2>
              <p className="text-gray-600">
                {selectedCategory === 'all' 
                  ? 'Browse through our complete photo collection' 
                  : galleryCategories.find(cat => cat.id === selectedCategory)?.description
                }
              </p>
            </div>
          </div>
          
          {filteredImages.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredImages.map((image) => (
                <ImageCard 
                  key={image.id} 
                  image={image} 
                  onClick={() => setSelectedImage(image)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <IconSearch size={64} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No photos found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-gradient-to-r from-blue-500 to-teal-500 rounded-2xl p-8 lg:p-12 text-white">
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-6">
              <IconHeart size={32} className="text-red-300" />
              <IconPhoto size={32} className="text-yellow-300" />
              <IconShare size={32} className="text-green-300" />
            </div>
            
            <h2 className="text-3xl font-bold mb-4">
              Capturing Beautiful Moments
            </h2>
            
            <p className="text-blue-100 text-lg mb-6">
              Every photo tells a story of learning, growth, and joy at Jharkhand Public School. 
              Join us in creating more beautiful memories together.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/Admission" 
                className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg hover:bg-blue-50 transition-colors duration-200"
              >
                Apply for Admission
              </a>
              <a 
                href="/contact" 
                className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-600 transition-colors duration-200"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Image Modal/Lightbox - Full screen without text */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-[95vw] max-h-[95vh] w-full h-full flex items-center justify-center">
            <button
              onClick={(e) => {
                e.stopPropagation()
                setSelectedImage(null)
              }}
              className="absolute top-4 right-4 bg-black bg-opacity-50 text-white p-3 rounded-full hover:bg-opacity-70 transition-colors z-10 text-xl"
            >
              ✕
            </button>
            <Image
              src={selectedImage.imageUrl}
              alt={selectedImage.alt}
              width={1200}
              height={900}
              className="object-contain max-w-full max-h-full"
              priority
              unoptimized
            />
          </div>
        </div>
      )}
    </section>
  )
}
