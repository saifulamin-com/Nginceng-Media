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
    services: (Array.isArray(saved.services) ? saved.services : structuredClone(starter.services)).map((service, index) => ({
      ...service,
      id: service.id || `layanan-${index + 1}`,
      packages: Array.isArray(service.packages) ? service.packages : [],
      gallery: Array.isArray(service.gallery) ? service.gallery : []
    }))
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

function renderLists() {
  const currentCats = Object.entries(data.categories || {});
  $("categoryList").innerHTML = currentCats.map(([id, category]) => `
    <div class="manage-item">
      <strong>${esc(category.title)}</strong><p>${esc(category.description)}</p>
      <div class="manage-actions">
        <button class="small-btn" data-editcat="${esc(id)}">Edit</button>
        <button class="small-btn danger" data-delcat="${esc(id)}">Hapus</button>
      </div>
    </div>`).join("") || "<p>Belum ada kategori.</p>";

  $("articleList").innerHTML = (data.articles || []).map((article, index) => `
    <div class="manage-item"><strong>${esc(article.title)}</strong><p>${esc(article.desc)}</p>
      <div class="manage-actions">
        <button class="small-btn" data-editarticle="${index}">Edit</button>
        <button class="small-btn danger" data-delarticle="${index}">Hapus</button>
      </div>
    </div>`).join("") || "<p>Belum ada artikel.</p>";

  $("serviceList").innerHTML = (data.services || []).map((service, index) => `
    <div class="manage-item"><strong>${esc(service.title)}</strong><p>${esc(service.desc)}</p>
      <div class="manage-actions">
        <button class="small-btn" data-editservice="${index}">Edit</button>
        <button class="small-btn danger" data-delservice="${index}">Hapus</button>
      </div>
    </div>`).join("") || "<p>Belum ada layanan.</p>";

  renderMaterialManager();
  fillServiceSelectors();

  $("navList").innerHTML = Object.entries(data.nav || {}).map(([key, item]) => `
    <div class="manage-item"><strong>${esc(key.toUpperCase())}</strong>
      <div class="field"><label>Nama menu</label><input data-navlabel="${esc(key)}" value="${esc(item.label)}"></div>
      <label><input type="checkbox" data-navvisible="${esc(key)}" ${item.visible ? "checked" : ""}> Tampilkan menu</label>
    </div>`).join("");
}

function editItem(kind, index) {
  const item = data[kind]?.[index];
  if (!item) return;
  const title = prompt("Ubah judul:", item.title);
  if (title === null) return;
  const desc = prompt("Ubah deskripsi:", item.desc || "");
  if (desc === null) return;
  item.title = title;
  item.desc = desc;
  if (kind === "articles") {
    const body = prompt("Ubah isi artikel:", item.body || "");
    if (body !== null) item.body = body;
  }
  renderLists();
}

document.addEventListener("click", event => {
  const target = event.target;
  if (target.dataset.editarticle !== undefined) editItem("articles", +target.dataset.editarticle);
  if (target.dataset.delarticle !== undefined && confirm("Hapus artikel ini?")) {
    data.articles.splice(+target.dataset.delarticle, 1);
    renderLists();
  }
  if (target.dataset.editservice !== undefined) editItem("services", +target.dataset.editservice);
  if (target.dataset.delservice !== undefined && confirm("Hapus layanan ini? Galeri layanan terkait juga akan kehilangan keterkaitannya.")) {
    const removedService = data.services[+target.dataset.delservice];
    if (removedService?.gallery?.length && !confirm("Layanan ini memiliki foto online. Hapus juga file fotonya dari Storage?")) return;
    if (removedService?.gallery?.length) {
      for (const media of removedService.gallery) if (media.path) removeStoredImage(media.path).catch(console.warn);
    }
    data.services.splice(+target.dataset.delservice, 1);
    renderLists();
    fillServiceSelectors();
  }
  if (target.dataset.editcat) {
    const category = data.categories[target.dataset.editcat];
    if (!category) return;
    const title = prompt("Nama kategori:", category.title);
    if (title !== null) {
      category.title = title;
      category.description = prompt("Deskripsi kategori:", category.description) || category.description;
      renderLists();
    }
  }
  if (target.dataset.delcat && confirm("Hapus kategori ini?")) {
    delete data.categories[target.dataset.delcat];
    renderLists();
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
  data.services.push({ id: makeId(title), title, desc: get("newServiceDesc"), packages: [], gallery: [] });
  $("newServiceTitle").value = "";
  $("newServiceDesc").value = "";
  renderLists();
  fillServiceSelectors();
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

/* Penyimpanan media online: Supabase Storage bucket nginceng-media. */
const MEDIA_BUCKET = "nginceng-media";
let editingMaterialId = null;
let editingPackageId = null;

function makeId(text) {
  const slug = String(text || "item").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 40);
  return (slug || "item") + "-" + Date.now().toString(36);
}

async function getAdminClient() {
  const client = await window.ngincengAuthReady;
  if (!client) throw new Error("Sesi admin belum siap. Silakan login ulang.");
  return client;
}

function publicMediaUrl(client, path) {
  const result = client.storage.from(MEDIA_BUCKET).getPublicUrl(path);
  return result?.data?.publicUrl || "";
}

async function uploadImage(file, folder) {
  if (!file || !file.type.startsWith("image/")) throw new Error("Pilih file gambar yang valid.");
  if (file.size > 25 * 1024 * 1024) throw new Error("Ukuran gambar maksimal 25 MB.");
  const allowed = ["image/jpeg", "image/png", "image/webp", "image/gif"];
  if (!allowed.includes(file.type)) throw new Error("Format gambar harus JPG, PNG, WebP, atau GIF.");
  const client = await getAdminClient();
  const safeName = file.name.toLowerCase().replace(/[^a-z0-9._-]+/g, "-");
  const path = `${folder}/${Date.now()}-${Math.random().toString(36).slice(2, 9)}-${safeName}`;
  const { error } = await client.storage.from(MEDIA_BUCKET).upload(path, file, { cacheControl: "3600", upsert: false, contentType: file.type });
  if (error) throw error;
  return { path, url: publicMediaUrl(client, path), mime: file.type, name: file.name };
}

async function removeStoredImage(path) {
  if (!path) return;
  const client = await getAdminClient();
  const { error } = await client.storage.from(MEDIA_BUCKET).remove([path]);
  if (error) console.warn("File Storage belum terhapus:", error);
}

function renderMaterialManager() {
  const select = $("materialCategory");
  if (!select) return;
  const previous = select.value;
  select.innerHTML = Object.entries(data.categories || {}).map(([id, cat]) => `<option value="${esc(id)}">${esc(cat.title)}</option>`).join("");
  if (Object.prototype.hasOwnProperty.call(data.categories || {}, previous)) select.value = previous;
  const categoryId = select.value;
  const entries = Object.entries(data.tutorials || {}).filter(([, item]) => item.categoryId === categoryId);
  $("materialList").innerHTML = entries.map(([id, item]) => `<div class="manage-item"><strong>${esc(item.title)}</strong><p>${esc(item.intro || "")}</p><div class="manage-actions"><button class="small-btn" data-editmaterial="${esc(id)}">Edit</button><button class="small-btn danger" data-delmaterial="${esc(id)}">Hapus</button></div></div>`).join("") || "<p>Belum ada materi pada kategori ini.</p>";
}

function resetMaterialForm() {
  editingMaterialId = null;
  ["materialTitle", "materialIntro", "materialBody"].forEach(id => { if ($(id)) $(id).value = ""; });
  if ($("materialImage")) $("materialImage").value = "";
  if ($("materialImageName")) $("materialImageName").textContent = "Belum memilih file";
  if ($("addMaterial")) $("addMaterial").textContent = "Tambah Materi";
}

function fillServiceSelectors() {
  ["portfolioService", "packageService"].forEach(id => {
    const select = $(id);
    if (!select) return;
    const previous = select.value;
    select.innerHTML = (data.services || []).map((service, index) => `<option value="${esc(service.id || String(index))}">${esc(service.title)}</option>`).join("");
    if ([...select.options].some(option => option.value === previous)) select.value = previous;
  });
  refreshPortfolioList().catch(error => console.warn(error));
  renderPackageList();
}

function getServiceById(id) {
  return (data.services || []).find((service, index) => (service.id || String(index)) === id);
}

function renderPackageList() {
  const select = $("packageService");
  if (!select || !$("packageList")) return;
  const service = getServiceById(select.value);
  const packages = service?.packages || [];
  $("packageList").innerHTML = packages.map((item, index) => `<div class="manage-item"><strong>${esc(item.title)}</strong><p>${esc(item.desc || "")}${item.price ? " • " + esc(item.price) : ""}</p><div class="manage-actions"><button class="small-btn" data-editpackage="${index}">Edit</button><button class="small-btn danger" data-delpackage="${index}">Hapus</button></div></div>`).join("") || "<p>Belum ada paket untuk layanan ini.</p>";
}

function resetPackageForm() {
  editingPackageId = null;
  ["packageTitle", "packageDesc", "packagePrice"].forEach(id => { if ($(id)) $(id).value = ""; });
  if ($("addPackage")) $("addPackage").textContent = "Tambah Paket";
}

async function refreshPortfolioList() {
  const select = $("portfolioService");
  if (!select || !$("portfolioList")) return;
  const service = getServiceById(select.value);
  const entries = service?.gallery || [];
  $("portfolioList").innerHTML = entries.map(item => `<div class="manage-item"><div class="media-row"><img class="media-thumb" src="${esc(item.url)}" alt="${esc(item.title)}"><div style="flex:1"><strong>${esc(item.title)}</strong><p>${esc(item.caption || "")}</p></div><button class="small-btn danger" data-delete-media="${esc(item.id)}">Hapus</button></div></div>`).join("") || "<p>Folder ini belum memiliki foto.</p>";
}

$("materialCategory")?.addEventListener("change", renderMaterialManager);
$("cancelMaterialEdit")?.addEventListener("click", resetMaterialForm);
$("materialImage")?.addEventListener("change", () => { $("materialImageName").textContent = $("materialImage").files[0]?.name || "Belum memilih file"; });
$("addMaterial")?.addEventListener("click", async () => {
  const title = get("materialTitle").trim();
  const categoryId = get("materialCategory");
  if (!title) return toast("Isi judul materi terlebih dahulu.");
  if (!categoryId || !data.categories[categoryId]) return toast("Pilih kategori materi.");
  const existing = editingMaterialId ? data.tutorials[editingMaterialId] : null;
  const id = editingMaterialId || makeId(title);
  const imageFile = $("materialImage").files[0];
  let image = existing?.image || "";
  let imagePath = existing?.imagePath || "";
  try {
    if (imageFile) {
      const uploaded = await uploadImage(imageFile, "education");
      image = uploaded.url;
      imagePath = uploaded.path;
    }
    const category = data.categories[categoryId];
    const body = get("materialBody").trim();
    const sections = existing?.sections || [];
    data.tutorials[id] = {
      ...(existing || {}), id, category: category.title, categoryId,
      title, intro: get("materialIntro").trim(), body,
      sections, image, imagePath
    };
    if (imageFile && existing?.imagePath && existing.imagePath !== imagePath) await removeStoredImage(existing.imagePath);
    renderMaterialManager();
    resetMaterialForm();
    toast("Materi siap disimpan. Klik Simpan Semua agar tampil online.");
  } catch (error) {
    console.error(error);
    toast("Gagal mengunggah gambar: " + (error.message || "Periksa Storage Supabase."));
  }
});

$("packageService")?.addEventListener("change", renderPackageList);
$("cancelPackageEdit")?.addEventListener("click", resetPackageForm);
$("addPackage")?.addEventListener("click", () => {
  const service = getServiceById(get("packageService"));
  const title = get("packageTitle").trim();
  if (!service) return toast("Pilih layanan terlebih dahulu.");
  if (!title) return toast("Isi nama paket terlebih dahulu.");
  service.packages ||= [];
  const payload = { id: editingPackageId || makeId(title), title, desc: get("packageDesc").trim(), price: get("packagePrice").trim() };
  if (editingPackageId) {
    const index = service.packages.findIndex(item => item.id === editingPackageId);
    if (index >= 0) service.packages[index] = payload;
  } else service.packages.push(payload);
  resetPackageForm();
  renderPackageList();
  toast("Paket siap disimpan. Klik Simpan Semua.");
});

$("portfolioService")?.addEventListener("change", refreshPortfolioList);
$("portfolioFiles")?.addEventListener("change", () => {
  $("portfolioFileName").textContent = [...$("portfolioFiles").files].map(file => file.name).join(", ") || "Belum memilih file";
});
$("addPortfolio")?.addEventListener("click", async () => {
  const files = [...$("portfolioFiles").files];
  const service = getServiceById(get("portfolioService"));
  if (!files.length) return toast("Pilih gambar terlebih dahulu.");
  if (!service) return toast("Tambahkan layanan terlebih dahulu.");
  service.gallery ||= [];
  const uploadedPaths = [];
  try {
    for (const file of files) {
      const uploaded = await uploadImage(file, `services/${service.id || "service"}`);
      uploadedPaths.push(uploaded.path);
      service.gallery.push({ id: makeId(file.name), path: uploaded.path, url: uploaded.url, title: get("mediaTitle").trim() || file.name, caption: get("mediaCaption").trim(), mime: uploaded.mime, createdAt: new Date().toISOString() });
    }
    $("portfolioFiles").value = "";
    $("portfolioFileName").textContent = "Belum memilih file";
    $("mediaTitle").value = "";
    $("mediaCaption").value = "";
    await refreshPortfolioList();
    toast("Foto berhasil diunggah. Klik Simpan Semua agar galeri tampil di website.");
  } catch (error) {
    console.error(error);
    // Keep already uploaded files in the current editor state, so user can retry saving metadata.
    await refreshPortfolioList();
    toast("Unggah belum selesai: " + (error.message || "Periksa izin Storage dan koneksi."));
  }
});

document.addEventListener("click", async event => {
  const target = event.target.closest("button");
  if (!target) return;
  if (target.dataset.editmaterial) {
    const item = data.tutorials[target.dataset.editmaterial];
    if (!item) return;
    editingMaterialId = target.dataset.editmaterial;
    $("materialTitle").value = item.title || "";
    $("materialIntro").value = item.intro || "";
    $("materialBody").value = item.body || (item.sections || []).map(section => section.join("\n")).join("\n\n");
    $("materialCategory").value = item.categoryId;
    $("addMaterial").textContent = "Simpan Edit Materi";
    $("materialTitle").scrollIntoView({ behavior: "smooth", block: "center" });
  }
  if (target.dataset.delmaterial) {
    const item = data.tutorials[target.dataset.delmaterial];
    if (!item || !confirm("Hapus materi ini?")) return;
    delete data.tutorials[target.dataset.delmaterial];
    if (item.imagePath) await removeStoredImage(item.imagePath);
    renderMaterialManager();
    toast("Materi dihapus. Klik Simpan Semua.");
  }
  if (target.dataset.editpackage !== undefined) {
    const service = getServiceById(get("packageService"));
    const item = service?.packages?.[Number(target.dataset.editpackage)];
    if (!item) return;
    editingPackageId = item.id;
    $("packageTitle").value = item.title || "";
    $("packageDesc").value = item.desc || "";
    $("packagePrice").value = item.price || "";
    $("addPackage").textContent = "Simpan Edit Paket";
  }
  if (target.dataset.delpackage !== undefined) {
    const service = getServiceById(get("packageService"));
    const index = Number(target.dataset.delpackage);
    if (!service?.packages || !confirm("Hapus paket ini?")) return;
    service.packages.splice(index, 1);
    renderPackageList();
  }
  if (target.dataset.deleteMedia) {
    const service = getServiceById(get("portfolioService"));
    const item = service?.gallery?.find(entry => entry.id === target.dataset.deleteMedia);
    if (!item || !confirm("Hapus foto dari galeri online?")) return;
    try {
      if (item.path) await removeStoredImage(item.path);
      service.gallery = service.gallery.filter(entry => entry.id !== item.id);
      await refreshPortfolioList();
      toast("Foto dihapus. Klik Simpan Semua.");
    } catch (error) { toast("Gagal menghapus foto: " + (error.message || "Periksa izin Storage.")); }
  }
});

async function initDashboard() {
  // Tampilkan cadangan lokal terlebih dahulu agar formulir tidak kosong jika koneksi gagal.
  readLocalBackup();
  putFields();
  fillServiceSelectors();

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
    fillServiceSelectors();
    console.log("Dashboard berhasil terhubung ke Supabase.");
  } catch (error) {
    console.error("Gagal memuat data Supabase:", error);
    $("status").textContent = "Mode cadangan lokal";
    toast("Data online belum dapat dimuat: " + (error.message || "Periksa koneksi."));
  }
}

initDashboard();
