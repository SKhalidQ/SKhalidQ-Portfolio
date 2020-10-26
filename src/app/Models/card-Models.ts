interface CardData {
  icon: string;
  title: string;
  subtitle: string;
  image: string;
  description: string;
  website: boolean;
  websiteURL: string;
  publicRepo: boolean;
  githubURL: string;
}

export const Projects: CardData[] = [
  {
    icon: "list",
    title: "MyList",
    subtitle: "Personal Project",
    image: "../../assets/Images/MyListPreview.png",
    description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan." + 
    " A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
    website: true,
    websiteURL: "NotFound",
    publicRepo: true,
    githubURL: "https://github.com/DarkCreature97/AnimeList",
  },
  {
    icon: "sports_bar",
    title: "Beer Bottle Inventory System App",
    subtitle: "Honours Stage Project",
    image: "../../assets/Images/BBISAPreview.png",
    description: "Final year project built using Angular CLI and ASP.NET Core. It allows users to track" + 
    " a beer bottle inventory by adding their details. The user can log orders and history of the sales " + 
    "which impact the stock amount of a product.",
    website: true,
    websiteURL: "https://bbis.skhalidq.dev/Home",
    publicRepo: false,
    githubURL: "",
  },
  {
    icon: "code",
    title: "API and Client Development",
    subtitle: "Distributed Systems Programming - 3rd year module",
    image: "../../assets/Images/DistributedPreview.png",
    description: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan." + 
    " A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
    website: false,
    websiteURL: "",
    publicRepo: false,
    githubURL: "",
  },
  {
    icon: "extension",
    title: "Jumble",
    subtitle: "Mobile Development and Devices - 3rd Year Module",
    image: "../../assets/Images/JumblePreview.png",
    description: "A mobile app game built using Android Studio (Java) which allows the user to complete a list of images" + 
    " available on the internet. The player has to finish the puzzle with the last amount of moves and can store their score to share with other players.",
    website: false,
    websiteURL: "",
    publicRepo: false,
    githubURL: "",
  },
  {
    icon: "analytics",
    title: "Data Mining",
    subtitle: "Data Mining and Decision Systems - 3rd Year Module",
    image: "../../assets/Images/DataMiningPreview.png",
    description: "This Data Mining project analyses a medical history dataset to predict how patients are more at risk depending on their deseases." + 
    " Built using Python and Jupyter Notebook",
    website: false,
    websiteURL: "",
    publicRepo: false,
    githubURL: "",
  },
  {
    icon: "router",
    title: "Networking and UID",
    subtitle: "Networking and User Interface Design - 2nd Year Module",
    image: "../../assets/Images/NetworkingPreview.png",
    description: "A client and server developed using C# and WPF, which sends requests to the server with different" + 
    " HTTP Protocols inclussing \"Whois\".",
    website: false,
    websiteURL: "",
    publicRepo: false,
    githubURL: "",
  },
  {
    icon: "place",
    title: "Web Location Interface Design",
    subtitle: "Information Systems and Web Technologies - 2nd Year Module",
    image: "../../assets/Images/WebTechPreview.png",
    description: "A webite built using HTML, CSS and PHP which allows tracking a student or staff' location by storing all the data in a SQL Database.",
    website: false,
    websiteURL: "",
    publicRepo: false,
    githubURL: "",
  },
  {
    icon: "insert_comment",
    title: "Agent Chatbot",
    subtitle: "Artificial Intelligence - 2nd Year Module",
    image: "../../assets/Images/AIPreview.png",
    description: "A simple chatbot built using SWI Prilog which responds with a recommendation depending on the input.",
    website: false,
    websiteURL: "",
    publicRepo: false,
    githubURL: "",
  },
];
  