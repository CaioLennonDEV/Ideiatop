import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const webhookUrl = env.VITE_AI_WEBHOOK_URL || '';

  let proxy = undefined;
  if (webhookUrl.startsWith('http')) {
    try {
      const url = new URL(webhookUrl);
      proxy = {
        '/api/ai-webhook': {
          target: url.origin,
          changeOrigin: true,
          rewrite: (path) => url.pathname + (url.search || ''),
          secure: true,
        },
      };
    } catch (_) {
      // URL inválida, não configura proxy
    }
  }

  return {
    plugins: [react()],
    server: {
      proxy,
    },
  };
});
