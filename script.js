//your JS code here. If required.
const items = document.querySelectorAll('.item');

const dropZones = document.querySelectorAll('.drop-zone');

const unrankedZone = document.getElementById('unranked-drop-zone');

items.forEach(item => {
  item.setAttribute('draggable', true);

  item.addEventListener('dragstart', (e) => {
    e.dataTransfer.setData('text/plain', e.target.id);
  });

  item.addEventListener('dblclick', () => {
    if (item.parentElement !== unrankedZone) {
      unrankedZone.appendChild(item);
    }
  });
});

dropZones.forEach(zone => {
  zone.addEventListener('dragover', (e) => {
    e.preventDefault(); 
  });

  zone.addEventListener('drop', (e) => {
    e.preventDefault();
    const draggedId = e.dataTransfer.getData('text/plain');
    const draggedItem = document.getElementById(draggedId);

    if (draggedItem.parentElement !== zone) {
      zone.appendChild(draggedItem);
    }
  });
});
