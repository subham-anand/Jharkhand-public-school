// Teacher interface
export interface Teacher {
  id: number
  name: string
  designation: string
  subjects: readonly string[]
  experience: string
  photo: string
  specialization: string
  qualifications: readonly string[]
}

// Teachers data organized by designation
export const teachersData = {
  principal: [
    {
      id: 1,
      name: "Chhotelal Gupta",
      designation: "Principal",
      subjects: ["All Subjects"],
      experience: "40+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "Educational Leadership",
      qualifications: ["M.Ed"]
    }
  ],
  headmaster: [
    {
      id: 2,
      name: "Dasharath Sir",
      designation: "Headmaster",
      subjects: ["Hindi"],
      experience: "15+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "Hindi Literature",
      qualifications: ["B.Ed"]
    }
  ],
  teachers: [
    {
      id: 3,
      name: "Arvind Sir",
      designation: "Teacher",
      subjects: ["All Subjects"],
      experience: "12+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "Multi-Subject Teaching",
      qualifications: ["B.Ed"]
    },
    {
      id: 4,
      name: "Ali Asgar Sir",
      designation: "Teacher",
      subjects: ["Mathematics", "Science"],
      experience: "10+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "Mathematics & Science",
      qualifications: ["M.Sc", "B.Ed"]
    },
    {
      id: 5,
      name: "Vijay Sir",
      designation: "Teacher",
      subjects: ["All Subjects"],
      experience: "8+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "Primary Education",
      qualifications: ["B.Ed"]
    },
    {
      id: 6,
      name: "Subham Anand",
      designation: "Teacher",
      subjects: ["Mathematics", "Science"],
      experience: "6+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "Mathematics & Science",
      qualifications: ["M.Sc", "B.Ed"]
    },
    {
      id: 7,
      name: "Dipak Sir",
      designation: "Teacher",
      subjects: ["English", "Mathematics"],
      experience: "7+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "English & Mathematics",
      qualifications: ["B.A", "B.Ed"]
    },
    {
      id: 8,
      name: "Manoranajan Sir",
      designation: "Teacher",
      subjects: ["English"],
      experience: "9+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "English Literature",
      qualifications: ["M.A", "B.Ed"]
    },
    {
      id: 9,
      name: "Sanjay Kumar Bhandari Sir",
      designation: "Teacher",
      subjects: ["Social Studies"],
      experience: "11+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "Social Studies",
      qualifications: ["M.A", "B.Ed"]
    },
    {
      id: 10,
      name: "Anand Sir",
      designation: "Teacher",
      subjects: ["All Subjects"],
      experience: "5+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "Primary Education",
      qualifications: ["B.Ed"]
    },
    {
      id: 11,
      name: "Kajal Mam",
      designation: "Teacher",
      subjects: ["All Subjects"],
      experience: "8+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "Primary Education",
      qualifications: ["B.Ed"]
    },
    {
      id: 12,
      name: "Sindhu Mam",
      designation: "Teacher",
      subjects: ["All Subjects"],
      experience: "6+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "Early Childhood Education",
      qualifications: ["B.Ed"]
    },
    {
      id: 13,
      name: "Shivani Mam",
      designation: "Teacher",
      subjects: ["All Subjects"],
      experience: "7+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "Primary Education",
      qualifications: ["B.Ed"]
    },
    {
      id: 14,
      name: "Joshna Mam",
      designation: "Teacher",
      subjects: ["All Subjects"],
      experience: "5+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "Primary Education",
      qualifications: ["B.Ed"]
    },
    {
      id: 15,
      name: "Sumitra Mam",
      designation: "Teacher",
      subjects: ["All Subjects"],
      experience: "9+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "Primary Education",
      qualifications: ["B.Ed"]
    },
    {
      id: 16,
      name: "Najiya Mam",
      designation: "Teacher",
      subjects: ["All Subjects"],
      experience: "4+ Years",
      photo: "/dummyuser.jpeg",
      specialization: "Primary Education",
      qualifications: ["B.Ed"]
    }
  ]
} as const

// Helper functions for teachers data
export const getAllTeachers = () => {
  return [
    ...teachersData.principal,
    ...teachersData.headmaster,
    ...teachersData.teachers
  ]
}

export const getTeacherById = (id: number) => {
  const allTeachers = getAllTeachers()
  return allTeachers.find(teacher => teacher.id === id)
}

export const getTeachersBySubject = (subject: string) => {
  const allTeachers = getAllTeachers()
  return allTeachers.filter(teacher => 
    teacher.subjects.some(s => s.toLowerCase().includes(subject.toLowerCase()))
  )
}

export const getTotalTeachers = () => {
  return teachersData.principal.length + teachersData.headmaster.length + teachersData.teachers.length
}

export const getTotalExperience = () => {
  // Calculate approximate total years of experience
  const allTeachers = getAllTeachers()
  return allTeachers.reduce((total, teacher) => {
    const years = parseInt(teacher.experience.split('+')[0]) || 0
    return total + years
  }, 0)
}
