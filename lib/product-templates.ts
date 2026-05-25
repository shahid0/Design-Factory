export interface ProductTemplate {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  category: string;
  components: string[];
}

export const PRODUCT_TEMPLATES: ProductTemplate[] = [
  {
    id: "saas-dashboard",
    name: "SaaS Analytics Dashboard",
    description: "A comprehensive data visualization dashboard with charting components, stat cards, and sidebar navigation.",
    imageUrl: "https://picsum.photos/seed/saasdt/800/600",
    category: "Dashboard",
    components: ["Data Grids", "Line Charts", "Metric Cards", "Sidebar", "Top Navbar"]
  },
  {
    id: "ecom-storefront",
    name: "Modern E-Commerce Storefront",
    description: "A conversion-optimized storefront featuring product grids, filtering sidebars, and an integrated shopping cart.",
    imageUrl: "https://picsum.photos/seed/ecomdt2/800/1000",
    category: "E-Commerce",
    components: ["Product Cards", "Cart Drawer", "Checkout Form", "Hero Banner", "Filter Sidebar"]
  },
  {
    id: "ai-prompt-interface",
    name: "AI Prompt Interface",
    description: "A conversational interface for interacting with LLMs, featuring chat bubbles, typing indicators, and prompt suggestions.",
    imageUrl: "https://picsum.photos/seed/aidt3/800/600",
    category: "AI Tools",
    components: ["Chat Window", "Input Field", "Typing Indicator", "Message Bubbles", "Suggestions Hub"]
  },
  {
    id: "fintech-wallet",
    name: "FinTech Digital Wallet",
    description: "A secure digital wallet interface showing balances, recent transactions, and quick transfer options.",
    imageUrl: "https://picsum.photos/seed/findt4/800/1100",
    category: "Finance",
    components: ["Balance Card", "Transaction List", "Action Buttons", "Sparkline Charts", "KYC Form"]
  },
  {
    id: "social-feed",
    name: "Social Media Feed",
    description: "A scrollable timeline of user posts, including media attachments, comments, likes, and a compose box.",
    imageUrl: "https://picsum.photos/seed/socdt5/800/1000",
    category: "Social",
    components: ["Post Card", "Comment Section", "Action Bar", "Compose Input", "User Avatar"]
  },
  {
    id: "kanban-board",
    name: "Kanban Task Manager",
    description: "A drag-and-drop task management board with customizable columns, task detail modals, and assignee tags.",
    imageUrl: "https://picsum.photos/seed/kandt6/800/600",
    category: "Productivity",
    components: ["Kanban Column", "Task Card", "Detail Modal", "Filters", "Team Avatars"]
  },
  {
    id: "healthcare-portal",
    name: "Patient Healthcare Portal",
    description: "A secure portal for patients to view medical records, schedule appointments, and message their doctors.",
    imageUrl: "https://picsum.photos/seed/headt7/800/800",
    category: "Health",
    components: ["Appointment Scheduler", "Medical History Table", "Secure Messaging", "Prescription List"]
  },
  {
    id: "real-estate-listings",
    name: "Real Estate Listings",
    description: "A property search interface featuring a map view, advanced filtering, and rich property detail galleries.",
    imageUrl: "https://picsum.photos/seed/estdt8/800/900",
    category: "Directory",
    components: ["Property Card", "Interactive Map", "Search Bar", "Image Gallery", "Contact Agent Form"]
  },
  {
    id: "crypto-exchange",
    name: "Crypto Trading Exchange",
    description: "A cryptocurrency trading platform with order books, candlestick charts, and portfolio overview.",
    imageUrl: "https://picsum.photos/seed/cryptodt9/800/1200",
    category: "Finance",
    components: ["Candlestick Chart", "Order Book", "Trade Execution Form", "Portfolio Summary", "Market Tickers"]
  },
  {
    id: "education-lms",
    name: "E-Learning Platform",
    description: "An educational hub featuring course catalogs, video lessons, progress tracking, and quizzes.",
    imageUrl: "https://picsum.photos/seed/lmsdt10/800/800",
    category: "Education",
    components: ["Course Card", "Video Player", "Progress Bar", "Quiz Module", "Curriculum Sidebar"]
  },
  {
    id: "travel-booking",
    name: "Travel Booking Agent",
    description: "A travel reservation system with flight searches, hotel filters, date pickers, and itinerary summaries.",
    imageUrl: "https://picsum.photos/seed/traveldt11/800/900",
    category: "Travel",
    components: ["Date Range Picker", "Search Form", "Flight Result Card", "Hotel Grid", "Itinerary Timeline"]
  },
  {
    id: "video-streaming",
    name: "Video Streaming Hub",
    description: "A media streaming application with featured hero banners, horizontal carousels, and a playback interface.",
    imageUrl: "https://picsum.photos/seed/videodt12/800/700",
    category: "Media",
    components: ["Hero Trailer", "Horizontal Carousel", "Media Thumbnail", "Playback Controls", "Episode List"]
  },
  {
    id: "developer-docs",
    name: "Developer API Reference",
    description: "Technical documentation site with code snippets, endpoint tables, and interactive API playgrounds.",
    imageUrl: "https://picsum.photos/seed/docsdt13/800/1000",
    category: "Development",
    components: ["Code Block", "Method Badge", "Endpoint Table", "Try-it Panel", "Navigation Tree"]
  },
  {
    id: "fitness-tracker",
    name: "Fitness Activity Tracker",
    description: "A health application tracking workout logs, activity rings, nutritional stats, and goal progress.",
    imageUrl: "https://picsum.photos/seed/fitdt14/800/900",
    category: "Health",
    components: ["Activity Rings", "Workout LogCard", "Nutrition Chart", "Goal Progress Ring", "Calendar View"]
  },
  {
    id: "food-delivery",
    name: "Food Delivery App",
    description: "A restaurant delivery tracker with category carousels, menu lists, and live delivery maps.",
    imageUrl: "https://picsum.photos/seed/fooddt15/800/1200",
    category: "E-Commerce",
    components: ["Restaurant Card", "Category Pills", "Menu Item Row", "Cart Summary", "Live Map Tracker"]
  },
  {
    id: "smart-home",
    name: "Smart Home Controller",
    description: "An IoT dashboard to control smart devices, view camera feeds, and manage room automation.",
    imageUrl: "https://picsum.photos/seed/homedt16/800/850",
    category: "Utility",
    components: ["Device Toggle Card", "Room Selector", "Camera Feed", "Temperature Dial", "Scene Shortcut"]
  },
  {
    id: "job-board",
    name: "Job Board Platform",
    description: "A career portal featuring job listings, company profiles, advanced filters, and application forms.",
    imageUrl: "https://picsum.photos/seed/jobdt17/800/1050",
    category: "Directory",
    components: ["Job Posting Card", "Filter Sidebar", "Company Profile", "Application Modal", "Salary Range Slider"]
  },
  {
    id: "crm-platform",
    name: "CRM Management",
    description: "Customer relationship manager managing sales pipelines, contact details, and interaction logs.",
    imageUrl: "https://picsum.photos/seed/crmdt18/800/800",
    category: "Dashboard",
    components: ["Pipeline Board", "Contact Table", "Activity Timeline", "Lead Scoring", "Task List"]
  },
  {
    id: "podcast-player",
    name: "Podcast Player",
    description: "An audio streaming interface with episode lists, playback controls, show artwork, and transcripts.",
    imageUrl: "https://picsum.photos/seed/poddt19/800/950",
    category: "Media",
    components: ["Now Playing Bar", "Episode Row", "Show Artwork", "Playback Controls", "Transcript View"]
  },
  {
    id: "photo-sharing",
    name: "Photo Sharing Gallery",
    description: "A visually rich photo network highlighting high-res masonry grids, image metadata, and likes.",
    imageUrl: "https://picsum.photos/seed/photodt20/800/1100",
    category: "Social",
    components: ["Masonry Grid", "Image Detail Modal", "Exif Data Panel", "Like Button", "Comment Feed"]
  },
  {
    id: "task-tracker-pro",
    name: "Gamified RPG Task Tracker",
    description: "An innovative personal task manager that formats your direct productivity goals into an RPG-style quest catalog.",
    imageUrl: "https://picsum.photos/seed/tasktrackpro/800/600",
    category: "Productivity",
    components: ["Quest Log", "XP & Gold Tracker", "Stat Sheet", "Boss Battle Panel", "Guild Chat"]
  },
  {
    id: "weather-station",
    name: "Advanced Weather Station",
    description: "A gorgeous, high-fidelity meteorological tracker rendering current air quality, radar outputs, and detailed forecast curves.",
    imageUrl: "https://picsum.photos/seed/weatherstation/800/700",
    category: "Utility",
    components: ["Radar Map Overlay", "Forecast Carousel", "Hourly Trend Canvas", "Climate Alerts Hub", "UV Index Dial"]
  },
  {
    id: "portfolio-art",
    name: "Creative Bento Portfolio",
    description: "A modern design-focused gallery using structured grids and slides to present high-contrast creative portfolios.",
    imageUrl: "https://picsum.photos/seed/portart/800/900",
    category: "Creative",
    components: ["Interactive Slideshow", "Project Bento Grid", "Interactive Timeline", "Contact Portal", "Skills Matrix"]
  },
  {
    id: "collab-whiteboard",
    name: "Interactive Team Whiteboard",
    description: "An infinite collaboration canvas enabling dynamic visual diagramming, sticky note organizing, and vector annotations.",
    imageUrl: "https://picsum.photos/seed/collabwb/800/800",
    category: "Collaboration",
    components: ["Infinite Canvas", "Drawing Toolbar", "Live Cursor Engine", "Sticky Notes Deck", "Export & Save Bar"]
  },
  {
    id: "car-rental",
    name: "Elite Vehicle Marketplace",
    description: "An e-commerce landing experience optimized for exploring fleet selections, estimating dynamic rates, and secure bookings.",
    imageUrl: "https://picsum.photos/seed/carrent/800/950",
    category: "E-Commerce",
    components: ["Car Fleet Catalog", "Search Filter Widget", "Booking Calendar", "Dynamic Rate Estimator", "Reviews Feed"]
  },
  {
    id: "nft-marketplace",
    name: "Decentralized NFT Auction Hub",
    description: "A specialized Web3 platform showing active bids, floor pricing, trending collections, and smart wallet connections.",
    imageUrl: "https://picsum.photos/seed/nftmkt/800/1100",
    category: "Finance",
    components: ["Active Bidding Panel", "Hot Drop Carousel", "Creator Showcase", "Transaction Ledger", "Wallet Connection"]
  },
  {
    id: "recipe-hub",
    name: "The Culinary Masterclass Builder",
    description: "A comprehensive recipe engine facilitating ingredient scaling, step-by-step masterclasses, and cooking timers.",
    imageUrl: "https://picsum.photos/seed/recipehub/800/1000",
    category: "Lifestyle",
    components: ["Step Stepper Guide", "Ingredient Scaling Tool", "Concurrent Timers", "Global Recipe Search", "Meal Planner Grid"]
  },
  {
    id: "music-synth",
    name: "Modular Polyphonic Synthesizer",
    description: "An interactive browser-based synthesizer showcasing visual audio nodes, envelope controls, and step sequencers.",
    imageUrl: "https://picsum.photos/seed/mussynth/800/850",
    category: "Creative",
    components: ["Virtual Keyboard", "Envelope Editor ADSR", "OSC Control Panel", "High-Pass Filter Knobs", "Spectral Audio Visualizer"]
  },
  {
    id: "customer-support",
    name: "Omnichannel Support Console",
    description: "A high-efficiency enterprise queue displaying support tier tickets, agent status rings, and predefined SLA alerts.",
    imageUrl: "https://picsum.photos/seed/custsupport/800/900",
    category: "Utility",
    components: ["Active Tickets Queue", "Omni-chat History Hub", "Predefined Actions Deck", "SLA Status Indicators", "User Insights Card"]
  },
  {
    id: "wiki-knowledge",
    name: "Intelligent Corporate Wiki",
    description: "A document-driven knowledge base designed with interactive editing, category drawers, and nested directories.",
    imageUrl: "https://picsum.photos/seed/wikidoc/800/1000",
    category: "Productivity",
    components: ["Markdown Document Editor", "Directory Tree Drawer", "Intelligent Search Bar", "Revision Log Table", "Table of Contents"]
  },
  {
    id: "analytics-marketing",
    name: "Marketing Performance Funnel",
    description: "An intuitive dashboard reporting ROI metrics, marketing drop-off conversions, and active programmatic bids.",
    imageUrl: "https://picsum.photos/seed/analmark/800/950",
    category: "Dashboard",
    components: ["Funnel Optimization Chart", "Campaign Status Table", "Geographic Multi-Heatmap", "Budget Dial Gauge", "Campaign Manager"]
  },
  {
    id: "fitness-wearable",
    name: "Wearable Device Synclog",
    description: "A modern biometric log dashboard linking activity rings, sleep analytics, and realtime heart monitoring telemetry.",
    imageUrl: "https://picsum.photos/seed/fitwear/800/1100",
    category: "Health",
    components: ["Weekly Sleep Quality Analysis", "Dynamic Step Tracker", "Electrocardiogram Chart", "Chronological Sync Log", "Wearable Device Hub"]
  },
  {
    id: "mindfulness-app",
    name: "Aura Breath & Meditation Guide",
    description: "A tranquil meditation suite focusing on audio visual loops, diaphragmatic pacing curves, and progress streaks.",
    imageUrl: "https://picsum.photos/seed/mindful/800/800",
    category: "Health",
    components: ["Breathing Pacer Loop", "Ambient Audio Mixer", "Daily Streak Counter", "Meditation Library Grid", "Reflection Diary Card"]
  },
  {
    id: "event-planner",
    name: "Dynamic Event Logistics Tracker",
    description: "An interactive event organization system enabling timeline builders, drag-and-drop seating maps, and RSVP polling.",
    imageUrl: "https://picsum.photos/seed/evtplan/800/1000",
    category: "Collaboration",
    components: ["Schedule Drag Timeline", "Seating Map Planner", "RSVP RSVP Cards", "Group Decision Polls", "Budget Ledger"]
  },
  {
    id: "delivery-fleet",
    name: "Fleet Dynamics & Routes Tracker",
    description: "An analytical dashboard targeting route path simulations, delivery vehicle logs, and status notifications.",
    imageUrl: "https://picsum.photos/seed/deliveryflt/800/900",
    category: "Utility",
    components: ["Route Map Simulator", "Delivery Fleet Log", "Operational Status Cards", "Route Multi-line chart", "Notification Desk"]
  },
  {
    id: "email-client",
    name: "Pro Developer Webmail",
    description: "A fast, clean webmail inbox emphasizing multi-pane views, label nesting, and markdown compositions.",
    imageUrl: "https://picsum.photos/seed/emailcl/800/1050",
    category: "Social",
    components: ["Inbox Mail Feed", "Email Viewer Page", "WYSIWYG Composer", "Virtual Label Drawer", "Quick Tags Panel"]
  },
  {
    id: "realtime-survey",
    name: "Live Audience Feedback Poll",
    description: "A dynamic polling app displaying voters lists, interactive answers logs, and updating charts.",
    imageUrl: "https://picsum.photos/seed/rtsurv/800/850",
    category: "AI Tools",
    components: ["Question Display Card", "Live Results Bar Chart", "Poll Creator Form", "Analytics Stat Grid", "Countdown Tracker"]
  },
  {
    id: "expense-splitter",
    name: "Peer-to-Peer Expense Splitter",
    description: "A clear group ledger indicating bill subdivisions, balance lists, and optimized transaction settlements.",
    imageUrl: "https://picsum.photos/seed/expsplit/800/900",
    category: "Finance",
    components: ["Balance Overview Grid", "Shared Expenses Table", "Subdivision Modal", "Settlement Optimization Core", "Activity Updates List"]
  },
  {
    id: "recipe-delivery",
    name: "Gourmet Fresh Kit Marketplace",
    description: "A subscription delivery service storefront showing gourmet weekly menus, tier sliders, and delivery schedules.",
    imageUrl: "https://picsum.photos/seed/recipdeliv/800/1200",
    category: "E-Commerce",
    components: ["Weekly Menu Grid", "Subscription Tier Toggles", "Special Request Sliders", "Detailed Recipe Modal", "Estimated Delivery Card"]
  },
  {
    id: "gaming-hub",
    name: "Arena Esports Tournament Board",
    description: "A premium esports gaming hub reporting tournament brackets, active matches, and player ranking tables.",
    imageUrl: "https://picsum.photos/seed/gaminghub/800/950",
    category: "Social",
    components: ["Dynamic Brackets Organizer", "Match Status Overview", "Prize Pool Bar Grid", "Global Leaderboard", "Live Stream Chat Feed"]
  },
  {
    id: "translation-ai",
    name: "AI Polyglot Translator API",
    description: "A multi-input language translation tool featuring speech log capture, histories lists, and dialect comboboxes.",
    imageUrl: "https://picsum.photos/seed/transai/800/1100",
    category: "AI Tools",
    components: ["Input Dialect Panel", "Output Translation Card", "Speech Input Bar", "Language Selector Combobox", "Translation History Library"]
  },
  {
    id: "analytics-seo",
    name: "Organic Search SEO Audit",
    description: "An optimization suite providing key search metrics, competitor rankings, backlink histories, and organic audits.",
    imageUrl: "https://picsum.photos/seed/seoanal/800/900",
    category: "Dashboard",
    components: ["Audience Metrics Dashboard", "Target Keywords Rankings", "Backlink Growth Graph", "Technical Audit Checklist", "URL Index Checker"]
  },
  {
    id: "music-playlist",
    name: "Ambient Audio Streaming Desk",
    description: "A beautiful music catalog showing curated genre channels, dynamic waves visualizers, and interactive players.",
    imageUrl: "https://picsum.photos/seed/musplaylist/800/1050",
    category: "Media",
    components: ["Tracks Directory Grid", "Audio Control Deck", "Curated Category Tiles", "Volume Slider Control", "Fidelity Equalizer Canvas"]
  },
  {
    id: "portfolio-developer",
    name: "Developer Case Studio",
    description: "An elite engineering portfolio pairing rich case studies, an interactive terminal sandbox, a code playground, and visual technology clusters.",
    imageUrl: "https://picsum.photos/seed/portdev/800/900",
    category: "Creative",
    components: ["Interactive Terminal", "Case Study Cards", "Interactive Sandbox", "Tech Stack Clusters", "Contact Portal"]
  },
  {
    id: "portfolio-architect",
    name: "Architect's Spatial Gallery",
    description: "A gorgeous, immersive layout for spatial designers featuring full-bleed image galleries, interactive blueprint viewer, and raw material palettes.",
    imageUrl: "https://picsum.photos/seed/portarch/800/1000",
    category: "Creative",
    components: ["Full-bleed Slider", "Material Palette Cards", "Project Timeline Tracker", "Blueprint Drawer Viewer", "Client Log Deck"]
  },
  {
    id: "portfolio-illustrator",
    name: "Illustrator's Sketchbook Grid",
    description: "A whimsical, grid-focused showcase displaying digital artwork reels, drawing step timelines, custom merchandise stores, and brand collaborations.",
    imageUrl: "https://picsum.photos/seed/portillus/800/850",
    category: "Creative",
    components: ["Visual Artwork Reel", "Step Timelines", "Storefront Shelf", "Swatch Tool Selection", "Brand Partner Grid"]
  },
  {
    id: "portfolio-product",
    name: "UX/UI Narratives Portfolio",
    description: "A structure-driven UX/UI showcase specializing in narrative-rich case studies, flowcharts, metric stats widgets, and before-after comparisons.",
    imageUrl: "https://picsum.photos/seed/portprod/800/950",
    category: "Creative",
    components: ["Case Narrative Steps", "Flowchart Diagram Tool", "Metrics Stat Badges", "Interactive Comparisons Slider", "Testimonial Reels"]
  },
  {
    id: "portfolio-photography",
    name: "Photographer's Exposure Deck",
    description: "A premium dark-mode photography landing highlighting full-frame photo slide loops, lens catalogs, real-time EXIF details, and booking schedulers.",
    imageUrl: "https://picsum.photos/seed/portphoto/800/1100",
    category: "Creative",
    components: ["Interactive Photo Slide", "Camera Lenses Grid", "EXIF Data Popups", "Interactive Calendar Booking", "Photo Category Filters"]
  },
  {
    id: "portfolio-editorial",
    name: "Editorial & Fashion Lookbook",
    description: "An elegant, typography-first showcase with magazine spreads, vertical scrolling text containers, design process logs, and media press shelves.",
    imageUrl: "https://picsum.photos/seed/portedit/800/1150",
    category: "Creative",
    components: ["Typography Spreads Table", "Dynamic Grid Reels", "Creative Process Diaries", "Media Mentions Press", "Interactive Inquiry Form"]
  },
  {
    id: "portfolio-brutalist",
    name: "Experimental Brutalist Canvas",
    description: "A brave, design-breaking showcase displaying interactive sandbox items, custom neon theme toggles, cursor responsive grids, and visual audio waveforms.",
    imageUrl: "https://picsum.photos/seed/portbrut/800/800",
    category: "Creative",
    components: ["Interactive Vector Sandbox", "Brutalist Grid Layout", "Color Theme Presets", "Equalizer Audio Player", "Curated Activity Feeds"]
  },
  {
    id: "portfolio-fullstack-master",
    name: "Multi-Stack Polyglot Portfolio",
    description: "An engineered showcase designed for developers mastering multiple backends and frontends, featuring active service dashboards, live API response mockups, system architecture graphs, and repo activity networks.",
    imageUrl: "https://picsum.photos/seed/polyglot/800/900",
    category: "Creative",
    components: ["Architecture Planner", "Live Code Shell", "Stack Swapper Controls", "API Playground Console", "Repo Heatmap Grid"]
  },
  {
    id: "portfolio-indie-hacker",
    name: "Indie Hacker Ship Deck",
    description: "A multi-product launcher for developers who build, design, and market their own SaaS tools. It spotlights revenue tickers, active user graphs, feature launch roadmaps, and side-project links.",
    imageUrl: "https://picsum.photos/seed/indiehack/800/1000",
    category: "Productivity",
    components: ["Active Product Grid", "Live MRR Tickers", "Build Logs Timeline", "Feature Voting Board", "Mailing List Form"]
  },
  {
    id: "portfolio-polymath-generalist",
    name: "Multi-Disciplinary Polymath Studio",
    description: "A customized workspace for creators who wear all the hats—code, design, writing, and strategy. Includes dynamic bento boxes for different roles, medium toggles, and unified projects charts.",
    imageUrl: "https://picsum.photos/seed/polymath/800/850",
    category: "Creative",
    components: ["Multi-Discipline Bento", "Unified Timeline", "Role Swapper Widget", "Art & Code Showcase", "Philosophy Deck"]
  },
  {
    id: "portfolio-fractional-cto",
    name: "Fractional CTO Strategy Hub",
    description: "A professional landing for elite engineers consulting for multiple startups, presenting system architecture logs, system audits checklists, advisory modules, and slot bookers.",
    imageUrl: "https://picsum.photos/seed/fractcto/800/900",
    category: "Directory",
    components: ["SaaS Audit Checklists", "System Infrastructure Maps", "Client Success Rails", "Interactive Calendar Booking", "Consulting Tier Selector"]
  },
  {
    id: "portfolio-designer-who-codes",
    name: "Designer-Who-Codes Lab",
    description: "A highly tactile portfolio celebrating both visual precision and programmatic excellence, with interactive CSS animation sandboxes, high-fidelity layouts, and live Tailwind code editors.",
    imageUrl: "https://picsum.photos/seed/designercode/800/950",
    category: "Creative",
    components: ["CSS Sandbox Playground", "Before-After Compare Tool", "Layout Spacing Grid", "Framer Motion Timeline", "Interactive Color Generator"]
  },
  {
    id: "portfolio-data-scientist",
    name: "Data Scientist ML Notebook",
    description: "An analytical workspace for data scientists and ML engineers, showing live Python sandbox previews, model weights visualizers, training charts, and research cards.",
    imageUrl: "https://picsum.photos/seed/datascientist/800/1100",
    category: "Dashboard",
    components: ["ML Training Loss Charts", "Model Spec Nodes", "Jupiter Style Snippets", "Data Source Tables", "Dataset Downloader Block"]
  },
  {
    id: "portfolio-web3-architect",
    name: "Web3 Systems Developer Hub",
    description: "An advanced dashboard for smart contract engineers, highlighting audited smart contract trees, live gas price trackers, network state indicators, and multi-chain stats panels.",
    imageUrl: "https://picsum.photos/seed/web3arch/800/1200",
    category: "Finance",
    components: ["Gas Estimator Gadget", "Smart Contract Auditor", "ABI Interaction Console", "Transaction Status Logs", "Chain Selector Dropdown"]
  },
  {
    id: "portfolio-creative-technologist",
    name: "Creative Technologist Lab",
    description: "An expressive digital home for interactive installers, featuring WebGL shader preview controls, MIDI node connectors, raw physical computing schema, and generative art slots.",
    imageUrl: "https://picsum.photos/seed/creative-tech/800/700",
    category: "Creative",
    components: ["Interactive WebGL Shader", "Hardware Diagram Hub", "Generative Canvas Grid", "Interactive Tone Synthesizer", "Project Showcase Reel"]
  },
  {
    id: "portfolio-technical-writer",
    name: "Technical Writer Docs Portal",
    description: "A reading-optimized portfolio presenting beautifully formatted guide pages, system API references, interactive tutorial books, and translation status matrices.",
    imageUrl: "https://picsum.photos/seed/techwriter/800/800",
    category: "Education",
    components: ["Developer Guide Reader", "Interactive API Playground", "Language Translate Checklist", "Reading Progress Tracker", "Contact Inquire Form"]
  },
  {
    id: "portfolio-community-architect",
    name: "Community Architect Hub",
    description: "A portfolio for developer advocates, open-source maintainers, and community engineers showing event schedules, meetup logs, contributor charts, and feedback hubs.",
    imageUrl: "https://picsum.photos/seed/commarch/800/1000",
    category: "Social",
    components: ["Contributor Leaderboard", "Upcoming Event Timeline", "Meetup Event Card", "Feedback Question Pool", "Resource Download Drawer"]
  }
];
