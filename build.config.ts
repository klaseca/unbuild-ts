import { defineBuildConfig } from 'unbuild';

export default defineBuildConfig({
  rollup: {
    emitCJS: true,
    esbuild: {
      tsconfig: 'tsconfig.json',
    },
  },
  declaration: true,
});
