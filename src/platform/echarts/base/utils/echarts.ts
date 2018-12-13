import * as echarts from 'echarts/lib/echarts';

/**
 * Function used to register a theme into echarts
 * Theme name and theme object needed as stated in
 * https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.registerTheme
 */
export function registerTheme(themeName: string, theme: Object): void {
  echarts.registerTheme(themeName, theme);
}
