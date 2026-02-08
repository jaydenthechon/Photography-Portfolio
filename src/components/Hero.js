import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AboutModal from './AboutModal';
import './Hero.css';

// Import all photos
import street1 from '../assets/images/portfolio-001.jpg';
import street2 from '../assets/images/portfolio-002.jpg';
import street3 from '../assets/images/portfolio-003.jpg';
import street4 from '../assets/images/portfolio-004.jpg';
import portraiture1 from '../assets/images/portfolio-005.jpg';
import street5 from '../assets/images/portfolio-006.jpg';
import nature1 from '../assets/images/portfolio-007.jpg';
import nature2 from '../assets/images/portfolio-008.jpg';
import nature3 from '../assets/images/portfolio-009.jpg';
import street6 from '../assets/images/portfolio-010.jpg';
import street7 from '../assets/images/portfolio-011.jpg';
import street8 from '../assets/images/portfolio-012.jpg';
import street9 from '../assets/images/portfolio-013.jpg';
import graduation1 from '../assets/images/portfolio-014.jpg';
import graduation2 from '../assets/images/portfolio-015.jpg';
import graduation3 from '../assets/images/portfolio-016.jpg';
import graduation4 from '../assets/images/portfolio-017.jpg';
import graduation5 from '../assets/images/portfolio-018.jpg';
import graduation6 from '../assets/images/portfolio-019.jpg';
import graduation7 from '../assets/images/portfolio-020.jpg';
import graduation8 from '../assets/images/portfolio-021.jpg';
import graduation9 from '../assets/images/portfolio-022.jpg';
import graduation10 from '../assets/images/portfolio-023.jpg';
import graduation11 from '../assets/images/portfolio-024.jpg';
import graduation12 from '../assets/images/portfolio-025.jpg';
import graduation13 from '../assets/images/portfolio-026.jpg';
import graduation14 from '../assets/images/portfolio-027.jpg';
import graduation15 from '../assets/images/portfolio-028.jpg';
import graduation16 from '../assets/images/portfolio-029.jpg';
import graduation17 from '../assets/images/portfolio-030.jpg';
import graduation18 from '../assets/images/portfolio-031.jpg';
import graduation19 from '../assets/images/portfolio-032.jpg';
import graduation20 from '../assets/images/portfolio-033.jpg';
import graduation21 from '../assets/images/portfolio-034.jpg';
import graduation22 from '../assets/images/portfolio-035.jpg';
import graduation23 from '../assets/images/portfolio-036.jpg';
import graduation24 from '../assets/images/portfolio-037.jpg';
import graduation25 from '../assets/images/portfolio-038.jpg';
import graduation26 from '../assets/images/portfolio-039.jpg';
import graduation27 from '../assets/images/portfolio-040.jpg';
import graduation28 from '../assets/images/portfolio-041.jpg';
import graduation29 from '../assets/images/portfolio-042.jpg';
import graduation30 from '../assets/images/portfolio-043.jpg';
import graduation31 from '../assets/images/portfolio-044.jpg';
import graduation32 from '../assets/images/portfolio-045.jpg';
import graduation33 from '../assets/images/portfolio-046.jpg';
import graduation34 from '../assets/images/portfolio-047.jpg';
import graduation35 from '../assets/images/portfolio-048.jpg';
import graduation36 from '../assets/images/portfolio-049.jpg';
import street10 from '../assets/images/portfolio-050.jpg';
import street11 from '../assets/images/portfolio-051.jpg';
import portraiture2 from '../assets/images/portfolio-052.jpg';
import street12 from '../assets/images/portfolio-053.jpg';
import portraiture3 from '../assets/images/portfolio-054.jpg';
import portraiture4 from '../assets/images/portfolio-055.jpg';
import street13 from '../assets/images/portfolio-056.jpg';
import street14 from '../assets/images/portfolio-057.jpg';
import street15 from '../assets/images/portfolio-058.jpg';
import street16 from '../assets/images/portfolio-059.jpg';
import street17 from '../assets/images/portfolio-060.jpg';
import street18 from '../assets/images/portfolio-061.jpg';
import street19 from '../assets/images/portfolio-062.jpg';
import street20 from '../assets/images/portfolio-063.jpg';
import street21 from '../assets/images/portfolio-064.jpg';
import street22 from '../assets/images/portfolio-065.jpg';
import nature4 from '../assets/images/portfolio-066.jpg';
import nature5 from '../assets/images/portfolio-067.jpg';
import nature6 from '../assets/images/portfolio-068.jpg';
import nature7 from '../assets/images/portfolio-069.jpg';
import nature8 from '../assets/images/portfolio-070.jpg';
import street23 from '../assets/images/portfolio-071.jpg';
import street24 from '../assets/images/portfolio-072.jpg';
import street25 from '../assets/images/portfolio-073.jpg';
import street26 from '../assets/images/portfolio-074.jpg';
import street27 from '../assets/images/portfolio-075.jpg';
import street28 from '../assets/images/portfolio-076.jpg';
import nature9 from '../assets/images/portfolio-077.jpg';
import portraiture5 from '../assets/images/portfolio-078.jpg';
import portraiture6 from '../assets/images/portfolio-079.jpg';
import portraiture7 from '../assets/images/portfolio-080.jpg';
import portraiture8 from '../assets/images/portfolio-081.jpg';
import portraiture9 from '../assets/images/portfolio-082.jpg';
import portraiture10 from '../assets/images/portfolio-083.jpg';
import portraiture11 from '../assets/images/portfolio-084.jpg';
import portraiture12 from '../assets/images/portfolio-085.jpg';
import portraiture13 from '../assets/images/portfolio-086.jpg';
import nature10 from '../assets/images/portfolio-087.jpg';
import portraiture14 from '../assets/images/portfolio-088.jpg';
import street29 from '../assets/images/portfolio-089.jpg';
import street30 from '../assets/images/portfolio-090.jpg';
import street31 from '../assets/images/portfolio-091.jpg';
import portraiture15 from '../assets/images/portfolio-093.jpg';
import street32 from '../assets/images/portfolio-094.jpg';
import street33 from '../assets/images/portfolio-095.jpg';
import street34 from '../assets/images/portfolio-096.jpg';
import street35 from '../assets/images/portfolio-097.jpg';
import street36 from '../assets/images/portfolio-098.jpg';
import street37 from '../assets/images/portfolio-099.jpg';
import street38 from '../assets/images/portfolio-100.jpg';
import street39 from '../assets/images/portfolio-101.jpg';
import street40 from '../assets/images/portfolio-102.jpg';
import street41 from '../assets/images/portfolio-103.jpg';
import portraiture16 from '../assets/images/portfolio-104.jpg';
import portraiture17 from '../assets/images/portfolio-105.jpg';
import portraiture18 from '../assets/images/portfolio-106.jpg';
import street42 from '../assets/images/portfolio-107.jpg';
import street43 from '../assets/images/portfolio-108.jpg';
import portraiture19 from '../assets/images/portfolio-109.jpg';
import portraiture20 from '../assets/images/portfolio-110.jpg';
import nature11 from '../assets/images/portfolio-112.jpg';
import street44 from '../assets/images/portfolio-114.jpg';
import street45 from '../assets/images/portfolio-115.jpg';
import street46 from '../assets/images/portfolio-116.jpg';
import street47 from '../assets/images/portfolio-117.jpg';
import street48 from '../assets/images/portfolio-118.jpg';
import street49 from '../assets/images/portfolio-119.jpg';
import nature12 from '../assets/images/portfolio-120.jpg';
import nature13 from '../assets/images/portfolio-121.jpg';
import nature14 from '../assets/images/portfolio-122.jpg';
import nature15 from '../assets/images/portfolio-123.jpg';
import nature16 from '../assets/images/portfolio-124.jpg';
import nature17 from '../assets/images/portfolio-125.jpg';
import nature18 from '../assets/images/portfolio-126.jpg';
import nature19 from '../assets/images/portfolio-127.jpg';
import nature20 from '../assets/images/portfolio-128.jpg';
import nature21 from '../assets/images/portfolio-129.jpg';
import nature22 from '../assets/images/portfolio-130.jpg';
import nature23 from '../assets/images/portfolio-131.jpg';
import event1 from '../assets/images/portfolio-132.jpg';
import event2 from '../assets/images/portfolio-133.jpg';
import event3 from '../assets/images/portfolio-134.jpg';
import portraiture21 from '../assets/images/portfolio-135.jpg';
import street50 from '../assets/images/portfolio-136.jpg';
import street51 from '../assets/images/portfolio-137.jpg';
import street52 from '../assets/images/portfolio-138.jpg';
import portraiture22 from '../assets/images/portfolio-139.jpg';
import portraiture23 from '../assets/images/portfolio-140.jpg';
import street53 from '../assets/images/portfolio-141.jpg';
import street54 from '../assets/images/portfolio-142.jpg';
import street55 from '../assets/images/portfolio-143.jpg';
import street56 from '../assets/images/portfolio-144.jpg';
import street57 from '../assets/images/portfolio-145.jpg';
import street58 from '../assets/images/portfolio-146.jpg';
import street59 from '../assets/images/portfolio-147.jpg';
import street60 from '../assets/images/portfolio-148.jpg';
import street61 from '../assets/images/portfolio-149.jpg';
import street62 from '../assets/images/portfolio-150.jpg';
import street63 from '../assets/images/portfolio-151.jpg';
import street64 from '../assets/images/portfolio-152.jpg';
import street65 from '../assets/images/portfolio-153.jpg';
import street67 from '../assets/images/portfolio-154.jpg';
import street68 from '../assets/images/portfolio-155.jpg';
import street69 from '../assets/images/portfolio-156.jpg';
import street70 from '../assets/images/portfolio-157.jpg';
import street71 from '../assets/images/portfolio-158.jpg';
import street72 from '../assets/images/portfolio-159.jpg';
import nature24 from '../assets/images/portfolio-160.jpg';
import nature25 from '../assets/images/portfolio-161.jpg';
import nature26 from '../assets/images/portfolio-162.jpg';
import portraiture24 from '../assets/images/portfolio-163.jpg';

const Hero = () => {
  const [randomImages, setRandomImages] = useState([]);
  const [isAboutModalOpen, setIsAboutModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // All available images
    const allImages = [
      street1, street2, street3, street4, portraiture1, street5, nature1, nature2, nature3, street6,
      street7, street8, street9, graduation1, graduation2, graduation3, graduation4, graduation5, graduation6, graduation7,
      graduation8, graduation9, graduation10, graduation11, graduation12, graduation13, graduation14, graduation15, graduation16, graduation17,
      graduation18, graduation19, graduation20, graduation21, graduation22, graduation23, graduation24, graduation25, graduation26, graduation27,
      graduation28, graduation29, graduation30, graduation31, graduation32, graduation33, graduation34, graduation35, graduation36, street10,
      street11, portraiture2, street12, portraiture3, portraiture4, street13, street14, street15, street16, street17,
      street18, street19, street20, street21, street22, nature4, nature5, nature6, nature7, nature8,
      street23, street24, street25, street26, street27, street28, nature9, portraiture5, portraiture6, portraiture7,
      portraiture8, portraiture9, portraiture10, portraiture11, portraiture12, portraiture13, nature10, portraiture14, street29, street30,
      street31, portraiture15, street32, street33, street34, street35, street36, street37, street38, street39,
      street40, street41, portraiture16, portraiture17, portraiture18, street42, street43, portraiture19, portraiture20, nature11,
      street44, street45, street46, street47, street48, street49, nature12, nature13, nature14, nature15,
      nature16, nature17, nature18, nature19, nature20, nature21, nature22, nature23, event1, event2,
      event3, portraiture21, street50, street51, street52, portraiture22, portraiture23, street53, street54, street55,
      street56, street57, street58, street59, street60, street61, street62, street63, street64, street65,
      street67, street68, street69, street70, street71, street72, nature24, nature25, nature26, portraiture24
    ];

    // Get 3 random images
    const shuffled = [...allImages].sort(() => Math.random() - 0.5);
    setRandomImages(shuffled.slice(0, 3));
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        {randomImages.map((img, index) => (
          <div key={index} className="hero-image" style={{ backgroundImage: `url(${img})` }}></div>
        ))}
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1 className="hero-title">Memento</h1>
        <p className="hero-subtitle">Through the Looking Glass</p>
        <div className="hero-buttons">
          <button className="hero-button primary" onClick={() => navigate('/collections')}>
            View Portfolio
          </button>
          <button className="hero-button secondary" onClick={() => setIsAboutModalOpen(true)}>
            About Me
          </button>
        </div>
      </div>
      <AboutModal isOpen={isAboutModalOpen} onClose={() => setIsAboutModalOpen(false)} />
    </section>
  );
};

export default Hero;
