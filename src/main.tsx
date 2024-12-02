import { DEFAULT_THEME, MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import { createRoot } from 'react-dom/client';
import { App } from './bootstrap/App';
import './main.scss';

const container = document.getElementById('root') ?? document.body;

const root = createRoot(container);

root.render(
  <MantineProvider defaultColorScheme='dark' theme={DEFAULT_THEME}>
    <App />
  </MantineProvider>
);
