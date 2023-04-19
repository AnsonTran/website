interface Course {
  id: string,
  title: string,
  description: string,
  image: string
}

const COURSES:Course[] = [
  { id: "CSCC69",
    title: "Operating Systems",
    description: "Principles of operating systems. The operating system as a control program and as a resource allocator",
    image: "https://images5.alphacoders.com/131/1311254.png"
  },
]

export { Course, COURSES }