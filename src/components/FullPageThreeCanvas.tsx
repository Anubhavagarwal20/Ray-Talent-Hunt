import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const FullPageThreeCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) return;
    } catch {
      return;
    }

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 15);

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 2. Lighting
    const ambientLight = new THREE.AmbientLight(0x38bdf8, 1.5);
    scene.add(ambientLight);

    const blueLight = new THREE.DirectionalLight(0x0284c7, 3.0);
    blueLight.position.set(10, 15, 10);
    scene.add(blueLight);

    const cyanLight = new THREE.DirectionalLight(0x38bdf8, 2.5);
    cyanLight.position.set(-10, -10, 10);
    scene.add(cyanLight);

    const goldPoint = new THREE.PointLight(0xffb800, 2.0, 25);
    goldPoint.position.set(0, 0, 5);
    scene.add(goldPoint);

    // 3. Materials
    // "Icy" Frosted Glass Material for Floating Boards
    const icyGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xbae6fd,
      metalness: 0.1,
      roughness: 0.15,
      transmission: 0.85,
      thickness: 1.2,
      transparent: true,
      opacity: 0.45,
      reflectivity: 0.9,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1
    });

    const icyEdgeMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7
    });

    const goldCoinMat = new THREE.MeshStandardMaterial({
      color: 0xf59e0b,
      metalness: 0.85,
      roughness: 0.25,
      emissive: 0xb45309,
      emissiveIntensity: 0.2
    });

    const blueSphereMat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      roughness: 0.3,
      metalness: 0.5
    });

    // 4. Floating 3D Elements Group
    const floatingGroup = new THREE.Group();
    scene.add(floatingGroup);

    // ===============================================
    // A. FLOATING ICY TEXT BOARDS / FROSTED PANELS
    // ===============================================
    const icyBoards: {
      mesh: THREE.Mesh;
      baseY: number;
      speedY: number;
      rotSpeedX: number;
      rotSpeedY: number;
    }[] = [];

    const boardConfigs = [
      { x: -7.5, y: 3.5, z: -2, w: 2.8, h: 1.8, rx: 0.2, ry: 0.4 },
      { x: 7.2, y: 1.5, z: -3, w: 3.2, h: 2.0, rx: -0.3, ry: -0.3 },
      { x: -6.8, y: -4.5, z: -1.5, w: 2.5, h: 1.5, rx: 0.15, ry: 0.3 },
      { x: 6.5, y: -6.0, z: -2.5, w: 3.0, h: 1.8, rx: -0.2, ry: 0.25 },
      { x: -3.5, y: -12.0, z: -4, w: 3.5, h: 2.2, rx: 0.1, ry: -0.2 },
      { x: 5.5, y: -15.5, z: -3, w: 2.8, h: 1.8, rx: -0.15, ry: 0.3 }
    ];

    boardConfigs.forEach((cfg) => {
      const geo = new THREE.BoxGeometry(cfg.w, cfg.h, 0.08);
      const mesh = new THREE.Mesh(geo, icyGlassMat);
      mesh.position.set(cfg.x, cfg.y, cfg.z);
      mesh.rotation.set(cfg.rx, cfg.ry, 0);

      // Add cyan glowing edge wireframe
      const edges = new THREE.EdgesGeometry(geo);
      const line = new THREE.LineSegments(edges, icyEdgeMat);
      mesh.add(line);

      floatingGroup.add(mesh);
      icyBoards.push({
        mesh,
        baseY: cfg.y,
        speedY: 0.8 + Math.random() * 0.5,
        rotSpeedX: 0.003 + Math.random() * 0.003,
        rotSpeedY: 0.004 + Math.random() * 0.003
      });
    });

    // ===============================================
    // B. FLOATING 3D GOLD MEDALS / TOKENS
    // ===============================================
    const coins: THREE.Mesh[] = [];
    const coinPositions = [
      { x: -5.2, y: 1.0, z: 0 },
      { x: 5.8, y: 4.2, z: -1 },
      { x: 7.0, y: -2.5, z: 1 },
      { x: -6.0, y: -8.0, z: 0.5 },
      { x: 4.8, y: -10.5, z: -1.5 }
    ];

    coinPositions.forEach((pos) => {
      const coinGeo = new THREE.CylinderGeometry(0.5, 0.5, 0.08, 32);
      const coin = new THREE.Mesh(coinGeo, goldCoinMat);
      coin.position.set(pos.x, pos.y, pos.z);
      coin.rotation.x = Math.PI / 3;
      coin.rotation.z = Math.random() * Math.PI;
      floatingGroup.add(coin);
      coins.push(coin);
    });

    // ===============================================
    // C. FLOATING 3D ICY SPHERES & RINGS
    // ===============================================
    const spheres: THREE.Mesh[] = [];
    const spherePositions = [
      { x: -4.0, y: 5.5, z: -2, r: 0.4 },
      { x: 6.8, y: -0.5, z: -1, r: 0.55 },
      { x: -7.0, y: -1.5, z: -3, r: 0.45 },
      { x: 3.5, y: -8.5, z: -1, r: 0.35 }
    ];

    spherePositions.forEach((pos) => {
      const sphereGeo = new THREE.SphereGeometry(pos.r, 24, 24);
      const sphere = new THREE.Mesh(sphereGeo, blueSphereMat);
      sphere.position.set(pos.x, pos.y, pos.z);
      floatingGroup.add(sphere);
      spheres.push(sphere);
    });

    // Torus Rings
    const ringGeo = new THREE.TorusGeometry(0.7, 0.05, 16, 48);
    const ring1 = new THREE.Mesh(ringGeo, icyGlassMat);
    ring1.position.set(-6.2, 0.2, -1.5);
    floatingGroup.add(ring1);

    const ring2 = new THREE.Mesh(ringGeo, goldCoinMat);
    ring2.position.set(5.5, -4.5, 0);
    floatingGroup.add(ring2);

    // ===============================================
    // D. 400 FLOATING ICY PARTICLES & STAR SPARKS
    // ===============================================
    const particleCount = 350;
    const particlePos = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const palette = [
      new THREE.Color(0x38bdf8), // Cyan
      new THREE.Color(0x0284c7), // Sky
      new THREE.Color(0xf59e0b), // Gold
      new THREE.Color(0xffffff)  // White
    ];

    for (let i = 0; i < particleCount; i++) {
      particlePos[i * 3] = (Math.random() - 0.5) * 28;
      particlePos[i * 3 + 1] = (Math.random() - 0.5) * 40; // Spans full scroll height
      particlePos[i * 3 + 2] = (Math.random() - 0.5) * 12;

      const c = palette[Math.floor(Math.random() * palette.length)];
      particleColors[i * 3] = c.r;
      particleColors[i * 3 + 1] = c.g;
      particleColors[i * 3 + 2] = c.b;
    }

    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePos, 3));
    particleGeo.setAttribute('color', new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.08,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    const particles = new THREE.Points(particleGeo, particleMat);
    floatingGroup.add(particles);

    // ===============================================
    // E. SCROLL & MOUSE TRACKING ("Surfing" Response)
    // ===============================================
    let scrollY = window.scrollY;
    let targetScrollY = scrollY;
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onScroll = () => {
      targetScrollY = window.scrollY;
    };

    const onMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = -(e.clientY / window.innerHeight) * 2 + 1;
      targetMouseX = x * 0.8;
      targetMouseY = y * 0.5;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    // ===============================================
    // F. RENDER ANIMATION LOOP
    // ===============================================
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      // Smooth scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.08;
      // Parallax shift based on scroll
      camera.position.y = -(scrollY * 0.005);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      floatingGroup.rotation.y = mouseX * 0.2 + Math.sin(elapsed * 0.2) * 0.04;
      floatingGroup.rotation.x = mouseY * 0.15;

      // Animate Icy Boards
      icyBoards.forEach((board, idx) => {
        board.mesh.position.y = board.baseY + Math.sin(elapsed * board.speedY + idx) * 0.35;
        board.mesh.rotation.x += board.rotSpeedX;
        board.mesh.rotation.y += board.rotSpeedY;
      });

      // Animate Coins
      coins.forEach((coin, idx) => {
        coin.rotation.y = elapsed * 1.5 + idx;
        coin.rotation.x = Math.PI / 3 + Math.sin(elapsed * 2 + idx) * 0.1;
      });

      // Animate Spheres & Rings
      spheres.forEach((s, idx) => {
        s.position.y += Math.sin(elapsed * 1.8 + idx) * 0.004;
      });

      ring1.rotation.x += 0.01;
      ring1.rotation.y += 0.015;
      ring2.rotation.x += 0.015;
      ring2.rotation.z += 0.01;

      // Particle slow drift
      particles.rotation.y = elapsed * 0.01;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      style={{ opacity: 0.9 }}
    />
  );
};
