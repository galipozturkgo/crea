import * as ReactDOM from 'react-dom/client';

import App from './app/App';

async function enableMocking() {
  if (process.env.NODE_ENV !== 'development') {
    return;
  }

  const { browser } = await import('./mocks/base/Browser');

  return browser.start();
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

enableMocking().then(() => {
  root.render(<App />);
});
