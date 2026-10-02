// Interactive action cards selection inside the Hero AI Mockup Dashboard
document.addEventListener('DOMContentLoaded', () => {
    const actionCards = document.querySelectorAll('.action-card');
    
    actionCards.forEach(card => {
        card.addEventListener('click', () => {
            // Remove active class from all cards
            actionCards.forEach(c => c.classList.remove('active-card'));
            
            // Highlight selected card
            card.classList.add('active-card');
        });
    });
});