import React, { useState } from 'react';
import { Award, ExternalLink, Calendar, MapPin, Play, Sparkles } from 'lucide-react';
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
      title: "Grand Prize & Smartwatch Distribution Ceremony",
      description: "Students felicitated on stage with Smartwatches, Cash awards, and Excellence Medals in the presence of school management.",
      instaUrl: "https://www.instagram.com/raytalenthuntolympiad/p/DSCZUEaE5sO/",
      tags: ["#raytalenthuntolympiad", "#scholarship", "#citypublicschool"]
    },
    {
      id: 2,
      school: "St. Joseph's Convent School",
      location: "Varanasi, Uttar Pradesh",
      date: "Academic Session Event",
      type: "photo",
      category: "varanasi",
      title: "Medal & Certificate Honors at School Assembly",
      description: "Merit certificates and Gold/Silver Medals conferred upon top scoring students across primary and secondary wings.",
      instaUrl: "https://www.instagram.com/raytalenthuntolympiad/",
      tags: ["#varanasi", "#stjosephsconvent", "#studentachievement"]
    },
    {
      id: 3,
      school: "Savitri Convent High School",
      location: "Jaunpur, Uttar Pradesh",
      date: "Annual Recognition Day",
      type: "reels",
      category: "jaunpur",
      title: "Zonal & District Toppers Felicitation",
      description: "High scorers honored with mementos and scholarship certificates in a ceremonial school event.",
      instaUrl: "https://www.instagram.com/raytalenthuntolympiad/",
      tags: ["#jaunpur", "#savitriconvent", "#olympiad"]
    },
    {
      id: 4,
      school: "Lourdes Mary Junior High School",
      location: "Pratapgarh, Uttar Pradesh",
      date: "Prize Distribution Meet",
      type: "photo",
      category: "pratapgarh",
      title: "Class Champion Medals & SPR Distribution",
      description: "Handover of diagnostic Student Performance Reports (SPR) and medals to junior achievers.",
      instaUrl: "https://www.instagram.com/raytalenthuntolympiad/",
      tags: ["#pratapgarh", "#lourdesmary", "#excellence"]
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-20 relative bg-[#060913] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-pink-500/10 border border-pink-500/30 text-pink-300 text-xs font-bold uppercase tracking-wider mb-4">
            <InstagramIcon className="w-3.5 h-3.5" />
            <span>On-Ground School Celebrations</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            Moments of Pride & <br />
            <span className="bg-gradient-to-r from-pink-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent">
              In-School Felicitations
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg">
            Ray Talent Hunt Olympiad honors winners right where they learn — celebrating achievements in school assemblies with principals, teachers, and peers.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { label: 'All Schools', value: 'all' },
            { label: 'Pratapgarh, UP', value: 'pratapgarh' },
            { label: 'Varanasi, UP', value: 'varanasi' },
            { label: 'Jaunpur, UP', value: 'jaunpur' }
          ].map(tab => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                filter === tab.value
                  ? 'bg-gradient-to-r from-pink-500 to-rose-500 text-white shadow-md shadow-pink-500/20'
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="group rounded-3xl bg-slate-900/70 border border-slate-800 hover:border-pink-500/40 p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/5 flex flex-col justify-between"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-slate-400 pb-4 mb-4 border-b border-slate-800/80">
                  <div className="flex items-center gap-2 text-cyan-300 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Simulated Reel/Photo Frame */}
                <div className="relative w-full h-52 rounded-2xl bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950/80 border border-slate-800 overflow-hidden flex flex-col items-center justify-center p-6 text-center mb-6 group-hover:border-slate-700 transition-colors">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none"></div>

                  <div className="relative z-10 w-14 h-14 rounded-full bg-pink-500/20 border border-pink-400/40 flex items-center justify-center mb-3 group-hover:scale-110 group-hover:bg-pink-500/30 transition-all shadow-lg">
                    {item.type === 'reels' ? (
                      <Play className="w-6 h-6 text-pink-400 fill-pink-400 ml-0.5" />
                    ) : (
                      <Award className="w-6 h-6 text-amber-400" />
                    )}
                  </div>

                  <span className="relative z-10 text-sm font-bold text-white px-4">
                    {item.school}
                  </span>
                  <span className="relative z-10 text-xs text-amber-300 font-medium mt-1">
                    {item.title}
                  </span>

                  {/* Badge */}
                  <div className="absolute top-3 left-3 z-10 px-2.5 py-0.5 rounded-full bg-slate-900/80 border border-slate-700 text-[10px] text-pink-300 flex items-center gap-1">
                    <InstagramIcon className="w-3 h-3" />
                    <span>{item.type === 'reels' ? 'Instagram Reel' : 'Ceremony Photo'}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] text-pink-400/80 bg-pink-500/10 px-2 py-0.5 rounded-md font-mono">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <a
                href={item.instaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>View on @raytalenthuntolympiad</span>
                <ExternalLink className="w-3 h-3 text-slate-400" />
              </a>
            </div>
          ))}
        </div>

        {/* Live Instagram Profile CTA Bar */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-purple-950/40 via-pink-950/30 to-amber-950/20 border border-pink-500/30 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/30 shrink-0">
              <InstagramIcon className="w-7 h-7" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <span>Follow @raytalenthuntolympiad on Instagram</span>
                <Sparkles className="w-4 h-4 text-amber-400" />
              </h4>
              <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                Catch daily ceremony reels, topper congratulations, hall of fame highlights, and upcoming Olympiad exam notifications.
              </p>
            </div>
          </div>

          <a
            href="https://www.instagram.com/raytalenthuntolympiad/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-xl bg-gradient-to-r from-pink-500 via-rose-500 to-amber-500 text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-pink-500/25 hover:scale-105 transition-all shrink-0 cursor-pointer"
          >
            Visit Instagram Profile &rarr;
          </a>
        </div>

      </div>
    </section>
  );
};
