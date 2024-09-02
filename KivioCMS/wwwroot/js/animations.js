
    document.addEventListener('DOMContentLoaded', function () {
        const columns = document.querySelectorAll('.columnCards');
    
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const animationType = entry.target.dataset.animation;
                    entry.target.classList.add('fly-in');
                    entry.target.classList.add(animationType);
                    observer.unobserve(entry.target);
                }
            });
        });
    
        columns.forEach(column => {
            observer.observe(column);
        });
    });