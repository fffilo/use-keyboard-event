import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchSpreadsheet".
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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchSpreadsheetKeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchSpreadsheet", callback, enabled, target);
};
