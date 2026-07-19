import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "LastNumberRedial".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "LastNumberRedial"
 * Description                 The Redial button. Redials the last-called number.
 * Virtual Keycode
 *     Linux                   Qt::Key_LastNumberRedial (0x01100009)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useLastNumberRedialKeyDown(callback, enabled = true) {
    useKeyDown("LastNumberRedial", callback, enabled);
};
