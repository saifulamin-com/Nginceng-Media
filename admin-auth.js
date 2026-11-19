(async function(){
 const url=window.NGINCENG_SUPABASE_URL,key=window.NGINCENG_SUPABASE_KEY;
 if(!url||url.includes("ISI_")||!key||key.includes("ISI_")){
  location.replace("login.html");return;
 }
 const client=window.supabase.createClient(url,key);
 const {data,error}=await client.auth.getSession();
 if(error||!data.session){location.replace("login.html");return;}
 window.ngincengAuthClient=client;
 document.body.classList.remove("auth-pending");
 const emailNode=document.getElementById("adminEmail");
 if(emailNode)emailNode.textContent=data.session.user.email||"Admin";
 const logout=document.getElementById("logoutButton");
 if(logout)logout.addEventListener("click",async()=>{
   logout.disabled=true;
   await client.auth.signOut();
   location.replace("login.html");
 });
 client.auth.onAuthStateChange((event,session)=>{
   if(event==="SIGNED_OUT"||!session)location.replace("login.html");
 });
})();