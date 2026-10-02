// FAQ Accordion Toggle Interaction
document.addEventListener('DOMContentLoaded', () => {
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const accordionItem = header.parentElement;
            const isOpen = accordionItem.classList.contains('active');

            // Close all open accordions
            document.querySelectorAll('.accordion-item').forEach(item => {
                item.classList.remove('active');
                const icon = item.querySelector('.accordion-icon');
                if (icon) icon.textContent = '+';
            });

            // Toggle selected item
            if (!isOpen) {
                accordionItem.classList.add('active');
                const icon = header.querySelector('.accordion-icon');
                if (icon) icon.textContent = '×';
            }
        });
    });
});