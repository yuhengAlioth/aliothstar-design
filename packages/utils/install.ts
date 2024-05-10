// 负责vue插件的安装
import { each } from "lodash-es";
import type { App, Plugin } from "vue";

type SFCWithInstall<T> = T & Plugin;

export function makeInstaller(components: Plugin[]) {
  const installer = (app: App) => each(components, (c) => app.use(c));
  return installer as Plugin;
}

export const withInstall = <T>(component: T) => {
  (component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name;
    app.component(name, component as Plugin);
  };
  return component as SFCWithInstall<T>;
};

// export const withInstall = <T>(component: T) => {
//   (component as SFCWithInstall<T>).install = (app: App) => {
//     const name = (component as any)?.name || "UnnamedComponent";
//     app.component(name, component as SFCWithInstall<T>);
//   };
//   return component as SFCWithInstall<T>;
// };

// export const withInstallFunction = <T>(fn: T, name: string) => {
//   (fn as SFCWithInstall<T>).install = (app: App) => {
//     app.config.globalProperties[name] = fn;
//   };
//   return fn as SFCWithInstall<T>;
// };

// export const withInstallDirective = <T extends Directive>(
//   directive: T,
//   name: string
// ): SFCWithInstall<T> => {
//   (directive as SFCWithInstall<T>).install = (app: App) => {
//     app.directive(name, directive);
//   };
//   return directive as SFCWithInstall<T>;
// };

// export const withNoopInstall = <T>(component: T) => {
//   (component as SFCWithInstall<T>).install = noop;
//   return component as SFCWithInstall<T>;
// };
