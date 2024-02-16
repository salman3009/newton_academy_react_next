import { useState, useEffect } from 'react';
import TooltipPortal from './TooltipPortal';

function DynamicTooltip() {
  const [content, setContent] = useState('');

  useEffect(() => {
    // Fetching the content dynamically
    // fetch('/api/tooltip')
    setContent("this is a tooltip")
    //   .then(res => res.json())
    //   .then(data => setContent(data.content));
  }, []);

  return (
    <TooltipPortal>
      <div style={{ position: 'absolute', top: '50px', left: '50px', backgroundColor: 'gray', padding: '10px', borderRadius: '5px' }}>
        {content}
      </div>
    </TooltipPortal>
  );
}

export default DynamicTooltip;
