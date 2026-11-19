/* NGINCENG MEDIA — konten website dan navigasi */
const categories = {
  vmix: {
    title: "vMix & Live Streaming",
    description: "Belajar alur produksi live streaming, pengaturan kamera, transisi, audio, dan output siaran.",
    materials: [
      {id:"vmix-dasar",title:"Mengenal Dasar vMix",desc:"Pengenalan antarmuka, input, preview, dan program."},
      {id:"vmix-kamera",title:"Mengatur Kamera di vMix",desc:"Memahami input kamera dan pengelompokan sumber video."},
      {id:"vmix-transisi",title:"Preview, Program, Cut, dan Transition",desc:"Memahami perpindahan gambar saat produksi."},
      {id:"vmix-streaming",title:"Persiapan Output Live Streaming",desc:"Mengenal pengaturan dasar keluaran siaran."}
    ]
  },
  obs: {
    title:"OBS Studio",
    description:"Belajar membuat scene, mengatur sumber video, audio, dan menyiapkan siaran.",
    materials:[
      {id:"obs-dasar",title:"Mengenal Dasar OBS Studio",desc:"Pengenalan scene, source, dan area kerja OBS."},
      {id:"obs-scene",title:"Membuat Scene dan Source",desc:"Menyusun tampilan produksi sesuai kebutuhan."},
      {id:"obs-audio",title:"Mengatur Audio OBS",desc:"Mengenal mixer audio dan sumber suara."}
    ]
  },
  audio: {
    title:"Audio & Sound System",
    description:"Mengenal dasar pengolahan audio, mixer, DSP, equalizer, crossover, limiter, dan pengukuran.",
    materials:[
      {id:"audio-dasar",title:"Mengenal Dasar Audio",desc:"Memahami sinyal, input, output, dan alur audio."},
      {id:"audio-eq",title:"Pengenalan Equalizer",desc:"Memahami fungsi EQ dalam pengolahan suara."},
      {id:"audio-dsp",title:"Mengenal DSP dan Crossover",desc:"Pengenalan pemrosesan dan pembagian frekuensi."},
      {id:"audio-rta",title:"Pengenalan RTA",desc:"Memahami tampilan analisis respons frekuensi."}
    ]
  },
  video: {
    title:"Video Production",
    description:"Belajar dasar kamera, komposisi, pencahayaan, dan alur produksi video.",
    materials:[
      {id:"video-kamera",title:"Mengenal Kamera Video",desc:"Pengenalan pengaturan dasar kamera."},
      {id:"video-komposisi",title:"Dasar Komposisi Gambar",desc:"Memahami framing dan penempatan objek."},
      {id:"video-lighting",title:"Dasar Pencahayaan",desc:"Mengenal fungsi pencahayaan dalam produksi."}
    ]
  },
  multimedia: {
    title:"Multimedia",
    description:"Mengenal perangkat, aplikasi, dan alur kerja produksi multimedia.",
    materials:[
      {id:"multi-perangkat",title:"Perangkat Produksi Multimedia",desc:"Mengenal komputer dan perangkat pendukung."},
      {id:"multi-workflow",title:"Alur Kerja Produksi",desc:"Memahami proses dari persiapan hingga publikasi."}
    ]
  }
};

const tutorials = {
  "vmix-dasar": {
    category:"vMix & Live Streaming", categoryId:"vmix",
    title:"Mengenal Dasar vMix",
    intro:"vMix merupakan perangkat lunak produksi video yang dapat digunakan untuk mengelola berbagai sumber gambar dalam satu alur kerja produksi.",
    sections:[
      ["Apa itu vMix?","vMix digunakan untuk menggabungkan dan mengelola sumber video seperti kamera, file video, gambar, dan sumber lainnya. Antarmukanya menyediakan area untuk memantau sumber yang akan ditayangkan dan hasil yang sedang ditayangkan."],
      ["Mengenal Input","Input adalah sumber yang dimasukkan ke dalam proyek, misalnya kamera, video, gambar, atau sumber lain yang didukung."],
      ["Preview dan Program","Preview digunakan untuk menyiapkan sumber berikutnya. Program menunjukkan sumber yang sedang menjadi keluaran utama."],
      ["Mengenal Transisi","Transisi digunakan untuk berpindah dari satu sumber gambar ke sumber lainnya. Pilihan transisi dapat disesuaikan dengan kebutuhan produksi."]
    ]
  },
  "vmix-kamera": {
    category:"vMix & Live Streaming", categoryId:"vmix",
    title:"Mengatur Kamera di vMix",
    intro:"Kamera dapat dimasukkan sebagai sumber video agar dapat dipilih dan dikelola dalam produksi.",
    sections:[
      ["Persiapan sumber kamera","Pastikan kamera dan perangkat capture dikenali oleh komputer sebelum menambahkannya ke proyek."],
      ["Menambahkan input","Gunakan menu penambahan input di vMix, lalu pilih sumber kamera yang tersedia."],
      ["Pemeriksaan gambar","Periksa gambar, format video, dan kestabilan sumber sebelum digunakan dalam produksi."]
    ]
  },
  "vmix-transisi": {
    category:"vMix & Live Streaming", categoryId:"vmix",
    title:"Preview, Program, Cut, dan Transition",
    intro:"Preview dan Program membantu operator menyiapkan gambar berikutnya tanpa langsung mengubah keluaran utama.",
    sections:[
      ["Preview","Area Preview digunakan untuk memilih dan memeriksa sumber yang akan ditayangkan berikutnya."],
      ["Program","Area Program memperlihatkan sumber yang sedang ditayangkan."],
      ["Cut dan Transition","Cut berpindah secara langsung, sedangkan transition menggunakan efek perpindahan sesuai pilihan yang tersedia."]
    ]
  },
  "vmix-streaming": {
    category:"vMix & Live Streaming", categoryId:"vmix",
    title:"Persiapan Output Live Streaming",
    intro:"Sebelum siaran, periksa sumber gambar, audio, koneksi internet, dan tujuan streaming.",
    sections:[
      ["Periksa sumber","Pastikan kamera, gambar, dan audio yang diperlukan sudah tersedia."],
      ["Periksa tujuan siaran","Masukkan informasi tujuan streaming melalui pengaturan resmi platform yang digunakan."],
      ["Uji sebelum tayang","Lakukan pengujian singkat dan pastikan gambar serta suara berjalan dengan baik."]
    ]
  },
  "obs-dasar": {
    category:"OBS Studio",categoryId:"obs",title:"Mengenal Dasar OBS Studio",
    intro:"OBS Studio adalah aplikasi untuk merekam dan melakukan siaran langsung dengan menggabungkan berbagai sumber media.",
    sections:[
      ["Scene","Scene adalah susunan tampilan produksi yang dapat berisi beberapa sumber."],
      ["Source","Source merupakan elemen yang dimasukkan ke dalam scene, seperti kamera, gambar, teks, dan audio."],
      ["Audio Mixer","Audio Mixer digunakan untuk memantau dan mengatur level sumber suara."]
    ]
  },
  "obs-scene": {
    category:"OBS Studio",categoryId:"obs",title:"Membuat Scene dan Source",
    intro:"Scene dan source menjadi dasar untuk menyusun tampilan produksi di OBS Studio.",
    sections:[
      ["Membuat scene","Buat scene sesuai kebutuhan, misalnya pembukaan, kamera utama, atau tampilan presentasi."],
      ["Menambahkan source","Tambahkan sumber gambar, kamera, teks, atau media yang diperlukan."],
      ["Memeriksa tata letak","Atur posisi dan ukuran elemen agar tampilan mudah dibaca."]
    ]
  },
  "obs-audio": {
    category:"OBS Studio",categoryId:"obs",title:"Mengatur Audio OBS",
    intro:"Pengaturan audio membantu memastikan sumber suara dapat dipantau selama produksi.",
    sections:[
      ["Mengenal sumber audio","Kenali perangkat input dan output yang digunakan."],
      ["Memantau level","Gunakan indikator audio untuk melihat aktivitas sinyal."],
      ["Uji suara","Lakukan pengujian sebelum rekaman atau siaran dimulai."]
    ]
  },
  "audio-dasar": {
    category:"Audio & Sound System",categoryId:"audio",title:"Mengenal Dasar Audio",
    intro:"Sistem audio terdiri dari sumber suara, perangkat pemrosesan, penguat, dan perangkat keluaran.",
    sections:[
      ["Input","Input menerima sinyal dari mikrofon, pemutar audio, atau sumber lainnya."],
      ["Pemrosesan","Sinyal dapat diproses menggunakan mixer dan perangkat pemrosesan sesuai kebutuhan."],
      ["Output","Output mengirimkan sinyal menuju perangkat berikutnya, seperti amplifier atau sistem perekaman."]
    ]
  },
  "audio-eq": {
    category:"Audio & Sound System",categoryId:"audio",title:"Pengenalan Equalizer",
    intro:"Equalizer digunakan untuk mengatur tingkat energi pada rentang frekuensi tertentu.",
    sections:[
      ["Fungsi EQ","EQ membantu membentuk karakter tonal dan menangani kebutuhan koreksi suara."],
      ["Frekuensi","Pengaturan EQ bekerja pada rentang frekuensi rendah, menengah, dan tinggi."],
      ["Evaluasi","Dengarkan hasil perubahan dan lakukan penyesuaian secara bertahap."]
    ]
  },
  "audio-dsp": {
    category:"Audio & Sound System",categoryId:"audio",title:"Mengenal DSP dan Crossover",
    intro:"DSP merupakan perangkat pemrosesan sinyal digital. Crossover membantu membagi rentang frekuensi ke jalur keluaran yang sesuai.",
    sections:[
      ["Mengenal DSP","DSP menyediakan fungsi pemrosesan sinyal dalam satu perangkat."],
      ["Mengenal crossover","Crossover membagi sinyal audio berdasarkan rentang frekuensi."],
      ["Pemeriksaan sistem","Gunakan spesifikasi perangkat dan panduan pabrikan saat menyusun sistem."]
    ]
  },
  "audio-rta": {
    category:"Audio & Sound System",categoryId:"audio",title:"Pengenalan RTA",
    intro:"Real Time Analyzer atau RTA menampilkan gambaran tingkat energi suara pada berbagai rentang frekuensi.",
    sections:[
      ["Fungsi RTA","RTA membantu melihat distribusi energi frekuensi dari sinyal yang diukur."],
      ["Membaca tampilan","Grafik memperlihatkan respons pada pita frekuensi yang berbeda."],
      ["Kondisi pengukuran","Hasil pengukuran dipengaruhi mikrofon, posisi, ruangan, dan kondisi pengujian."]
    ]
  },
  "video-kamera": {
    category:"Video Production",categoryId:"video",title:"Mengenal Kamera Video",
    intro:"Kamera video menangkap gambar untuk kebutuhan dokumentasi, produksi, dan siaran.",
    sections:[
      ["Pengaturan dasar","Kenali resolusi, frame rate, fokus, dan white balance."],
      ["Koneksi","Periksa jalur koneksi kamera ke perangkat produksi."],
      ["Uji gambar","Periksa hasil gambar sebelum kegiatan dimulai."]
    ]
  },
  "video-komposisi": {
    category:"Video Production",categoryId:"video",title:"Dasar Komposisi Gambar",
    intro:"Komposisi membantu menyusun elemen visual agar pesan gambar mudah dipahami.",
    sections:[
      ["Framing","Tentukan batas area gambar sesuai kebutuhan."],
      ["Penempatan objek","Perhatikan ruang pandang dan keseimbangan dalam frame."],
      ["Konsistensi","Jaga konsistensi komposisi antar kamera dalam satu produksi."]
    ]
  },
  "video-lighting": {
    category:"Video Production",categoryId:"video",title:"Dasar Pencahayaan",
    intro:"Pencahayaan membantu kamera menangkap objek dengan jelas dan mendukung suasana visual.",
    sections:[
      ["Cahaya utama","Kenali fungsi cahaya utama dalam menerangi objek."],
      ["Cahaya pengisi","Cahaya pengisi membantu mengurangi kontras bayangan."],
      ["Uji hasil","Periksa hasil melalui monitor kamera sebelum produksi."]
    ]
  },
  "multi-perangkat": {
    category:"Multimedia",categoryId:"multimedia",title:"Perangkat Produksi Multimedia",
    intro:"Produksi multimedia dapat melibatkan komputer, kamera, perangkat audio, pencahayaan, dan perangkat pendukung.",
    sections:[
      ["Perangkat utama","Tentukan perangkat berdasarkan kebutuhan produksi."],
      ["Koneksi perangkat","Periksa kompatibilitas dan jalur koneksi."],
      ["Perawatan","Simpan dan rawat perangkat sesuai petunjuk produsen."]
    ]
  },
  "multi-workflow": {
    category:"Multimedia",categoryId:"multimedia",title:"Alur Kerja Produksi",
    intro:"Alur kerja yang terencana membantu proses produksi berjalan lebih tertib.",
    sections:[
      ["Perencanaan","Tentukan tujuan, kebutuhan, dan pembagian tugas."],
      ["Produksi","Laksanakan pengambilan gambar, suara, atau siaran sesuai rencana."],
      ["Publikasi","Periksa hasil akhir sebelum dipublikasikan."]
    ]
  }
};


/* Konten Studio: utamakan Supabase, gunakan cache lokal sebagai cadangan. */
(async function initNgincengSite() {
  let studioConfig = {};
  let studioContent = {};

  function readLocalCache() {
    try {
      studioConfig = JSON.parse(localStorage.getItem("ngincengStudioSettings") || "{}");
    } catch (_) {
      studioConfig = {};
    }
    try {
      studioContent = JSON.parse(localStorage.getItem("ngincengStudioContent") || "{}");
    } catch (_) {
      studioContent = {};
    }
  }

  function loadScript(src) {
    return new Promise((resolve, reject) => {
      const existing = [...document.scripts].find(script => script.src === new URL(src, document.baseURI).href);
      if (existing) return resolve();
      const script = document.createElement("script");
      script.src = src;
      script.async = true;
      script.onload = () => {
        script.dataset.loaded = "true";
        resolve();
      };
      script.onerror = () => reject(new Error("Gagal memuat " + src));
      document.head.appendChild(script);
    });
  }

  async function loadOnlineContent() {
    if (!window.supabase) {
      await loadScript("https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2");
    }

    if (!window.NGINCENG_SUPABASE_URL || !window.NGINCENG_SUPABASE_KEY) {
      await loadScript("supabase-config.js");
    }

    if (!window.supabase || !window.NGINCENG_SUPABASE_URL || !window.NGINCENG_SUPABASE_KEY) {
      throw new Error("Konfigurasi Supabase belum tersedia.");
    }

    const client = window.supabase.createClient(
      window.NGINCENG_SUPABASE_URL,
      window.NGINCENG_SUPABASE_KEY
    );

    const { data, error } = await client
      .from("nginceng_site_content")
      .select("settings, content")
      .eq("id", 1)
      .maybeSingle();

    if (error) throw error;

    if (data) {
      studioConfig = data.settings || {};
      studioContent = data.content || {};
      try {
        localStorage.setItem("ngincengStudioSettings", JSON.stringify(studioConfig));
        localStorage.setItem("ngincengStudioContent", JSON.stringify(studioContent));
      } catch (cacheError) {
        console.warn("Konten online berhasil dimuat, tetapi cache lokal tidak dapat disimpan.", cacheError);
      }
      console.info("Nginceng Media: konten berhasil dimuat dari Supabase.");
    } else {
      readLocalCache();
      console.info("Nginceng Media: data Supabase belum tersedia, memakai konten bawaan/cache.");
    }
  }

  try {
    await loadOnlineContent();
  } catch (error) {
    console.warn("Nginceng Media: Supabase tidak dapat dimuat. Menggunakan cache lokal.", error);
    readLocalCache();
  }

  function applySiteFavicon() {
    const href = studioConfig.favicon || "nginceng-media-favicon.ico";
    let icon = document.querySelector('link[rel~="icon"]');
    if (!icon) {
      icon = document.createElement("link");
      icon.rel = "icon";
      document.head.appendChild(icon);
    }
    icon.href = href;
    icon.type = href.toLowerCase().includes(".ico") ? "image/x-icon" : "image/png";
  }
  applySiteFavicon();

  if (studioContent.categories) {
    Object.keys(categories).forEach(k => delete categories[k]);
    Object.assign(categories, studioContent.categories);
  }
  if (studioContent.tutorials) {
    Object.keys(tutorials).forEach(k => delete tutorials[k]);
    Object.assign(tutorials, studioContent.tutorials);
  }
  // Susun daftar materi kategori dari data tutorial online, sambil mempertahankan materi bawaan.
  Object.entries(categories).forEach(([categoryId, category]) => {
    const dynamicMaterials = Object.entries(tutorials)
      .filter(([, item]) => item.categoryId === categoryId)
      .map(([id, item]) => ({ id, title: item.title, desc: item.intro || "" }));
    if (dynamicMaterials.length) category.materials = dynamicMaterials;
    else if (!Array.isArray(category.materials)) category.materials = [];
  });

const header = `
<header class="site-header">
  <div class="header-inner">
    <a class="brand" href="index.html">
      <img src="logo-nginceng.png" alt="Logo Nginceng Media">
      <span>
        <span class="brand-name">NGINCENG MEDIA</span><br>
        <span class="brand-tag">EDUCATION • LIVE STREAMING • MULTIMEDIA</span>
      </span>
    </a>
    <button class="menu-toggle" id="menu-toggle" aria-label="Buka menu">☰ MENU</button>
    <nav class="nav" id="main-nav">
      <a href="index.html" data-nav="home">HOME</a>
      <a href="edukasi.html" data-nav="edukasi">EDUKASI</a>
      <a href="artikel.html" data-nav="artikel">ARTIKEL</a>
      <a href="youtube.html" data-nav="youtube">YOUTUBE</a>
      <a href="layanan.html" data-nav="layanan">LAYANAN</a>
      <a href="kontak.html" data-nav="kontak">KONTAK</a>
    </nav>
  </div>
</header>`;

const footer = `
<footer class="site-footer">
  © 2026 NGINCENG MEDIA. ALL RIGHTS RESERVED.
</footer>`;

document.getElementById("site-header").innerHTML = header;
document.getElementById("site-footer").innerHTML = footer;

const page = document.body.dataset.page;
const app = document.getElementById("app");
const params = new URLSearchParams(window.location.search);

function categoryCards() {
  return Object.entries(categories).map(([id,cat],i)=>`
    <a class="card" href="kategori.html?topik=${id}">
      <div class="card-number">${String(i+1).padStart(2,"0")}</div>
      <h3>${cat.title}</h3>
      <p>${cat.description}</p>
      <span class="card-link">BUKA KATEGORI →</span>
    </a>`).join("");
}

function renderHome() {
  app.innerHTML = `
    <section class="hero">
      <div class="hero-content reveal">
        <div class="eyebrow">EDUCATION • LIVE STREAMING • MULTIMEDIA</div>
        <h1>WELCOME TO<br><span>NGINCENG MEDIA</span></h1>
        <p>Tempat belajar teknologi multimedia, live streaming, audio engineering, video production, dan dokumentasi digital.</p>
        <div class="actions">
          <a class="btn" href="edukasi.html">MULAI BELAJAR</a>
          <a class="btn btn-outline" href="layanan.html">LIHAT LAYANAN</a>
        </div>
      </div>
    </section>
    <section class="section section-light">
      <div class="container">
        <div class="section-title"><h2>Jelajahi Nginceng Media</h2><p>Belajar, membaca, dan mengenal layanan multimedia dalam satu tempat.</p></div>
        <div class="grid">
          <a class="card" href="edukasi.html"><div class="card-number">01</div><h3>Pusat Edukasi</h3><p>Pelajari berbagai kategori multimedia melalui materi bertingkat.</p><span class="card-link">JELAJAHI →</span></a>
          <a class="card" href="artikel.html"><div class="card-number">02</div><h3>Artikel</h3><p>Baca artikel dan pengetahuan seputar produksi multimedia.</p><span class="card-link">BACA ARTIKEL →</span></a>
          <a class="card" href="youtube.html"><div class="card-number">03</div><h3>YouTube</h3><p>Temukan tautan video, dokumentasi, dan konten Nginceng Media.</p><span class="card-link">LIHAT VIDEO →</span></a>
        </div>
      </div>
    </section>`;
}

function renderEducation() {
  app.innerHTML = `
    <section class="page-hero"><h1>Pusat Edukasi</h1><p>Pilih kategori untuk melihat daftar materi dan tutorial.</p></section>
    <section class="section section-light"><div class="container">
      <div class="grid">${categoryCards()}</div>
    </div></section>`;
}

function renderCategory() {
  const id = params.get("topik") || "vmix";
  const cat = categories[id];
  if (!cat) { app.innerHTML = `<section class="section"><div class="container"><h1>Kategori tidak ditemukan</h1><a class="back-link" href="edukasi.html">← Kembali ke Edukasi</a></div></section>`; return; }
  const items = cat.materials.map((m,i)=>`
    <a class="material-link" href="materi.html?id=${m.id}">
      <span class="material-index">${String(i+1).padStart(2,"0")}</span>
      <span><h3>${m.title}</h3><p>${m.desc}</p></span>
      <span class="arrow">›</span>
    </a>`).join("");
  app.innerHTML = `
    <section class="page-hero"><h1>${cat.title}</h1><p>${cat.description}</p></section>
    <section class="section section-light"><div class="container">
      <div class="breadcrumb"><a href="index.html">Home</a> / <a href="edukasi.html">Edukasi</a> / ${cat.title}</div>
      <div class="section-title"><h2>Daftar Materi</h2><p>Pilih materi yang ingin kamu pelajari.</p></div>
      <div class="material-list">${items}</div>
    </div></section>`;
}

function renderMaterial() {
  const id = params.get("id") || "vmix-dasar";
  const item = tutorials[id];
  if (!item) { app.innerHTML = `<section class="section"><div class="container"><h1>Materi belum tersedia</h1><a href="edukasi.html" class="back-link">← Kembali ke Edukasi</a></div></section>`; return; }
  const sections = (item.sections || []).map((s,i)=>`<h2>${i+1}. ${s[0]}</h2><p>${s[1]}</p>`).join("");
  const body = item.body ? String(item.body).split(/\n\s*\n/).map(paragraph => `<p>${paragraph.replace(/\n/g,"<br>")}</p>`).join("") : "";
  const image = item.image ? `<figure class="education-material-image"><img src="${item.image}" alt="Ilustrasi ${item.title || "materi edukasi"}" loading="lazy"></figure>` : "";
  app.innerHTML = `
    <section class="page-hero"><h1>Tutorial & Materi</h1><p>${item.category || "Nginceng Media"}</p></section>
    <section class="section section-light"><div class="container">
      <article class="article-body reveal">
        <a class="back-link" href="kategori.html?topik=${item.categoryId}">← Kembali ke ${item.category || "kategori"}</a>
        <div class="article-category">MATERI EDUKASI • NGINCENG MEDIA</div>
        <h1>${item.title}</h1>
        <p>${item.intro || ""}</p>
        ${image}
        ${body || sections}
        <a class="btn" href="kategori.html?topik=${item.categoryId}">KEMBALI KE DAFTAR MATERI</a>
      </article>
    </div></section>`;
}

function renderArticles() {
  const articles = studioContent.articles || [
    {title:"Mengenal Dasar vMix",desc:"Pengenalan input, preview, program, dan transisi.",body:"vMix merupakan perangkat lunak produksi video untuk mengelola berbagai sumber gambar.",url:"materi.html?id=vmix-dasar"},
    {title:"Mengenal OBS Studio",desc:"Memahami scene, source, dan area kerja OBS.",body:"OBS Studio digunakan untuk merekam dan melakukan siaran langsung.",url:"materi.html?id=obs-dasar"},
    {title:"Mengenal Dasar Audio",desc:"Memahami input, pemrosesan, dan output audio.",body:"Sistem audio terdiri dari sumber suara, perangkat pemrosesan, penguat, dan perangkat keluaran.",url:"materi.html?id=audio-dasar"}
  ];
  app.innerHTML = `
    <section class="page-hero"><h1>${studioConfig.articleHeading || "Artikel & Tutorial"}</h1><p>${studioConfig.articleIntro || "Pengetahuan dan catatan seputar dunia multimedia."}</p></section>
    <section class="section section-white"><div class="container"><div class="grid">
      ${articles.map((a,i)=>`<article class="card"><div class="card-number">${String(i+1).padStart(2,"0")}</div><h3>${a.title}</h3><p>${a.desc}</p><p>${a.body || ""}</p>${a.url ? `<a class="card-link" href="${a.url}">BACA SELENGKAPNYA →</a>` : ""}</article>`).join("")}
    </div></div></section>`;
}

function renderYoutube() {
  const yt = studioContent.youtube || {};
  const url = yt.url || "https://www.youtube.com/";
  app.innerHTML = `
    <section class="page-hero"><h1>${yt.heading || "Nginceng Media di YouTube"}</h1><p>${yt.description || "Dokumentasi, tutorial, dan konten multimedia."}</p></section>
    <section class="section section-light"><div class="container"><div class="video-panel">
      <h2>${yt.panelTitle || "Video & Dokumentasi"}</h2>
      <p>${yt.panelText || "Temukan video dan dokumentasi Nginceng Media."}</p>
      <a class="btn" href="${url}" target="_blank" rel="noopener noreferrer">KUNJUNGI YOUTUBE</a>
    </div></div></section>`;
}

function renderServices() {
  const services = studioContent.services || [];
  const selectedId = params.get("layanan");
  const selected = selectedId ? services.find((service, index) => (service.id || String(index)) === selectedId) : null;
  if (selected) {
    const packages = (selected.packages || []).map((item, index) => `<div class="card service-package" tabindex="0" role="button" aria-label="Lihat detail ${item.title}" data-package-detail data-package-videos="${encodeURIComponent(JSON.stringify(item.videos || []))}"><div class="card-number">${String(index+1).padStart(2,"0")}</div><h3>${item.title}</h3><p>${item.desc || ""}</p>${item.price ? `<strong class="service-price">${item.price}</strong>` : ""}<span class="card-link">LIHAT DETAIL →</span></div>`).join("");
    const gallery = (selected.gallery || []).map(item => `<figure class="service-media-card"><img src="${item.url}" alt="${item.title || selected.title}" loading="lazy"><figcaption><strong>${item.title || "Dokumentasi"}</strong><small>${item.caption || ""}</small></figcaption></figure>`).join("");
    app.innerHTML = `<section class="page-hero"><h1>${selected.title}</h1><p>${selected.desc || "Informasi layanan Nginceng Media."}</p></section><section class="section section-light"><div class="container"><a class="back-link" href="layanan.html">← Kembali ke semua layanan</a>${packages ? `<div class="section-title"><h2>Pilihan Paket</h2><p>Pilih paket sesuai kebutuhan kegiatan.</p></div><div class="grid">${packages}</div>` : `<div class="callout">Informasi paket layanan akan segera ditambahkan.</div>`}${gallery ? `<div class="section-title" style="margin-top:48px"><h2>Galeri Layanan</h2><p>Dokumentasi pekerjaan dan kegiatan.</p></div><div class="service-gallery-grid">${gallery}</div>` : ""}</div></section>`;
    return;
  }
  app.innerHTML = `
    <section class="page-hero"><h1>${studioConfig.serviceHeading || "Layanan Multimedia"}</h1><p>${studioConfig.serviceIntro || "Dukungan produksi dan dokumentasi untuk kebutuhan acara."}</p></section>
    <section class="section section-light"><div class="container"><div class="grid">
      ${services.map((s,i)=>`<a class="card" href="layanan.html?layanan=${encodeURIComponent(s.id || String(i))}"><div class="card-number">${String(i+1).padStart(2,"0")}</div><h3>${s.title}</h3><p>${s.desc || ""}</p><span class="card-link">LIHAT PAKET & DETAIL →</span></a>`).join("")}
    </div></div></section>`;
}

function renderContact() {
  const c = studioContent.contact || {};
  const wa = c.whatsapp || "https://wa.me/62XXXXXXXXXX";
  app.innerHTML = `
    <section class="page-hero"><h1>${c.heading || "Kontak Nginceng Media"}</h1><p>${c.description || "Hubungi kami untuk pertanyaan dan informasi layanan."}</p></section>
    <section class="section section-light"><div class="container"><div class="contact-panel">
      <h2>${c.panelTitle || "Terhubung dengan Kami"}</h2><p>${c.panelText || "Silakan hubungi kami melalui WhatsApp."}</p>
      <a class="btn" href="${wa}" target="_blank" rel="noopener noreferrer">HUBUNGI VIA WHATSAPP</a>
      ${c.email ? `<p>Email: ${c.email}</p>` : ""}
    </div></div></section>`;
}

const renderers = {
  home:renderHome,
  edukasi:renderEducation,
  kategori:renderCategory,
  materi:renderMaterial,
  artikel:renderArticles,
  youtube:renderYoutube,
  layanan:renderServices,
  kontak:renderContact
};

(renderers[page] || renderHome)();

const activePage = page === "kategori" || page === "materi" ? "edukasi" : page;
document.querySelectorAll("[data-nav]").forEach(link=>{
  if(link.dataset.nav === activePage) link.classList.add("active");
});

const menuButton = document.getElementById("menu-toggle");
const nav = document.getElementById("main-nav");
if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.classList.toggle("pulse");
  });
}

document.querySelectorAll("a").forEach(link=>{
  link.addEventListener("click",()=>{
    link.classList.add("pulse");
  });
});


/* ===== ANIMASI KLIK YANG LEBIH TERASA ===== */
document.querySelectorAll(
  ".btn, .nav a, .card, .education-card, .material-link, .article-card"
).forEach(element => {
  element.addEventListener("click", () => {
    element.classList.remove("click-animate");
    void element.offsetWidth;
    element.classList.add("click-animate");
  });
});

/* Animasi masuk pada konten halaman */
const mainContent = document.getElementById("app");
if (mainContent) {
  mainContent.classList.add("page-enter");
}


/* Terapkan identitas dan tampilan dari dashboard Studio pada seluruh halaman. */
(function applyStudioVisuals(){
  const cfg = studioConfig;
  const content = studioContent;
  const root = document.documentElement;
  if (cfg.gold) root.style.setProperty("--gold", cfg.gold);
  if (cfg.black) root.style.setProperty("--black", cfg.black);
  if (cfg.cream) root.style.setProperty("--cream", cfg.cream);
  if (cfg.font) document.body.style.fontFamily = cfg.font;
  if (cfg.siteName) document.querySelectorAll(".brand-name").forEach(el => el.textContent = cfg.siteName);
  if (cfg.tagline) document.querySelectorAll(".brand-tag").forEach(el => el.textContent = cfg.tagline);
  if (cfg.logo) document.querySelectorAll(".brand img").forEach(el => el.src = cfg.logo);
  if (cfg.wallpaper) {
    const hero = document.querySelector(".hero");
    if (hero) {
      hero.style.backgroundImage = `linear-gradient(110deg,rgba(0,0,0,.78),rgba(44,31,12,.58),rgba(0,0,0,.78)),url("${cfg.wallpaper}")`;
      hero.style.backgroundSize = "cover";
      hero.style.backgroundPosition = "center";
    }
  }
  if (cfg.heroTitle) {
    const h = document.querySelector(".hero h1");
    if (h) h.textContent = cfg.heroTitle;
  }
  if (cfg.heroText) {
    const p = document.querySelector(".hero .hero-content p");
    if (p) p.textContent = cfg.heroText;
  }
  if (content.nav) {
    document.querySelectorAll("[data-nav]").forEach(a => {
      const key = a.dataset.nav;
      const entry = content.nav[key];
      if (entry) {
        a.textContent = entry.label || a.textContent;
        a.style.display = entry.visible === false ? "none" : "";
      }
    });
  }
})();


/* Galeri layanan kini dibaca dari metadata Supabase dan URL publik Supabase Storage. */


/* ===== PREVIEW FOTO GALERI LAYANAN (LIGHTBOX) ===== */
(function enableServiceGalleryLightbox(){
  const appRoot = document.getElementById("app");
  if (!appRoot) return;

  let overlay = null;
  let previousFocus = null;

  function closeLightbox(){
    if (!overlay) return;
    overlay.remove();
    overlay = null;
    document.removeEventListener("keydown", onKeyDown);
    if (previousFocus && typeof previousFocus.focus === "function") previousFocus.focus();
  }

  function onKeyDown(event){
    if (event.key === "Escape") closeLightbox();
  }

  function openLightbox(photo){
    closeLightbox();
    previousFocus = photo;
    overlay = document.createElement("div");
    overlay.className = "nginceng-lightbox";
    overlay.setAttribute("role", "dialog");
    overlay.setAttribute("aria-modal", "true");
    overlay.setAttribute("aria-label", "Pratinjau foto galeri");

    const closeButton = document.createElement("button");
    closeButton.className = "nginceng-lightbox-close";
    closeButton.type = "button";
    closeButton.setAttribute("aria-label", "Tutup foto");
    closeButton.textContent = "×";

    const largeImage = document.createElement("img");
    largeImage.className = "nginceng-lightbox-image";
    largeImage.src = photo.currentSrc || photo.src;
    largeImage.alt = photo.alt || "Foto dokumentasi Nginceng Media";

    const caption = document.createElement("p");
    caption.className = "nginceng-lightbox-caption";
    const card = photo.closest(".service-media-card");
    const title = card && card.querySelector("figcaption strong");
    const detail = card && card.querySelector("figcaption small");
    caption.textContent = [title?.textContent, detail?.textContent].filter(Boolean).join(" — ");

    closeButton.addEventListener("click", closeLightbox);
    overlay.addEventListener("click", event => {
      if (event.target === overlay) closeLightbox();
    });

    overlay.append(closeButton, largeImage, caption);
    document.body.appendChild(overlay);
    document.addEventListener("keydown", onKeyDown);
    closeButton.focus();
  }

  function closePackageDetail(){
    const modal = document.querySelector(".nginceng-package-modal");
    if (modal) modal.remove();
    document.removeEventListener("keydown", onPackageKeyDown);
  }

  function onPackageKeyDown(event){
    if (event.key === "Escape") closePackageDetail();
  }

  function openPackageDetail(card){
    closePackageDetail();
    const modal = document.createElement("div");
    modal.className = "nginceng-package-modal";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-modal", "true");
    modal.setAttribute("aria-label", "Detail paket layanan");

    const panel = document.createElement("section");
    panel.className = "nginceng-package-panel";
    const close = document.createElement("button");
    close.type = "button";
    close.className = "nginceng-package-close";
    close.setAttribute("aria-label", "Tutup detail paket");
    close.textContent = "×";

    const number = document.createElement("div");
    number.className = "card-number";
    number.textContent = card.querySelector(".card-number")?.textContent || "";
    const title = document.createElement("h2");
    title.textContent = card.querySelector("h3")?.textContent || "Detail Paket";
    const desc = document.createElement("p");
    desc.textContent = card.querySelector("p")?.textContent || "Informasi paket layanan.";
    const price = document.createElement("strong");
    price.className = "nginceng-package-price";
    price.textContent = card.querySelector(".service-price")?.textContent || "Hubungi kami untuk informasi harga";
    const videoHeading = document.createElement("h3");
    videoHeading.className = "nginceng-package-video-heading";
    videoHeading.textContent = "Video Dokumentasi Paket";
    const videoList = document.createElement("div");
    videoList.className = "nginceng-package-video-list";
    let videos = [];
    try { videos = JSON.parse(decodeURIComponent(card.dataset.packageVideos || "%5B%5D")); } catch (_) { videos = []; }
    videos.filter(video => video && typeof video.url === "string").forEach((video, index) => {
      let parsed;
      try { parsed = new URL(video.url); } catch (_) { return; }
      const host = parsed.hostname.toLowerCase().replace(/^www\./, "");
      if (parsed.protocol !== "https:" || !["youtube.com", "m.youtube.com", "youtu.be"].includes(host)) return;
      const link = document.createElement("a");
      link.className = "nginceng-package-video-link";
      link.href = parsed.href;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = "▶ " + (video.title || `Video dokumentasi ${index + 1}`);
      videoList.appendChild(link);
    });
    if (!videoList.children.length) {
      const empty = document.createElement("p");
      empty.className = "nginceng-package-note";
      empty.textContent = "Video dokumentasi untuk paket ini belum ditambahkan.";
      videoList.appendChild(empty);
    }
    const note = document.createElement("p");
    note.className = "nginceng-package-note";
    note.textContent = "Hubungi Nginceng Media untuk informasi dan pemesanan paket ini.";

    close.addEventListener("click", closePackageDetail);
    modal.addEventListener("click", event => {
      if (event.target === modal) closePackageDetail();
    });
    panel.append(close, number, title, desc, price, videoHeading, videoList, note);
    modal.appendChild(panel);
    document.body.appendChild(modal);
    document.addEventListener("keydown", onPackageKeyDown);
    close.focus();
  }

  appRoot.addEventListener("click", event => {
    const packageCard = event.target.closest("[data-package-detail]");
    if (packageCard) {
      event.preventDefault();
      openPackageDetail(packageCard);
      return;
    }
    const photo = event.target.closest(".service-media-card img");
    if (!photo) return;
    event.preventDefault();
    openLightbox(photo);
  });

  appRoot.addEventListener("keydown", event => {
    const packageCard = event.target.closest("[data-package-detail]");
    if (packageCard && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openPackageDetail(packageCard);
      return;
    }
    const photo = event.target.closest(".service-media-card img");
    if (photo && (event.key === "Enter" || event.key === " ")) {
      event.preventDefault();
      openLightbox(photo);
    }
  });

  appRoot.querySelectorAll(".service-media-card img").forEach(photo => {
    photo.tabIndex = 0;
    photo.setAttribute("role", "button");
    photo.setAttribute("aria-label", "Perbesar foto: " + (photo.alt || "dokumentasi"));
  });
})();

})();
