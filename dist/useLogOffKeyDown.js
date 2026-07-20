import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "LogOff".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "LogOff"
 * Description                 The LogOff key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_LogOff (0x1008FF61)
 *                             Qt::Key_LogOff (0x010000D9)
 *
 * Prior to Firefox 37, this key generated the value "Unidentified".
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useLogOffKeyDown(callback, enabled = true, target) {
    useKeyDown("LogOff", callback, enabled, target);
};
