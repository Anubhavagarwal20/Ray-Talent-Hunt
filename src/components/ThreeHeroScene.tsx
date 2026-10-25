import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ThreeHeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const testCanvas = document.createElement('canvas');
      const gl = testCanvas.getContext('webgl') || testCanvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // Measure initial container size safely
    const getContainerWidth = () => {
      const rect = container.getBoundingClientRect();
      return rect.width > 0 ? rect.width : (container.clientWidth || container.parentElement?.clientWidth || window.innerWidth);
    };

    const getContainerHeight = () => {
      const rect = container.getBoundingClientRect();
      return rect.height > 0 ? rect.height : (container.clientHeight || 340);
    };

    let width = getContainerWidth();
    let height = getContainerHeight();
    const isInitialMobile = width < 640;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 0.2, isInitialMobile ? 12.0 : 10.8);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isInitialMobile ? 1.75 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    const domCanvas = renderer.domElement;
    domCanvas.style.display = 'block';
    domCanvas.style.width = '100%';
    domCanvas.style.height = '100%';
    domCanvas.style.touchAction = 'pan-y';
    container.style.touchAction = 'pan-y';

    // Clear any previous child canvases
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }
    container.appendChild(domCanvas);

    // 2. Dynamic Studio Lighting (Warm Gold & Electric Cyan)
    const ambientLight = new THREE.AmbientLight(0x1a365d, 2.6);
    scene.add(ambientLight);

    const keyGoldLight = new THREE.DirectionalLight(0xffbe3b, 3.8);
    keyGoldLight.position.set(6, 8, 7);
    scene.add(keyGoldLight);

    const rimCyanLight = new THREE.DirectionalLight(0x38bdf8, 3.4);
    rimCyanLight.position.set(-6, -3, 5);
    scene.add(rimCyanLight);

    const sunGlowPoint = new THREE.PointLight(0xff8c00, 3.2, 14);
    sunGlowPoint.position.set(0, 1.2, 0);
    scene.add(sunGlowPoint);

    // 3. Materials
    const goldPBR = new THREE.MeshStandardMaterial({
      color: 0xf5a623,
      metalness: 0.88,
      roughness: 0.18,
      emissive: 0x4a2e00,
      emissiveIntensity: 0.2
    });

    const bookYellowMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      roughness: 0.35,
      metalness: 0.1
    });

    const bookOrangeMat = new THREE.MeshStandardMaterial({
      color: 0xf97316,
      roughness: 0.35,
      metalness: 0.1
    });

    const bookPurpleMat = new THREE.MeshStandardMaterial({
      color: 0x818cf8,
      roughness: 0.35,
      metalness: 0.1
    });

    const pagesMat = new THREE.MeshStandardMaterial({
      color: 0xfef9c3,
      roughness: 0.8
    });

    const capMat = new THREE.MeshStandardMaterial({
      color: 0x1e293b,
      roughness: 0.3,
      metalness: 0.2
    });

    const diplomaMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      roughness: 0.5
    });

    const redRibbonMat = new THREE.MeshStandardMaterial({
      color: 0xef4444,
      roughness: 0.25,
      metalness: 0.3
    });

    const planetCyanMat = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      roughness: 0.25,
      metalness: 0.2
    });

    const planetRingMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      roughness: 0.3,
      metalness: 0.8,
      side: THREE.DoubleSide
    });

    // 4. Main 3D World Group
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // Initial scale tailored for viewport
    const updateScaleAndCamera = (w: number, h: number) => {
      const isMob = w < 640;
      const isTablet = w >= 640 && w < 1024;
      const aspect = w / h;

      camera.aspect = aspect;

      if (isMob) {
        // Comfortably proportioned so all cosmic elements fit inside mobile screens
        const mobScale = aspect < 0.9 ? 0.72 : aspect < 1.1 ? 0.78 : 0.84;
        worldGroup.scale.setScalar(mobScale);
        camera.position.set(0, 0.15, 12.0);
      } else if (isTablet) {
        worldGroup.scale.setScalar(0.9);
        camera.position.set(0, 0.3, 11.2);
      } else {
        worldGroup.scale.setScalar(1.0);
        camera.position.set(0, 0.4, 10.8);
      }
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    updateScaleAndCamera(width, height);

    // ===============================================
    // A. 3D BOOK STACK (Centered Academic Base)
    // ===============================================
    const bookStackGroup = new THREE.Group();
    bookStackGroup.position.set(0, -1.0, 0);
    worldGroup.add(bookStackGroup);

    const createBook = (coverMat: THREE.Material, bWidth: number, bLength: number, bHeight: number) => {
      const book = new THREE.Group();
      const cover = new THREE.Mesh(new THREE.BoxGeometry(bWidth, bHeight, bLength), coverMat);
      book.add(cover);
      const pages = new THREE.Mesh(new THREE.BoxGeometry(bWidth - 0.1, bHeight - 0.06, bLength - 0.1), pagesMat);
      pages.position.set(0.06, 0, 0);
      book.add(pages);
      return book;
    };

    // Bottom Book (Purple)
    const book1 = createBook(bookPurpleMat, 2.6, 1.9, 0.42);
    book1.position.y = 0;
    book1.rotation.y = 0.1;
    bookStackGroup.add(book1);

    // Middle Book (Orange)
    const book2 = createBook(bookOrangeMat, 2.4, 1.8, 0.42);
    book2.position.y = 0.46;
    book2.rotation.y = -0.15;
    bookStackGroup.add(book2);

    // Top Book (Yellow)
    const book3 = createBook(bookYellowMat, 2.2, 1.7, 0.42);
    book3.position.y = 0.92;
    book3.rotation.y = 0.05;
    bookStackGroup.add(book3);

    // ===============================================
    // B. 3D GRADUATION MORTARBOARD CAP (On top of books)
    // ===============================================
    const capGroup = new THREE.Group();
    capGroup.position.set(0, 1.38, 0);
    bookStackGroup.add(capGroup);

    // Square Top Board
    const board = new THREE.Mesh(new THREE.BoxGeometry(1.85, 0.08, 1.85), capMat);
    board.rotation.y = Math.PI / 4;
    capGroup.add(board);

    // Cap Skull Ring
    const skull = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.6, 0.38, 32), capMat);
    skull.position.y = -0.22;
    capGroup.add(skull);

    // Gold Button
    const button = new THREE.Mesh(new THREE.CylinderGeometry(0.11, 0.11, 0.09, 16), goldPBR);
    button.position.y = 0.07;
    capGroup.add(button);

    // Gold Tassel Ribbon
    const tasselCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(0, 0.07, 0),
      new THREE.Vector3(0.55, 0.07, 0.55),
      new THREE.Vector3(0.9, -0.35, 0.65),
      new THREE.Vector3(0.85, -0.75, 0.75)
    );
    const tasselGeo = new THREE.TubeGeometry(tasselCurve, 20, 0.028, 8, false);
    const tassel = new THREE.Mesh(tasselGeo, goldPBR);
    capGroup.add(tassel);

    // Tassel Fringe Brush
    const brush = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.075, 0.32, 12), goldPBR);
    brush.position.set(0.85, -0.9, 0.75);
    capGroup.add(brush);

    // ===============================================
    // C. 3D DIPLOMA SCROLL WITH RED RIBBON & GOLD SEAL
    // ===============================================
    const diplomaGroup = new THREE.Group();
    diplomaGroup.position.set(1.2, -0.15, 0.9);
    diplomaGroup.rotation.z = -0.25;
    diplomaGroup.rotation.y = 0.4;
    bookStackGroup.add(diplomaGroup);

    const scroll = new THREE.Mesh(new THREE.CylinderGeometry(0.28, 0.28, 1.6, 32), diplomaMat);
    scroll.rotation.x = Math.PI / 2;
    diplomaGroup.add(scroll);

    const ribbon = new THREE.Mesh(new THREE.CylinderGeometry(0.29, 0.29, 0.32, 32), redRibbonMat);
    ribbon.rotation.x = Math.PI / 2;
    diplomaGroup.add(ribbon);

    const seal = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.07, 24), goldPBR);
    seal.position.set(0, 0.3, 0);
    diplomaGroup.add(seal);

    // ===============================================
    // D. 3D ORBITING SOLAR SYSTEM & PLANET
    // ===============================================
    // Ringed Planet (Compact coordinate for mobile fit)
    const planetGroup = new THREE.Group();
    planetGroup.position.set(2.5, 1.4, -0.8);
    worldGroup.add(planetGroup);

    const planetSphere = new THREE.Mesh(new THREE.SphereGeometry(0.65, 32, 32), planetCyanMat);
    planetGroup.add(planetSphere);

    const planetRing = new THREE.Mesh(new THREE.RingGeometry(0.85, 1.38, 48), planetRingMat);
    planetRing.rotation.x = Math.PI / 2.3;
    planetGroup.add(planetRing);

    // Glowing Mini Sun / Energy Star
    const sunGroup = new THREE.Group();
    sunGroup.position.set(-2.4, 1.5, -0.8);
    worldGroup.add(sunGroup);

    const sunSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.58, 32, 32),
      new THREE.MeshStandardMaterial({
        color: 0xffaa00,
        emissive: 0xff6600,
        emissiveIntensity: 0.85,
        roughness: 0.2
      })
    );
    sunGroup.add(sunSphere);

    // Orbiting Moon
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(0.18, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.3 })
    );
    moon.position.set(1.0, 0, 0);
    sunGroup.add(moon);

    // ===============================================
    // E. 3D GOLDEN TROPHY CUP WITH STAR
    // ===============================================
    const trophyGroup = new THREE.Group();
    trophyGroup.position.set(-2.0, -0.9, 0.8);
    trophyGroup.scale.set(0.65, 0.65, 0.65);
    worldGroup.add(trophyGroup);

    const trophyCup = new THREE.Mesh(new THREE.CylinderGeometry(0.6, 0.24, 0.8, 24), goldPBR);
    trophyGroup.add(trophyCup);

    const trophyStem = new THREE.Mesh(new THREE.CylinderGeometry(0.13, 0.15, 0.42, 16), goldPBR);
    trophyStem.position.y = -0.56;
    trophyGroup.add(trophyStem);

    const trophyBase = new THREE.Mesh(new THREE.CylinderGeometry(0.5, 0.6, 0.26, 16), goldPBR);
    trophyBase.position.y = -0.85;
    trophyGroup.add(trophyBase);

    // ===============================================
    // F. 3D FLOATING PENCIL HOLDER WITH PENCILS
    // ===============================================
    const holderGroup = new THREE.Group();
    holderGroup.position.set(2.1, -1.1, 0.6);
    holderGroup.scale.set(0.56, 0.56, 0.56);
    worldGroup.add(holderGroup);

    const holderCup = new THREE.Mesh(
      new THREE.CylinderGeometry(0.48, 0.42, 0.85, 24),
      new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4, metalness: 0.4 })
    );
    holderGroup.add(holderCup);

    const makePencil = (color: number, angle: number, tilt: number) => {
      const p = new THREE.Group();
      const pBody = new THREE.Mesh(
        new THREE.CylinderGeometry(0.075, 0.075, 1.05, 6),
        new THREE.MeshStandardMaterial({ color, roughness: 0.4 })
      );
      p.add(pBody);
      const pTip = new THREE.Mesh(
        new THREE.ConeGeometry(0.075, 0.23, 6),
        new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.6 })
      );
      pTip.position.y = 0.62;
      p.add(pTip);
      p.rotation.z = tilt;
      p.rotation.y = angle;
      p.position.set(Math.sin(angle) * 0.18, 0.38, Math.cos(angle) * 0.18);
      return p;
    };

    holderGroup.add(makePencil(0xf87171, 0, 0.2));
    holderGroup.add(makePencil(0x60a5fa, Math.PI * 0.7, -0.25));
    holderGroup.add(makePencil(0xfbbf24, Math.PI * 1.4, 0.18));

    // ===============================================
    // G. 350-STAR COSMIC DUST FIELD (Crisp on mobile)
    // ===============================================
    const starCount = 350;
    const starPos = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const starPalette = [
      new THREE.Color(0x38bdf8),
      new THREE.Color(0xf59e0b),
      new THREE.Color(0xffffff),
      new THREE.Color(0xec4899)
    ];

    for (let i = 0; i < starCount; i++) {
      starPos[i * 3] = (Math.random() - 0.5) * 18;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 13;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 9;

      const c = starPalette[Math.floor(Math.random() * starPalette.length)];
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.11,
      vertexColors: true,
      transparent: true,
      opacity: 0.92,
      sizeAttenuation: true
    });

    const starfield = new THREE.Points(starGeo, starMat);
    scene.add(starfield);

    // ===============================================
    // H. RESPONSIVE RESIZE OBSERVER
    // ===============================================
    let resizeObserver: ResizeObserver | null = null;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver((entries) => {
        for (const entry of entries) {
          const w = entry.contentRect.width;
          const h = entry.contentRect.height;
          if (w > 0 && h > 0) {
            updateScaleAndCamera(w, h);
          }
        }
      });
      resizeObserver.observe(container);
    }

    const onWindowResize = () => {
      const w = getContainerWidth();
      const h = getContainerHeight();
      updateScaleAndCamera(w, h);
    };
    window.addEventListener('resize', onWindowResize);

    // WebGL context loss recovery
    const handleContextLost = (e: Event) => {
      e.preventDefault();
      cancelAnimationFrame(animationFrameId);
    };

    const handleContextRestored = () => {
      renderer.render(scene, camera);
      animate();
    };

    domCanvas.addEventListener('webglcontextlost', handleContextLost, false);
    domCanvas.addEventListener('webglcontextrestored', handleContextRestored, false);

    // ===============================================
    // I. INTERACTION (Mouse & Mobile Touch)
    // ===============================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.45;
      mouseY = y * 0.28;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Mobile Touch Interaction with pan-y preservation
    let isTouching = false;
    let touchStartX = 0;
    let touchStartY = 0;

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 1) {
        isTouching = true;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (!isTouching || e.touches.length === 0) return;
      const touch = e.touches[0];
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;

      // Allow dragging to rotate
      if (Math.abs(deltaX) > 4 || Math.abs(deltaY) > 4) {
        mouseX += deltaX * 0.006;
        mouseY -= deltaY * 0.005;
        mouseX = Math.max(-1.6, Math.min(1.6, mouseX));
        mouseY = Math.max(-1.0, Math.min(1.0, mouseY));
        touchStartX = touch.clientX;
        touchStartY = touch.clientY;
      }
    };

    const onTouchEnd = () => {
      isTouching = false;
    };

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    // ===============================================
    // J. ANIMATION LOOP (Smooth 60fps & Auto-Orbit)
    // ===============================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Gracefully decay touch offset when finger released
      if (!isTouching) {
        mouseX *= 0.95;
        mouseY *= 0.95;
      }

      targetX += (mouseX - targetX) * 0.06;
      targetY += (mouseY - targetY) * 0.06;

      // Continuous cosmic orbit + interactive rotation
      worldGroup.rotation.y = t * 0.2 + targetX * 0.85;
      worldGroup.rotation.x = targetY * 0.5 + Math.cos(t * 0.35) * 0.035;

      // Book stack gentle float
      bookStackGroup.position.y = -1.0 + Math.sin(t * 1.5) * 0.1;

      // Graduation Cap tassel sway
      capGroup.rotation.y = Math.PI / 4 + Math.sin(t * 1.2) * 0.07;
      brush.rotation.z = Math.sin(t * 3.0) * 0.18;

      // Diploma gentle roll wobble
      diplomaGroup.rotation.z = -0.25 + Math.sin(t * 1.8) * 0.05;

      // Ringed Planet rotation & orbit
      planetGroup.rotation.y = t * 0.45;
      planetGroup.position.y = 1.4 + Math.sin(t * 1.2) * 0.15;

      // Sun pulse & moon orbit
      sunSphere.scale.setScalar(1 + Math.sin(t * 3) * 0.035);
      moon.position.x = Math.cos(t * 1.6) * 1.0;
      moon.position.z = Math.sin(t * 1.6) * 1.0;

      // Trophy floating
      trophyGroup.rotation.y = t * 0.7;
      trophyGroup.position.y = -0.9 + Math.sin(t * 1.6) * 0.1;

      // Pencil holder rotation
      holderGroup.rotation.y = -t * 0.3;

      // Starfield slow drift
      starfield.rotation.y = t * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('touchstart', onTouchStart);
      container.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('touchend', onTouchEnd);
      window.removeEventListener('resize', onWindowResize);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      domCanvas.removeEventListener('webglcontextlost', handleContextLost);
      domCanvas.removeEventListener('webglcontextrestored', handleContextRestored);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(domCanvas)) {
        container.removeChild(domCanvas);
      }
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="relative w-full h-[320px] xs:h-[360px] sm:h-[460px] flex items-center justify-center p-4">
        <div className="p-6 rounded-3xl bg-slate-900/90 border border-amber-400/30 text-center shadow-2xl max-w-sm">
          <img src="/logo.jpg" alt="RTHO" className="w-18 h-18 rounded-2xl mx-auto mb-3 border-2 border-amber-400 shadow-lg object-cover" />
          <h4 className="text-lg font-black text-white">Ray Talent Hunt Olympiad</h4>
          <p className="text-xs text-amber-300 font-semibold mt-1">Academic Excellence & Olympiad Stage</p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative w-full overflow-hidden rounded-3xl">
      <div
        ref={containerRef}
        className="relative w-full h-[310px] xs:h-[350px] sm:h-[460px] lg:h-[520px] cursor-grab active:cursor-grabbing select-none"
      />
      {/* Sleek Orbit Badge on Mobile & Desktop */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 pointer-events-none z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-cyan-400/30 backdrop-blur-md text-[10px] sm:text-[11px] font-semibold text-cyan-200 shadow-xl shadow-cyan-950/40 whitespace-nowrap">
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"></span>
        <span>Interactive 3D Orbit • Swipe or drag to rotate</span>
      </div>
    </div>
  );
};
