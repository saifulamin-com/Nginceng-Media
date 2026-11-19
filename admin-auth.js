window.ngincengAuthReady = (async function () {
  const url = window.NGINCENG_SUPABASE_URL;
  const key = window.NGINCENG_SUPABASE_KEY;

  if (!url || !key || url.includes("ISI_") || key.includes("ISI_")) {
    location.replace("login.html");
    throw new Error("Konfigurasi Supabase belum lengkap.");
  }

  const client = window.supabase.createClient(url, key);
  window.ngincengAuthClient = client;

  const { data, error } = await client.auth.getSession();

  if (error || !data.session) {
    location.replace("login.html");
    throw new Error("Sesi admin tidak ditemukan.");
  }

  document.body.classList.remove("auth-pending");

  const emailNode = document.getElementById("adminEmail");
  if (emailNode) {
    emailNode.textContent = data.session.user.email || "Admin";
  }

  const logout = document.getElementById("logoutButton");

  if (logout) {
    logout.addEventListener("click", async () => {
      logout.disabled = true;
      await client.auth.signOut();
      location.replace("login.html");
    });
  }

  client.auth.onAuthStateChange((event, session) => {
    if (event === "SIGNED_OUT" || !session) {
      location.replace("login.html");
    }
  });

  return client;
})();