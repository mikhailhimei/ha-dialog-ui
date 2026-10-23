import { defineConfig } from 'vite';
import path from 'node:path';

const root = path.resolve(process.cwd(), 'ui');
const staticDir = path.resolve(process.cwd(), 'custom_components/ha_dialog_ui/static');

export default defineConfig(({ command, mode }) => ({
  root,
  plugins: [{
    name: 'bundle-panel-styles',
    apply: 'build',
    enforce: 'post',
    generateBundle(_options, bundle) {
      const css = Object.values(bundle)
        .filter(file => file.type === 'asset' && file.fileName.endsWith('.css'))
        .map(file => String(file.source)).join('\n');
      if (!css) throw new Error('Panel CSS was not generated');
      for (const file of Object.values(bundle)) {
        if (file.type === 'chunk') {
          file.code = file.code.replace(
            '"__HA_DIALOG_UI_BUNDLED_CSS__"', JSON.stringify(css)
          );
        }
      }
    },
  }],
  define: {
    'process.env.NODE_ENV': JSON.stringify(mode),
    ...(mode === 'production' ? {
      'import.meta.env.VITE_HA_URL': 'undefined',
      'import.meta.env.VITE_HA_TOKEN': 'undefined',
    } : {}),
  },
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: false,
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: staticDir,
    emptyOutDir: false,
    sourcemap: command !== 'build',
    cssCodeSplit: false,
    lib: {
      entry: path.resolve(root, 'src/panel-element.tsx'),
      formats: ['es'],
      fileName: () => 'ha-dialog-ui-panel.js',
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        assetFileNames: 'ha-dialog-ui-panel.[ext]',
      },
    },
  },
}));
