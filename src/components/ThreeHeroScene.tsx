import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const ThreeHeroScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hasWebGL, setHasWebGL] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL support
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

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0.5, 12);

    // 2. Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.3;
    container.appendChild(renderer.domElement);

    // 3. Lighting (Cosmic vibrant studio setup)
    const ambientLight = new THREE.AmbientLight(0x132b45, 2.2);
    scene.add(ambientLight);

    // Warm Gold Light from top right
    const goldDirLight = new THREE.DirectionalLight(0xffbe3b, 3.2);
    goldDirLight.position.set(6, 8, 6);
    scene.add(goldDirLight);

    // Electric Cyan & Violet Rim Lights
    const cyanLight = new THREE.DirectionalLight(0x00f2fe, 3.0);
    cyanLight.position.set(-6, -3, 4);
    scene.add(cyanLight);

    const coralLight = new THREE.PointLight(0xff4757, 3.0, 15);
    coralLight.position.set(0, -1, 2);
    scene.add(coralLight);

    // 4. Materials
    const goldPBR = new THREE.MeshStandardMaterial({
      color: 0xf5a623,
      metalness: 0.85,
      roughness: 0.2,
      emissive: 0x3d2800,
      emissiveIntensity: 0.2
    });

    const rocketBodyMat = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      metalness: 0.2,
      roughness: 0.3
    });

    const rocketRedMat = new THREE.MeshStandardMaterial({
      color: 0xee3b3b,
      metalness: 0.3,
      roughness: 0.35
    });

    const planetMat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      roughness: 0.4,
      metalness: 0.1
    });

    const planetRingMat = new THREE.MeshStandardMaterial({
      color: 0xfbbf24,
      roughness: 0.3,
      metalness: 0.7,
      side: THREE.DoubleSide
    });

    const bookCoverMat = new THREE.MeshStandardMaterial({
      color: 0x1e3a8a,
      roughness: 0.5
    });

    const bookPageMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.8
    });

    const smokeMat = new THREE.MeshStandardMaterial({
      color: 0xf1f5f9,
      roughness: 0.9,
      transparent: true,
      opacity: 0.85
    });

    const capMat = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      roughness: 0.4,
      metalness: 0.2
    });

    // 5. Root Interactive Group
    const worldGroup = new THREE.Group();
    scene.add(worldGroup);

    // ==========================================
    // A. THE MAGICAL OPEN BOOK AT BASE
    // ==========================================
    const bookGroup = new THREE.Group();
    bookGroup.position.set(0, -2.5, 0);
    bookGroup.rotation.x = 0.4;
    worldGroup.add(bookGroup);

    // Left Page
    const pageLeftGeo = new THREE.BoxGeometry(2.2, 0.15, 3.0);
    const pageLeft = new THREE.Mesh(pageLeftGeo, bookPageMat);
    pageLeft.position.set(-1.15, 0, 0);
    pageLeft.rotation.z = 0.12;
    bookGroup.add(pageLeft);

    const coverLeft = new THREE.Mesh(
      new THREE.BoxGeometry(2.3, 0.08, 3.1),
      bookCoverMat
    );
    coverLeft.position.set(-1.18, -0.1, 0);
    coverLeft.rotation.z = 0.12;
    bookGroup.add(coverLeft);

    // Right Page
    const pageRightGeo = new THREE.BoxGeometry(2.2, 0.15, 3.0);
    const pageRight = new THREE.Mesh(pageRightGeo, bookPageMat);
    pageRight.position.set(1.15, 0, 0);
    pageRight.rotation.z = -0.12;
    bookGroup.add(pageRight);

    const coverRight = new THREE.Mesh(
      new THREE.BoxGeometry(2.3, 0.08, 3.1),
      bookCoverMat
    );
    coverRight.position.set(1.18, -0.1, 0);
    coverRight.rotation.z = -0.12;
    bookGroup.add(coverRight);

    // Book spine gold trim
    const spine = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 3.1, 16),
      goldPBR
    );
    spine.rotation.x = Math.PI / 2;
    spine.position.y = -0.12;
    bookGroup.add(spine);

    // Book glowing light aura
    const bookGlow = new THREE.PointLight(0x38bdf8, 3.5, 8);
    bookGlow.position.set(0, 0.8, 0);
    bookGroup.add(bookGlow);

    // ==========================================
    // B. 3D LAUNCHING SPACE ROCKET
    // ==========================================
    const rocketGroup = new THREE.Group();
    rocketGroup.position.set(0, 0.2, 0);
    worldGroup.add(rocketGroup);

    // Rocket Fuselage (White Cylinder)
    const bodyGeo = new THREE.CylinderGeometry(0.48, 0.55, 1.8, 32);
    const rocketBody = new THREE.Mesh(bodyGeo, rocketBodyMat);
    rocketGroup.add(rocketBody);

    // Rocket Nose Cone (Red Cone)
    const noseGeo = new THREE.ConeGeometry(0.48, 0.9, 32);
    const rocketNose = new THREE.Mesh(noseGeo, rocketRedMat);
    rocketNose.position.y = 1.35;
    rocketGroup.add(rocketNose);

    // Porthole Window
    const windowFrame = new THREE.Mesh(
      new THREE.TorusGeometry(0.2, 0.04, 16, 32),
      goldPBR
    );
    windowFrame.position.set(0, 0.35, 0.52);
    rocketGroup.add(windowFrame);

    const windowGlass = new THREE.Mesh(
      new THREE.CircleGeometry(0.19, 32),
      new THREE.MeshStandardMaterial({ color: 0x38bdf8, roughness: 0.1, metalness: 0.9 })
    );
    windowGlass.position.set(0, 0.35, 0.525);
    rocketGroup.add(windowGlass);

    // Rocket Fins / Wings (3 Triangular Extrusions)
    for (let i = 0; i < 3; i++) {
      const angle = (i * Math.PI * 2) / 3;
      const finShape = new THREE.Shape();
      finShape.moveTo(0, 0);
      finShape.lineTo(0.65, -0.6);
      finShape.lineTo(0.2, -0.6);
      finShape.lineTo(0, -0.2);
      finShape.closePath();

      const finGeo = new THREE.ExtrudeGeometry(finShape, { depth: 0.06, bevelEnabled: false });
      const fin = new THREE.Mesh(finGeo, rocketRedMat);
      fin.position.y = -0.3;
      fin.rotation.y = angle;
      fin.position.x = Math.sin(angle) * 0.45;
      fin.position.z = Math.cos(angle) * 0.45;
      rocketGroup.add(fin);
    }

    // Rocket Engine Thruster Nozzle
    const nozzle = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.42, 0.4, 32),
      goldPBR
    );
    nozzle.position.y = -1.0;
    rocketGroup.add(nozzle);

    // Rocket Flame (Bright Orange-Red Cone)
    const flameGeo = new THREE.ConeGeometry(0.32, 1.2, 16);
    const flameMat = new THREE.MeshBasicMaterial({ color: 0xff6b35 });
    const flame = new THREE.Mesh(flameGeo, flameMat);
    flame.position.y = -1.6;
    flame.rotation.x = Math.PI;
    rocketGroup.add(flame);

    // Inner yellow flame
    const innerFlameGeo = new THREE.ConeGeometry(0.18, 0.8, 16);
    const innerFlameMat = new THREE.MeshBasicMaterial({ color: 0xffd000 });
    const innerFlame = new THREE.Mesh(innerFlameGeo, innerFlameMat);
    innerFlame.position.y = -1.4;
    innerFlame.rotation.x = Math.PI;
    rocketGroup.add(innerFlame);

    // ==========================================
    // C. VOLUMETRIC SMOKE PUFFS / CLOUDS
    // ==========================================
    const smokeGroup = new THREE.Group();
    smokeGroup.position.set(0, -1.8, 0);
    worldGroup.add(smokeGroup);

    const smokeSpheres: THREE.Mesh[] = [];
    const smokeOffsets = [
      { x: 0, y: 0, z: 0, r: 0.45 },
      { x: -0.4, y: -0.3, z: 0.2, r: 0.4 },
      { x: 0.4, y: -0.3, z: -0.2, r: 0.42 },
      { x: 0.2, y: -0.5, z: 0.3, r: 0.35 },
      { x: -0.3, y: -0.5, z: -0.3, r: 0.38 }
    ];

    smokeOffsets.forEach(pos => {
      const puff = new THREE.Mesh(new THREE.SphereGeometry(pos.r, 16, 16), smokeMat);
      puff.position.set(pos.x, pos.y, pos.z);
      smokeGroup.add(puff);
      smokeSpheres.push(puff);
    });

    // ==========================================
    // D. 3D RINGED PLANET (Saturn Style)
    // ==========================================
    const planetGroup = new THREE.Group();
    planetGroup.position.set(3.4, 2.0, -1);
    worldGroup.add(planetGroup);

    const planetSphere = new THREE.Mesh(
      new THREE.SphereGeometry(0.68, 32, 32),
      planetMat
    );
    planetGroup.add(planetSphere);

    const planetRing = new THREE.Mesh(
      new THREE.RingGeometry(0.9, 1.45, 48),
      planetRingMat
    );
    planetRing.rotation.x = Math.PI / 2.5;
    planetGroup.add(planetRing);

    // ==========================================
    // E. 3D GRADUATION CAP (Mortarboard)
    // ==========================================
    const capGroup = new THREE.Group();
    capGroup.position.set(-3.2, 1.8, -0.5);
    worldGroup.add(capGroup);

    // Top square plate
    const capPlate = new THREE.Mesh(
      new THREE.BoxGeometry(1.4, 0.06, 1.4),
      capMat
    );
    capPlate.rotation.y = Math.PI / 4;
    capGroup.add(capPlate);

    // Skull cap underneath
    const capSkull = new THREE.Mesh(
      new THREE.CylinderGeometry(0.45, 0.45, 0.4, 24),
      capMat
    );
    capSkull.position.y = -0.22;
    capGroup.add(capSkull);

    // Gold Button on top
    const capButton = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 0.08, 16),
      goldPBR
    );
    capButton.position.y = 0.05;
    capGroup.add(capButton);

    // Gold Tassel ribbon
    const tassel = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.05, 0.7, 8),
      goldPBR
    );
    tassel.position.set(0.45, -0.3, 0.45);
    tassel.rotation.z = -0.4;
    capGroup.add(tassel);

    // ==========================================
    // F. FLOATING 3D GOLD TROPHY
    // ==========================================
    const trophyGroup = new THREE.Group();
    trophyGroup.position.set(2.6, -1.2, 0.8);
    trophyGroup.scale.set(0.65, 0.65, 0.65);
    worldGroup.add(trophyGroup);

    const trophyCup = new THREE.Mesh(
      new THREE.CylinderGeometry(0.7, 0.3, 0.9, 24),
      goldPBR
    );
    trophyGroup.add(trophyCup);

    const trophyStem = new THREE.Mesh(
      new THREE.CylinderGeometry(0.15, 0.18, 0.5, 16),
      goldPBR
    );
    trophyStem.position.y = -0.65;
    trophyGroup.add(trophyStem);

    const trophyBase = new THREE.Mesh(
      new THREE.CylinderGeometry(0.6, 0.7, 0.3, 16),
      goldPBR
    );
    trophyBase.position.y = -0.95;
    trophyGroup.add(trophyBase);

    // ==========================================
    // G. 3D FLOATING PENCIL
    // ==========================================
    const pencilGroup = new THREE.Group();
    pencilGroup.position.set(-2.5, -1.4, 0.8);
    pencilGroup.scale.set(0.7, 0.7, 0.7);
    worldGroup.add(pencilGroup);

    // Yellow pencil body (Hexagonal cylinder)
    const pencilBody = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 1.4, 6),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.4 })
    );
    pencilGroup.add(pencilBody);

    // Wooden cone tip
    const pencilTip = new THREE.Mesh(
      new THREE.ConeGeometry(0.18, 0.45, 6),
      new THREE.MeshStandardMaterial({ color: 0xfde68a, roughness: 0.6 })
    );
    pencilTip.position.y = 0.92;
    pencilGroup.add(pencilTip);

    // Lead point
    const lead = new THREE.Mesh(
      new THREE.ConeGeometry(0.06, 0.15, 6),
      new THREE.MeshStandardMaterial({ color: 0x1e293b, roughness: 0.2 })
    );
    lead.position.y = 1.1;
    pencilGroup.add(lead);

    // Pink eraser
    const eraser = new THREE.Mesh(
      new THREE.CylinderGeometry(0.18, 0.18, 0.25, 16),
      new THREE.MeshStandardMaterial({ color: 0xf43f5e, roughness: 0.5 })
    );
    eraser.position.y = -0.8;
    pencilGroup.add(eraser);

    // ==========================================
    // H. COSMIC STARFIELD & FLOATING EMBERS
    // ==========================================
    const starCount = 350;
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    const colorPalette = [
      new THREE.Color(0xffd700), // Gold
      new THREE.Color(0x38bdf8), // Cyan
      new THREE.Color(0xff4757), // Coral
      new THREE.Color(0xffffff)  // White
    ];

    for (let i = 0; i < starCount; i++) {
      starPositions[i * 3] = (Math.random() - 0.5) * 20;
      starPositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      starPositions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      starColors[i * 3] = c.r;
      starColors[i * 3 + 1] = c.g;
      starColors[i * 3 + 2] = c.b;
    }

    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 0.065,
      vertexColors: true,
      transparent: true,
      opacity: 0.9
    });

    const starfield = new THREE.Points(starGeo, starMat);
    scene.add(starfield);

    // ==========================================
    // I. MOUSE / TOUCH PARALLAX INTERACTION
    // ==========================================
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
      mouseX = x * 0.4;
      mouseY = y * 0.25;
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const touch = e.touches[0];
        const rect = container.getBoundingClientRect();
        const x = ((touch.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -(((touch.clientY - rect.top) / rect.height) * 2 - 1);
        mouseX = x * 0.3;
        mouseY = y * 0.2;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('touchmove', onTouchMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };
    window.addEventListener('resize', handleResize);

    // ==========================================
    // J. ANIMATION LOOP (Vibrant 60fps)
    // ==========================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const t = clock.getElapsedTime();

      // Smooth interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      worldGroup.rotation.y = targetX * 0.8 + Math.sin(t * 0.4) * 0.05;
      worldGroup.rotation.x = targetY * 0.6 + Math.cos(t * 0.5) * 0.03;

      // Rocket flight hovering
      rocketGroup.position.y = 0.2 + Math.sin(t * 2.5) * 0.18;
      rocketGroup.position.x = Math.sin(t * 1.5) * 0.08;
      rocketGroup.rotation.z = Math.sin(t * 2.0) * 0.06;
      rocketGroup.rotation.y = t * 0.5;

      // Flame flickering
      flame.scale.y = 1 + Math.sin(t * 18) * 0.25;
      innerFlame.scale.y = 1 + Math.cos(t * 22) * 0.2;

      // Smoke puff pulsing
      smokeSpheres.forEach((puff, idx) => {
        puff.scale.setScalar(1 + Math.sin(t * 3 + idx) * 0.12);
        puff.rotation.y += 0.01;
      });

      // Planet rotation & orbit
      planetGroup.rotation.y = t * 0.3;
      planetGroup.position.y = 2.0 + Math.sin(t * 1.2) * 0.15;

      // Graduation Cap floating
      capGroup.rotation.y = Math.sin(t * 0.8) * 0.25;
      capGroup.rotation.z = Math.cos(t * 0.9) * 0.1;
      capGroup.position.y = 1.8 + Math.cos(t * 1.4) * 0.18;

      // Trophy floating & gleam
      trophyGroup.rotation.y = t * 0.8;
      trophyGroup.position.y = -1.2 + Math.sin(t * 1.6) * 0.14;

      // Pencil tilting
      pencilGroup.rotation.z = -0.5 + Math.sin(t * 1.3) * 0.2;
      pencilGroup.rotation.y += 0.015;
      pencilGroup.position.y = -1.4 + Math.cos(t * 1.5) * 0.15;

      // Starfield slow drift
      starfield.rotation.y = t * 0.015;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  if (!hasWebGL) {
    return (
      <div className="relative w-full h-[480px] sm:h-[580px] flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/10 via-amber-500/10 to-transparent rounded-3xl blur-2xl"></div>
        <div className="relative z-10 flex flex-col items-center text-center p-8 border border-amber-400/20 rounded-3xl bg-slate-900/60 backdrop-blur-xl">
          <img src="/logo.jpg" alt="Ray Talent Hunt Olympiad" className="w-24 h-24 rounded-2xl mb-4 shadow-xl" />
          <span className="text-xl font-bold text-amber-400">Ray Talent Hunt Olympiad</span>
          <p className="text-xs text-slate-400 mt-2">Nurturing Young Minds, Building Future Leaders</p>
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[460px] sm:h-[540px] lg:h-[620px] cursor-grab active:cursor-grabbing select-none"
      title="3D Cosmic Knowledge World • Drag to rotate"
    >
      {/* 3D Interactive Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/80 border border-cyan-500/30 backdrop-blur-md text-[11px] font-medium text-cyan-200 shadow-xl shadow-cyan-950/50">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
        <span>Interactive 3D Stage • Rocket & Knowledge Launch</span>
      </div>
    </div>
  );
};
