import { Calendar, TrendingUp, Activity, ExternalLink, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export const LeetCodeHeatmap = () => {
  const [heatmapLoading, setHeatmapLoading] = useState(true);
  const [refreshKey, setRefreshKey] = useState(0);
  const leetcodeUsername = "aashcharya";
  const leetcodeUrl = `https://leetcode.com/u/${leetcodeUsername}/`;

  // Generate heatmap URL with instant updates (no cache)
  // Using timestamp for cache-busting to ensure fresh data every time
  const getHeatmapUrl = () => {
    const timestamp = Date.now(); // Current timestamp for instant cache-busting
    // Cache set to 0 for instant updates, or remove cache parameter entirely
    // Adding timestamp ensures browser fetches fresh image every time
    return `https://leetcard.jacoblin.cool/${leetcodeUsername}?ext=heatmap&theme=dark&cache=0&border=0&font=inter&disable_animations=false&t=${timestamp}`;
  };

  const handleRefresh = () => {
    setHeatmapLoading(true);
    setRefreshKey(prev => prev + 1); // Force re-render with new timestamp
    // Loading will be set to false when image loads via onLoad handler
  };

  useEffect(() => {
    // Simulate loading time for smooth transition
    const timer = setTimeout(() => {
      setHeatmapLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [refreshKey]);

  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      viewport={{ once: true }}
    >
      <div className="bg-background border border-border rounded-2xl p-6 sm:p-8 hover:shadow-xl transition-all duration-500">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-gradient-to-r from-amber-500 to-orange-600">
              <Calendar className="h-5 w-5 text-white" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
                LeetCode Submission Activity
                <span className="text-xs sm:text-sm font-normal text-muted-foreground flex items-center gap-1">
                  <RefreshCw className="h-3 w-3" />
                  Real-time Updates
                </span>
              </h3> 
            </div>
          </div>
          <div className="flex items-center gap-3">
            <motion.button
              onClick={handleRefresh}
              disabled={heatmapLoading}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all duration-300 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed"
              whileHover={{ scale: heatmapLoading ? 1 : 1.05 }}
              whileTap={{ scale: heatmapLoading ? 1 : 0.95 }}
            >
              <RefreshCw className={`h-4 w-4 ${heatmapLoading ? 'animate-spin' : ''}`} />
              <span className="text-sm font-medium">Refresh</span>
            </motion.button>
            <motion.a
              href={leetcodeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary border border-primary/20 transition-all duration-300 whitespace-nowrap"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-sm font-medium">View Profile</span>
              <ExternalLink className="h-4 w-4" />
            </motion.a>
          </div>
        </div>

        {/* Heatmap Container */}
        <div className="relative bg-secondary/30 rounded-xl p-4 sm:p-6 border border-border/50 overflow-hidden">
          {heatmapLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm z-10">
              <div className="flex flex-col items-center gap-3">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                >
                  <Activity className="h-6 w-6 text-primary" />
                </motion.div>
                <p className="text-sm text-muted-foreground">Loading heatmap...</p>
              </div>
            </div>
          )}

          {/* Heatmap Image */}
          <div className="relative w-full overflow-hidden rounded-lg">
            <motion.img
              key={refreshKey}
              src={getHeatmapUrl()}
              alt="LeetCode Submission Heatmap"
              className="w-full h-auto rounded-lg"
              onLoad={() => setHeatmapLoading(false)}
              onError={() => setHeatmapLoading(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: heatmapLoading ? 0 : 1 }}
              transition={{ duration: 0.5 }}
              style={{
                filter: 'brightness(1.05) contrast(1.05)',
              }}
            />
          </div>
 
           
        </div>
      </div>
    </motion.div>
  );
};

