document.addEventListener('DOMContentLoaded', () => {

    const navButtons = document.querySelectorAll('.nav-btn, .nav-logo');
    const sections = document.querySelectorAll('.section-panel');

    // Function to switch active section in place
    function switchSection(targetId) {
        // Remove active class from all buttons and panels
        navButtons.forEach(btn => btn.classList.remove('active'));
        sections.forEach(panel => panel.classList.remove('active'));

        // Highlight matching navbar button
        const matchingBtn = document.querySelector(`.nav-btn[data-section="${targetId}"]`);
        if (matchingBtn) {
            matchingBtn.classList.add('active');
        }

        // Show matching target section card
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    // Add click event listener to each nav item
    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSectionId = button.getAttribute('data-section');
            if (targetSectionId) {
                switchSection(targetSectionId);
            }
        });
    });

    // Certificate button click feedback
    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const certName = button.getAttribute('data-cert');
            alert(`Opening certificate preview for: ${certName}`);
        });
    });

});