interface Course {
  id: string,
  title: string,
  description: string,
  image: string
  files: string[]
}

const COURSES:Course[] = [
  { id: "CSCC69",
    title: "Operating Systems",
    description: "Principles of operating systems. The operating system as a control program and as a resource allocator",
    image: "https://images5.alphacoders.com/131/1311254.png",
    files: [
      "01-Introduction.md",
      "02-Bootstrapping.md",
      "03-System Calls.md",
      "04.1-Peterson.md",
      "04.2-Locks.md",
      "04.3-Semaphores.md",
      "04.4-Monitors.md",
      "04-Synchronization.md",
      "05.1-Non-Preemptive Scheduling.md",
      "05.2-Preemptive Scheduling.md",
      "05-Process Shceduling.md",
      "06.1-Fixed Partitioning.md",
      "06.2-Dynamic Partitioning.md",
      "06.3-Heap Management.md",
      "06.4-Paging.md",
      "06.5-Address Translation.md",
      "06.6-Fetch Policy.md",
      "06.7-Placement Policy.md",
      "06.8-Replacement Policy.md",
      "06.9-Fixed vs Variable Space.md",
      "06-Memory Management.md",
      "07.1-Files.md",
      "07.2-Directories.md",
      "07.3-Links.md",
      "07.4-Protection.md",
      "07.5-Hard Disks.md",
      "07-File Sytems.md",
      "08-Deadlock.md",
    ]
  },
]

export { Course, COURSES }
