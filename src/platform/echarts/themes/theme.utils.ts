import * as echarts from 'echarts/lib/echarts';

import azureKhaki from './json-themes/td-azure-khaki.project.json';
import azureTeal from './json-themes/td-azure-teal.project.json';
import azure from './json-themes/td-azure.project.json';
import blueOrange from './json-themes/td-blue-orange.project.json';
import tealOrangePolichrome from './json-themes/td-teal-orange-polichrome.project.json';
import tealOrange from './json-themes/td-teal-orange.project.json';
import colors2 from './json-themes/td-colors-2.project.json';
import colors from './json-themes/td-colors.project.json';
import teradataExtended2 from './json-themes/teradata-extended-2.project.json';
import teradataExtended3 from './json-themes/teradata-extended-3.project.json';
import teradataExtended4 from './json-themes/teradata-extended-4.project.json';
import teradataExtended from './json-themes/teradata-extended.project.json';

/**
 * Function used to register a theme into echarts
 * Theme name and theme object needed as stated in
 * https://ecomfe.github.io/echarts-doc/public/en/api.html#echarts.registerTheme
 */
export function registerTheme(themeName: string, theme: Object): void {
  echarts.registerTheme(themeName, theme);
}

/**
 * Function to register all default themes
 * @internal
 */
export function registerDefaultThemes(): void {
  registerInternalTheme(azureKhaki);
  registerInternalTheme(azureTeal);
  registerInternalTheme(azure);
  registerInternalTheme(blueOrange);
  registerInternalTheme(tealOrangePolichrome);
  registerInternalTheme(tealOrange);
  registerInternalTheme(colors2);
  registerInternalTheme(colors);
  registerInternalTheme(teradataExtended2);
  registerInternalTheme(teradataExtended3);
  registerInternalTheme(teradataExtended4);
  registerInternalTheme(teradataExtended);
}

export function registerInternalTheme(themeObj: {themeName: string, theme: any}): void {
  registerTheme(themeObj.themeName, themeObj.theme);
}
