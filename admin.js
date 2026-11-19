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

  $("navList").innerHTML = Object.entries(data.nav || {}).map(([key, item]) => `
    <div class="manage-item"><strong>${esc(key.toUpperCase())}</strong>
      <div class="field"><label>Nama menu</label><input data-navlabel="${esc(key)}" value="${esc(item.label)}"></div>
      <label><input type="checkbox" data-navvisible="${esc(key)}" ${item.visible ? "checked" : ""}> Tampilkan menu</label>
    </div>`).join("");  renderPackageEditor();
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
    data.services.splice(+target.dataset.delservice, 1);
    renderLists();
    if (typeof fillPortfolioFolders === "function") fillPortfolioFolders();
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
