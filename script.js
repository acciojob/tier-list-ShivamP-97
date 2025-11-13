const items = document.querySelectorAll('.item');
const dropZones = document.querySelectorAll('.drop-zone');
const unrankedZone = document.getElementById('unranked-drop-zone');

items.forEach(item => {
  item.setAttribute('draggable', true);

  item.addEventListener('dragstart', e => {
    if (!e.dataTransfer) e.dataTransfer = new DataTransfer();
    e.dataTransfer.setData('text/plain', e.target.id);
  });

  item.addEventListener('dblclick', () => {
    if (item.parentElement !== unrankedZone) {
      unrankedZone.appendChild(item);
    }
  });
});

dropZones.forEach(zone => {
  zone.addEventListener('dragover', e => e.preventDefault());
  zone.addEventListener('drop', e => {
    e.preventDefault();
    if (!e.dataTransfer) return;
    const draggedId = e.dataTransfer.getData('text/plain');
    if (!draggedId) return;
    const draggedItem = document.getElementById(draggedId);
    if (draggedItem && draggedItem.parentElement !== zone) {
      zone.appendChild(draggedItem);
    }
  });
});
