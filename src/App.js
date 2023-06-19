import React from 'react';
import ColorPicker from './ColorPicker';

const App = () => {
  const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff'];

  return (
    <div className = "app">
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;
