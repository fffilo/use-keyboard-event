import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "LogOff".
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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLogOffKeyUp(callback, enabled = true) {
    useKeyUp("LogOff", callback, enabled);
};
