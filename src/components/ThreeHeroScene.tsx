import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ThreeHeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) {
        setHasWebGL(false);
        return;
      }
    } catch {
      setHasWebGL(false);
      return;
    }

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const isMobile = container.clientWidth < 640;
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0.4, isMobile ? 13.5 : 11);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 2. Dynamic Studio Lighting (Warm Gold & Electric Cyan)
    const ambientLight = new THREE.AmbientLight(0x0f2744, 2.4);
    scene.add(ambientLight);

    const keyGoldLight = new THREE.DirectionalLight(0xffbe3b, 3.5);
    keyGoldLight.position.set(6, 8, 7);
    scene.add(keyGoldLight);

    const rimCyanLight = new THREE.DirectionalLight(0x38bdf8, 3.2);
    rimCyanLight.position.set(-6, -3, 5);
    scene.add(rimCyanLight);

    const sunGlowPoint = new THREE.PointLight(0xff8c00, 3.0, 12);
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

    // ===============================================
    // A. 3D BOOK STACK (Directly inspired by Eduvora)
    // ===============================================
    const bookStackGroup = new THREE.Group();
    bookStackGroup.position.set(0, -1.2, 0);
    worldGroup.add(bookStackGroup);

    // Helper to make a realistic hardcover book with paper pages
    const createBook = (coverMat: THREE.Material, width: number, length: number, height: number) => {
      const book = new THREE.Group();
      // Cover
      const cover = new THREE.Mesh(new THREE.BoxGeometry(width, height, length), coverMat);
      book.add(cover);
      // Pages
      const pages = new THREE.Mesh(new THREE.BoxGeometry(width - 0.1, height - 0.06, length - 0.1), pagesMat);
      pages.position.set(0.06, 0, 0);
      book.add(pages);
      return book;
    };

    // Bottom Book (Purple)
    const book1 = createBook(bookPurpleMat, 2.8, 2.0, 0.45);
    book1.position.y = 0;
    book1.rotation.y = 0.1;
    bookStackGroup.add(book1);

    // Middle Book (Orange)
    const book2 = createBook(bookOrangeMat, 2.6, 1.9, 0.45);
    book2.position.y = 0.5;
    book2.rotation.y = -0.15;
    bookStackGroup.add(book2);

    // Top Book (Yellow)
    const book3 = createBook(bookYellowMat, 2.4, 1.8, 0.45);
    book3.position.y = 1.0;
    book3.rotation.y = 0.05;
    bookStackGroup.add(book3);

    // ===============================================
    // B. 3D GRADUATION MORTARBOARD CAP (On top of books)
    // ===============================================
    const capGroup = new THREE.Group();
    capGroup.position.set(0, 1.5, 0);
    bookStackGroup.add(capGroup);

    // Square Top Board
    const boardGeo = new THREE.BoxGeometry(2.0, 0.08, 2.0);
    const board = new THREE.Mesh(boardGeo, capMat);
    board.rotation.y = Math.PI / 4;
    capGroup.add(board);

    // Cap Skull Ring
    const skullGeo = new THREE.CylinderGeometry(0.65, 0.65, 0.4, 32);
    const skull = new THREE.Mesh(skullGeo, capMat);
    skull.position.y = -0.24;
    capGroup.add(skull);

    // Gold Button
    const buttonGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.1, 16);
    const button = new THREE.Mesh(buttonGeo, goldPBR);
    button.position.y = 0.08;
    capGroup.add(button);

    // Gold Tassel Ribbon
    const tasselCurve = new THREE.CubicBezierCurve3(
      new THREE.Vector3(0, 0.08, 0),
      new THREE.Vector3(0.6, 0.08, 0.6),
      new THREE.Vector3(1.0, -0.4, 0.7),
      new THREE.Vector3(0.9, -0.8, 0.8)
    );
    const tasselGeo = new THREE.TubeGeometry(tasselCurve, 20, 0.03, 8, false);
    const tassel = new THREE.Mesh(tasselGeo, goldPBR);
    capGroup.add(tassel);

    // Tassel Fringe Brush
    const brushGeo = new THREE.CylinderGeometry(0.04, 0.08, 0.35, 12);
    const brush = new THREE.Mesh(brushGeo, goldPBR);
    brush.position.set(0.9, -0.95, 0.8);
    capGroup.add(brush);

    // ===============================================
    // C. 3D DIPLOMA SCROLL WITH RED RIBBON & GOLD SEAL
    // ===============================================
    const diplomaGroup = new THREE.Group();
    diplomaGroup.position.set(1.4, -0.2, 1.0);
    diplomaGroup.rotation.z = -0.25;
    diplomaGroup.rotation.y = 0.4;
    bookStackGroup.add(diplomaGroup);

    // Rolled Cylinder
    const scrollGeo = new THREE.CylinderGeometry(0.3, 0.3, 1.8, 32);
    const scroll = new THREE.Mesh(scrollGeo, diplomaMat);
    scroll.rotation.x = Math.PI / 2;
    diplomaGroup.add(scroll);

    // Red Ribbon Band
    const ribbonGeo = new THREE.CylinderGeometry(0.31, 0.31, 0.35, 32);
    const ribbon = new THREE.Mesh(ribbonGeo, redRibbonMat);
    ribbon.rotation.x = Math.PI / 2;
    diplomaGroup.add(ribbon);

    // Gold Wax Seal
    const sealGeo = new THREE.CylinderGeometry(0.2, 0.2, 0.08, 24);
    const seal = new THREE.Mesh(sealGeo, goldPBR);
    seal.position.set(0, 0.32, 0);
    diplomaGroup.add(seal);

    // ===============================================
    // D. 3D ORBITING SOLAR SYSTEM & PLANETS (Brightly)
    // ===============================================
    // Orbit Ring 1 (Gold Ringed Planet)
    const planetGroup = new THREE.Group();
    planetGroup.position.set(3.4, 1.8, -1.2);
    worldGroup.add(planetGroup);

    const planetSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.72, 32, 32),
      planetCyanMat
    );
    planetGroup.add(planetSphere);

    const planetRing = new THREE.Mesh(
      new THREE.RingGeometry(0.95, 1.55, 48),
      planetRingMat
    );
    planetRing.rotation.x = Math.PI / 2.4;
    planetGroup.add(planetRing);

    // Glowing Mini Sun / Energy Star
    const sunGroup = new THREE.Group();
    sunGroup.position.set(-3.2, 2.0, -1);
    worldGroup.add(sunGroup);

    const sunSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.65, 32, 32),
      new THREE.MeshStandardMaterial({
        color: 0xffaa00,
        emissive: 0xff6600,
        emissiveIntensity: 0.8,
        roughness: 0.2
      })
    );
    sunGroup.add(sunSphere);

    // Little orbiting Moon
    const moon = new THREE.Mesh(
      new THREE.SphereGeometry(0.2, 16, 16),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.3 })
    );
    moon.position.set(1.2, 0, 0);
    sunGroup.add(moon);

    // ===============================================
    // E. 3D GOLDEN TROPHY CUP WITH STAR
    // ===============================================
    const trophyGroup = new THREE.Group();
    trophyGroup.position.set(-2.6, -1.0, 1.0);
    trophyGroup.scale.set(0.7, 0.7, 0.7);
    worldGroup.add(trophyGroup);

    const trophyCup = new THREE.Mesh(
      new THREE.CylinderGeometry(0.65, 0.25, 0.85, 24),
      goldPBR
    );
    trophyGroup.add(trophyCup);

    const trophyStem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.14, 0.16, 0.45, 16),
      goldPBR
    );
    trophyStem.position.y = -0.6;
    trophyGroup.add(trophyStem);

    const trophyBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.55, 0.65, 0.28, 16),
      goldPBR
    );
    trophyBase.position.y = -0.9;
    trophyGroup.add(trophyBase);

    // ===============================================
    // F. 3D FLOATING PENCIL HOLDER WITH PENCILS (Eduvora)
    // ===============================================
    const holderGroup = new THREE.Group();
    holderGroup.position.set(2.8, -1.4, 0.5);
    holderGroup.scale.set(0.6, 0.6, 0.6);
    worldGroup.add(holderGroup);

    const holderCup = new THREE.Mesh(
      new THREE.CylinderGeometry(0.5, 0.45, 0.9, 24),
      new THREE.MeshStandardMaterial({ color: 0x334155, roughness: 0.4, metalness: 0.4 })
    );
    holderGroup.add(holderCup);

    // Colored Pencils
    const makePencil = (color: number, angle: number, tilt: number) => {
      const p = new THREE.Group();
      const pBody = new THREE.Mesh(
        new THREE.CylinderGeometry(0.08, 0.08, 1.1, 6),
        new THREE.MeshStandardMaterial({ color, roughness: 0.4 })
      );
      p.add(pBody);
      const pTip = new THREE.Mesh(
        new THREE.ConeGeometry(0.08, 0.25, 6),
        new THREE.MeshStandardMaterial({ color: 0xfef08a, roughness: 0.6 })
      );
      pTip.position.y = 0.65;
      p.add(pTip);
      p.rotation.z = tilt;
      p.rotation.y = angle;
      p.position.set(Math.sin(angle) * 0.2, 0.4, Math.cos(angle) * 0.2);
      return p;
    };

    holderGroup.add(makePencil(0xf87171, 0, 0.2));
    holderGroup.add(makePencil(0x60a5fa, Math.PI * 0.7, -0.25));
    holderGroup.add(makePencil(0xfbbf24, Math.PI * 1.4, 0.18));

    // ===============================================
    // G. 350-STAR COSMIC DUST FIELD
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
      starPos[i * 3] = (Math.random() - 0.5) * 20;
      starPos[i * 3 + 1] = (Math.random() - 0.5) * 14;
      starPos[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const c = starPalette[Math.floor(Math.random() * starPalette.length)];
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPos, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.07,
      vertexColors: true,
      transparent: true,
      opacity: 0.9
    });

    const starfield = new THREE.Points(starGeo, starMat);
    scene.add(starfield);

    // ===============================================
    // H. MOUSE / TOUCH PARALLAX
    // ===============================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.45;
      mouseY = y * 0.3;
    };

    window.addEventListener('mousemove', onMouseMove);

    // Mobile touch interaction
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
      if (!isTouching || e.touches.length !== 1) return;
      const deltaX = e.touches[0].clientX - touchStartX;
      const deltaY = e.touches[0].clientY - touchStartY;
      mouseX += deltaX * 0.005;
      mouseY -= deltaY * 0.005;
      mouseX = Math.max(-1.5, Math.min(1.5, mouseX));
      mouseY = Math.max(-1.0, Math.min(1.0, mouseY));
      touchStartX = e.touches[0].clientX;
      touchStartY = e.touches[0].clientY;
    };

    const onTouchEnd = () => {
      isTouching = false;
    };

    container.addEventListener('touchstart', onTouchStart, { passive: true });
    container.addEventListener('touchmove', onTouchMove, { passive: true });
    window.addEventListener('touchend', onTouchEnd, { passive: true });

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.position.z = container.clientWidth < 640 ? 13.5 : 11;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // ===============================================
    // I. ANIMATION LOOP (Vibrant 60fps)
    // ===============================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      worldGroup.rotation.y = targetX * 0.8 + Math.sin(t * 0.3) * 0.05;
      worldGroup.rotation.x = targetY * 0.6 + Math.cos(t * 0.4) * 0.03;

      // Book stack gentle float
      bookStackGroup.position.y = -1.2 + Math.sin(t * 1.5) * 0.12;

      // Graduation Cap tassel sway
      capGroup.rotation.y = Math.PI / 4 + Math.sin(t * 1.2) * 0.08;
      brush.rotation.z = Math.sin(t * 3.0) * 0.2;

      // Diploma gentle roll wobble
      diplomaGroup.rotation.z = -0.25 + Math.sin(t * 1.8) * 0.05;

      // Ringed Planet rotation & orbit
      planetGroup.rotation.y = t * 0.4;
      planetGroup.position.y = 1.8 + Math.sin(t * 1.2) * 0.18;

      // Sun pulse & moon orbit
      sunSphere.scale.setScalar(1 + Math.sin(t * 3) * 0.04);
      moon.position.x = Math.cos(t * 1.5) * 1.1;
      moon.position.z = Math.sin(t * 1.5) * 1.1;

      // Trophy floating
      trophyGroup.rotation.y = t * 0.7;
      trophyGroup.position.y = -1.0 + Math.sin(t * 1.6) * 0.12;

      // Pencil holder
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
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="relative w-full h-[360px] flex items-center justify-center">
        <div className="p-8 rounded-3xl bg-slate-900/80 border border-white/20 text-center">
          <img src="/logo.jpg" alt="RTHO" className="w-16 h-16 rounded-2xl mx-auto mb-3" />
          <span className="text-lg font-bold text-white">Ray Talent Hunt Olympiad</span>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[340px] xs:h-[380px] sm:h-[480px] lg:h-[540px] cursor-grab active:cursor-grabbing select-none"
    />
  );
};
