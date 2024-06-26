import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';

import SocialMediaCalendar from './social-media-calendar/Main.tsx';
import { store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <SocialMediaCalendar />
    </Provider>
    <App />
  </React.StrictMode>,
)
