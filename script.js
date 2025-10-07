         // JS Simples para Interatividade e ARIA
document.addEventListener('DOMContentLoaded', function() {
    // Adicionando as novas lendas 'mula' e 'corposeco'
    const buttons = ['saci', 'curupira', 'iara', 'mula', 'corposeco']; 
    
    buttons.forEach(id => {
        const btn = document.getElementById('btn-' + id);
        const content = document.getElementById('content-' + id);
        
        if (btn && content) { // Verifica se os elementos existem antes de adicionar o listener
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                const isExpanded = btn.getAttribute('aria-expanded') === 'true';
                btn.setAttribute('aria-expanded', !isExpanded);
                content.setAttribute('aria-hidden', isExpanded);
                btn.textContent = isExpanded ? 'Saiba Mais' : 'Fechar';
            });
            
            // Suporte a teclado: ENTER ou ESPAÇO
            btn.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    btn.click();
                }
            });
        }
    });
});