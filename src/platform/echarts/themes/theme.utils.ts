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

import { registerTheme } from '../base';

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
