// components/Academy/curriculumData.ts

export interface Module {
  no: number;
  title: string;
  topics: string[];
  assignment?: string;
  practical?: string;
  studentsCreate?: string[];
}

export const modules: Module[] = [
  {
    no: 1,
    title: "The Calling of the Faith-Based Filmmaker",
    topics: [
      "Why storytelling matters in Scripture",
      "The ministry of visual storytelling",
      "The difference between preaching and storytelling",
      "Developing a biblical worldview for filmmaking",
      "Excellence as worship",
    ],
    assignment: "Write your personal filmmaking mission statement.",
  },
  {
    no: 2,
    title: "Developing Stories That Reflect Biblical Truth",
    topics: [
      "Finding stories that matter",
      "Identifying themes of redemption",
      "Character transformation",
      "Hope, grace and forgiveness",
      "Writing authentic Christian stories",
      "Avoiding clichés in faith-based films",
    ],
    assignment: "Develop three faith-based story ideas and pitch one.",
  },
  {
    no: 3,
    title: "Screenwriting for Faith-Based Films",
    topics: [
      "Story structure",
      "Writing believable characters",
      "Writing authentic dialogue",
      "Integrating biblical themes naturally",
      "Building emotional impact",
      "Script rewriting",
    ],
    assignment: "Write a 5–10 page faith-based screenplay.",
  },
  {
    no: 4,
    title: "Directing with Purpose",
    topics: [
      "Casting actors",
      "Directing emotional performances",
      "Working with church volunteers",
      "Directing children",
      "Communicating vision",
      "Leading a production with humility",
    ],
    practical: "Direct a short dramatic scene.",
  },
  {
    no: 5,
    title: "Cinematography That Serves the Story",
    topics: [
      "Camera operation",
      "Composition",
      "Lighting",
      "Colour",
      "Visual symbolism",
      "Creating emotion through images",
    ],
    practical: "Shoot a dramatic scene using cinematic lighting techniques.",
  },
  {
    no: 6,
    title: "Recording Powerful Sound",
    topics: [
      "Dialogue recording",
      "Ambient sound",
      "Worship recordings",
      "Sound design",
      "Music selection",
      "Foley",
    ],
    assignment: "Record and edit clean cinematic audio.",
  },
  {
    no: 7,
    title: "Production Design",
    topics: [
      "Creating believable environments",
      "Costume and wardrobe",
      "Props",
      "Set decoration",
      "Locations",
      "Visual symbolism",
    ],
  },
  {
    no: 8,
    title: "Producing Faith-Based Films",
    topics: [
      "Budgeting",
      "Scheduling",
      "Building volunteer crews",
      "Church partnerships",
      "Raising financial support",
      "Contracts",
      "Production management",
    ],
    studentsCreate: ["Budget", "Production schedule", "Call sheets", "Production plan"],
  },
  {
    no: 9,
    title: "Production Week",
    topics: [
      "Leading a film set",
      "Problem solving",
      "Managing time",
      "Working under pressure",
      "Collaborating with cast and crew",
    ],
    practical: "Students produce their own films.",
  },
  {
    no: 10,
    title: "Editing Stories That Transform",
    topics: [
      "Story editing",
      "Emotional pacing",
      "Colour grading",
      "Titles",
      "Music",
      "Audio mixing",
      "Delivering the final film",
    ],
    practical: "Students complete a finished short film.",
  },
  {
    no: 11,
    title: "Reaching the World",
    topics: [
      "YouTube ministry",
      "Social media storytelling",
      "Film festivals",
      "Church screenings",
      "Streaming platforms",
      "Community outreach",
      "Building an audience",
    ],
    studentsCreate: ["Movie poster", "Trailer", "Press kit"],
  },
  {
    no: 12,
    title: "Building a Career in Faith-Based Filmmaking",
    topics: [
      "Starting a production company",
      "Working with churches",
      "Producing documentaries",
      "Christian television",
      "Corporate filmmaking",
      "Building a portfolio",
      "Funding ministry films",
      "Creating sustainable income",
    ],
  },
];

export const masterclasses = [
  "Faith-Based Feature Films",
  "Documentary Storytelling",
  "Testimony Films",
  "Evangelism Through Film",
  "Producing Church Documentaries",
  "Biblical Storytelling",
  "Working with Actors",
  "AI Tools for Christian Creatives",
  "Film Financing",
  "Distribution Strategies",
];

export const workshops = [
  "Camera Operation",
  "Cinematic Lighting",
  "Audio Recording",
  "Directing Actors",
  "Documentary Interviews",
  "Colour Grading",
  "Drone Cinematography",
  "Editing",
  "Story Development",
];

export const whoShouldAttend = [
  "Christian filmmakers",
  "Church media teams",
  "Youth leaders",
  "Pastors and ministry leaders",
  "Documentary storytellers",
  "Christian content creators",
  "Actors",
  "Worship creatives",
  "Students",
  "Anyone passionate about telling stories that honour God",
];

export const missionPoints = [
  "Communicate biblical truth",
  "Inspire hope",
  "Strengthen faith",
  "Preserve testimonies",
  "Encourage discipleship",
  "Influence culture with excellence",
];

export const graduateWith = [
  "One completed faith-based short film",
  "One documentary testimony film",
  "Professional showreel",
  "Director's statement",
  "Producer's portfolio",
  "Production documents",
  "Behind-the-scenes diary",
];
