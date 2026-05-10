export const education = [
  {
    degree: "MSc Electrical Engineering",
    institution: "Aarhus University",
    location: "Denmark",
    startDate: "2021",
    endDate: "2024",
    specialization: "Machine Learning and Data Visualization",
    description:
      "Graduate studies focused on applied machine learning, data visualization, and engineering systems.",
    highlights: ["Machine learning", "Data visualization", "Engineering systems"],
  },
  {
    degree: "BSc Electrical Engineering",
    institution: "University / institution placeholder",
    location: "Hungary",
    startDate: "2016",
    endDate: "2021",
    specialization: "Automation and Electric Drives",
    description:
      "Undergraduate studies in electrical engineering with a focus on automation, control, and electric drive systems.",
    highlights: ["Automation", "Electric drives", "Control systems"],
  },
];

export type Education = (typeof education)[number];
