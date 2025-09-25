import React from 'react';

const TestDNV = ({ onBack }) => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a0a0a', 
      color: '#ffffff',
      padding: '2rem'
    }}>
      <h1>Test DNV Component</h1>
      <p>This is a test component to check if the issue is with the full DNV component.</p>
      <button 
        onClick={onBack}
        style={{
          padding: '1rem 2rem',
          background: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer'
        }}
      >
        Back to Projects
      </button>
    </div>
  );
};

export default TestDNV;
