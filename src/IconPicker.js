import React, { useState } from 'react';
import feather from 'feather-icons';
import './IconPicker.css'; // CSS for styling

const IconPicker = ({
  rowsInOnePage,
  columnsInOnePage,
  iconHeight,
  iconWidth,
  pickerHeight = '500px',
  pickerWidth = '600px',
  onIconSelect
}) => {
  const iconList = Object.keys(feather.icons);
  const iconsPerPage = rowsInOnePage * columnsInOnePage;
  const [currentPage, setCurrentPage] = useState(0);

  const startIndex = currentPage * iconsPerPage;
  const endIndex = startIndex + iconsPerPage;
  const paginatedIcons = iconList.slice(startIndex, endIndex);

  const handleIconClick = (icon) => {
    onIconSelect(icon);
  };

  return (
    <div className="icon-picker" style={{ height: pickerHeight, width: pickerWidth }}>
      <div className="icon-grid" style={{ gridTemplateColumns: `repeat(${columnsInOnePage}, 1fr)` }}>
        {paginatedIcons.map((icon, index) => (
          <div
            key={index}
            className="icon-container"
            style={{ height: iconHeight, width: iconWidth }}
            onClick={() => handleIconClick(icon)}
            dangerouslySetInnerHTML={{ __html: feather.icons[icon].toSvg() }}
          />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 0}>
          Previous
        </button>
        <button onClick={() => setCurrentPage(currentPage + 1)} disabled={endIndex >= iconList.length}>
          Next
        </button>
      </div>
    </div>
  );
};

export default IconPicker;
