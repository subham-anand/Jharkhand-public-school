// Gallery image interface
export interface GalleryImage {
  id: number
  title: string
  description: string
  category: string
  imageUrl: string
  uploadDate: string
  featured: boolean
  tags: string[]
  alt: string
}

// Gallery categories
export const galleryCategories = [
  {
    id: 'all',
    name: 'All Photos',
    description: 'View all gallery images'
  },
  {
    id: 'campus',
    name: 'Campus & Facilities',
    description: 'School buildings, classrooms, and infrastructure'
  },
  {
    id: 'activities',
    name: 'Student Activities',
    description: 'Daily classroom activities and learning moments'
  },
  {
    id: 'events',
    name: 'Events & Programs',
    description: 'Special events, celebrations, and programs'
  },
  {
    id: 'sports',
    name: 'Sports & Games',
    description: 'Physical activities and sports events'
  },
  {
    id: 'cultural',
    name: 'Cultural Programs',
    description: 'Cultural activities and artistic performances'
  },
  {
    id: 'achievements',
    name: 'Achievements',
    description: 'Student achievements and awards'
  }
] as const

// Gallery images data
export const galleryImages: GalleryImage[] = [
  // Campus & Facilities
  {
    id: 1,
    title: "School Main Building",
    description: "Front view of our main school building with modern architecture",
    category: "campus",
    imageUrl: "/logo.png",
    uploadDate: "2024-01-15",
    featured: true,
    tags: ["building", "architecture", "main entrance"],
    alt: "Jharkhand Public School main building exterior"
  },
  {
    id: 2,
    title: "Bright Classrooms",
    description: "Well-lit and spacious classrooms designed for effective learning",
    category: "campus",
    imageUrl: "/logo.png",
    uploadDate: "2024-01-16",
    featured: false,
    tags: ["classroom", "furniture", "learning space"],
    alt: "Modern classroom with desks and blackboard"
  },
  {
    id: 3,
    title: "School Library",
    description: "Our well-stocked library with books for all grade levels",
    category: "campus",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-01-17",
    featured: true,
    tags: ["library", "books", "reading"],
    alt: "School library with bookshelves and reading area"
  },
  {
    id: 4,
    title: "Computer Lab",
    description: "Modern computer lab with latest technology for digital learning",
    category: "campus",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-01-18",
    featured: false,
    tags: ["computer", "technology", "lab"],
    alt: "Computer lab with desktop computers"
  },
  {
    id: 5,
    title: "School Playground",
    description: "Spacious playground for sports and recreational activities",
    category: "campus",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-01-19",
    featured: true,
    tags: ["playground", "sports", "recreation"],
    alt: "School playground with sports equipment"
  },

  // Student Activities
  {
    id: 6,
    title: "Mathematics Class",
    description: "Students actively participating in mathematics lesson",
    category: "activities",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-01-20",
    featured: false,
    tags: ["mathematics", "learning", "students"],
    alt: "Students in mathematics class with teacher"
  },
  {
    id: 7,
    title: "Science Experiment",
    description: "Hands-on science learning in our laboratory",
    category: "activities",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-01-21",
    featured: true,
    tags: ["science", "experiment", "laboratory"],
    alt: "Students conducting science experiment"
  },
  {
    id: 8,
    title: "Reading Session",
    description: "Students enjoying reading time in the library",
    category: "activities",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-01-22",
    featured: false,
    tags: ["reading", "library", "books"],
    alt: "Students reading books in library"
  },
  {
    id: 9,
    title: "Art & Craft Class",
    description: "Creative expression through art and craft activities",
    category: "activities",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-01-23",
    featured: false,
    tags: ["art", "craft", "creativity"],
    alt: "Students working on art and craft projects"
  },

  // Events & Programs
  {
    id: 10,
    title: "Annual Day Celebration",
    description: "Colorful annual day celebration with cultural performances",
    category: "events",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-01-24",
    featured: true,
    tags: ["annual day", "celebration", "performance"],
    alt: "Annual day celebration with students performing"
  },
  {
    id: 11,
    title: "Independence Day",
    description: "Patriotic celebration of India's Independence Day",
    category: "events",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-01-25",
    featured: true,
    tags: ["independence day", "patriotic", "flag"],
    alt: "Independence Day celebration with flag hoisting"
  },
  {
    id: 12,
    title: "Teachers' Day",
    description: "Special celebration honoring our dedicated teachers",
    category: "events",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-01-26",
    featured: false,
    tags: ["teachers day", "appreciation", "honor"],
    alt: "Teachers Day celebration with teachers and students"
  },
  {
    id: 13,
    title: "Parent Meeting",
    description: "Interactive parent-teacher meeting for student progress",
    category: "events",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-01-27",
    featured: false,
    tags: ["parent meeting", "discussion", "progress"],
    alt: "Parent-teacher meeting in progress"
  },

  // Sports & Games
  {
    id: 14,
    title: "Sports Day",
    description: "Annual sports day with various competitive events",
    category: "sports",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-01-28",
    featured: true,
    tags: ["sports day", "competition", "athletics"],
    alt: "Students participating in sports day events"
  },
  {
    id: 15,
    title: "Cricket Match",
    description: "Inter-class cricket tournament in full swing",
    category: "sports",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-01-29",
    featured: false,
    tags: ["cricket", "tournament", "team sport"],
    alt: "Students playing cricket match"
  },
  {
    id: 16,
    title: "Physical Exercise",
    description: "Daily physical exercise and fitness activities",
    category: "sports",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-01-30",
    featured: false,
    tags: ["exercise", "fitness", "health"],
    alt: "Students doing physical exercise"
  },

  // Cultural Programs
  {
    id: 17,
    title: "Dance Performance",
    description: "Beautiful cultural dance performance by students",
    category: "cultural",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-01-31",
    featured: true,
    tags: ["dance", "performance", "culture"],
    alt: "Students performing cultural dance"
  },
  {
    id: 18,
    title: "Music Program",
    description: "Melodious music program showcasing student talents",
    category: "cultural",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-02-01",
    featured: false,
    tags: ["music", "talent", "performance"],
    alt: "Students performing music program"
  },
  {
    id: 19,
    title: "Drama Performance",
    description: "Engaging drama performance during cultural week",
    category: "cultural",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-02-02",
    featured: false,
    tags: ["drama", "acting", "theater"],
    alt: "Students performing drama on stage"
  },

  // Achievements
  {
    id: 20,
    title: "Academic Excellence",
    description: "Students receiving awards for academic achievements",
    category: "achievements",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-02-03",
    featured: true,
    tags: ["awards", "academic", "excellence"],
    alt: "Students receiving academic achievement awards"
  },
  {
    id: 21,
    title: "Competition Winners",
    description: "Prize distribution for inter-school competition winners",
    category: "achievements",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-02-04",
    featured: false,
    tags: ["competition", "winners", "prizes"],
    alt: "Students receiving competition prizes"
  },
  {
    id: 22,
    title: "Perfect Attendance",
    description: "Recognition for students with perfect attendance",
    category: "achievements",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-02-05",
    featured: false,
    tags: ["attendance", "recognition", "discipline"],
    alt: "Students receiving perfect attendance certificates"
  },
  {
    id: 23,
    title: "Best Student Award",
    description: "Annual best student award ceremony",
    category: "achievements",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-02-06",
    featured: true,
    tags: ["best student", "award", "ceremony"],
    alt: "Best student award ceremony"
  },
  {
    id: 24,
    title: "Graduation Ceremony",
    description: "Class 8 graduation ceremony celebration",
    category: "achievements",
    imageUrl: "/placeholder_img.png",
    uploadDate: "2024-02-07",
    featured: true,
    tags: ["graduation", "ceremony", "celebration"],
    alt: "Class 8 graduation ceremony"
  }
]

// Helper functions for gallery data
export const getImagesByCategory = (category: string) => {
  if (category === 'all') return galleryImages
  return galleryImages.filter(image => image.category === category)
}

export const getFeaturedImages = () => {
  return galleryImages.filter(image => image.featured)
}

export const getImageById = (id: number) => {
  return galleryImages.find(image => image.id === id)
}

export const searchImages = (query: string) => {
  const searchTerm = query.toLowerCase()
  return galleryImages.filter(image => 
    image.title.toLowerCase().includes(searchTerm) ||
    image.description.toLowerCase().includes(searchTerm) ||
    image.tags.some(tag => tag.toLowerCase().includes(searchTerm))
  )
}

export const getImagesByTag = (tag: string) => {
  return galleryImages.filter(image => 
    image.tags.some(t => t.toLowerCase().includes(tag.toLowerCase()))
  )
}

export const getRecentImages = (limit: number = 8) => {
  return galleryImages
    .sort((a, b) => new Date(b.uploadDate).getTime() - new Date(a.uploadDate).getTime())
    .slice(0, limit)
}

export const getTotalImages = () => {
  return galleryImages.length
}

export const getImagesCount = () => {
  return {
    total: galleryImages.length,
    featured: getFeaturedImages().length,
    byCategory: galleryCategories.reduce((acc, category) => {
      acc[category.id] = category.id === 'all' ? galleryImages.length : getImagesByCategory(category.id).length
      return acc
    }, {} as Record<string, number>)
  }
}
