document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('#tab-nav .tab-btn');
  const panels = document.querySelectorAll('.tab-panel');

  tabs.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const target = this.getAttribute('data-target');

      // Reset all tab button styles
      tabs.forEach(function (b) {
        b.classList.remove('active', 'text-white', 'bg-[#232732]', 'shadow-sm', 'border', 'border-[#33353a]');
        b.classList.add('text-[#94A3B8]');
      });

      // Apply active style to clicked button
      this.classList.remove('text-[#94A3B8]');
      this.classList.add('active', 'text-white', 'bg-[#232732]', 'shadow-sm', 'border', 'border-[#33353a]');

      // Toggle visible panel dynamically in place
      panels.forEach(function (p) {
        if (p.id === target) {
          p.classList.remove('hidden');
        } else {
          p.classList.add('hidden');
        }
      });
    });
  });
});