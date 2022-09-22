import React from 'react';
import Router from './router';
import AppLayout from './layout/appLayout';

function App() {
  return (
    <AppLayout>
      <Router />
    </AppLayout>
  );
}

export default App;
