const form=document.getElementById("loginForm");
const message=document.getElementById("loginMessage");
const button=document.getElementById("loginButton");
const configured=window.NGINCENG_SUPABASE_URL && !window.NGINCENG_SUPABASE_URL.includes("ISI_") && window.NGINCENG_SUPABASE_KEY && !window.NGINCENG_SUPABASE_KEY.includes("ISI_");
let client=null;
if(configured && window.supabase?.createClient){
 client=window.supabase.createClient(window.NGINCENG_SUPABASE_URL,window.NGINCENG_SUPABASE_KEY);
 client.auth.getSession().then(({data})=>{if(data.session)location.replace("admin.html")});
}else{
 message.textContent="Supabase belum diatur. Isi Project URL dan Publishable Key di supabase-config.js terlebih dahulu.";
}
form.addEventListener("submit",async e=>{
 e.preventDefault();
 if(!client){message.textContent="Konfigurasi Supabase belum lengkap.";return}
 button.disabled=true;button.textContent="MEMERIKSA...";
 message.textContent="";
 const email=document.getElementById("email").value.trim();
 const password=document.getElementById("password").value;
 const {error}=await client.auth.signInWithPassword({email,password});
 if(error){message.textContent="Login gagal. Periksa email, password, dan status akun.";button.disabled=false;button.textContent="MASUK DASHBOARD";return}
 location.replace("admin.html");
});
document.getElementById("togglePassword").addEventListener("click",()=>{
 const p=document.getElementById("password");p.type=p.type==="password"?"text":"password";
 document.getElementById("togglePassword").textContent=p.type==="password"?"Lihat":"Sembunyikan";
});
document.getElementById("forgotPassword").addEventListener("click",async()=>{
 if(!client){message.textContent="Konfigurasi Supabase belum lengkap.";return}
 const email=document.getElementById("email").value.trim();
 if(!email){message.textContent="Isi email admin dahulu, lalu klik Lupa password.";return}
 const redirectTo=location.origin+location.pathname.replace(/login\.html$/,"reset-password.html");
 const {error}=await client.auth.resetPasswordForEmail(email,{redirectTo});
 message.textContent=error?"Permintaan reset belum berhasil. Periksa konfigurasi email Supabase.":"Jika email terdaftar, tautan pemulihan akan dikirim. Periksa kotak masuk dan spam.";
});