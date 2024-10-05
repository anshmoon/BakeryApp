import React, { useState } from 'react';

const Popup = ({recipe,recipeOpen}) => {
  const [isOpen, setIsOpen] = useState(recipeOpen);

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      

      {isOpen && (
        <div
          style={{
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            padding: '20px',
            backgroundColor: '#fff',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            borderRadius: '8px',
            zIndex: 1000,
            maxWidth: '90%',
            wordWrap: 'break-word',
            textAlign: 'center',
            lineHeight: '1.5',
          }}
        >
          <pre>{recipe}
          </pre>
          
          <button onClick={togglePopup} style={{ marginTop: '10px', padding: '10px', fontSize: '14px' }}>
            Close
          </button>
        </div>
      )}

      {isOpen && (
        <div
          onClick={togglePopup}
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999,
          }}
        />
      )}
    </div>
  );
};

export default Popup;
