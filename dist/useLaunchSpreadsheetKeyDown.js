import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LaunchSpreadsheet".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchSpreadsheet"
 * Description                 The Spreadsheet key. This key may be labeled with an icon.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Excel (0x1008FF5C)
 *                             Qt::Key_Excel (0x010000D4)
 *
 * Prior to Firefox 37, Firefox returned the key code "LaunchApplication1" instead of "LaunchWebBrowser" for the Web browser key.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLaunchSpreadsheetKeyDown(callback, enabled = true) {
    useKeyDown("LaunchSpreadsheet", callback, enabled);
};
