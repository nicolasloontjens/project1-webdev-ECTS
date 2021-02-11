"use strict";
const modules = [
  {
    "module": "Problem Solving",
    "lecturer": "Brian Baert",
    "semester": "S1",
    "ects": 6,
    "colour": "yellow"
  },
  {
    "module": "Programming Fundamentals",
    "lecturer": "Mattias De Wael ",
    "semester": "S1",
    "ects": 6,
    "colour": "blue"
  },
  {
    "module": "Web Development",
    "lecturer": "Jill VandenDriessche",
    "semester": "S1",
    "ects": 6,
    "colour": "pink"
  },
  {
    "module": "Hardware and Desktop Operating Systems",
    "lecturer": "Koen Koreman",
    "semester": "S1",
    "ects": 6,
    "colour": "orange"
  },
  {
    "module": "Cyber Security Fundamentals",
    "lecturer": "Kurt Schoenmaekers",
    "semester": "S1",
    "ects": 3,
    "colour": "orange"
  },
  {
    "module": "Databases",
    "lecturer": "Kristien Roels",
    "semester": "S1",
    "ects": 6,
    "colour": "blue"
  },
  {
    "module": "E-business",
    "lecturer": "Thijs Martens",
    "semester": "S1",
    "ects": 3,
    "colour": "pink"
  },
  {
    "module": "Computer Networks",
    "lecturer": "Daan Pareit",
    "semester": "S2",
    "ects": 6,
    "colour": "green"
  },
  {
    "module": "Object Oriented Programming",
    "lecturer": "Mattias De Wael ",
    "semester": "S2",
    "ects": 6,
    "colour": "purple"
  },
  {
    "module": "Project Communication",
    "lecturer": "Heidi Terryn",
    "semester": "S2",
    "ects": 6,
    "colour": "blue"
  },
  {
    "module": "Application Prototyping",
    "lecturer": "Jill VandenDriessche",
    "semester": "S2",
    "ects": 3,
    "colour": "pink"
  },
  {
    "module": "Programming Project",
    "lecturer": "Jill VandenDriessche",
    "semester": "S2",
    "ects": 6,
    "colour": "blue"
  },
  {
    "module": "Web, Mobile and Security",
    "lecturer": "Frédéric Vlummens",
    "semester": "S2",
    "ects": 6,
    "colour": "purple"
  },
  {
    "module": "Web Technology",
    "lecturer": "Ann Audenaert",
    "semester": "S3",
    "ects": 9,
    "colour": "pink"
  },
  {
    "module": "Statistics and Decision Making",
    "lecturer": "Brian Baert",
    "semester": "S3",
    "ects": 3,
    "colour": "yellow"
  },
  {
    "module": "Operating Systems Concepts",
    "lecturer": "Corneel Theben Tervile",
    "semester": "S3",
    "ects": 9,
    "colour": "purple"
  },
  {
    "module": "Object Oriented Architectures and Secure Development",
    "lecturer": "Mattias De Wael ",
    "semester": "S3",
    "ects": 6,
    "colour": "green"
  },
  {
    "module": "AI Fundamentals and AI for Business",
    "lecturer": "Ines Devliegher",
    "semester": "S3",
    "ects": 6,
    "colour": "yellow"
  },
  {
    "module": "Analysis and Development Project",
    "lecturer": "Jill VandenDriessche",
    "semester": "S3",
    "ects": 6,
    "colour": "blue"
  },
  {
    "module": "Web Technology, Security and Honeypot",
    "lecturer": "Koen Koreman",
    "semester": "S3",
    "ects": 9,
    "colour": "purple"
  },
  {
    "module": "Information Systems",
    "lecturer": "Kristien Roels",
    "semester": "S3",
    "ects": 6,
    "colour": "pink"
  },
  {
    "module": "Digital Marketing and User Experience",
    "lecturer": "Thijs Martens",
    "semester": "S3",
    "ects": 3,
    "colour": "yellow"
  },
  {
    "module": "Blockchain Architecture and Development",
    "lecturer": "Benjamin Verhaegen",
    "semester": "S3",
    "ects": 6,
    "colour": "yellow"
  },
  {
    "module": ".NET Technology",
    "lecturer": "Olivier Sourie",
    "semester": "S4",
    "ects": 6,
    "colour": "green"
  },
  {
    "module": ".NET Technology Fundamentals",
    "lecturer": "Blomme Mattias",
    "semester": "S4",
    "ects": 6,
    "colour": "purple"
  },
  {
    "module": "Big Data and Business Intelligence",
    "lecturer": "Brian Baert",
    "semester": "S4",
    "ects": 6,
    "colour": "yellow"
  },
  {
    "module": "Forensic Analysis",
    "lecturer": "Daan Pareit",
    "semester": "S4",
    "ects": 6,
    "colour": "orange"
  },
  {
    "module": "Enterprise Information Systems I",
    "lecturer": "Guy Van Eeckhout",
    "semester": "S4",
    "ects": 6,
    "colour": "green"
  },
  {
    "module": "Software Implementation and Change Management",
    "lecturer": "Guy Van Eeckhout",
    "semester": "S4",
    "ects": 3,
    "colour": "yellow"
  },
  {
    "module": "Windows and Linux Server",
    "lecturer": "Henk Brouckxon",
    "semester": "S4",
    "ects": 6,
    "colour": "orange"
  },
  {
    "module": "Machine Learning",
    "lecturer": "Ines Devliegher",
    "semester": "S4",
    "ects": 6,
    "colour": "green"
  },
  {
    "module": "Neural Networks and Deep Learning",
    "lecturer": "Ines Devliegher",
    "semester": "S4",
    "ects": 6,
    "colour": "orange"
  },
  {
    "module": "Mobile Security",
    "lecturer": "Koen Koreman",
    "semester": "S4",
    "ects": 9,
    "colour": "purple"
  },
  {
    "module": "ICT Strategy and Planning",
    "lecturer": "Stijn Van Hijfte",
    "semester": "S4",
    "ects": 6,
    "colour": "pink"
  },
  {
    "module": "International Project",
    "lecturer": "Thijs Martens",
    "semester": "S4",
    "ects": 6,
    "colour": "yellow"
  },
  {
    "module": "Network and System Pentesting",
    "lecturer": "Tijl Deneut",
    "semester": "S4",
    "ects": 6,
    "colour": "orange"
  },
  {
    "module": "Practical Reverse Engineering and Malware Analysis",
    "lecturer": "Tijl Deneut",
    "semester": "S4",
    "ects": 6,
    "colour": "green"
  },
  {
    "module": "Blockchain Development",
    "lecturer": "Benjamin Verhaegen",
    "semester": "S4",
    "ects": 6,
    "colour": "yellow"
  },
  {
    "module": "Mobile and Smart Technology",
    "lecturer": "Frédéric Vlummens",
    "semester": "S4",
    "ects": 6,
    "colour": "green"
  },
  {
    "module": "Web and Mobile Technology",
    "lecturer": "Frédéric Vlummens",
    "semester": "S4",
    "ects": 6,
    "colour": "orange"
  },
  {
    "module": "AR Fundamentals and Development",
    "lecturer": "Wim Van Renthergem",
    "semester": "S4",
    "ects": 3,
    "colour": "pink"
  },
  {
    "module": "Cybercrime",
    "lecturer": "Stephanie Witters ",
    "semester": "S4",
    "ects": 6,
    "colour": "blue"
  },
  {
    "module": "Data Privacy and IT Law",
    "lecturer": "Stephanie Witters ",
    "semester": "S4",
    "ects": 6,
    "colour": "purple"
  },
  {
    "module": "Content Management Systems",
    "lecturer": "Ann Audenaert",
    "semester": "S5",
    "ects": 6,
    "colour": "green"
  },
  {
    "module": "Software Engineering Project",
    "lecturer": "Ann Audenaert",
    "semester": "S5",
    "ects": 6,
    "colour": "yellow"
  },
  {
    "module": "Business Process Modeling and Blockchain Solutions",
    "lecturer": "Bart Coelus",
    "semester": "S5",
    "ects": 6,
    "colour": "blue"
  },
  {
    "module": "Cloud and Internet of Things",
    "lecturer": "Dimitri Casier ",
    "semester": "S5",
    "ects": 6,
    "colour": "orange"
  },
  {
    "module": "Datacenter Technology",
    "lecturer": "Daan Pareit",
    "semester": "S5",
    "ects": 9,
    "colour": "green"
  },
  {
    "module": "Windows and Linux Server Advanced",
    "lecturer": "Daan Pareit",
    "semester": "S5",
    "ects": 6,
    "colour": "yellow"
  },
  {
    "module": "Windows and Linux Server Security",
    "lecturer": "Daan Pareit",
    "semester": "S5",
    "ects": 6,
    "colour": "orange"
  },
  {
    "module": "Cryptography and Blockchain",
    "lecturer": "Galle Johan",
    "semester": "S5",
    "ects": 6,
    "colour": "orange"
  },
  {
    "module": "Security Management, Threat and Risk Assessment",
    "lecturer": "Johan Galle ",
    "semester": "S5",
    "ects": 6,
    "colour": "pink"
  },
  {
    "module": "Knowledge and Workflow Management",
    "lecturer": "Gene Vangampelaere",
    "semester": "S5",
    "ects": 6,
    "colour": "pink"
  },
  {
    "module": "Enterprise Information Systems II",
    "lecturer": "Guy Van Eeckhout",
    "semester": "S5",
    "ects": 3,
    "colour": "green"
  },
  {
    "module": "International Communication",
    "lecturer": "Heidi Terryn",
    "semester": "S5",
    "ects": 6,
    "colour": "blue"
  },
  {
    "module": "Emergent Security Techniques",
    "lecturer": "Hendrik Derre",
    "semester": "S5",
    "ects": 6,
    "colour": "purple"
  },
  {
    "module": "Security Project",
    "lecturer": "Hendrik Derre",
    "semester": "S5",
    "ects": 6,
    "colour": "orange"
  },
  {
    "module": "Trending Topics in Software Development",
    "lecturer": "Olivier Sourie",
    "semester": "S5",
    "ects": 6,
    "colour": "green"
  },
  {
    "module": "IT Governance",
    "lecturer": "Stijn Van Hijfte",
    "semester": "S5",
    "ects": 6,
    "colour": "orange"
  },
  {
    "module": "Consultancy Project",
    "lecturer": "Thijs Martens",
    "semester": "S5",
    "ects": 6,
    "colour": "blue"
  },
  {
    "module": "Professional Networking",
    "lecturer": "Thomas Clauwaert",
    "semester": "S5",
    "ects": 9,
    "colour": "green"
  },
  {
    "module": "Datacenter Technology and Security",
    "lecturer": "Tijl Deneut",
    "semester": "S5",
    "ects": 6,
    "colour": "pink"
  },
  {
    "module": "Network and CCNA Security",
    "lecturer": "Tijl Deneut",
    "semester": "S5",
    "ects": 6,
    "colour": "orange"
  },
  {
    "module": "Bachelor Thesis",
    "lecturer": "Ann Audenaert",
    "semester": "S6",
    "ects": 6,
    "colour": "pink"
  },
  {
    "module": "Internship",
    "lecturer": "Kristien Roels ",
    "semester": "S6",
    "ects": 6,
    "colour": "purple"
  }
];