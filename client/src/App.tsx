import React from 'react';
import Router from './router';
import AppLayout from './layout/appLayout';

function App() {
  return (
    // Eventually the menu needs to be passed here? So we don't have to control whether we should open it or not in every component. I'll just do it the easy way 4 now.
    <AppLayout>
      <Router />
    </AppLayout>
  );
}

export default App;
