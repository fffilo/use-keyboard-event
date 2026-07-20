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
 * @param callback  Invoked when the keyboard event matches.
 * @param enabled   Enables or disables the listener (defaults to `true`).
 * @param target    Event target (defaults to `document`).
 */
export default function useLaunchSpreadsheetKeyUp(
    callback: (event: KeyboardEvent) => void,
    enabled?: boolean,
    target?: EventTarget
): void;
