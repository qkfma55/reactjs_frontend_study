// vite.config.ts

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path'; // Node.js path 모듈 사용 (설치 필요)

const projectRoot = resolve(__dirname, 'src'); // src 디렉토리를 기준 경로로 지정

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // 경로 Alias 설정 (실무에서 매우 자주 사용됨)
  resolve: {
    alias: {
      // @/는 src 디렉토리 자체를 매핑
      '@': projectRoot, 
      // 나머지 모듈 폴더는 src 내부의 폴더를 매핑
      '@app': resolve(projectRoot, 'app'),
      '@features': resolve(projectRoot, 'features'),
      '@shared': resolve(projectRoot, 'shared'), // <-- 이렇게 src/shared/로 명확히 지정
      '@store': resolve(projectRoot, 'store'),
      '@styles': resolve(projectRoot, 'styles'),
    },
  },
  // SCSS 전역 변수/믹스인 자동 로드를 위한 설정 (선택 사항이지만 유용함)
  css: {
    preprocessorOptions: {
      scss: {
        // additionalData: `@import "./src/styles/main.scss";`
        // 이렇게 설정하면, 모든 SCSS 파일에서 main.scss를 별도 import 없이 사용할 수 있습니다.
      }
    }
  },
  // 개발 서버 설정 (선택 사항)
  server: {
    port: 3000,
    open: true,
  },
});