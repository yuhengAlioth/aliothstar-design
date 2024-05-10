// 负责vue插件的安装
import { each } from 'lodash-es'
import type { App, Plugin } from 'vue'

type SFCWithInstall<T> = T & Plugin

/**
 * 创建一个插件安装器
 * @param components 插件数组，表示需要安装的多个插件
 * @returns 返回一个插件安装函数，该函数接收一个应用实例，并安装所有指定的插件
 */
export function makeInstaller(components: Plugin[]) {
  // 创建一个安装器函数，该函数接收一个应用实例，并依次安装所有组件
  const installer = (app: App) => each(components, (c) => app.use(c))
  return installer as Plugin // 将安装器函数类型断言为插件类型并返回
}

export const withInstall = <T>(component: T) => {
  ;(component as SFCWithInstall<T>).install = (app: App) => {
    const name = (component as any).name
    app.component(name, component as Plugin)
  }
  return component as SFCWithInstall<T>
}

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
