document.addEventListener('DOMContentLoaded', () => {

    const navButtons = document.querySelectorAll('.nav-btn, .nav-logo');
    const sections = document.querySelectorAll('.section-panel');

    function switchSection(targetId) {
        navButtons.forEach(btn => btn.classList.remove('active'));
        sections.forEach(panel => panel.classList.remove('active'));

        const matchingBtn = document.querySelector(`.nav-btn[data-section="${targetId}"]`);
        if (matchingBtn) {
            matchingBtn.classList.add('active');
        }

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.classList.add('active');
        }
    }

    navButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSectionId = button.getAttribute('data-section');
            if (targetSectionId) {
                switchSection(targetSectionId);
            }
        });
    });

    const viewButtons = document.querySelectorAll('.btn-view');
    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            const certName = button.getAttribute('data-cert');
            alert(`Opening certificate preview for: ${certName}`);
        });
    });

});