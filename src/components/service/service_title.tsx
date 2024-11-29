export const serviceDataTitles = [
    { id: 'sewing', text: 'Швейные цеха' },
    { id: 'handicraft', text: 'Рукоделие' },
    { id: 'design', text: 'Дизайнерские изделия' },
    { id: 'guesthouses', text: 'Гостевые дома' },
  ];
  
  export default function ServiceTitle({ id = 'sewing' }) { 
    const selectedTitle = serviceDataTitles.find((title) => title.id === id);
  
    return <h6>{selectedTitle?.text || ''}</h6>; 
  }
  