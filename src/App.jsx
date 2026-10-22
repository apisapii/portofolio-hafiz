import React, { useState, useEffect, useRef } from 'react';
import './App.css';

export default function App() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('all');
  const [selectedDesign, setSelectedDesign] = useState(null);

  // Refs untuk grup SVG Hero
  const sceneRef = useRef(null);
  const skyBackRef = useRef(null);
  const planesRef = useRef(null);
  const islandRef = useRef(null);
  const plumeRef = useRef(null);
  const embersRef = useRef(null);
  const wordRef = useRef(null);
  const skyFrontRef = useRef(null);

  // Data Karya Desain Berdasarkan Event & Pengalaman Nyata Hafiz
  const designProjects = [
    {
      id: 1,
      category: 'postingan',
      title: 'Kampanye Media Sosial Edufestia 25 Tahun PCR',
      client: 'Edufestia Road to 25 Tahun Politeknik Caltex Riau',
      tag: 'Instagram Feed & Carousel',
      color: '#f47b20',
      desc: 'Perancangan desain feed Instagram interaktif dan carousel informatif perayaan seperempat abad Politeknik Caltex Riau, memadukan elemen modern kampus dan daya tarik visual bagi mahasiswa.',
      tags: ['Publikasi & Dokumentasi', 'Instagram Carousel', 'Event Kampus PCR'],
      previewType: 'postingan-1'
    },
    {
      id: 2,
      category: 'logo',
      title: 'Identitas Visual & Branding Lomba INNOBIZ',
      client: 'INNOBIZ (Inovasi Bisnis Mahasiswa & Siswa)',
      tag: 'Brand Identity & Logo Suite',
      color: '#d4f56a',
      desc: 'Konsep identitas visual dan logo modern untuk ajang kompetisi ide bisnis kreatif antar siswa dan mahasiswa, memancarkan semangat inovasi, teknologi, dan kewirausahaan muda.',
      tags: ['Logo Design', 'Visual Identity', 'Digital Business'],
      previewType: 'logo-1'
    },
    {
      id: 3,
      category: 'poster',
      title: 'Poster Publikasi BK Fair Tingkat Provinsi',
      client: 'BK Fair Tingkat Propinsi Riau',
      tag: 'Event & Print Poster',
      color: '#a8e4ef',
      desc: 'Desain poster promosi resmi skala provinsi dengan tata letak dinamis, pemilihan tipografi hierarkis yang tegas, dan kesiapan cetak resolusi tinggi untuk publikasi luas.',
      tags: ['Poster A2', 'Tingkat Provinsi', 'Print Ready', 'Publikasi Acara'],
      previewType: 'poster-1'
    },
    {
      id: 4,
      category: 'postingan',
      title: 'Seri Konten Media Sosial & Reels Funwalk Road to 25th PCR',
      client: 'Funwalk 25 Tahun Politeknik Caltex Riau',
      tag: 'Social Media Content',
      color: '#ff8fb1',
      desc: 'Rangkaian postingan jadwal rute, countdown acara, dan infografis merchandise resmi jalan santai akbar yang meningkatkan partisipasi civitas akademika.',
      tags: ['Social Media Design', 'Countdown Feed', 'PCR Event'],
      previewType: 'postingan-2'
    },
    {
      id: 5,
      category: 'logo',
      title: 'Lambang & Monogram Kemahasiswaan SERIES BEM/BLM',
      client: 'Series Event BEM / BLM Kemahasiswaan',
      tag: 'Monogram & Event Emblem',
      color: '#a8e4ef',
      desc: 'Desain emblem logo dan grafis panggung bertema kepemimpinan mahasiswa dengan aksen garis presisi dan harmoni palet warna formal-kontemporer.',
      tags: ['Event Logo', 'Organisasi Mahasiswa', 'BEM/BLM'],
      previewType: 'logo-2'
    },
    {
      id: 6,
      category: 'poster',
      title: 'Poster Promosi Kampus PCR Goes To School (GTS)',
      client: 'PCR GTS (Goes To School)',
      tag: 'Promotional Poster',
      color: '#f47b20',
      desc: 'Poster edukasi dan promosi program studi unggulan Politeknik Caltex Riau yang disebarkan ke berbagai SMA/SMK sederajat untuk menjaring calon mahasiswa baru.',
      tags: ['Poster Edukasi', 'Branding Kampus', 'Goes To School'],
      previewType: 'poster-2'
    }
  ];

  const filteredProjects = activeTab === 'all' 
    ? designProjects 
    : designProjects.filter(p => p.category === activeTab);

  // Proses kerja Hafiz
  const workflowSteps = [
    {
      step: '01',
      title: 'Brief & Riset Audiens Acara',
      desc: 'Memahami tujuan kepanitiaan/klien, target sasaran (mahasiswa, siswa, atau publik), serta menyusun moodboard visual yang relevan.',
      tag: 'Discovery'
    },
    {
      step: '02',
      title: 'Eksplorasi Konsep & Layout Sketsa',
      desc: 'Mengembangkan beberapa alternatif tata letak poster, visual feed medsos, atau sketsa logo dengan hierarki informasi yang terarah.',
      tag: 'Ideation'
    },
    {
      step: '03',
      title: 'Eksekusi Vektor & Detail Visual',
      desc: 'Mengolah desain presisi di Figma dan Adobe Illustrator, mematangkan tipografi, warna, rasio aspek, dan aset editing foto/video.',
      tag: 'Production'
    },
    {
      step: '04',
      title: 'Publikasi & Handover Siap Pakai',
      desc: 'Menyiapkan file siap cetak resolusi tinggi (A2/A3/Banner) dan format optimal digital (Story, Feed Carousel, Thumbnail medsos).',
      tag: 'Delivery'
    }
  ];

  // Riwayat Pengalaman Kepanitiaan & Publikasi Dokumentasi (Sesuai CV)
  const experienceData = [
    {
      role: 'Anggota Divisi Publikasi',
      place: 'Innobiz 2026',
      period: '2026',
      desc: 'Berperan aktif sebagai panitia dalam event lomba inovasi bisnis antar siswa dan mahasiswa, memproduksi seluruh konten media sosial promosi.'
    },
    {
      role: 'Anggota Divisi Dokumentasi',
      place: 'Mubes Hima 2026',
      period: '2026',
      desc: 'Berperan aktif sebagai panitia kegiatan tingkat Program Studi Bisnis Digital, mendokumentasikan jalannya musyawarah besar secara menyeluruh.'
    },
    {
      role: 'Anggota Divisi Dokumentasi',
      place: 'Series 2025 (BEM / BLM)',
      period: '2025',
      desc: 'Berperan aktif dalam event kemahasiswaan tingkat BEM/BLM, mendokumentasikan acara dan memproduksi segala kebutuhan desain publikasi.'
    },
    {
      role: 'Anggota Divisi Dokumentasi & Publikasi',
      place: 'Edufestia Road to 25 Tahun Politeknik Caltex Riau',
      period: '2025',
      desc: 'Panitia perayaan tingkat PCR, bertanggung jawab penuh atas dokumentasi acara, pembuatan materi desain grafis, dan konten media sosial.'
    },
    {
      role: 'Anggota Divisi Dokumentasi & Publikasi',
      place: 'Funwalk Road to 25 Tahun Politeknik Caltex Riau',
      period: '2025',
      desc: 'Mendokumentasikan seluruh rangkaian acara jalan santai, merancang materi visual grafis, banner, dan feed media sosial.'
    },
    {
      role: 'Anggota Divisi Dokumentasi',
      place: 'BK Fair Tingkat Propinsi',
      period: '2025',
      desc: 'Panitia event skala provinsi, bertugas mendokumentasikan kegiatan serta merancang segala kebutuhan desain promosi dan publikasi.'
    },
    {
      role: 'Anggota Divisi Dokumentasi',
      place: 'PCR GTS (Goes To School)',
      period: '2025',
      desc: 'Mempromosikan Politeknik Caltex Riau ke sekolah-sekolah melalui video editing, desain media edukasi, dan dokumentasi lapangan.'
    },
    {
      role: 'Anggota Divisi Dokumentasi & Publikasi',
      place: 'Innobiz 2025',
      period: '2025',
      desc: 'Mendokumentasikan acara, membuat konten grafis media sosial, dan materi publikasi kepanitiaan tingkat kampus.'
    }
  ];

  // Pendidikan (Sesuai CV)
  const educationData = {
    institution: 'Politeknik Caltex Riau',
    major: 'D4 Bisnis Digital',
    period: '2024 — 2028',
    gpa: '3.59 (Cumlaude)',
    highlights: ['Desain UI/UX (Nilai AB)', 'Pemrograman Web (Nilai A)', 'Management Pemasaran (Nilai A)', 'Kreativitas & Bisnis Digital']
  };

  useEffect(() => {
    if (!sceneRef.current) return;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const SVGNS = "http://www.w3.org/2000/svg";

    const el = (tag, attrs = {}, parent) => {
      const n = document.createElementNS(SVGNS, tag);
      for (const k in attrs) n.setAttribute(k, attrs[k]);
      if (parent) parent.appendChild(n);
      return n;
    };

    const txt = (parent, s, attrs) => { 
      const t = el("text", attrs, parent); 
      t.textContent = s; 
      return t; 
    };

    const rand = (a, b) => a + Math.random() * (b - a);
    const wait = ms => new Promise(r => setTimeout(r, ms));

    const C = { ink: "#111", lime: "#d4f56a", green: "#8bc53f", sky: "#a8e4ef", orange: "#f47b20", white: "#fff", page: "#fffdf6", edge: "#efeadb", pink: "#ff8fb1" };
    const SERIF = "Instrument Serif, Georgia, serif";
    const SANS = "Satoshi, system-ui, sans-serif";

    const CHAPTERS = [
      {title: "Publikasi Medsos", icon: "card", img: C.sky, greet: "Halo, Hafiz!", rows: [C.orange, C.sky, C.white], cta: "Lihat Konten", dash: "Engagement", bars: [22, 40, 30, 52, 36, 46], flow: ["Riset Konten", "Visual Feed", "Publikasi"] },
      {title: "Branding & Logo", icon: "bowl", img: C.lime, greet: "Ide Kreatif", rows: [C.lime, C.orange, C.white], cta: "Lihat Logo", dash: "Karakter", bars: [30, 26, 44, 38, 54, 48], flow: ["Filosofi", "Vektor", "Brand Aset"] },
      {title: "Poster Event PCR", icon: "heart", img: C.white, greet: "BK Fair 2025", rows: [C.sky, C.lime, C.orange], cta: "Cetak Poster", dash: "Audiens", bars: [18, 34, 50, 28, 44, 56], flow: ["Brief Acara", "Tipografi", "Cetak A2"] },
      {title: "Web & UI/UX Digital", icon: "plane", img: C.orange, greet: "Bisnis Digital", rows: [C.white, C.sky, C.lime], cta: "Jelajahi", dash: "Konversi Web", bars: [40, 24, 36, 50, 30, 42], flow: ["Wireframe", "Desain UI", "Deploy Web"] }
    ];

    // Bersihkan isi ref
    skyBackRef.current.innerHTML = '';
    planesRef.current.innerHTML = '';
    islandRef.current.innerHTML = '';
    plumeRef.current.innerHTML = '';
    embersRef.current.innerHTML = '';
    wordRef.current.innerHTML = '';
    skyFrontRef.current.innerHTML = '';

    const CLOUD = [[0,0,26],[30,-14,32],[64,-4,26], [88,8,18],[-24,10,18], [44,12,24], [14,14,20]];
    function cloud(parent, x, y, s, t = 14, dx = 14) {
      const g = el("g", { transform: `translate(${x} ${y}) scale(${s})`, filter: "url(#paper)" }, parent);
      const inner = el("g", { class: "drift", style: `--t:${t}s; --dx:${dx}px` }, g);
      CLOUD.forEach(([cx, cy, r]) => el("circle", { cx, cy, r: r + 1.6, fill: C.ink }, inner));
      CLOUD.forEach(([cx, cy, r]) => el("circle", { cx, cy, r, fill: C.white }, inner));
      el("rect", {x: -40, y: 18, width: 140, height: 16, fill: C.white }, inner);
      el("line", { x1: -42, y1: 34.5, x2: 104, y2: 34.5, stroke: C.ink, "stroke-width": 2}, inner);
    }

    // Bangun Background (Awan & Bintang)
    cloud(skyBackRef.current, 30, 60, .8, 16, 18);
    cloud(skyBackRef.current, 450, 30, .7, 19, -14);
    cloud(skyBackRef.current, 500, 420, .65, 14, 12);
    cloud(skyBackRef.current, 10, 440, .7, 17, -12);

    [[170, 70, C.orange, .8], [575, 250, C.lime, .8], [40, 270, C.lime, 1], [560, 580, C.orange, .7], [40, 620, C.white, .8], [330, 40, C.white, .6]].forEach(([x, y, fill, s], i) => {
      const g = el("g", { transform: `translate(${x} ${y}) scale(${s})`, filter: "url(#paper)" }, skyBackRef.current);
      const st = el("g", { class: "twinkle", style: `--dl:${(-i * .5).toFixed(1)}s` }, g);
      el("path", { d: "M0 -18 Q 3 -3 18 0 Q 3 3 0 18 Q -3 3 -18 0 Q -3 -3 0 -18 Z", fill, stroke: C.ink, "stroke-width": 2.2, "stroke-linejoin": "round" }, st);
    });

    // Kertas Berterbangan (Loose pages)
    [[80, 170, -14, 5.2, C.sky], [520, 150, 12, 6.1, C.lime], [96, 720, -9, 4.8, C.orange], [500, 712, 10, 5.6, C.sky]].forEach(([x, y, rot, t, img], i) => {
      const g = el("g", { transform: `translate(${x} ${y}) rotate(${rot}) scale(.85)`, filter: "url(#paperDeep)" }, planesRef.current);
      const f = el("g", { class: "flutter", style: `--t:${t}s; --dl:${(-i * 1.3).toFixed(1)}s` }, g);
      el("path", { d: "M-34 -44 H22 L34 -32 V44 H-34 Z", fill: C.page, stroke: C.ink, "stroke-width": 2.2, "stroke-linejoin": "round" }, f);
      el("path", { d: "M22 -44 V-32 H34", fill: C.edge, stroke: C.ink, "stroke-width": 2.2, "stroke-linejoin": "round" }, f);
      el("rect", {x: -24, y: -32, width: 40, height: 28, rx: 3, fill: img, stroke: C.ink, "stroke-width": 1.8 }, f);
      [6, 15, 24, 33].forEach((ly, k) => el("rect", {x: -24, y: ly, width: k === 3 ? 26 : 48, height: 3.5, rx: 1.75, fill: C.ink, opacity: k === 0 ? 1 : .45 }, f));
    });

    // Buku Terbuka
    const LEFT = "M86 642 Q 192 624 300 648 L300 748 Q 192 734 88 748 Z";
    const RIGHT = "M300 648 Q 408 624 514 642 L512 748 Q 408 734 300 748 Z";
    
    const leftBook = el("g", { class: "leftBook", filter: "url(#paperDeep)" }, islandRef.current);
    el("path", { d: "M66 652 Q 184 634 300 654 L300 776 Q 182 756 60 772 Z", fill: C.orange, stroke: C.ink, "stroke-width": 2.6, "stroke-linejoin": "round" }, leftBook);
    [10, 6, 2].forEach(o => el("path", {d: `M78 ${648 + o} Q 190 ${630 + o} 300 ${652 + o} L300 ${752 + o} Q 190 ${738 + o} 80 ${754 + o} Z`, fill: C.edge, stroke: C.ink, "stroke-width": 1.6 }, leftBook));
    el("path", { d: LEFT, fill: C.page, stroke: C.ink, "stroke-width": 2.2 }, leftBook);
    el("path", { d: LEFT, fill: "url(#gutter)" }, leftBook);

    const rightBook = el("g", { filter: "url(#paperDeep)" }, islandRef.current);
    el("path", { d: "M300 654 Q 416 634 534 652 L540 772 Q 418 756 300 776 Z", fill: C.orange, stroke: C.ink, "stroke-width": 2.6, "stroke-linejoin": "round" }, rightBook);
    el("path", { d: "M384 760 L384 812 L394 802 L404 812 L404 758 Z", fill: C.lime, stroke: C.ink, "stroke-width": 2.2, "stroke-linejoin": "round" }, rightBook);
    [10, 6, 2].forEach(o => el("path", { d: `M300 ${652 + o} Q 410 ${630 + o} 522 ${648 + o} L520 ${754 + o} Q 410 ${738 + o} 300 ${752 + o} Z`, fill: C.edge, stroke: C.ink, "stroke-width": 1.6}, rightBook));
    el("path", { d: RIGHT, fill: C.page, stroke: C.ink, "stroke-width": 2.2 }, rightBook);
    el("path", { d: RIGHT, fill: "url(#gutterR)" }, rightBook);
    el("line", { x1: 300, y1: 648, x2: 300, y2: 748, stroke: C.ink, "stroke-width": 2}, rightBook);

    const turn = el("g", { class: "turn" }, islandRef.current);
    el("path", { d: RIGHT, fill: C.page, stroke: C.ink, "stroke-width": 2.2 }, turn);
    [664, 678, 692].forEach((y, k) => el("rect", {x: 330, y, width: k === 2 ? 80 : 140, height: 4, rx: 2, fill: C.ink, opacity: .3 }, turn));

    let order = 0;
    function popup(x, base, rot, tabW = 24) {
      const outer = el("g", { transform: `translate(${x} ${base}) rotate(${rot})`, filter: "url(#paperDeep)" }, plumeRef.current);
      const p = el("g", { class: "pop screen", style: `--pd:${(.95 + order++ * .14).toFixed(2)}s` }, outer);
      const b = el("g", { class: "bob", style: `--dl:${(-order * .6).toFixed(1)}s; --rot:${order % 2 ? 1 : -1}deg` }, p);
      if (tabW) el("path", {d: `M${-tabW/2 - 2} 4 L${-tabW/2} -2 L${tabW/2} -2 L${tabW/2 + 4} 4 L${-tabW/2 - 4} 4 Z`, fill: C.edge, stroke: C.ink, "stroke-width": 1.8, "stroke-linejoin": "round" }, b);
      return el("g", {}, b);
    }

    const slotCard = popup(162, 652, -6);
    const slotPhone = popup(300, 652, 0, 30);
    const slotDash = popup(440, 652, 6);
    const slotFlow = popup(300, 404, 0, 0);

    let chapterLabel;

    function icon(g, kind) {
      if (kind === "card") {
        el("rect", {x: -30, y: -104, width: 60, height: 38, rx: 6, fill: C.lime, stroke: C.ink, "stroke-width": 1.8, transform: "rotate(-8 0 -85)" }, g);
        el("rect", {x: -30, y: -96, width: 60, height: 7, fill: C.ink, transform: "rotate(-8 0 -85)" }, g);
        el("rect", {x: -22, y: -84, width: 12, height: 9, rx: 2, fill: C.orange, stroke: C.ink, "stroke-width": 1.4, transform: "rotate(-8 0 -85)" }, g);
      } else if (kind === "bowl") {
        el("path", { d: "M-30 -92 A 30 26 0 0 0 30 -92 Z", fill: C.orange, stroke: C.ink, "stroke-width": 1.8 }, g);
        el("line", {x1: -34, y1: -92, x2: 34, y2: -92, stroke: C.ink, "stroke-width": 2.2, "stroke-linecap": "round" }, g);
        [-12, 0, 12].forEach(x => el("path", {d: `M${x} -98 q-5 -6 0 -11 t 0 -10`, fill: "none", stroke: C.ink, "stroke-width": 1.8, "stroke-linecap": "round" }, g));
      } else if (kind === "heart") {
        el("path", { d: "M0 -66 C-34 -84 -30 -112 -12 -110 C-4 -110 0 -104 0 -100 C 0 -104 4 -110 12 -110 C 30 -112 34 -84 0 -66 Z", fill: C.pink, stroke: C.ink, "stroke-width": 1.8 }, g);
        el("path", { d: "M-44 -88 h18 l6 -10 l8 20 l6 -10 h50", fill: "none", stroke: C.ink, "stroke-width": 2, "stroke-linejoin": "round", "stroke-linecap": "round" }, g);
      } else {
        el("path", { d: "M-40 -66 q 30 -6 46 -34", fill: "none", stroke: C.ink, "stroke-width": 1.8, "stroke-dasharray": "4 4" }, g);
        el("path", {d: "M10 -104 L34 -96 L22 -90 L14 -78 L10 -82 L14 -92 L4 -96 L0 -92 L-3 -94 L2 -100 Z", fill: C.white, stroke: C.ink, "stroke-width": 1.6, "stroke-linejoin": "round", transform: "rotate(-20 14 -92)" }, g);
      }
    }

    function renderChapter(ch, n) {
      [slotCard, slotPhone, slotDash, slotFlow].forEach(s => s.replaceChildren());

      // 1. Card
      let p = slotCard;
      el("rect", {x: -62, y: -170, width: 124, height: 168, rx: 10, fill: C.white, stroke: C.ink, "stroke-width": 2.4 }, p);
      txt(p, `KARYA 0${n + 1}`, {x: -50, y: -150, "font-family": SANS, "font-weight": 700, "font-size": 9, "letter-spacing": 1.4, fill: C.orange });
      txt(p, ch.title, {x: -50, y: -128, "font-family": SERIF, "font-size": 17, fill: C.ink });
      el("rect", {x: -50, y: -118, width: 100, height: 60, rx: 6, fill: ch.img, stroke: C.ink, "stroke-width": 1.8 }, p);
      icon(p, ch.icon);
      [-46, -37, -28].forEach((y, k) => el("rect", {x: -50, y, width: k === 2 ? 60 : 100, height: 4, rx: 2, fill: C.ink, opacity: .4 }, p));
      el("rect", {x: -50, y: -18, width: 62, height: 12, rx: 6, fill: C.ink }, p);
      txt(p, "Detail →", {x: -19, y: -9, "text-anchor": "middle", "font-family": SANS, "font-weight": 700, "font-size": 7.5, fill: C.lime });

      // 2. Phone
      p = slotPhone;
      el("rect", {x: -56, y: -236, width: 112, height: 234, rx: 18, fill: C.ink }, p);
      el("rect", {x: -49, y: -228, width: 98, height: 218, rx: 13, fill: C.white }, p);
      el("rect", {x: -16, y: -224, width: 32, height: 7, rx: 3.5, fill: C.ink }, p);
      el("rect", {x: -41, y: -208, width: 82, height: 30, rx: 7, fill: C.lime, stroke: C.ink, "stroke-width": 1.6 }, p);
      txt(p, ch.greet, {x: -34, y: -189, "font-family": SERIF, "font-size": 14, fill: C.ink });
      ch.rows.forEach((fill, k) => {
        const y = -170 + k * 38;
        el("rect", {x: -41, y, width: 82, height: 30, rx: 7, fill, stroke: C.ink, "stroke-width": 1.6 }, p);
        el("circle", { cx: -28, cy: y + 15, r: 7, fill: C.white, stroke: C.ink, "stroke-width": 1.4 }, p);
        el("rect", {x: -16, y: y + 9, width: 42, height: 4, rx: 2, fill: C.ink }, p);
        el("rect", {x: -16, y: y + 18, width: 26, height: 4, rx: 2, fill: C.ink, opacity: .4 }, p);
      });
      el("rect", {x: -41, y: -52, width: 82, height: 22, rx: 11, fill: C.ink }, p);
      txt(p, ch.cta, {x: 0, y: -37.5, "text-anchor": "middle", "font-family": SANS, "font-weight": 700, "font-size": 9, fill: C.lime });

      // 3. Dashboard
      p = slotDash;
      el("rect", {x: -70, y: -126, width: 140, height: 124, rx: 10, fill: C.white, stroke: C.ink, "stroke-width": 2.4 }, p);
      el("line", {x1: -70, y1: -110, x2: 70, y2: -110, stroke: C.ink, "stroke-width": 2}, p);
      [0, 1, 2].forEach(d => el("circle", { cx: -60 + d * 7, cy: -118, r: 2, fill: [C.orange, C.lime, C.sky][d], stroke: C.ink, "stroke-width": 1 }, p));
      txt(p, ch.dash, {x: -58, y: -92, "font-family": SERIF, "font-size": 16, fill: C.ink });
      ch.bars.forEach((h, k) => el("rect", {x: -56 + k * 15, y: -20 - h, width: 10, height: h, rx: 2, fill: [C.orange, C.lime, C.sky][k % 3], stroke: C.ink, "stroke-width": 1.4}, p));
      el("line", { x1: -60, y1: -19, x2: 34, y2: -19, stroke: C.ink, "stroke-width": 1.6 }, p);
      el("circle", { cx: 50, cy: -60, r: 14, fill: C.lime, stroke: C.ink, "stroke-width": 1.6}, p);
      const ang = (ch.bars[5] / 60) * Math.PI * 1.6;
      el("path", { d: `M50 -60 L50 -74 A 14 14 0 ${ang > Math.PI ? 1 : 0} 1 ${50 + 14 * Math.sin(ang)} ${-60 - 14 * Math.cos(ang)} Z`, fill: C.orange, stroke: C.ink, "stroke-width": 1.4 }, p);

      // 4. Flow
      p = slotFlow;
      ch.flow.forEach((label, k) => {
        const x = -112 + k * 112;
        el("rect", {x: x - 44, y: -34, width: 88, height: 30, rx: 15, fill: [C.sky, C.lime, C.orange][k], stroke: C.ink, "stroke-width": 2.2 }, p);
        txt(p, label, { x, y: -14.5, "text-anchor": "middle", "font-family": SANS, "font-weight": 700, "font-size": 11, fill: C.ink });
        if (k < 2) el("path", {d: `M${x + 48} -19 h16 m-6 -5 l6 5 l-6 5`, fill: "none", stroke: C.ink, "stroke-width": 2.2, "stroke-linecap": "round", "stroke-linejoin": "round" }, p);
      });

      if (chapterLabel) chapterLabel.textContent = `BAB 0${n + 1}/0${CHAPTERS.length}: ${ch.title.toUpperCase()}`;
    }

    // Tulisan PORTOFOLIO pop-up
    const ADV = 62;
    [..."PORTOFOLIO"].forEach((ch, i) => {
      const x = 300 + (i - 5) * ADV + 31;
      const outer = el("g", {filter: "url(#paperDeep)" }, wordRef.current);
      const p = el("g", { class: "pop", style: `--pd:${(1.5 + i * .05).toFixed(2)}s` }, outer);
      const b = el("g", { class: "bob", style: `--dl:${(-i * .3).toFixed(2)}s; --rot:${i % 2 ? 1 : -1}deg` }, p);
      el("path", {d: `M${x - 11} 700 L${x + 11} 700 L${x + 15} 724 L${x - 15} 724 Z`, fill: C.edge, stroke: C.ink, "stroke-width": 1.8, "stroke-linejoin": "round" }, b);
      txt(b, ch, { x, y: 704, "text-anchor": "middle", "font-family": "Bowlby One, Impact, sans-serif", "font-size": 64, fill: (i === 3 || i === 7) ? C.orange : C.white, stroke: C.ink, "stroke-width": 2.6, "stroke-linejoin": "round", "paint-order": "stroke", transform: `rotate(${[-3, 2, -2, 3, -2, 2, -3, 2, -2, 1][i]} ${x} 680)` });
    });

    const coverFlip = el("g", { class: "coverFlip", filter: "url(#paperDeep)" }, wordRef.current);
    el("path", { d: "M300 650 Q 412 628 526 646 L524 762 Q 410 746 300 764 Z", fill: C.orange, stroke: C.ink, "stroke-width": 2.6, "stroke-linejoin": "round" }, coverFlip);
    el("path", { d: "M318 662 Q 412 644 508 658 L506 748 Q 410 734 318 750 Z", fill: "none", stroke: C.ink, "stroke-width": 1.4, opacity: .5 }, coverFlip);
    txt(coverFlip, "Karya Desain", {x: 412, y: 698, "text-anchor": "middle", "font-family": SERIF, "font-style": "italic", "font-size": 30, fill: C.ink, transform: "rotate(-3 412 698)" });
    txt(coverFlip, "HAFIZ VOL. 01", {x: 412, y: 722, "text-anchor": "middle", "font-family": SANS, "font-weight": 700, "font-size": 9, "letter-spacing": 2, fill: C.ink, transform: "rotate(-3 412 722)" });

    const labelG = el("g", { class: "chapter", filter: "url(#paper)" }, wordRef.current);
    el("rect", {x: 140, y: 828, width: 320, height: 28, rx: 14, fill: C.ink }, labelG);
    chapterLabel = txt(labelG, "", { x: 300, y: 846.5, "text-anchor": "middle", "font-family": SANS, "font-weight": 700, "font-size": 11, "letter-spacing": 1.4, fill: C.lime });

    cloud(skyFrontRef.current, 480, 800, 1.05, 15, -12);
    cloud(skyFrontRef.current, 70, 812, 1.15, 18, 14);
    cloud(skyFrontRef.current, 280, 848, .95, 12, 10);
    txt(skyFrontRef.current, "KLIK BUKU UNTUK MEMBUKA HALAMAN", {x: 300, y: 890, "text-anchor": "middle", "font-family": SANS, "font-weight": 700, "font-size": 11, "letter-spacing": 2, fill: C.ink });

    let chapter = 0;
    let busy = false;
    let timer;
    renderChapter(CHAPTERS[0], 0);

    const nextChapter = async () => {
      if (busy) return;
      busy = true;
      clearTimeout(timer);
      sceneRef.current?.classList.add("folding", "quick");
      await wait(320);

      if (!reduced && sceneRef.current) {
        turn.animate([
          { opacity: 1, transform: "scaleX(1)" },
          { opacity: 1, transform: "scaleX(0) skewY(-5deg)", offset: .5},
          { opacity: 1, transform: "scaleX(-1)", offset: .96 },
          { opacity: 0, transform: "scaleX(-1)"}
        ], { duration: 1000, easing: "ease-in-out" });
        await wait(500);
      }

      chapter = (chapter + 1) % CHAPTERS.length;
      renderChapter(CHAPTERS[chapter], chapter);
      await wait(reduced ? 0 : 520);
      sceneRef.current?.classList.remove("folding");
      await wait(1000);
      sceneRef.current?.classList.remove("quick");
      busy = false;
      timer = setTimeout(nextChapter, 5200);
    };

    if (reduced) {
      sceneRef.current.classList.add("open");
    } else {
      setTimeout(() => sceneRef.current?.classList.add("open"), 900);
    }
    timer = setTimeout(nextChapter, 6200);
    
    // Bind click
    const handleSceneClick = () => { if (sceneRef.current?.classList.contains("open")) nextChapter(); };
    sceneRef.current.addEventListener("click", handleSceneClick);

    // Animasi Confetti
    let pool = [];
    let confettiInterval;
    let animationFrame;
    if (!reduced) {
      const PIX = [C.orange, C.sky, C.lime, C.white];
      confettiInterval = setInterval(() => {
        if (pool.length > 14 || !embersRef.current) return;
        const e = el("rect", { width: 7, height: 5, rx: 1, fill: PIX[Math.floor(Math.random() * 4)], stroke: C.ink, "stroke-width": 1.1 }, embersRef.current);
        pool.push({ e, x: 300 + rand(-200, 200), y: rand(640, 660), vx: rand(-12, 12), vy: rand(-40, -24), life: 0, max: rand(2.6, 4) });
      }, 340);

      let lastTime = performance.now();
      const tick = (now) => {
        const dt = Math.min((now - lastTime) / 1000, .05);
        lastTime = now;
        for (let i = pool.length - 1; i >= 0; i--) {
          const q = pool[i];
          q.life += dt;
          q.x += q.vx * dt; q.y += q.vy * dt;
          const a = 1 - q.life / q.max;
          if (a <= 0) { q.e.remove(); pool.splice(i, 1); continue; }
          q.e.setAttribute("x", q.x); q.e.setAttribute("y", q.y);
          q.e.setAttribute("opacity", a);
          q.e.setAttribute("transform", `rotate(${q.life * 160} ${q.x + 3} ${q.y + 2})`);
        }
        animationFrame = requestAnimationFrame(tick);
      };
      animationFrame = requestAnimationFrame(tick);
    }

    // Animasi Parallax Mouse
    const handlePointerMove = (e) => {
      if (!sceneRef.current) return;
      const dx = e.clientX / window.innerWidth - .5;
      const dy = e.clientY / window.innerHeight - .5;
      const layers = sceneRef.current.querySelectorAll(".layer");
      layers.forEach(l => {
        const d = +l.dataset.depth;
        l.style.transform = `translate(${-dx * d * 26}px, ${-dy * d * 16}px)`;
      });
    };
    if (!reduced && matchMedia("(hover: hover)").matches) {
      window.addEventListener("pointermove", handlePointerMove);
    }

    // Cleanup saat unmount
    return () => {
      clearTimeout(timer);
      clearInterval(confettiInterval);
      cancelAnimationFrame(animationFrame);
      sceneRef.current?.removeEventListener("click", handleSceneClick);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  // Helper render mockup grafis interaktif
  const renderDesignPreview = (previewType) => {
    switch (previewType) {
      case 'postingan-1':
        return (
          <div className="art-preview art-post">
            <div className="art-post-header">
              <span className="art-avatar">P</span>
              <div className="art-post-meta">
                <strong>@politeknikcaltexriau</strong>
                <small>Edufestia • Road to 25th</small>
              </div>
              <span className="art-badge-tag">25 Tahun</span>
            </div>
            <div className="art-post-body gradient-warm">
              <div className="art-floating-circle c1"></div>
              <div className="art-floating-circle c2"></div>
              <p className="art-headline-text">EDUFESTIA 2025<br /><em>SELEBRASI 25 TAHUN</em></p>
              <div className="art-cup-mockup" style={{ fontSize: '32px' }}>
                🎉🎓
              </div>
              <div className="art-pill-btn">Road to 25th PCR →</div>
            </div>
          </div>
        );
      case 'logo-1':
        return (
          <div className="art-preview art-logo">
            <div className="art-logo-container">
              <div className="logo-symbol-wrap">
                <svg viewBox="0 0 100 100" className="logo-svg">
                  <circle cx="50" cy="50" r="42" fill="#d4f56a" stroke="#111" strokeWidth="4" />
                  <path d="M50 20 C40 35 40 65 50 80 C60 65 60 35 50 20 Z" fill="#f47b20" stroke="#111" strokeWidth="3" />
                  <line x1="30" y1="50" x2="70" y2="50" stroke="#111" strokeWidth="3" strokeDasharray="3 3" />
                  <circle cx="50" cy="50" r="8" fill="#fff" stroke="#111" strokeWidth="2.5" />
                </svg>
              </div>
              <h3 className="art-brand-name">INNOBIZ</h3>
              <p className="art-brand-sub">BUSINESS INNOVATION COMPETITION</p>
              <div className="logo-palette">
                <span style={{ background: '#d4f56a' }}></span>
                <span style={{ background: '#f47b20' }}></span>
                <span style={{ background: '#111' }}></span>
                <span style={{ background: '#fff' }}></span>
              </div>
            </div>
          </div>
        );
      case 'poster-1':
        return (
          <div className="art-preview art-poster">
            <div className="poster-inner">
              <div className="poster-top-bar">
                <span>KEGIATAN TINGKAT PROPINSI</span>
                <span>TAHUN 2025</span>
              </div>
              <div className="poster-center-art">
                <div className="risograph-ring r1"></div>
                <div className="risograph-ring r2"></div>
                <h2 className="poster-title-text">BK FAIR<br /><span>RIAU 2025</span></h2>
              </div>
              <div className="poster-lineup">
                <span>SEMINAR • WORKSHOP • PAMERAN • KOMPETISI</span>
              </div>
              <div className="poster-footer-bar">
                <span>DIVISI DOKUMENTASI & PUBLIKASI</span>
                <span className="poster-qr">▦▦</span>
              </div>
            </div>
          </div>
        );
      case 'postingan-2':
        return (
          <div className="art-preview art-post">
            <div className="art-post-header">
              <span className="art-avatar" style={{ background: '#ff8fb1' }}>F</span>
              <div className="art-post-meta">
                <strong>@funwalk.pcr25</strong>
                <small>Kepanitiaan Publikasi</small>
              </div>
              <span className="art-badge-tag" style={{ background: '#ff8fb1' }}>Funwalk</span>
            </div>
            <div className="art-post-body gradient-pastel">
              <span className="art-sparkle s1">✦</span>
              <span className="art-sparkle s2">✦</span>
              <p className="art-headline-text" style={{ color: '#111' }}>SEHAT BERSAMA<br /><em>ROAD TO 25TH PCR</em></p>
              <div className="art-bottle-mockup" style={{ fontSize: '13px' }}>
                🏃‍♂️ Rute & Doorprize Menarik
              </div>
              <div className="art-pill-btn" style={{ background: '#111', color: '#ff8fb1' }}>Lihat Informasi Rute →</div>
            </div>
          </div>
        );
      case 'logo-2':
        return (
          <div className="art-preview art-logo dark-bg">
            <div className="art-logo-container">
              <div className="logo-symbol-wrap">
                <svg viewBox="0 0 100 100" className="logo-svg">
                  <rect x="15" y="15" width="70" height="70" rx="20" fill="#111" stroke="#a8e4ef" strokeWidth="4" />
                  <path d="M35 35 Q 65 35 65 50 Q 35 50 35 65 Q 65 65 65 65" fill="none" stroke="#d4f56a" strokeWidth="7" strokeLinecap="round" />
                  <circle cx="65" cy="35" r="4" fill="#a8e4ef" />
                  <circle cx="35" cy="65" r="4" fill="#f47b20" />
                </svg>
              </div>
              <h3 className="art-brand-name" style={{ color: '#fff' }}>SERIES 2025</h3>
              <p className="art-brand-sub" style={{ color: '#a8e4ef' }}>EVENT KEMAHASISWAAN BEM / BLM</p>
              <div className="logo-palette">
                <span style={{ background: '#a8e4ef' }}></span>
                <span style={{ background: '#d4f56a' }}></span>
                <span style={{ background: '#f47b20' }}></span>
              </div>
            </div>
          </div>
        );
      case 'poster-2':
        return (
          <div className="art-preview art-poster typography-poster">
            <div className="poster-inner typog">
              <div className="poster-grid-lines"></div>
              <span className="typog-super">POLITEKNIK CALTEX RIAU</span>
              <div className="typog-giant">
                <span>GOES TO</span>
                <span>SCHOOL</span>
              </div>
              <div className="typog-details">
                <p>Sosialisasi kampus, pengenalan jurusan Bisnis Digital, dan video dokumentasi interaktif.</p>
                <div className="date-stamp">PCR GTS 2025 • PROMOSI</div>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="app-container">
      {/* Navigasi Utama */}
      <nav className={`nav ${isNavOpen ? 'open' : ''}`} id="nav">
        <a className="logo" href="#hero">Hafiz<span>.</span></a>
        <button 
          className="menu-btn" 
          onClick={() => setIsNavOpen(!isNavOpen)} 
          aria-label="Buka menu navigasi" 
          aria-expanded={isNavOpen}
        >
          <span></span><span></span><span></span>
        </button>
        <ul className="links">
          <li><a href="#hero" onClick={() => setIsNavOpen(false)}>Beranda</a></li>
          <li><a href="#work" onClick={() => setIsNavOpen(false)}>Karya Desain</a></li>
          <li><a href="#about" onClick={() => setIsNavOpen(false)}>Tentang</a></li>
          <li><a href="#process" onClick={() => setIsNavOpen(false)}>Alur Kerja</a></li>
          <li><a href="#resume" onClick={() => setIsNavOpen(false)}>CV & Pengalaman</a></li>
          <li className="mobile-only">
            <a className="talk" href="mailto:muhhafiz.rmdhn@gmail.com">Hubungi Saya</a>
          </li>
        </ul>
        <a className="talk desktop-only" href="mailto:muhhafiz.rmdhn@gmail.com">Hubungi Saya</a>
      </nav>

      {/* 1. SEKSI HERO: Diorama Buku Pop-up Interaktif */}
      <section className="hero-section" id="hero">
        <main className="hero">
          <section className="side left">
            <div className="hero-badge fade" style={{ "--d": ".2s" }}>
              <span className="badge-icon">🎓</span> Mahasiswa Bisnis Digital • Politeknik Caltex Riau
            </div>
            <h1 className="headline">
              <span className="line"><span style={{ "--i": 0 }}>Visual kreatif,</span></span>
              <span className="line"><span style={{ "--i": 1 }}>strategi <em>digital.</em></span></span>
            </h1>
            <p className="lede fade" style={{ "--d": ".6s" }}>
              Halo! Saya <strong>Muhammad Hafiz Ramadhan</strong>, mahasiswa Bisnis Digital PCR yang berfokus di bidang <strong>komunikasi visual, publikasi event, dan desain kreatif</strong>. Terampil merancang kebutuhan grafis media sosial, identitas logo, poster acara, serta pengembangan platform web pemasaran.
            </p>
            <div className="actions fade" style={{ "--d": ".75s" }}>
              <a className="btn dark" href="#work">Lihat Hasil Desain <span aria-hidden="true">→</span></a>
              <a className="btn paper" href="#resume">Lihat CV & Pengalaman</a>
            </div>
            <div className="hero-stats fade" style={{ "--d": ".85s" }}>
              <div className="stat-item">
                <strong>8+</strong>
                <span>Event & Kepanitiaan</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <strong>3.59</strong>
                <span>IPK (Cumlaude)</span>
              </div>
              <div className="stat-divider"></div>
              <div className="stat-item">
                <strong>100%</strong>
                <span>Publikasi Kreatif</span>
              </div>
            </div>
          </section>

          <svg 
            className="scene" 
            ref={sceneRef} 
            viewBox="0 0 600 900" 
            role="img" 
            aria-label="Buku pop-up interaktif menampilkan karya portofolio Muhammad Hafiz Ramadhan. Klik buku untuk membalik halaman."
          >
            <defs>
              <filter id="paper" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="5" stdDeviation="5" floodColor="#000" floodOpacity=".28" />
              </filter>
              <filter id="paperDeep" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="9" stdDeviation="8" floodColor="#000" floodOpacity=".32" />
              </filter>
              <linearGradient id="gutter" x1="0" x2="1">
                <stop offset="0" stopColor="#000" stopOpacity="0" />
                <stop offset=".86" stopColor="#000" stopOpacity="0" />
                <stop offset="1" stopColor="#000" stopOpacity=".18" />
              </linearGradient>
              <linearGradient id="gutterR" x1="1" x2="0">
                <stop offset="0" stopColor="#000" stopOpacity="0" />
                <stop offset=".86" stopColor="#000" stopOpacity="0" />
                <stop offset="1" stopColor="#000" stopOpacity=".18" />
              </linearGradient>
            </defs>
            <g className="layer" data-depth=".15" ref={skyBackRef}></g>
            <g className="layer" data-depth=".25" ref={planesRef}></g>
            <g transform="translate(0 -170)">
              <g className="layer" data-depth=".35" ref={islandRef}></g>
              <g className="layer" data-depth=".45" ref={plumeRef}></g>
              <g className="layer" data-depth=".55" ref={embersRef}></g>
              <g className="layer" data-depth=".8" ref={wordRef}></g>
            </g>
            <g className="layer" data-depth="1" ref={skyFrontRef}></g>
          </svg>

          <section className="side right">
            <ol className="cards">
              <li className="fade" style={{ "--d": ".45s", "--r": "-1.5deg", "--c": "var(--sky)" }} data-n="01">
                <b>Desain Feed & Publikasi</b>
                <span>Konten media sosial interaktif, feed Instagram, dan infografis event kampus & kompetisi.</span>
              </li>
              <li className="fade" style={{ "--d": ".55s", "--r": "1.2deg", "--c": "var(--flame)" }} data-n="02">
                <b>Desain Logo & Identitas</b>
                <span>Simbol kepanitiaan, identitas visual INNOBIZ, Series BEM, dan branding digital bisnis.</span>
              </li>
              <li className="fade" style={{ "--d": ".65s", "--r": "-.8deg", "--c": "var(--lime)" }} data-n="03">
                <b>Desain Poster & Cetak</b>
                <span>Materi promosi cetak A2/A3, publikasi BK Fair tingkat provinsi, banner jalan santai PCR.</span>
              </li>
              <li className="fade" style={{ "--d": ".75s", "--r": "1deg", "--c": "#fff" }} data-n="04">
                <b>UI/UX & Web Bisnis</b>
                <span>Dasar pemrograman web, layout antarmuka pemasaran digital, dan riset pengguna.</span>
              </li>
            </ol>
            <p className="status fade" style={{ "--d": ".9s" }}>
              <i className="dot"></i>Terbuka untuk kolaborasi event, desain & freelance
            </p>
          </section>
        </main>
      </section>

      {/* 2. SEKSI WORK: Galeri Hasil Desain (Postingan, Logo, Poster) */}
      <section className="section-container" id="work">
        <div className="section-header">
          <span className="section-pill">Portofolio Desain</span>
          <h2 className="section-title">Hasil Desain & Publikasi Pilihan</h2>
          <p className="section-subtitle">
            Karya desain grafis publikasi event tingkat kampus hingga provinsi, mencakup postingan media sosial, identitas logo kepanitiaan, serta poster cetak promosi.
          </p>

          {/* Filter Tab Kategori */}
          <div className="filter-tabs">
            <button 
              className={`filter-btn ${activeTab === 'all' ? 'active' : ''}`}
              onClick={() => setActiveTab('all')}
            >
              Semua Karya ({designProjects.length})
            </button>
            <button 
              className={`filter-btn ${activeTab === 'postingan' ? 'active' : ''}`}
              onClick={() => setActiveTab('postingan')}
            >
              📱 Desain Postingan
            </button>
            <button 
              className={`filter-btn ${activeTab === 'logo' ? 'active' : ''}`}
              onClick={() => setActiveTab('logo')}
            >
              ✨ Desain Logo
            </button>
            <button 
              className={`filter-btn ${activeTab === 'poster' ? 'active' : ''}`}
              onClick={() => setActiveTab('poster')}
            >
              🖼️ Desain Poster
            </button>
          </div>
        </div>

        {/* Grid Kartu Desain */}
        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => setSelectedDesign(project)}
            >
              <div className="project-preview-wrapper">
                {renderDesignPreview(project.previewType)}
                <div className="preview-overlay">
                  <span className="overlay-btn">Lihat Detail Desain 🔍</span>
                </div>
              </div>
              <div className="project-info">
                <div className="project-category-row">
                  <span className="category-badge" style={{ borderColor: project.color }}>
                    {project.tag}
                  </span>
                  <span className="client-name">{project.client}</span>
                </div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((t, i) => (
                    <span key={i} className="mini-tag">#{t}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. SEKSI ABOUT: Profil Muhammad Hafiz Ramadhan */}
      <section className="section-container" id="about">
        <div className="about-wrapper">
          <div className="about-graphic-card">
            <div className="paper-sticker sticker-1">HAFIZ 🎓</div>
            <div className="paper-sticker sticker-2">BISNIS DIGITAL PCR</div>
            <div className="about-portrait-box">
              <div className="portrait-circle">
                <span className="portrait-icon">👨‍💻</span>
              </div>
              <h3 className="about-name">Muhammad Hafiz Ramadhan</h3>
              <p className="about-role">Publikasi, Dokumentasi & Visual Designer</p>
              <div className="about-skills-chips">
                <span>UI/UX & Graphic Design</span>
                <span>Social Media Management</span>
                <span>Video & Photo Editing</span>
                <span>Web Development</span>
              </div>
            </div>
            <div className="about-contact-quick">
              <div className="contact-row">
                <span>📍 Lokasi:</span>
                <strong>Pekanbaru, Riau (Politeknik Caltex Riau)</strong>
              </div>
              <div className="contact-row">
                <span>📧 Email:</span>
                <strong>muhhafiz.rmdhn@gmail.com</strong>
              </div>
              <div className="contact-row">
                <span>📞 Telepon / WA:</span>
                <strong>+62-878-1216-3800</strong>
              </div>
            </div>
          </div>

          <div className="about-text-content">
            <span className="section-pill">Profil Singkat</span>
            <h2 className="section-title text-left">Komunikasi Visual & Pemasaran Digital</h2>
            <p className="about-body-text">
              Saya adalah mahasiswa aktif <strong>D4 Bisnis Digital di Politeknik Caltex Riau (PCR)</strong> dengan Indeks Prestasi Kumulatif <strong>3.59 (Cumlaude)</strong>. Memiliki minat tinggi di bidang komunikasi visual, publikasi media, serta teknologi digital.
            </p>
            <p className="about-body-text">
              Berpengalaman aktif sebagai staf <strong>publikasi & dokumentasi</strong> di berbagai kepanitiaan event tingkat Program Studi, Kampus PCR, hingga tingkat Provinsi. Terampil mengoperasikan tools desain grafis, editing foto & video, serta memiliki fondasi dalam pengembangan platform web pemasaran modern.
            </p>

            <div className="values-grid">
              <div className="value-card">
                <span className="value-num">01</span>
                <h4>Publikasi & Dokumentasi Event</h4>
                <p>Berpengalaman di 8+ kepanitiaan besar (BK Fair Provinsi, Edufestia 25th PCR, Funwalk, Innobiz, dll).</p>
              </div>
              <div className="value-card">
                <span className="value-num">02</span>
                <h4>UI/UX & Desain Grafis</h4>
                <p>Menguasai prinsip desain antarmuka pengguna, tipografi, grid system, dan visual branding yang terarah.</p>
              </div>
              <div className="value-card">
                <span className="value-num">03</span>
                <h4>Video & Photo Editing</h4>
                <p>Mendokumentasikan momen penting acara, video promosi PCR Goes to School (GTS), serta reels medsos.</p>
              </div>
              <div className="value-card">
                <span className="value-num">04</span>
                <h4>Pemasaran & Web Basics</h4>
                <p>Mengkombinasikan pemahaman bisnis digital, manajemen pemasaran, dan dasar pemrograman web.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. SEKSI PROCESS: Alur Kerja Desain & Publikasi */}
      <section className="section-container" id="process">
        <div className="section-header">
          <span className="section-pill">Alur Kerja</span>
          <h2 className="section-title">Bagaimana Desain & Publikasi Dipersiapkan</h2>
          <p className="section-subtitle">
            Pendekatan kerja sistematis dari riset kebutuhan kepanitiaan hingga distribusi konten visual siap tayang.
          </p>
        </div>

        <div className="process-grid">
          {workflowSteps.map((ws, i) => (
            <div key={i} className="process-card">
              <div className="process-card-header">
                <span className="process-num">{ws.step}</span>
                <span className="process-tag">{ws.tag}</span>
              </div>
              <h3 className="process-title">{ws.title}</h3>
              <p className="process-desc">{ws.desc}</p>
              <div className="process-arrow">↓</div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. SEKSI RESUME: CV Lengkap, Pengalaman Kepanitiaan & Pendidikan */}
      <section className="section-container" id="resume">
        <div className="resume-grid">
          {/* Kolom Kiri: Riwayat Kepanitiaan & Event */}
          <div className="resume-col">
            <span className="section-pill">Riwayat Kepanitiaan</span>
            <h2 className="section-title text-left">Pengalaman Publikasi & Dokumentasi</h2>
            <div className="timeline">
              {experienceData.map((exp, idx) => (
                <div key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <span className="timeline-period">{exp.period}</span>
                    <h3 className="timeline-role">{exp.role}</h3>
                    <h4 className="timeline-place">{exp.place}</h4>
                    <p className="timeline-desc">{exp.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kolom Kanan: Pendidikan & Kemampuan Berdasarkan CV */}
          <div className="resume-col">
            <span className="section-pill">Latar Belakang Akademik</span>
            <h2 className="section-title text-left">Pendidikan & Transkrip</h2>
            
            {/* Box Pendidikan */}
            <div className="edu-box">
              <div className="edu-badge">2024 — 2028</div>
              <h3 className="edu-school">{educationData.institution}</h3>
              <h4 className="edu-major">{educationData.major}</h4>
              <p className="edu-gpa">Indeks Prestasi Kumulatif: <strong>{educationData.gpa}</strong></p>
              <div className="edu-tags">
                {educationData.highlights.map((h, i) => (
                  <span key={i} className="mini-tag">✓ {h}</span>
                ))}
              </div>
            </div>

            <span className="section-pill" style={{ marginTop: '32px' }}>Kemampuan & Keahlian</span>
            <h2 className="section-title text-left">Skills & Kompetensi</h2>
            <div className="skills-toolkit">
              <div className="skill-group">
                <div className="skill-label-row">
                  <span>Social Media Management & Content Creation</span>
                  <strong>95%</strong>
                </div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '95%', background: 'var(--flame)' }}></div></div>
              </div>

              <div className="skill-group">
                <div className="skill-label-row">
                  <span>UI/UX & Graphic Design (Figma, Photoshop, Illustrator)</span>
                  <strong>92%</strong>
                </div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '92%', background: 'var(--lime)' }}></div></div>
              </div>

              <div className="skill-group">
                <div className="skill-label-row">
                  <span>Video & Photo Editing (Dokumentasi Event)</span>
                  <strong>90%</strong>
                </div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '90%', background: 'var(--sky)' }}></div></div>
              </div>

              <div className="skill-group">
                <div className="skill-label-row">
                  <span>Web Development Basics (HTML, CSS, JS, React)</span>
                  <strong>85%</strong>
                </div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '85%', background: '#fff' }}></div></div>
              </div>

              <div className="skill-group">
                <div className="skill-label-row">
                  <span>Kemampuan Bahasa: Indonesia (Native) & English (Medium)</span>
                  <strong>Aktif</strong>
                </div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: '88%', background: 'var(--flame)' }}></div></div>
              </div>
            </div>

            {/* Kotak Kontak CV */}
            <div className="cta-box">
              <h3>Mari Berkolaborasi!</h3>
              <p>Butuh desain postingan promosi, kebutuhan publikasi event, logo acara, atau poster berkualitas?</p>
              <div className="cta-actions">
                <a className="btn dark" href="mailto:muhhafiz.rmdhn@gmail.com">Kirim Email Langsung →</a>
                <a className="btn paper" href="https://wa.me/6287812163800" target="_blank" rel="noreferrer">WhatsApp: +62 878-1216-3800</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Modal Detail Desain */}
      {selectedDesign && (
        <div className="modal-backdrop" onClick={() => setSelectedDesign(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedDesign(null)}>✕</button>
            <div className="modal-preview">
              {renderDesignPreview(selectedDesign.previewType)}
            </div>
            <div className="modal-details">
              <span className="category-badge">{selectedDesign.tag}</span>
              <h2 className="modal-title">{selectedDesign.title}</h2>
              <p className="modal-client"><strong>Kepanitiaan / Acara:</strong> {selectedDesign.client}</p>
              <p className="modal-desc">{selectedDesign.desc}</p>
              <div className="modal-tags">
                {selectedDesign.tags.map((t, i) => (
                  <span key={i} className="mini-tag">#{t}</span>
                ))}
              </div>
              <div className="modal-action-row">
                <a className="btn dark" href="mailto:muhhafiz.rmdhn@gmail.com?subject=Tanya Kebutuhan Desain / Event">
                  Hubungi Hafiz untuk Kebutuhan Desain →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <span className="logo">Hafiz<span>.</span></span>
            <p>Muhammad Hafiz Ramadhan • Mahasiswa Bisnis Digital Politeknik Caltex Riau. Menggabungkan estetika visual, publikasi event, dan strategi pemasaran digital.</p>
          </div>
          <div className="footer-links">
            <a href="#hero">Beranda</a>
            <a href="#work">Karya Desain</a>
            <a href="#about">Tentang</a>
            <a href="#process">Alur Kerja</a>
            <a href="#resume">CV & Pengalaman</a>
          </div>
          <div className="footer-copy">
            <p>© {new Date().getFullYear()} Muhammad Hafiz Ramadhan. Dibuat dengan bangga.</p>
          </div>
        </div>
      </footer>

      {/* Tekstur Kertas */}
      <div className="grain" aria-hidden="true"></div>
    </div>
  );
}