const $=id=>document.getElementById(id);
const defaults={siteName:"NGINCENG MEDIA",tagline:"EDUCATION • LIVE STREAMING • MULTIMEDIA",gold:"#C99A3C",black:"#101010",cream:"#F5F5F2",font:"Arial, Helvetica, sans-serif",heroTitle:"WELCOME TO NGINCENG MEDIA",heroText:"Tempat belajar teknologi multimedia, live streaming, audio engineering, video production, dan dokumentasi digital.",logo:"",wallpaper:""};
const starter={articles:[{title:"Mengenal Dasar vMix",desc:"Pengenalan input, preview, program, dan transisi.",body:"vMix merupakan perangkat lunak produksi video untuk mengelola berbagai sumber gambar.",url:"materi.html?id=vmix-dasar"},{title:"Mengenal OBS Studio",desc:"Memahami scene, source, dan area kerja OBS.",body:"OBS Studio digunakan untuk merekam dan melakukan siaran langsung.",url:"materi.html?id=obs-dasar"},{title:"Mengenal Dasar Audio",desc:"Memahami input, pemrosesan, dan output audio.",body:"Sistem audio terdiri dari sumber suara, perangkat pemrosesan, penguat, dan perangkat keluaran.",url:"materi.html?id=audio-dasar"}],services:[{title:"Live Streaming",desc:"Produksi siaran langsung untuk kegiatan dan acara."},{title:"Dokumentasi Acara",desc:"Dokumentasi foto dan video untuk kebutuhan publikasi."},{title:"Multimedia",desc:"Dukungan kebutuhan visual dan multimedia acara."}],youtube:{heading:"Nginceng Media di YouTube",description:"Dokumentasi, tutorial, dan konten multimedia.",panelTitle:"Video & Dokumentasi",panelText:"Temukan video dan dokumentasi Nginceng Media.",url:"https://www.youtube.com/"},contact:{heading:"Kontak Nginceng Media",description:"Hubungi kami untuk pertanyaan dan informasi layanan.",panelTitle:"Terhubung dengan Kami",panelText:"Silakan hubungi kami melalui WhatsApp.",whatsapp:"https://wa.me/62XXXXXXXXXX",email:""},nav:{home:{label:"HOME",visible:true},edukasi:{label:"EDUKASI",visible:true},artikel:{label:"ARTIKEL",visible:true},youtube:{label:"YOUTUBE",visible:true},layanan:{label:"LAYANAN",visible:true},kontak:{label:"KONTAK",visible:true}}};
let cfg={...defaults},data=structuredClone(starter);
const get=(k,d)=>$(k).value||d;
function readStore(){try{cfg={...defaults,...JSON.parse(localStorage.getItem("ngincengStudioSettings")||"{}")};data={...structuredClone(starter),...JSON.parse(localStorage.getItem("ngincengStudioContent")||"{}")}}catch(e){}}
function putFields(){["siteName","tagline","gold","black","cream","font","heroTitle","heroText"].forEach(k=>$(k).value=cfg[k]);$("ytHeading").value=data.youtube.heading;$("ytDescription").value=data.youtube.description;$("ytPanelTitle").value=data.youtube.panelTitle;$("ytPanelText").value=data.youtube.panelText;$("ytUrl").value=data.youtube.url;$("contactHeading").value=data.contact.heading;$("contactDescription").value=data.contact.description;$("contactPanelTitle").value=data.contact.panelTitle;$("contactPanelText").value=data.contact.panelText;$("whatsapp").value=data.contact.whatsapp;$("email").value=data.contact.email||"";renderLists();refresh()}
function refresh(){$("pName").textContent=cfg.siteName;$("pTag").textContent=cfg.tagline;$("pHeroTitle").textContent=cfg.heroTitle;$("pHeroText").textContent=cfg.heroText;$("goldHex").textContent=cfg.gold;$("blackHex").textContent=cfg.black;$("creamHex").textContent=cfg.cream;$("preview").style.background=cfg.cream;$("previewHero").style.backgroundImage=cfg.wallpaper?`linear-gradient(110deg,#000b,#30230bbb,#000b),url("${cfg.wallpaper}")`:"linear-gradient(110deg,#000d,#3a2b18bb,#000d)";$("previewHero").style.backgroundSize="cover";$("previewLogo").innerHTML=cfg.logo?`<img src="${cfg.logo}">`:"N";$("previewLogo").style.background=cfg.gold;$("previewHero").querySelector("button").style.background=cfg.gold}
function collect(){["siteName","tagline","gold","black","cream","font","heroTitle","heroText"].forEach(k=>cfg[k]=$(k).value);data.youtube={heading:get("ytHeading","Nginceng Media di YouTube"),description:get("ytDescription",""),panelTitle:get("ytPanelTitle","Video & Dokumentasi"),panelText:get("ytPanelText",""),url:get("ytUrl","https://www.youtube.com/")};data.contact={heading:get("contactHeading","Kontak Nginceng Media"),description:get("contactDescription",""),panelTitle:get("contactPanelTitle","Terhubung dengan Kami"),panelText:get("contactPanelText",""),whatsapp:get("whatsapp","https://wa.me/62XXXXXXXXXX"),email:get("email","")};refresh()}
function save(){collect();try{localStorage.setItem("ngincengStudioSettings",JSON.stringify(cfg));localStorage.setItem("ngincengStudioContent",JSON.stringify(data));$("status").textContent="Tersimpan di browser ini";toast("Semua perubahan tersimpan. Refresh website untuk melihat hasilnya.")}catch(e){toast("Penyimpanan browser penuh. Kurangi ukuran gambar.")}}
function toast(s){$("toast").textContent=s;$("toast").classList.add("show");setTimeout(()=>$("toast").classList.remove("show"),3000)}
function esc(s){return String(s||"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]))}
function renderLists(){
 const cats=window._starterCategories||[];
 const currentCats=Object.entries(data.categories||{});
 $("categoryList").innerHTML=currentCats.map(([id,c])=>`<div class="manage-item"><strong>${esc(c.title)}</strong><p>${esc(c.description)}</p><div class="manage-actions"><button class="small-btn" data-editcat="${esc(id)}">Edit</button><button class="small-btn danger" data-delcat="${esc(id)}">Hapus</button></div></div>`).join("")||"<p>Belum ada kategori.</p>";
 $("articleList").innerHTML=(data.articles||[]).map((a,i)=>`<div class="manage-item"><strong>${esc(a.title)}</strong><p>${esc(a.desc)}</p><div class="manage-actions"><button class="small-btn" data-editarticle="${i}">Edit</button><button class="small-btn danger" data-delarticle="${i}">Hapus</button></div></div>`).join("")||"<p>Belum ada artikel.</p>";
 $("serviceList").innerHTML=(data.services||[]).map((s,i)=>`<div class="manage-item"><strong>${esc(s.title)}</strong><p>${esc(s.desc)}</p><div class="manage-actions"><button class="small-btn" data-editservice="${i}">Edit</button><button class="small-btn danger" data-delservice="${i}">Hapus</button></div></div>`).join("")||"<p>Belum ada layanan.</p>";
 $("navList").innerHTML=Object.entries(data.nav).map(([k,v])=>`<div class="manage-item"><strong>${esc(k.toUpperCase())}</strong><div class="field"><label>Nama menu</label><input data-navlabel="${k}" value="${esc(v.label)}"></div><label><input type="checkbox" data-navvisible="${k}" ${v.visible?"checked":""}> Tampilkan menu</label></div>`).join("");
}
function editItem(kind,i){let list=data[kind],item=list[i];if(!item)return;let title=prompt("Ubah judul:",item.title);if(title===null)return;let desc=prompt("Ubah deskripsi:",item.desc||"");if(desc===null)return;item.title=title;item.desc=desc;if(kind==="articles"){let body=prompt("Ubah isi artikel:",item.body||"");if(body!==null)item.body=body}renderLists()}
document.addEventListener("click",e=>{
 const t=e.target;
 if(t.dataset.editarticle!==undefined)editItem("articles",+t.dataset.editarticle);
 if(t.dataset.delarticle!==undefined&&confirm("Hapus artikel ini?")){data.articles.splice(+t.dataset.delarticle,1);renderLists()}
 if(t.dataset.editservice!==undefined)editItem("services",+t.dataset.editservice);
 if(t.dataset.delservice!==undefined&&confirm("Hapus layanan ini? Galeri layanan terkait juga akan kehilangan keterkaitannya.")){data.services.splice(+t.dataset.delservice,1);renderLists();if(typeof fillPortfolioFolders==="function")fillPortfolioFolders()}
 if(t.dataset.editcat){const c=data.categories[t.dataset.editcat];const title=prompt("Nama kategori:",c.title);if(title!==null){c.title=title;c.description=prompt("Deskripsi kategori:",c.description)||c.description;renderLists()}}
 if(t.dataset.delcat&&confirm("Hapus kategori ini?")){delete data.categories[t.dataset.delcat];renderLists()}
});
$("addArticle").onclick=()=>{const title=get("newArticleTitle","");if(!title.trim())return toast("Isi judul artikel dulu.");data.articles.push({title,desc:get("newArticleDesc",""),body:get("newArticleBody",""),url:""});["newArticleTitle","newArticleDesc","newArticleBody"].forEach(k=>$(k).value="");renderLists()};
$("addService").onclick=()=>{const title=get("newServiceTitle","");if(!title.trim())return toast("Isi nama layanan dulu.");data.services.push({title,desc:get("newServiceDesc","")});$("newServiceTitle").value="";$("newServiceDesc").value="";renderLists();if(typeof fillPortfolioFolders==="function")fillPortfolioFolders()};
$("addCategory").onclick=()=>{const title=get("newCatTitle","");if(!title.trim())return toast("Isi nama kategori dulu.");let id="kategori-"+Date.now();data.categories[id]={title,description:get("newCatDesc",""),materials:[]};$("newCatTitle").value="";$("newCatDesc").value="";renderLists()};
document.addEventListener("input",e=>{if(e.target.dataset.navlabel){data.nav[e.target.dataset.navlabel].label=e.target.value}if(["siteName","tagline","gold","black","cream","font","heroTitle","heroText"].includes(e.target.id)){cfg[e.target.id]=e.target.value;refresh()}});
document.addEventListener("change",e=>{if(e.target.dataset.navvisible){data.nav[e.target.dataset.navvisible].visible=e.target.checked}});
document.querySelectorAll(".tab").forEach(b=>b.onclick=()=>{document.querySelectorAll(".tab,.panel").forEach(x=>x.classList.remove("active"));b.classList.add("active");$("panel-"+b.dataset.tab).classList.add("active");const title=b.textContent.trim();$("panelTitle").textContent=title;$("panelDesc").textContent="Atur bagian website ini melalui formulir yang tersedia."});
function imageUpload(id,key,label){$(id).onchange=()=>{let f=$(id).files[0];if(!f)return;if(f.size>1500000){toast("Gambar maksimal 1,5 MB. Kompres gambar dahulu.");return}let r=new FileReader();r.onload=()=>{cfg[key]=r.result;$(label).textContent=f.name;refresh()};r.readAsDataURL(f)}}
imageUpload("logoFile","logo","logoName");imageUpload("wallFile","wallpaper","wallName");
$("saveTop").onclick=save;$("saveBottom").onclick=save;
$("reset").onclick=()=>{if(!confirm("Kembalikan seluruh pengaturan dan konten ke bawaan awal?"))return;localStorage.removeItem("ngincengStudioSettings");localStorage.removeItem("ngincengStudioContent");location.reload()};
readStore();
// Initial education categories mirror the original site's starter categories.
const starterCategories={vmix:{title:"vMix & Live Streaming",description:"Belajar produksi live streaming, kamera, transisi, audio, dan output siaran.",materials:[]},obs:{title:"OBS Studio",description:"Belajar scene, sumber video, audio, dan siaran.",materials:[]},audio:{title:"Audio & Sound System",description:"Dasar pengolahan audio, mixer, DSP, equalizer, dan RTA.",materials:[]},video:{title:"Video Production",description:"Dasar kamera, komposisi, pencahayaan, dan produksi video.",materials:[]},multimedia:{title:"Multimedia",description:"Perangkat, aplikasi, dan alur kerja produksi multimedia.",materials:[]}};
data.categories={...starterCategories,...(data.categories||{})};
putFields();


/* Galeri portofolio: file media disimpan sebagai Blob di IndexedDB, bukan localStorage. */
const PORT_DB="ngincengMediaPortfolio", PORT_STORE="assets";
function openPortfolioDB(){
 return new Promise((resolve,reject)=>{
  const req=indexedDB.open(PORT_DB,1);
  req.onupgradeneeded=()=>{const db=req.result;if(!db.objectStoreNames.contains(PORT_STORE))db.createObjectStore(PORT_STORE,{keyPath:"id"})};
  req.onsuccess=()=>resolve(req.result);req.onerror=()=>reject(req.error);
 });
}
async function portfolioAll(){
 const db=await openPortfolioDB();
 return new Promise((resolve,reject)=>{const tx=db.transaction(PORT_STORE,"readonly");const req=tx.objectStore(PORT_STORE).getAll();req.onsuccess=()=>resolve(req.result||[]);req.onerror=()=>reject(req.error)});
}
async function portfolioPut(item){
 const db=await openPortfolioDB();
 return new Promise((resolve,reject)=>{const tx=db.transaction(PORT_STORE,"readwrite");tx.objectStore(PORT_STORE).put(item);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)});
}
async function portfolioDelete(id){
 const db=await openPortfolioDB();
 return new Promise((resolve,reject)=>{const tx=db.transaction(PORT_STORE,"readwrite");tx.objectStore(PORT_STORE).delete(id);tx.oncomplete=()=>resolve();tx.onerror=()=>reject(tx.error)});
}
function portfolioServices(){return data.services||[]}
async function refreshPortfolioList(){
 const serviceId=$("portfolioService").value;
 const all=await portfolioAll();
 const entries=all.filter(x=>x.serviceId===serviceId);
 $("portfolioList").innerHTML=entries.map(x=>`<div class="manage-item"><div class="media-row"><div class="media-thumb" id="thumb-${x.id}"></div><div style="flex:1"><strong>${esc(x.title)}</strong><p>${esc(x.caption||"")} • ${x.kind==="video"?"Video":"Foto"}</p></div><button class="small-btn danger" data-delete-media="${x.id}">Hapus</button></div></div>`).join("")||"<p>Folder ini belum memiliki foto atau video.</p>";
 for(const x of entries){
   const node=$("thumb-"+x.id);
   if(node){if(x.kind==="image"){const img=document.createElement("img");img.className="media-thumb";img.src=URL.createObjectURL(x.blob);node.replaceWith(img)}else node.textContent="VIDEO"}
 }
}
function fillPortfolioFolders(){
 const select=$("portfolioService");
 select.innerHTML=portfolioServices().map((s,i)=>`<option value="${i}">${esc(s.title)}</option>`).join("");
 refreshPortfolioList().catch(()=>toast("Tidak dapat membaca galeri di browser ini."));
}
$("portfolioService").addEventListener("change",()=>refreshPortfolioList().catch(()=>{}));
$("portfolioFiles").addEventListener("change",()=>{$("portfolioFileName").textContent=[...$("portfolioFiles").files].map(f=>f.name).join(", ")||"Belum memilih file"});
$("addPortfolio").addEventListener("click",async()=>{
 const files=[...$("portfolioFiles").files],serviceIndex=+$("portfolioService").value;
 if(!files.length)return toast("Pilih foto atau video dahulu.");
 if(!portfolioServices()[serviceIndex])return toast("Tambahkan layanan terlebih dahulu.");
 try{
  for(const file of files){
   if(file.size>25*1024*1024){toast(file.name+" melebihi batas 25 MB.");continue;}
   const kind=file.type.startsWith("image/")?"image":(file.type.startsWith("video/")?"video":"");
   if(!kind)continue;
   await portfolioPut({id:"media-"+Date.now()+"-"+Math.random().toString(36).slice(2,8),serviceId:String(serviceIndex),title:$("mediaTitle").value.trim()||file.name,caption:$("mediaCaption").value.trim(),kind,mime:file.type,name:file.name,blob:file,createdAt:Date.now()});
  }
  $("portfolioFiles").value="";$("portfolioFileName").textContent="Belum memilih file";$("mediaTitle").value="";$("mediaCaption").value="";
  await refreshPortfolioList();toast("Media berhasil ditambahkan ke folder layanan.");
 }catch(e){toast("Penyimpanan browser tidak cukup atau tidak tersedia.");}
});
document.addEventListener("click",async e=>{
 const id=e.target.dataset.deleteMedia;
 if(id&&confirm("Hapus foto/video dari galeri?")){await portfolioDelete(id);await refreshPortfolioList();toast("File dihapus dari galeri.");}
});
const oldPutFields=putFields;
putFields=function(){oldPutFields();fillPortfolioFolders()};

fillPortfolioFolders();
