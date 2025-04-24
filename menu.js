 // Función para alternar la visibilidad de las secciones
 function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    section.classList.toggle('hidden');
}

// Función para buscar items en el menú
document.getElementById('searchInput').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const items = document.querySelectorAll('.menu-item');
    
    items.forEach(item => {
        const itemName = item.querySelector('.item-name').textContent.toLowerCase();
        if (itemName.includes(searchTerm)) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
    
    // Mostrar todas las secciones cuando se busca
    if (searchTerm.length > 0) {
        document.querySelectorAll('.menu-section > div').forEach(section => {
            section.classList.remove('hidden');
        });
    }
});

// Inicialmente ocultar todas las secciones excepto la primera
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.menu-section > div');
    sections.forEach((section, index) => {
        if (index !== 0) {
            section.classList.add('hidden');
        }
    });
});

// Para deshabilitar
//document.getElementById('cube').style.display = 'none';

// Para habilitar
//document.getElementById('cube').style.display = 'block';