import React, { useState, useEffect } from 'react';
import { ExternalLink, Calendar, MapPin, Play, Sparkles, ArrowUpRight, X, ZoomIn } from 'lucide-react';
import { InstagramIcon } from './Icons';

interface GalleryItem {
  id: number;
  school: string;
  location: string;
  date: string;
  type: 'reels' | 'photo';
  category: string;
  title: string;
  studentName: string;
  description: string;
  image: string;
  instaUrl: string;
  tags: string[];
}

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedItem(null);
    };
    if (selectedItem) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedItem]);

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      school: "City Public School",
      location: "Pratapgarh, Uttar Pradesh",
      date: "Dec 09, 2025",
      type: "reels",
      category: "pratapgarh",
      title: "Merit Trophy & Excellence Ceremony",
      studentName: "Merit Felicitation Meet",
      description: "Students felicitated on stage with Champions Trophies, Excellence Medals, and Merit Citations before school directors.",
      image: "/gallery/ceremony-smartwatch.jpg",
      instaUrl: "https://www.instagram.com/raytalenthuntolympiad/p/DSCZUEaE5sO/",
      tags: ["#raytalenthuntolympiad", "#citypublicschool", "#excellence"]
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
      image: "/gallery/ceremony-medals.jpg",
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
      description: "High scorers honored with mementos and merit certificates in a ceremonial school event.",
      image: "/gallery/ceremony-trophies.jpg",
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
      image: "/gallery/ceremony-spr.jpg",
      instaUrl: "https://www.instagram.com/raytalenthuntolympiad/",
      tags: ["#pratapgarh", "#lourdesmary", "#achievement"]
    },
    {
      id: 5,
      school: "St. Xavier's Senior Secondary School",
      location: "Lucknow, Uttar Pradesh",
      date: "National Felicitation Gala",
      type: "photo",
      category: "lucknow",
      title: "National Champion Trophy Ceremony",
      studentName: "National Rank 1 Achievers",
      description: "National rank holders felicitated with prestigious champion trophies, gold medals, and merit certificates.",
      image: "/awards/award-trophy.jpg",
      instaUrl: "https://www.instagram.com/raytalenthuntolympiad/",
      tags: ["#nationaltopper", "#championtrophy", "#rtho2025"]
    },
    {
      id: 6,
      school: "Radiant Stars Academy",
      location: "Prayagraj, Uttar Pradesh",
      date: "State Achievers Meet",
      type: "reels",
      category: "prayagraj",
      title: "State Excellence & Gold Medals Ceremony",
      studentName: "State Champions",
      description: "State-level champions celebrated with state honor trophies and pure gold medals during morning assembly.",
      image: "/gallery/ceremony-trophies.jpg",
      instaUrl: "https://www.instagram.com/raytalenthuntolympiad/",
      tags: ["#statechampions", "#goldmedal", "#excellence"]
    }
  ];

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  return (
    <section id="gallery" className="py-14 sm:py-20 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cyan-300 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-4 animate-float">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>Real Student Stories & On-Ground Pride</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-3 sm:mb-4">
            10,000+ PROUD <br />
            <span className="bg-gradient-to-r from-sky-300 via-cyan-200 to-amber-300 bg-clip-text text-transparent">
              PARTICIPANTS & TOPPERS!
            </span>
          </h2>

          <p className="text-cyan-100/80 text-xs sm:text-base mb-6">
            Over 100+ schools across Uttar Pradesh and India trust Ray Talent Hunt Olympiad to inspire academic confidence and recognize excellence right in school assemblies.
          </p>

          <a
            href="https://www.instagram.com/raytalenthuntolympiad/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-trendy inline-flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 text-white font-black text-xs uppercase tracking-wider shadow-xl shadow-sky-500/40"
          >
            <InstagramIcon className="w-4 h-4" />
            <span>Explore Instagram Ceremony Reels</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Filter Pill Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5 mb-8 sm:mb-12">
          {[
            { label: 'All Schools', value: 'all' },
            { label: 'Pratapgarh, UP', value: 'pratapgarh' },
            { label: 'Varanasi, UP', value: 'varanasi' },
            { label: 'Jaunpur, UP', value: 'jaunpur' },
            { label: 'Lucknow, UP', value: 'lucknow' },
            { label: 'Prayagraj, UP', value: 'prayagraj' }
          ].map(tab => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`btn-trendy px-3.5 sm:px-5 py-2 sm:py-2.5 rounded-full text-[11px] sm:text-sm font-bold cursor-pointer transition-all ${
                filter === tab.value
                  ? 'bg-gradient-to-r from-sky-400 to-blue-600 text-white shadow-xl shadow-sky-500/40 border border-white/40 scale-105'
                  : 'bg-slate-900/60 backdrop-blur-md text-slate-300 hover:text-white border border-white/15'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* 6-Card Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
          {filteredItems.map(item => (
            <div
              key={item.id}
              className="glass-card p-4 sm:p-7 rounded-2xl sm:rounded-[32px] flex flex-col justify-between group transition-all hover:border-cyan-400/40"
            >
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between text-xs text-cyan-200/80 pb-3 mb-3 border-b border-white/10">
                  <div className="flex items-center gap-1.5 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-1.5 text-slate-400">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Real Award Ceremony Thumbnail */}
                <div 
                  onClick={() => setSelectedItem(item)}
                  className="relative w-full h-44 sm:h-56 rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-5 group/img cursor-pointer border border-white/20 shadow-xl group-hover:border-cyan-400/50 transition-all"
                  title="Click to view high-resolution photo"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Subtle Gradient Vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/25 to-transparent"></div>

                  {/* Central Action Button */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-13 h-13 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/40 flex items-center justify-center text-white group-hover/img:bg-cyan-400 group-hover/img:text-slate-950 group-hover/img:scale-110 transition-all shadow-xl">
                      {item.type === 'reels' ? (
                        <Play className="w-6 h-6 fill-current ml-0.5" />
                      ) : (
                        <ZoomIn className="w-5 h-5" />
                      )}
                    </div>
                  </div>

                  {/* Top Type Badge */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/25 text-[10px] text-cyan-200 flex items-center gap-1.5 shadow">
                    <InstagramIcon className="w-3 h-3 text-pink-400" />
                    <span className="font-semibold">{item.type === 'reels' ? 'Instagram Reel' : 'Ceremony Photo'}</span>
                  </div>

                  {/* School & Award Title on Image */}
                  <div className="absolute bottom-3 left-3 right-3 text-left">
                    <span className="text-sm font-extrabold text-white block drop-shadow-md">
                      {item.school}
                    </span>
                    <span className="text-xs text-amber-300 font-bold block drop-shadow">
                      {item.title}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-cyan-100/90 leading-relaxed mb-4">
                  {item.description}
                </p>

                {/* Hashtags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {item.tags.map((tag, tIdx) => (
                    <span key={tIdx} className="text-[11px] text-cyan-300 bg-sky-500/10 px-2 py-0.5 rounded-md font-mono border border-cyan-500/20">
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
                className="btn-trendy w-full py-3 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white text-xs font-bold flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <InstagramIcon className="w-3.5 h-3.5 text-pink-400" />
                <span>View on @raytalenthuntolympiad</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
              </a>
            </div>
          ))}
        </div>

      </div>

      {/* High-Resolution Photo Lightbox Modal */}
      {selectedItem && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedItem(null)}
          role="dialog"
          aria-modal="true"
          aria-label="Ceremony image lightbox"
        >
          <div 
            className="relative max-w-4xl w-full bg-slate-900 border border-white/20 rounded-3xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 border-b border-white/10 bg-slate-950/80">
              <div className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-pink-400" />
                <span className="text-sm font-bold text-white">{selectedItem.school}</span>
                <span className="text-xs text-amber-300">• {selectedItem.title}</span>
              </div>
              <button
                onClick={() => setSelectedItem(null)}
                className="p-1.5 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
                aria-label="Close image preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Large Image Preview */}
            <div className="relative w-full max-h-[70vh] bg-black flex items-center justify-center overflow-hidden">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
            </div>

            {/* Bottom Info & Links */}
            <div className="p-5 bg-slate-950 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <div>
                <p className="text-xs text-cyan-200/90 max-w-xl">{selectedItem.description}</p>
                <span className="text-[11px] text-slate-400 mt-1 block">{selectedItem.location} • {selectedItem.date}</span>
              </div>

              <a
                href={selectedItem.instaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-trendy px-6 py-2.5 rounded-full bg-gradient-to-r from-pink-600 via-rose-500 to-amber-500 text-white font-bold text-xs uppercase tracking-wider flex items-center gap-2 shrink-0 shadow-lg"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>Open in Instagram</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
