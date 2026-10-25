import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, MapPin, Play, Sparkles, ArrowUpRight } from 'lucide-react';
import { InstagramIcon } from './Icons';

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const galleryItems = [
    {
      id: 1,
      school: "City Public School",
      location: "Pratapgarh, Uttar Pradesh",
      date: "Dec 09, 2025",
      type: "reels",
      category: "pratapgarh",
      title: "Smartwatch & Cash Award Ceremony",
      studentName: "Prize Distribution Meet",
      description: "Students felicitated on stage with Smartwatches, Cash awards, and Excellence Medals before school directors.",
      instaUrl: "https://www.instagram.com/raytalenthuntolympiad/p/DSCZUEaE5sO/",
      tags: ["#raytalenthuntolympiad", "#citypublicschool", "#scholarship"]
    },
    {
      id: 2,
      school: "St. Joseph's Convent School",
      location: "Varanasi, Uttar Pradesh",
      date: "Annual Session Event",
      type: "photo",
      category: "varanasi",
      title: "Medal & Certificate Assembly Honors",
      studentName: "Class Champions",
      description: "Merit certificates and Gold/Silver Medals conferred upon top scoring students across primary and secondary wings.",
      instaUrl: "https://www.instagram.com/raytalenthuntolympiad/",
      tags: ["#varanasi", "#stjosephsconvent", "#excellence"]
    },
    {
      id: 3,
      school: "Savitri Convent High School",
      location: "Jaunpur, Uttar Pradesh",
      date: "Recognition Day",
      type: "reels",
      category: "jaunpur",
      title: "Zonal & District Toppers Felicitation",
      studentName: "Zonal Achievers",
      description: "High scorers honored with mementos and scholarship certificates in a ceremonial school event.",
      instaUrl: "https://www.instagram.com/raytalenthuntolympiad/",
      tags: ["#jaunpur", "#savitriconvent", "#olympiad"]
    },
    {
      id: 4,
      school: "Lourdes Mary Junior High School",
      location: "Pratapgarh, Uttar Pradesh",
      date: "SPR & Medal Handover",
      type: "photo",
      category: "pratapgarh",
      title: "Class Champion Medals & SPR Distribution",
      studentName: "Junior Winners",
      description: "Handover of diagnostic Student Performance Reports (SPR) and medals to junior achievers.",
      instaUrl: "https://www.instagram.com/raytalenthuntolympiad/",
      tags: ["#pratapgarh", "#lourdesmary", "#achievement"]
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header (Inspired by "100k+ Happy Learner" in SkillNest) */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-xs font-bold uppercase tracking-wider mb-4 animate-float">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Real Student Stories & On-Ground Pride</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-4">
            10,000+ PROUD <br />
            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent">
              PARTICIPANTS & TOPPERS!
            </span>
          </h2>

          <p className="text-cyan-100/80 text-sm sm:text-base mb-6">
            Over 100+ schools across Uttar Pradesh and India trust Ray Talent Hunt Olympiad to inspire academic confidence and recognize excellence right in school assemblies.
          </p>

          <a
            href="https://www.instagram.com/raytalenthuntolympiad/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-trendy inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-sky-500/40"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Explore Instagram Ceremony Reels</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filter Pill Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {[
            { label: 'All Schools', value: 'all' },
            { label: 'Pratapgarh, UP', value: 'pratapgarh' },
            { label: 'Varanasi, UP', value: 'varanasi' },
            { label: 'Jaunpur, UP', value: 'jaunpur' }
          ].map(tab => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`btn-trendy px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold cursor-pointer transition-all ${
                filter === tab.value
                  ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-xl shadow-sky-500/40 border border-white/40 scale-105'
                  : 'bg-slate-900/60 backdrop-blur-md text-slate-300 hover:text-white border border-white/15'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 4-Card Icy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="glass-card p-6 sm:p-8 rounded-[36px] flex flex-col justify-between group"
            >
              <div>
                {/* Meta */}
                <div className="flex items-center justify-between text-xs text-cyan-200/80 pb-4 mb-4 border-b border-white/10">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Simulated Reel Card Frame */}
                <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-sky-950 border border-white/20 overflow-hidden flex flex-col items-center justify-center p-6 text-center mb-6 group-hover:border-cyan-400/50 transition-colors">
                  <div className="w-14 h-14 rounded-2xl bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-cyan-400 group-hover:text-slate-950 text-white transition-all shadow-lg">
                    {item.type === 'reels' ? (
                      <Play className="w-6 h-6 fill-current ml-0.5" />
                    ) : (
                      <Award className="w-6 h-6" />
                    )}
                  </div>

                  <span className="text-base font-extrabold text-white">
                    {item.school}
                  </span>
                  <span className="text-xs text-amber-300 font-bold mt-1">
                    {item.title}
                  </span>

                  <div className="absolute top-3 left-3 px-2.5 py-0.5 rounded-full bg-slate-950/80 border border-white/20 text-[10px] text-cyan-200 flex items-center gap-1">
                    <InstagramIcon className="w-3 h-3 text-pink-400" />
                    <span>{item.type === 'reels' ? 'Instagram Reel' : 'Ceremony Photo'}</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-cyan-100/90 leading-relaxed mb-4">
                  {item.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] text-cyan-300 bg-sky-500/10 px-2 py-0.5 rounded-md font-mono border border-cyan-500/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <a
                href={item.instaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-trendy w-full py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>View on @raytalenthuntolympiad</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
              </a>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
