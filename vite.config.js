import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const jasur = () => {
  return {
    name: 'my-plugin',
    configureServer(server) {
      server.httpServer.once('listening', () => {
        console.log('Happy Hacking, 🫠 🫠 😴\n Github https://github.com/jasurhaydarovcode/gitpod');
      });
    },
  };
};

export default defineConfig({
  plugins: [react(), jasur()],
  server: {
    open: true,
    port: 8080,
  }
})
