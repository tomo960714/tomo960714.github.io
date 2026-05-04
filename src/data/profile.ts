export const profile = {
  name: "Tamas Bartos",
  title: "Data & ML Engineer",
  location: "Aarhus, Denmark",
  email: "tamasbartos96@gmail.com",
  summary:
    "I build solutions for data enginering, machine learning, and data visualization.",
  bio:
    "Electrical engineering graduate who enjoys solving problems with data. I have a background in machine learning and data visualization, but I equaly enjoy working on data engineering problems and running my (currently small) HomeLab. I have a passion for learning new technologies and sharing my knowledge with others. I am always looking for new challenges and opportunities to further develop my skills and contribute to the data community.",
  education: [
    {
      institution: "Aarhus University - MSc in Electrical and Computer Engineering",
      credential: "Degree, certificate, or area of study",
      period: "2021 - 2024",
      link: "https://masters.au.dk/electrical-engineering-msc-in-engineering",
    },
  ],
  interests: ["Machine learning", "Developer tools", "Data visualization", "Open source"],
};

export type Profile = typeof profile;
