import { ExternalLink, Code, TrendingUp, BookOpen } from "lucide-react";
import { motion } from "framer-motion";

const profiles = [
  {
    id: 1,
    name: "LeetCode",
    username: "aashcharya",
    url: "https://leetcode.com/u/aashcharya/",
    description: "Top 3% Global | Knight (1964 Rating) | DSA",
    icon: "leetcode",
    color: "from-amber-500 to-orange-600",
    stats: ["1964 Rating", "Top 3% Global", "Problem Solving", "Knight"]
  },
  {
    id: 2,
    name: "Codeforces",
    username: "aashcharyagorakh",
    url: "https://codeforces.com/profile/aashcharyagorakh",
    description: "Specialist | Max Rating 1546 | Competitive Programming",
    icon: "codeforces",
    color: "from-blue-500 to-cyan-600",
    stats: ["1546 Rating", "Specialist", "Competitive Programming"]
  },
  {
    id: 3,
    name: "GeeksforGeeks",
    username: "aashcharya10",
    url: "https://www.geeksforgeeks.org/profile/aashcharya10",
    description: "Problem Solving & Algorithm Practice",
    icon: "gfg",
    color: "from-green-500 to-emerald-600",
    stats: ["800+ Problems", "DSA Practice", "Algorithm Solutions"]
  }
];

// Logo/Icon components for each platform
const PlatformIcon = ({ platform, className }) => {
  const baseClasses = className || "w-8 h-8";
  
  if (platform === "leetcode") {
    // LeetCode Logo - L symbol with fire icon
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={baseClasses}>
        <path d="M16.102 17.93l-2.697 2.607c-.466.467-1.111.662-1.823.662s-1.357-.195-1.824-.662l-4.332-4.363c-.467-.467-.702-1.15-.702-1.863s.235-1.357.702-1.824l4.319-4.38c.467-.467 1.125-.645 1.837-.645s.357.195.824.662l2.697 2.606c.514.515 1.365.497 1.9-.038.535-.536.553-1.387.039-1.901l-2.609-2.636a5.055 5.055 0 0 0-2.445-1.337l2.467-2.503c.516-.514.498-1.366-.037-1.901-.535-.535-1.387-.553-1.902-.039l-10.1 10.101c-.981.982-1.494 2.337-1.494 3.835 0 1.498.513 2.895 1.494 3.875l4.347 4.361c.982.979 2.337 1.452 3.834 1.452s2.853-.512 3.835-1.494l2.609-2.637c.514-.514.496-1.365-.039-1.9s-1.386-.553-1.899-.039zm4.709-4.92H10.666c-.702 0-1.27.604-1.27 1.346s.568 1.346 1.27 1.346h10.145c.701 0 1.27-.604 1.27-1.346s-.569-1.346-1.27-1.346z"/>
      </svg>
    );
  }
  
  if (platform === "codeforces") {
    // Codeforces Logo - Three vertical bars
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={baseClasses}>
        <rect x="0" y="6" width="6" height="15" rx="1.5"/>
        <rect x="9" y="3" width="6" height="18" rx="1.5"/>
        <rect x="18" y="9" width="6" height="12" rx="1.5"/>
      </svg>
    );
  }
  
  if (platform === "gfg") {
    // GeeksforGeeks Logo - Code brackets with G
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={baseClasses}>
        <path d="M8.5 11l-4-4 4-4 1.5 1.5L7.83 6H19v2H7.83l2.17 2.17L8.5 11zm7 2l-1.5-1.5L16.17 16H5v-2h11.17L14 13.17 15.5 11l4 4-4 4z"/>
        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 9.5c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v5c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-5z" fill="currentColor"/>
      </svg>
    );
  }
  
  return <Code className={baseClasses} />;
};

export const ProfilesSection = () => {
  return (
    <section 
      id="profiles" 
      className="relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-background via-background to-primary/5"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:80px_80px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,black,transparent)]" />
        </div>
        <motion.div 
          className="absolute top-20 right-10 w-72 h-72 rounded-full bg-gradient-to-r from-primary/10 to-purple-600/10 blur-[100px]" 
          animate={{ x: [0, 30, 0], y: [0, -30, 0], scale: [1, 1.1, 1] }} 
          transition={{ duration: 15, repeat: Infinity }} 
        />
        <motion.div 
          className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-gradient-to-r from-cyan-400/10 to-emerald-500/10 blur-[100px]" 
          animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.2, 1] }} 
          transition={{ duration: 20, repeat: Infinity, delay: 2 }} 
        />
      </div>

      <div className="container mx-auto max-w-6xl relative">
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            <ExternalLink className="h-4 w-4" />
            Online Profiles
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Coding Profiles
            <span className="block text-primary">& Links</span>
          </motion.h2>

          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Connect with me on competitive programming platforms and explore my problem-solving journey.
          </motion.p>
        </motion.div>

        {/* Profiles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, index) => (
            <motion.a
              key={profile.id}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-background border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-500 h-full flex flex-col hover:border-primary/50">
                {/* Icon */}
                <div className={`inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-r ${profile.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    <PlatformIcon platform={profile.icon} />
                  </div>
                </div>

                {/* Content */}
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {profile.name}
                  </h3>
                </div>
                
                <p className="text-sm text-muted-foreground mb-4 font-mono">
                  @{profile.username}
                </p>
                
                <p className="text-muted-foreground mb-4 flex-1 text-sm">
                  {profile.description}
                </p>

                {/* Stats */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
                  {profile.stats.map((stat, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                    >
                      {stat}
                    </span>
                  ))}
                </div>

                {/* External Link Icon */}
                <div className="mt-4 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  <span>Visit Profile</span>
                  <ExternalLink className="h-4 w-4" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

