/* NGINCENG MEDIA - ADMIN DASHBOARD
   Penyimpanan pengaturan dan konten: Supabase
   Cadangan lokal: localStorage
   Galeri portofolio: masih IndexedDB lokal (tahap berikutnya dipindah online)
*/

const $ = id => document.getElementById(id);

const defaults = {
  siteName: "NGINCENG MEDIA",
  tagline: "EDUCATION • LIVE STREAMING • MULTIMEDIA",
  gold: "#C99A3C",
  black: "#101010",
  cream: "#F5F5F2",
  font: "Arial, Helvetica, sans-serif",
  heroTitle: "WELCOME TO NGINCENG MEDIA",
  heroText: "Tempat belajar teknologi multimedia, live streaming, audio engineering, video production, dan dokumentasi digital.",
  logo: "",
  wallpaper: ""
};

const starter = {
  articles: [
    { title: "Mengenal Dasar vMix", desc: "Pengenalan input, preview, program, dan transisi.", body: "vMix merupakan perangkat lunak produksi video untuk mengelola berbagai sumber gambar.", url: "materi.html?id=vmix-dasar" },
    { title: "Mengenal OBS Studio", desc: "Memahami scene, source, dan area kerja OBS.", body: "OBS Studio digunakan untuk merekam dan melakukan siaran langsung.", url: "materi.html?id=obs-dasar" },
    { title: "Mengenal Dasar Audio", desc: "Memahami input, pemrosesan, dan output audio.", body: "Sistem audio terdiri dari sumber suara, perangkat pemrosesan, penguat, dan perangkat keluaran.", url: "materi.html?id=audio-dasar" }
  ],
  services: [
    { title: "Live Streaming", desc: "Produksi siaran langsung untuk kegiatan dan acara." },
    { title: "Dokumentasi Acara", desc: "Dokumentasi foto dan video untuk kebutuhan publikasi." },
    { title: "Multimedia", desc: "Dukungan kebutuhan visual dan multimedia acara." }
  ],
  youtube: {
    heading: "Nginceng Media di YouTube",
    description: "Dokumentasi, tutorial, dan konten multimedia.",
    panelTitle: "Video & Dokumentasi",
    panelText: "Temukan video dan dokumentasi Nginceng Media.",
    url: "https://www.youtube.com/"
  },
  contact: {
    heading: "Kontak Nginceng Media",
    description: "Hubungi kami untuk pertanyaan dan informasi layanan.",
    panelTitle: "Terhubung dengan Kami",
    panelText: "Silakan hubungi kami melalui WhatsApp.",
    whatsapp: "https://wa.me/62XXXXXXXXXX",
    email: ""
  },
  nav: {
    home: { label: "HOME", visible: true },
    edukasi: { label: "EDUKASI", visible: true },
    artikel: { label: "ARTIKEL", visible: true },
    youtube: { label: "YOUTUBE", visible: true },
    layanan: { label: "LAYANAN", visible: true },
    kontak: { label: "KONTAK", visible: true }
  }
};

const starterTutorials = {
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

const starterCategories = {
  vmix: { title: "vMix & Live Streaming", description: "Belajar produksi live streaming, kamera, transisi, audio, dan output siaran.", materials: [] },
  obs: { title: "OBS Studio", description: "Belajar scene, sumber video, audio, dan siaran.", materials: [] },
  audio: { title: "Audio & Sound System", description: "Dasar pengolahan audio, mixer, DSP, equalizer, dan RTA.", materials: [] },
  video: { title: "Video Production", description: "Dasar kamera, komposisi, pencahayaan, dan produksi video.", materials: [] },
  multimedia: { title: "Multimedia", description: "Perangkat, aplikasi, dan alur kerja produksi multimedia.", materials: [] }
};

let cfg = { ...defaults };
let data = structuredClone(starter);
let isSaving = false;

const get = (id, fallback = "") => $(id)?.value || fallback;

function toast(message) {
  const node = $("toast");
  if (!node) return;
  node.textContent = message;
  node.classList.add("show");
  setTimeout(() => node.classList.remove("show"), 3500);
}

function esc(value) {
  return String(value || "").replace(/[&<>"']/g, char => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  }[char]));
}

function mergeContent(saved = {}) {
  return {
    ...structuredClone(starter),
    ...saved,
    youtube: { ...starter.youtube, ...(saved.youtube || {}) },
    contact: { ...starter.contact, ...(saved.contact || {}) },
    nav: { ...starter.nav, ...(saved.nav || {}) },
    categories: { ...starterCategories, ...(saved.categories || {}) },
    tutorials: { ...structuredClone(starterTutorials), ...(saved.tutorials || {}) },
    articles: Array.isArray(saved.articles) ? saved.articles : structuredClone(starter.articles),
    services: (Array.isArray(saved.services) ? saved.services : structuredClone(starter.services)).map(service => ({ ...service, packages: Array.isArray(service.packages) ? service.packages.map(pkg => ({ ...pkg, videos: Array.isArray(pkg.videos) ? pkg.videos : [] })) : [] }))
  };
}

function readLocalBackup() {
  try {
    const savedSettings = JSON.parse(localStorage.getItem("ngincengStudioSettings") || "{}");
    const savedContent = JSON.parse(localStorage.getItem("ngincengStudioContent") || "{}");
    cfg = { ...defaults, ...savedSettings };
    data = mergeContent(savedContent);
  } catch (error) {
    console.warn("Cadangan lokal tidak dapat dibaca:", error);
    cfg = { ...defaults };
    data = mergeContent();
  }
}

function putFields() {
  ["siteName", "tagline", "gold", "black", "cream", "font", "heroTitle", "heroText"]
    .forEach(key => { if ($(key)) $(key).value = cfg[key] ?? ""; });

  $("ytHeading").value = data.youtube.heading;
  $("ytDescription").value = data.youtube.description;
  $("ytPanelTitle").value = data.youtube.panelTitle;
  $("ytPanelText").value = data.youtube.panelText;
  $("ytUrl").value = data.youtube.url;
  $("contactHeading").value = data.contact.heading;
  $("contactDescription").value = data.contact.description;
  $("contactPanelTitle").value = data.contact.panelTitle;
  $("contactPanelText").value = data.contact.panelText;
  $("whatsapp").value = data.contact.whatsapp;
  $("email").value = data.contact.email || "";

  renderLists();
  refresh();
}

function refresh() {
  $("pName").textContent = cfg.siteName;
  $("pTag").textContent = cfg.tagline;
  $("pHeroTitle").textContent = cfg.heroTitle;
  $("pHeroText").textContent = cfg.heroText;
  $("goldHex").textContent = cfg.gold;
  $("blackHex").textContent = cfg.black;
  $("creamHex").textContent = cfg.cream;
  $("preview").style.background = cfg.cream;
  $("previewHero").style.backgroundImage = cfg.wallpaper
    ? `linear-gradient(110deg,#000b,#30230bbb,#000b),url("${cfg.wallpaper}")`
    : "linear-gradient(110deg,#000d,#3a2b18bb,#000d)";
  $("previewHero").style.backgroundSize = "cover";
  $("previewLogo").innerHTML = cfg.logo ? `<img src="${cfg.logo}" alt="Logo">` : "N";
  $("previewLogo").style.background = cfg.gold;
  $("previewHero").querySelector("button").style.background = cfg.gold;
}

function collect() {
  ["siteName", "tagline", "gold", "black", "cream", "font", "heroTitle", "heroText"]
    .forEach(key => { cfg[key] = $(key).value; });

  data.youtube = {
    heading: get("ytHeading", "Nginceng Media di YouTube"),
    description: get("ytDescription"),
    panelTitle: get("ytPanelTitle", "Video & Dokumentasi"),
    panelText: get("ytPanelText"),
    url: get("ytUrl", "https://www.youtube.com/")
  };
  data.contact = {
    heading: get("contactHeading", "Kontak Nginceng Media"),
    description: get("contactDescription"),
    panelTitle: get("contactPanelTitle", "Terhubung dengan Kami"),
    panelText: get("contactPanelText"),
    whatsapp: get("whatsapp", "https://wa.me/62XXXXXXXXXX"),
    email: get("email")
  };
  refresh();
}

async function save() {
  if (isSaving) return;
  isSaving = true;
  const saveButtons = [$("saveTop"), $("saveBottom")].filter(Boolean);
  saveButtons.forEach(button => { button.disabled = true; });

  try {
    collect();
    const client = await window.ngincengAuthReady;

    const { error } = await client
      .from("nginceng_site_content")
      .upsert({
        id: 1,
        settings: cfg,
        content: data,
        updated_at: new Date().toISOString()
      }, { onConflict: "id" });

    if (error) throw error;

    // Cadangan lokal hanya dibuat setelah penyimpanan online berhasil.
    localStorage.setItem("ngincengStudioSettings", JSON.stringify(cfg));
    localStorage.setItem("ngincengStudioContent", JSON.stringify(data));
    $("status").textContent = "Tersimpan online";
    toast("Berhasil! Pengaturan dan konten tersimpan di Supabase.");
  } catch (error) {
    console.error("Gagal menyimpan ke Supabase:", error);
    $("status").textContent = "Gagal menyimpan online";
    toast("Gagal menyimpan: " + (error.message || "Periksa koneksi dan izin database."));
  } finally {
    isSaving = false;
    saveButtons.forEach(button => { button.disabled = false; });
  }
}

let activePackageIndex = -1;

function renderPackageEditor() {
  const serviceSelect = $("packageServiceSelect");
  const packageSelect = $("packageSelect");
  if (!serviceSelect || !packageSelect) return;
  const previousService = serviceSelect.value;
  serviceSelect.innerHTML = (data.services || []).map((service, index) => `<option value="${index}">${esc(service.title)}</option>`).join("");
  if (!data.services?.length) {
    packageSelect.innerHTML = "";
    ["packageTitle", "packageDesc", "packagePrice"].forEach(id => { if ($(id)) $(id).value = ""; });
    $("packageVideoList").innerHTML = '<p class="package-empty">Tambahkan layanan terlebih dahulu.</p>';
    return;
  }
  if (previousService !== "" && data.services[Number(previousService)]) serviceSelect.value = previousService;
  renderPackageChoices();
}

function renderPackageChoices() {
  const serviceIndex = Number($("packageServiceSelect")?.value || 0);
  const service = data.services?.[serviceIndex];
  const select = $("packageSelect");
  if (!service || !select) return;
  service.packages = Array.isArray(service.packages) ? service.packages : [];
  const previousPackage = activePackageIndex;
  select.innerHTML = service.packages.map((pkg, index) => `<option value="${index}">${esc(pkg.title || `Paket ${index + 1}`)}</option>`).join("");
  if (!service.packages.length) {
    activePackageIndex = -1;
    ["packageTitle", "packageDesc", "packagePrice"].forEach(id => { $(id).value = ""; });
    $("packageVideoList").innerHTML = '<p class="package-empty">Belum ada paket. Klik “Buat Paket Baru”.</p>';
    return;
  }
  const index = previousPackage >= 0 && service.packages[previousPackage] ? previousPackage : 0;
  select.value = String(index);
  loadPackageFields(index);
}

function loadPackageFields(index) {
  const service = data.services?.[Number($("packageServiceSelect")?.value || 0)];
  const pkg = service?.packages?.[index];
  if (!pkg) return;
  activePackageIndex = index;
  $("packageSelect").value = String(index);
  $("packageTitle").value = pkg.title || "";
  $("packageDesc").value = pkg.desc || "";
  $("packagePrice").value = pkg.price || "";
  pkg.videos = Array.isArray(pkg.videos) ? pkg.videos : [];
  $("packageVideoList").innerHTML = pkg.videos.map((video, videoIndex) => `
    <div class="package-video-item" data-package-video="${videoIndex}">
      <input data-video-title="${videoIndex}" value="${esc(video.title || "")}" placeholder="Judul video">
      <input data-video-url="${videoIndex}" value="${esc(video.url || "")}" placeholder="https://youtu.be/... atau https://www.youtube.com/watch?v=...">
      <button type="button" class="small-btn danger" data-remove-video="${videoIndex}">Hapus</button>
    </div>`).join("") || '<p class="package-empty">Belum ada link YouTube. Klik “Tambah link YouTube”.</p>';
}

function savePackageFields(showMessage = true) {
  const service = data.services?.[Number($("packageServiceSelect")?.value || 0)];
  const pkg = service?.packages?.[activePackageIndex];
  if (!pkg) return false;
  const title = $("packageTitle").value.trim();
  if (!title) { toast("Isi nama paket terlebih dahulu."); return false; }
  const videos = [];
  for (const row of $("packageVideoList").querySelectorAll("[data-package-video]")) {
    const titleInput = row.querySelector("[data-video-title]");
    const urlInput = row.querySelector("[data-video-url]");
    const videoTitle = titleInput?.value.trim() || "Video dokumentasi";
    const url = urlInput?.value.trim() || "";
    if (!url) continue;
    let parsed;
    try { parsed = new URL(url); } catch (_) {
      toast("Periksa format link YouTube.");
      urlInput.focus();
      return false;
    }
    const host = parsed.hostname.toLowerCase().replace(/^www\./, "");
    if (parsed.protocol !== "https:" || !["youtube.com", "m.youtube.com", "youtu.be"].includes(host)) {
      toast("Link video harus menggunakan URL YouTube HTTPS.");
      urlInput.focus();
      return false;
    }
    videos.push({ title: videoTitle, url: parsed.href });
  }
  pkg.title = title;
  pkg.desc = $("packageDesc").value.trim();
  pkg.price = $("packagePrice").value.trim();
  pkg.videos = videos;
  if (showMessage) toast("Paket diperbarui. Klik Simpan Semua untuk menyimpan online.");
  renderLists();
  return true;
}

function renderLists() {
  const currentCats = Object.entries(data.categories || {});
  $("categoryList").innerHTML = currentCats.map(([id, category]) => `
    <div class="manage-item" data-category-card="${esc(id)}">
      <strong>${esc(category.title)}</strong><p>${esc(category.description)}</p>
      <div class="manage-actions">
        <button type="button" class="small-btn" data-editcat="${esc(id)}">Edit</button>
        <button type="button" class="small-btn danger" data-delcat="${esc(id)}">Hapus</button>
      </div>
      <div class="category-inline-editor" data-category-editor="${esc(id)}" hidden>
        <div class="field"><label>Nama kategori</label><input data-category-title value="${esc(category.title)}"></div>
        <div class="field"><label>Deskripsi kategori</label><textarea data-category-desc rows="3">${esc(category.description || "")}</textarea></div>
        <div class="manage-actions"><button type="button" class="btn gold" data-savecat="${esc(id)}">Simpan Edit</button><button type="button" class="small-btn" data-cancelcat="${esc(id)}">Batal</button></div>
      </div>
    </div>`).join("") || "<p>Belum ada kategori.</p>";

  $("articleList").innerHTML = (data.articles || []).map((article, index) => `
    <div class="manage-item article-manage-item" data-article-card="${index}">
      <strong>${esc(article.title)}</strong><p>${esc(article.desc)}</p>
      <div class="manage-actions">
        <button type="button" class="small-btn" data-editarticle="${index}">Edit</button>
        <button type="button" class="small-btn danger" data-delarticle="${index}">Hapus</button>
      </div>
      <div class="article-inline-editor" data-article-editor="${index}" hidden>
        <div class="field"><label>Judul artikel</label><input data-article-title value="${esc(article.title)}"></div>
        <div class="field"><label>Deskripsi / ringkasan</label><textarea data-article-desc rows="3">${esc(article.desc || "")}</textarea></div>
        <div class="field"><label>Isi artikel lengkap</label><textarea data-article-body rows="8">${esc(article.body || "")}</textarea></div>
        <div class="field"><label>Link selengkapnya (opsional)</label><input data-article-url value="${esc(article.url || "")}" placeholder="https://... atau materi.html?id=..."></div>
        <div class="manage-actions"><button type="button" class="btn gold" data-savearticle="${index}">Simpan Edit</button><button type="button" class="small-btn" data-cancelarticle="${index}">Batal</button></div>
      </div>
    </div>`).join("") || "<p>Belum ada artikel.</p>";

  $("serviceList").innerHTML = (data.services || []).map((service, index) => `
    <div class="manage-item"><strong>${esc(service.title)}</strong><p>${esc(service.desc)}</p>
      <div class="manage-actions">
        <button class="small-btn" data-editservice="${index}">Edit</button>
        <button class="small-btn danger" data-delservice="${index}">Hapus</button>
      </div>
    </div>`).join("") || "<p>Belum ada layanan.</p>";

  $("navList").innerHTML = Object.entries(data.nav || {}).map(([key, item]) => `
    <div class="manage-item"><strong>${esc(key.toUpperCase())}</strong>
      <div class="field"><label>Nama menu</label><input data-navlabel="${esc(key)}" value="${esc(item.label)}"></div>
      <label><input type="checkbox" data-navvisible="${esc(key)}" ${item.visible ? "checked" : ""}> Tampilkan menu</label>
    </div>`).join("");  renderPackageEditor();
  renderMaterialEditor();
}

function slugify(value) {
  return String(value || "materi").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "materi";
}

function renderMaterialEditor(selectedId = $("materialSelect")?.value || "") {
  const categorySelect = $("materialCategory");
  const materialSelect = $("materialSelect");
  if (!categorySelect || !materialSelect) return;
  const previousCategory = categorySelect.value;
  categorySelect.innerHTML = Object.entries(data.categories || {}).map(([id, cat]) => `<option value="${esc(id)}">${esc(cat.title)}</option>`).join("");
  if (data.categories?.[previousCategory]) categorySelect.value = previousCategory;
  const categoryId = categorySelect.value;
  const entries = Object.entries(data.tutorials || {}).filter(([, item]) => item.categoryId === categoryId);
  materialSelect.innerHTML = `<option value="">Pilih materi</option>` + entries.map(([id,item]) => `<option value="${esc(id)}">${esc(item.title || id)}</option>`).join("");
  if (entries.some(([id]) => id === selectedId)) materialSelect.value = selectedId;
  loadMaterialFields();
}

function loadMaterialFields() {
  const id = $("materialSelect")?.value;
  const item = data.tutorials?.[id];
  $("materialTitle").value = item?.title || "";
  $("materialDesc").value = item?.desc || item?.intro || "";
  $("materialIntro").value = item?.intro || "";
  $("materialBody").value = item?.body || (item?.sections || []).map(section => `${section[0]}\n${section[1]}`).join("\n\n");
  $("deleteMaterial").disabled = !item;
}

function saveMaterialFields(showToast = true) {
  const categoryId = $("materialCategory").value;
  const category = data.categories?.[categoryId];
  const title = $("materialTitle").value.trim();
  if (!category || !title) return toast("Pilih kategori dan isi judul materi.");
  let id = $("materialSelect").value;
  if (!id) id = `${slugify(title)}-${Date.now()}`;
  data.tutorials = data.tutorials || {};
  data.tutorials[id] = { ...(data.tutorials[id] || {}), category: category.title, categoryId, title, desc: $("materialDesc").value.trim(), intro: $("materialIntro").value.trim(), body: $("materialBody").value };
  renderMaterialEditor(id);
  if (showToast) toast("Materi diperbarui. Klik Simpan Semua untuk menyimpan online.");
}

function editItem(kind, index) {
  const item = data[kind]?.[index];
  if (!item) return;
  const title = prompt("Ubah judul:", item.title);
  if (title === null) return;
  const desc = prompt("Ubah deskripsi / ringkasan:", item.desc || "");
  if (desc === null) return;
  item.title = title;
  item.desc = desc;
  if (kind === "articles") {
    const body = prompt("Ubah isi artikel lengkap:", item.body || "");
    if (body !== null) item.body = body;
    const url = prompt("Link selengkapnya (kosongkan jika tidak ada):", item.url || "");
    if (url !== null) item.url = url.trim();
  }
  renderLists();
}

document.addEventListener("click", event => {
  const target = event.target;
  if (target.dataset.editarticle !== undefined) {
    const editor = document.querySelector(`[data-article-editor="${target.dataset.editarticle}"]`);
    if (editor) { editor.hidden = false; editor.querySelector("[data-article-title]")?.focus(); }
  }
  if (target.dataset.cancelarticle !== undefined) {
    const editor = document.querySelector(`[data-article-editor="${target.dataset.cancelarticle}"]`);
    if (editor) editor.hidden = true;
  }
  if (target.dataset.savearticle !== undefined) {
    const index = Number(target.dataset.savearticle);
    const card = document.querySelector(`[data-article-card="${index}"]`);
    const article = data.articles?.[index];
    if (!card || !article) return;
    const title = card.querySelector("[data-article-title]").value.trim();
    if (!title) return toast("Judul artikel tidak boleh kosong.");
    article.title = title;
    article.desc = card.querySelector("[data-article-desc]").value.trim();
    article.body = card.querySelector("[data-article-body]").value;
    article.url = card.querySelector("[data-article-url]").value.trim();
    renderLists();
    toast("Artikel diperbarui. Klik Simpan Semua untuk menyimpan online.");
  }
  if (target.dataset.delarticle !== undefined && confirm("Hapus artikel ini?")) {
    data.articles.splice(+target.dataset.delarticle, 1);
    renderLists();
  }
  if (target.dataset.editservice !== undefined) editItem("services", +target.dataset.editservice);
  if (target.dataset.delservice !== undefined && confirm("Hapus layanan ini? Galeri layanan terkait juga akan kehilangan keterkaitannya.")) {
    data.services.splice(+target.dataset.delservice, 1);
    renderLists();
    if (typeof fillPortfolioFolders === "function") fillPortfolioFolders();
  }
  if (target.dataset.editcat !== undefined) {
    const editor = document.querySelector(`[data-category-editor="${CSS.escape(target.dataset.editcat)}"]`);
    if (editor) { editor.hidden = false; editor.querySelector("[data-category-title]")?.focus(); }
  }
  if (target.dataset.cancelcat !== undefined) {
    const editor = document.querySelector(`[data-category-editor="${CSS.escape(target.dataset.cancelcat)}"]`);
    if (editor) editor.hidden = true;
  }
  if (target.dataset.savecat !== undefined) {
    const id = target.dataset.savecat;
    const category = data.categories[id];
    const card = document.querySelector(`[data-category-card="${CSS.escape(id)}"]`);
    if (!category || !card) return;
    const title = card.querySelector("[data-category-title]").value.trim();
    if (!title) return toast("Nama kategori tidak boleh kosong.");
    category.title = title;
    category.description = card.querySelector("[data-category-desc]").value.trim();
    renderLists();
    toast("Kategori diperbarui. Klik Simpan Semua untuk menyimpan online.");
  }
  if (target.dataset.delcat && confirm("Hapus kategori ini?")) {
    delete data.categories[target.dataset.delcat];
    renderLists();
  }
});

$("packageServiceSelect").addEventListener("change", renderPackageChoices);
$("packageSelect").addEventListener("change", event => loadPackageFields(Number(event.target.value)));
$("addPackageVideo").addEventListener("click", () => {
  if (activePackageIndex < 0) return toast("Pilih atau buat paket terlebih dahulu.");
  savePackageFields(false);
  const service = data.services[Number($("packageServiceSelect").value)];
  service.packages[activePackageIndex].videos.push({ title: "", url: "" });
  loadPackageFields(activePackageIndex);
});
$("packageVideoList").addEventListener("click", event => {
  const button = event.target.closest("[data-remove-video]");
  if (!button) return;
  savePackageFields(false);
  const service = data.services[Number($("packageServiceSelect").value)];
  service.packages[activePackageIndex].videos.splice(Number(button.dataset.removeVideo), 1);
  loadPackageFields(activePackageIndex);
});
$("savePackage").addEventListener("click", () => savePackageFields(true));
$("newPackage").addEventListener("click", () => {
  const service = data.services?.[Number($("packageServiceSelect").value || 0)];
  if (!service) return toast("Tambahkan layanan terlebih dahulu.");
  savePackageFields(false);
  service.packages = Array.isArray(service.packages) ? service.packages : [];
  service.packages.push({ title: "Paket Baru", desc: "", price: "", videos: [] });
  renderPackageEditor();
  $("packageSelect").value = String(service.packages.length - 1);
  loadPackageFields(service.packages.length - 1);
  $("packageTitle").focus();
});
$("deletePackage").addEventListener("click", () => {
  const service = data.services?.[Number($("packageServiceSelect").value || 0)];
  if (!service || activePackageIndex < 0) return toast("Pilih paket yang ingin dihapus.");
  if (!confirm("Hapus paket ini beserta daftar link YouTube-nya?")) return;
  service.packages.splice(activePackageIndex, 1);
  renderPackageEditor();
  toast("Paket dihapus. Klik Simpan Semua untuk menyimpan online.");
});

$("materialCategory")?.addEventListener("change", () => renderMaterialEditor());
$("materialSelect")?.addEventListener("change", loadMaterialFields);
$("newMaterial")?.addEventListener("click", () => {
  $("materialSelect").value = "";
  ["materialTitle", "materialDesc", "materialIntro", "materialBody"].forEach(id => { $(id).value = ""; });
  $("deleteMaterial").disabled = true;
  $("materialTitle").focus();
});
$("saveMaterial")?.addEventListener("click", () => saveMaterialFields(true));
$("deleteMaterial")?.addEventListener("click", () => {
  const id = $("materialSelect").value;
  if (!id || !data.tutorials?.[id] || !confirm("Hapus materi tutorial ini?")) return;
  delete data.tutorials[id];
  renderMaterialEditor();
  toast("Materi dihapus. Klik Simpan Semua untuk menyimpan online.");
});
$("uploadMaterialImage")?.addEventListener("click", async () => {
  const file = $("materialImageFile").files?.[0];
  if (!file) return toast("Pilih gambar terlebih dahulu.");
  if (!file.type.startsWith("image/") || file.size > 50 * 1024 * 1024) return toast("Pilih gambar yang valid, maksimal 50 MB.");
  try {
    const client = await window.ngincengAuthReady;
    const materialId = $("materialSelect").value || slugify($("materialTitle").value || "materi-baru");
    const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, "-");
    const path = `education/${materialId}/${Date.now()}-${safeName}`;
    const { error } = await client.storage.from("nginceng-media").upload(path, file, { cacheControl: "3600", upsert: false, contentType: file.type });
    if (error) throw error;
    const { data: publicData } = client.storage.from("nginceng-media").getPublicUrl(path);
    const marker = `\n\n[[image:${publicData.publicUrl}]]\n\n`;
    const textarea = $("materialBody");
    const start = textarea.selectionStart ?? textarea.value.length;
    const end = textarea.selectionEnd ?? start;
    textarea.setRangeText(marker, start, end, "end");
    $("materialImageFile").value = "";
    toast("Gambar berhasil diunggah dan penandanya disisipkan. Simpan materi lalu Simpan Semua.");
  } catch (error) {
    console.error("Upload gambar materi gagal:", error);
    toast("Upload gagal: " + (error.message || "Periksa login dan kebijakan Storage."));
  }
});

$("addArticle").onclick = () => {
  const title = get("newArticleTitle");
  if (!title.trim()) return toast("Isi judul artikel dulu.");
  data.articles.push({ title, desc: get("newArticleDesc"), body: get("newArticleBody"), url: "" });
  ["newArticleTitle", "newArticleDesc", "newArticleBody"].forEach(id => { $(id).value = ""; });
  renderLists();
};

$("addService").onclick = () => {
  const title = get("newServiceTitle");
  if (!title.trim()) return toast("Isi nama layanan dulu.");
  data.services.push({ title, desc: get("newServiceDesc") });
  $("newServiceTitle").value = "";
  $("newServiceDesc").value = "";
  renderLists();
  renderPackageEditor();
  if (typeof fillPortfolioFolders === "function") fillPortfolioFolders();
};

$("addCategory").onclick = () => {
  const title = get("newCatTitle");
  if (!title.trim()) return toast("Isi nama kategori dulu.");
  const id = "kategori-" + Date.now();
  data.categories[id] = { title, description: get("newCatDesc"), materials: [] };
  $("newCatTitle").value = "";
  $("newCatDesc").value = "";
  renderLists();
};

document.addEventListener("input", event => {
  const target = event.target;
  if (target.dataset.navlabel) data.nav[target.dataset.navlabel].label = target.value;
  if (["siteName", "tagline", "gold", "black", "cream", "font", "heroTitle", "heroText"].includes(target.id)) {
    cfg[target.id] = target.value;
    refresh();
  }
});

document.addEventListener("change", event => {
  const target = event.target;
  if (target.dataset.navvisible) data.nav[target.dataset.navvisible].visible = target.checked;
});

document.querySelectorAll(".tab").forEach(button => {
  button.onclick = () => {
    document.querySelectorAll(".tab,.panel").forEach(element => element.classList.remove("active"));
    button.classList.add("active");
    $("panel-" + button.dataset.tab).classList.add("active");
    $("panelTitle").textContent = button.textContent.trim();
    $("panelDesc").textContent = "Atur bagian website ini melalui formulir yang tersedia.";
  };
});

function imageUpload(inputId, key, labelId) {
  $(inputId).onchange = () => {
    const file = $(inputId).files[0];
    if (!file) return;
    if (file.size > 1500000) {
      toast("Gambar maksimal 1,5 MB. Kompres gambar dahulu.");
      $(inputId).value = "";
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      cfg[key] = reader.result;
      $(labelId).textContent = file.name;
      refresh();
    };
    reader.readAsDataURL(file);
  };
}

imageUpload("logoFile", "logo", "logoName");
imageUpload("wallFile", "wallpaper", "wallName");
$("saveTop").onclick = save;
$("saveBottom").onclick = save;

$("reset").onclick = () => {
  if (!confirm("Kembalikan seluruh pengaturan dan konten ke bawaan awal? Ini akan mengubah data online setelah disimpan.")) return;
  cfg = { ...defaults };
  data = mergeContent();
  putFields();
  toast("Pengaturan kembali ke bawaan. Klik Simpan Semua untuk menerapkannya online.");
};

/* Galeri portofolio masih lokal di browser. Integrasi penyimpanan online dilakukan pada tahap berikutnya. */
const PORT_DB = "ngincengMediaPortfolio";
const PORT_STORE = "assets";

function openPortfolioDB() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(PORT_DB, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(PORT_STORE)) db.createObjectStore(PORT_STORE, { keyPath: "id" });
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function portfolioAll() {
  const db = await openPortfolioDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(PORT_STORE, "readonly");
    const request = transaction.objectStore(PORT_STORE).getAll();
    request.onsuccess = () => resolve(request.result || []);
    request.onerror = () => reject(request.error);
  });
}

async function portfolioPut(item) {
  const db = await openPortfolioDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(PORT_STORE, "readwrite");
    transaction.objectStore(PORT_STORE).put(item);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

async function portfolioDelete(id) {
  const db = await openPortfolioDB();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction(PORT_STORE, "readwrite");
    transaction.objectStore(PORT_STORE).delete(id);
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error);
  });
}

function portfolioServices() { return data.services || []; }

async function refreshPortfolioList() {
  const serviceId = $("portfolioService").value;
  const all = await portfolioAll();
  const entries = all.filter(item => item.serviceId === serviceId);
  $("portfolioList").innerHTML = entries.map(item => `
    <div class="manage-item"><div class="media-row">
      <div class="media-thumb" id="thumb-${esc(item.id)}"></div>
      <div style="flex:1"><strong>${esc(item.title)}</strong><p>${esc(item.caption || "")} • ${item.kind === "video" ? "Video" : "Foto"}</p></div>
      <button class="small-btn danger" data-delete-media="${esc(item.id)}">Hapus</button>
    </div></div>`).join("") || "<p>Folder ini belum memiliki foto atau video.</p>";

  for (const item of entries) {
    const node = $("thumb-" + item.id);
    if (node) {
      if (item.kind === "image") {
        const image = document.createElement("img");
        image.className = "media-thumb";
        image.src = URL.createObjectURL(item.blob);
        node.replaceWith(image);
      } else {
        node.textContent = "VIDEO";
      }
    }
  }
}

function fillPortfolioFolders() {
  const select = $("portfolioService");
  const previousValue = select.value;
  select.innerHTML = portfolioServices().map((service, index) =>
    `<option value="${index}">${esc(service.title)}</option>`
  ).join("");
  if (portfolioServices()[Number(previousValue)]) select.value = previousValue;
  refreshPortfolioList().catch(() => toast("Tidak dapat membaca galeri di browser ini."));
}

$("portfolioService").addEventListener("change", () => refreshPortfolioList().catch(() => {}));
$("portfolioFiles").addEventListener("change", () => {
  $("portfolioFileName").textContent = [...$("portfolioFiles").files].map(file => file.name).join(", ") || "Belum memilih file";
});

$("addPortfolio").addEventListener("click", async () => {
  const files = [...$("portfolioFiles").files];
  const serviceIndex = Number($("portfolioService").value);
  if (!files.length) return toast("Pilih foto atau video dahulu.");
  if (!portfolioServices()[serviceIndex]) return toast("Tambahkan layanan terlebih dahulu.");

  try {
    for (const file of files) {
      if (file.size > 25 * 1024 * 1024) {
        toast(file.name + " melebihi batas 25 MB.");
        continue;
      }
      const kind = file.type.startsWith("image/") ? "image" :
        (file.type.startsWith("video/") ? "video" : "");
      if (!kind) continue;
      await portfolioPut({
        id: "media-" + Date.now() + "-" + Math.random().toString(36).slice(2, 8),
        serviceId: String(serviceIndex),
        title: $("mediaTitle").value.trim() || file.name,
        caption: $("mediaCaption").value.trim(),
        kind,
        mime: file.type,
        name: file.name,
        blob: file,
        createdAt: Date.now()
      });
    }
    $("portfolioFiles").value = "";
    $("portfolioFileName").textContent = "Belum memilih file";
    $("mediaTitle").value = "";
    $("mediaCaption").value = "";
    await refreshPortfolioList();
    toast("Media berhasil ditambahkan ke galeri lokal browser ini.");
  } catch (error) {
    console.error(error);
    toast("Penyimpanan browser tidak cukup atau tidak tersedia.");
  }
});

document.addEventListener("click", async event => {
  const id = event.target.dataset.deleteMedia;
  if (id && confirm("Hapus foto/video dari galeri?")) {
    try {
      await portfolioDelete(id);
      await refreshPortfolioList();
      toast("File dihapus dari galeri lokal.");
    } catch (error) {
      toast("Gagal menghapus file galeri.");
    }
  }
});

async function initDashboard() {
  // Tampilkan cadangan lokal terlebih dahulu agar formulir tidak kosong jika koneksi gagal.
  readLocalBackup();
  putFields();
  fillPortfolioFolders();

  try {
    const client = await window.ngincengAuthReady;
    const { data: row, error } = await client
      .from("nginceng_site_content")
      .select("settings, content")
      .eq("id", 1)
      .maybeSingle();

    if (error) throw error;

    if (row) {
      // Pertahankan cadangan lokal jika baris Supabase masih kosong.
      const localSettings = { ...cfg };
      const localContent = structuredClone(data);
      cfg = { ...defaults, ...localSettings, ...(row.settings || {}) };
      data = mergeContent({ ...localContent, ...(row.content || {}) });
      putFields();
      localStorage.setItem("ngincengStudioSettings", JSON.stringify(cfg));
      localStorage.setItem("ngincengStudioContent", JSON.stringify(data));
      $("status").textContent = "Data dimuat dari Supabase";
    } else {
      $("status").textContent = "Data awal — siap disimpan online";
    }
    fillPortfolioFolders();
    renderPackageEditor();
    console.log("Dashboard berhasil terhubung ke Supabase.");
  } catch (error) {
    console.error("Gagal memuat data Supabase:", error);
    $("status").textContent = "Mode cadangan lokal";
    toast("Data online belum dapat dimuat: " + (error.message || "Periksa koneksi."));
  }
}

initDashboard();
