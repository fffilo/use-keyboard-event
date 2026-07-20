import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "LaunchWebBrowser".
 *
 * Category                    Application selector keys
 * KeyboardEvent.key value     "LaunchWebBrowser"
 * Description                 The Web Browser key. This key is frequently labeled with an icon.
 * Virtual Keycode
 *     Linux                   GDK_KEY_WWW (0x1008FF2E)
 *                             Qt::Key_WWW (0x010000BB)
 *     Android                 KEYCODE_EXPLORER (64)
 *
 * Prior to Firefox 37, Firefox returned the key code "LaunchApplication1" instead of "LaunchWebBrowser" for the Web browser key.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLaunchWebBrowserKeyUp(callback, enabled = true, target) {
    useKeyUp("LaunchWebBrowser", callback, enabled, target);
};
