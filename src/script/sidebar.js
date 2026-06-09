document.addEventListener("DOMContentLoaded", function() {
    const sidebar = document.getElementById('sidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');
    const menuBtn = document.getElementById('menuBtn');
    const maisBtn = document.getElementById('maisBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');

    function openSidebar(e) {
      if (e) e.preventDefault();
      if(sidebar) sidebar.classList.add('open');
      if(sidebarOverlay) sidebarOverlay.classList.add('open');
    }

    function closeSidebar() {
      if(sidebar) sidebar.classList.remove('open');
      if(sidebarOverlay) sidebarOverlay.classList.remove('open');
    }

    if(menuBtn) menuBtn.addEventListener('click', openSidebar);
    if(maisBtn) maisBtn.addEventListener('click', openSidebar);
    if(closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebar);
    if(sidebarOverlay) sidebarOverlay.addEventListener('click', closeSidebar);
});
