import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';

// HTTPS is required for camera access (getUserMedia) from a phone on the LAN.
export default defineConfig({
  base: './',
  plugins: [basicSsl()],
  server: { host: true },
  preview: { host: true },
});
