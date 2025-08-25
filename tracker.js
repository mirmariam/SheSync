// Event listeners
function initializeEventListeners() {
  const logoutBtn = document.getElementById('openLogoutModal');
  const logoutModal = document.getElementById('logoutModal');
  const closeLogoutBtn = document.getElementById('closeLogoutModal');
  const confirmLogoutBtn = document.getElementById('confirmLogout');
  const cancelLogoutBtn = document.getElementById('cancelLogout');

  if (logoutBtn) logoutBtn.onclick = () => logoutModal.style.display = 'block';
  if (closeLogoutBtn) closeLogoutBtn.onclick = () => logoutModal.style.display = 'none';
  if (cancelLogoutBtn) cancelLogoutBtn.onclick = () => logoutModal.style.display = 'none';
  if (confirmLogoutBtn) confirmLogoutBtn.onclick = async () => {
    try {
      await signOut(auth);
      window.location.href = 'welcomePage.html';
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };}

  // Logout Modal Handling
// =====================
document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('logoutModal');
  const openBtn = document.getElementById('openLogoutModal');
  const closeBtn = document.getElementById('closeLogoutModal');
  const cancelBtn = document.getElementById('cancelLogout');
  const confirmBtn = document.getElementById('confirmLogout');

  if (openBtn && closeBtn && cancelBtn && confirmBtn && modal) {
    openBtn.onclick = () => modal.style.display = 'block';
    closeBtn.onclick = () => modal.style.display = 'none';
    cancelBtn.onclick = () => modal.style.display = 'none';
    confirmBtn.onclick = () => {
      modal.style.display = 'none';
      window.location.href = 'welcomePage.html'; // or Firebase logout logic
    };
  }
});