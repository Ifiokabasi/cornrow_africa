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

export interface Masterclass {
  topic: string;
  ledBy: string;
}

// Guest faculty are described by caliber/background, not named individuals,
// until specific guests are confirmed and contracted.
export const masterclasses: Masterclass[] = [
  {
    topic: "Faith-Based Feature Filmmaking",
    ledBy: "A recognized director with theatrical faith-based film credits",
  },
  {
    topic: "Documentary Storytelling",
    ledBy: "An award-winning Christian documentary filmmaker",
  },
  {
    topic: "Testimony Films",
    ledBy: "A producer known for ministry and testimony-driven film projects",
  },
  {
    topic: "Evangelism Through Film",
    ledBy: "A filmmaker with an established record in evangelistic media",
  },
  {
    topic: "Producing Church Documentaries",
    ledBy: "An established producer of church and ministry documentaries",
  },
  {
    topic: "Biblical Storytelling",
    ledBy: "A respected voice in biblically-grounded screenwriting",
  },
  {
    topic: "Working with Actors",
    ledBy: "A veteran director of faith-based dramatic features",
  },
  {
    topic: "AI Tools for Christian Creatives",
    ledBy: "An industry professional specializing in emerging production technology",
  },
  {
    topic: "Film Financing",
    ledBy: "An experienced faith-based film financier and producer",
  },
  {
    topic: "Distribution Strategies",
    ledBy: "A distribution strategist with faith-market release experience",
  },
];

export const workshops = [
  "Camera Operation",
  "Lighting",
  "Audio Recording",
  "Colour Grading",
  "Documentary Interview Techniques",
  "Directing Actors",
  "Pitching to Investors",
  "Portfolio Reviews",
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
  "A completed 5–10 minute short film",
  "Documentary interview project",
  "Professional showreel",
  "Director's statement",
  "Production portfolio",
  "Professional CV",
  "Behind-the-scenes production diary",
  "Cornrow Academy Certificate",
];

export interface DateRow {
  activity: string;
  date: string;
}

export const importantDates: DateRow[] = [
  { activity: "Applications Open", date: "Now" },
  { activity: "Registration Deadline", date: "30 July 2026" },
  { activity: "Successful Applicants Notified", date: "Mid-August 2026" },
  { activity: "Orientation", date: "Early September 2026" },
  { activity: "Programme Begins", date: "5 September 2026" },
  { activity: "Graduation & Film Showcase", date: "At the end of the programme" },
];

export const programmeFormat = [
  "Live online classes",
  "Practical workshops",
  "Industry masterclasses",
  "Individual mentoring",
  "Final film production",
];

// Registration deadline used by the countdown timer (UTC midnight).
export const REGISTRATION_DEADLINE_ISO = "2026-07-30T23:59:59Z";
