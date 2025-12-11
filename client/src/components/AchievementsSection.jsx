import { Trophy, Award, Target, TrendingUp, Star, Medal, Zap, Eye, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { LeetCodeHeatmap } from "./LeetCodeHeatmap";

const achievements = [
  {
    id: 1,
    title: "Meta HackerCup 2025",
    description: "Round 1: Ranked 808th Global | Round 2: Ranked 1572nd Global",
    icon: <Trophy className="h-6 w-6" />,
    color: "from-blue-500 to-cyan-600",
    highlights: ["808th Global (Round 1)", "1572nd Global (Round 2)"],
    certificateUrl: "/Aashcharya Gorakh (Aashcharya)'s certificate for Meta Hacker Cup - 2025.pdf"
  },
  {
    id: 3,
    title: "Flipkart GRID 7.0",
    description: "National Semi-Finalist - Top tier competitive performance",
    icon: <Medal className="h-6 w-6" />,
    color: "from-purple-500 to-pink-600",
    highlights: ["National Semi-Finalist", "Top Tier Performance"],
    certificateUrl: "/Flipkart_GRID_Aashcharya.pdf"
  },
  {
    id: 6,
    title: "Software Engineer Certificate",
    description: "HackerRank Verified - Problem solving, SQL, and REST API",
    icon: <BadgeCheck className="h-6 w-6" />,
    color: "from-green-500 to-emerald-600",
    highlights: ["HackerRank Verified", "Problem Solving", "SQL & REST API"],
    certificateUrl: "https://www.hackerrank.com/certificates/4213e5e6be07"
  },
  {
    id: 2,
    title: "LeetCode Weekly Contest 466",
    description: "Global Rank 49 out of 35,000+ participants",
    icon: <Award className="h-6 w-6" />,
    color: "from-amber-500 to-orange-600",
    highlights: ["Rank 49", "35,000+ participants"]
  },
  {
    id: 5,
    title: "Codeforces Round 1042",
    description: "Global rank of 469 among 41k+ participants",
    icon: <TrendingUp className="h-6 w-6" />,
    color: "from-indigo-500 to-purple-600",
    highlights: ["Rank 469", "41K+ participants"]
  },
  {
    id: 4,
    title: "JEE Advanced 2023",
    description: "Top 1.25% (Rank 15K) among 1.2M candidates",
    icon: <Star className="h-6 w-6" />,
    color: "from-emerald-500 to-teal-600",
    highlights: ["Top 1.25%", "15K Rank", "1.2M+ candidates"]
  }
];

export const AchievementsSection = () => {
  return (
    <section 
      id="achievements" 
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
            <Trophy className="h-4 w-4" />
            Trophy Case
          </motion.div>

          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Competitive Programming
            <span className="block text-primary">& Achievements</span>
          </motion.h2>

          <motion.p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Highlights from competitive programming contests and academic achievements demonstrating problem-solving excellence.
          </motion.p>
        </motion.div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-background border border-border rounded-2xl p-6 hover:shadow-xl transition-all duration-500 h-full flex flex-col">
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-r ${achievement.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <div className="text-white">
                    {achievement.icon}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {achievement.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 flex-1">
                  {achievement.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border mb-4">
                  {achievement.highlights.map((highlight, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-medium border border-primary/20"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>

                {/* Certificate Button */}
                {achievement.certificateUrl && (
                  <motion.a
                    href={achievement.certificateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all duration-300 group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Eye className="w-4 h-4 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium">View Certificate</span>
                  </motion.a>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* LeetCode Heatmap */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <LeetCodeHeatmap />
        </motion.div>

        {/* Stats Summary */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-primary/10 via-purple-600/10 to-pink-600/10 border border-primary/20 rounded-2xl p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary mb-1">1000+</div>
              <div className="text-sm text-muted-foreground">DSA Problems Solved</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">2011</div>
              <div className="text-sm text-muted-foreground">LeetCode Rating (Knight)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">1634</div>
              <div className="text-sm text-muted-foreground">Codeforces (Expert)</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-1">Top 2%</div>
              <div className="text-sm text-muted-foreground">Global LeetCode Rank</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

