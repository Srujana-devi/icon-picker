import React, { useState } from 'react';
import feather from 'feather-icons';
import IconPicker from './IconPicker';
import './App.css';

const App = () => {
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [showPicker, setShowPicker] = useState(false);

  const handleIconSelect = (icon) => {
    setSelectedIcon(icon);
    setShowPicker(false);
  };

  return (
    <div className="App">
      <div className="icon-display" onClick={() => setShowPicker(true)} style={{ height: '50px', width: '250px' }}>
        {selectedIcon ? (
          <div className= "icon-displayer" dangerouslySetInnerHTML={{ __html: feather.icons[selectedIcon].toSvg() }} style={{ height: '100%' }}  />
        ) : 'Click here to select an icon'}
      </div>
      {showPicker && (
        <IconPicker
          rowsInOnePage={5}
          columnsInOnePage={9}
          iconHeight="60px"
          iconWidth="50px"
          onIconSelect={handleIconSelect}
        />
      )}
    </div>
  );
};

export default App;
