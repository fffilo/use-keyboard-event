import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Call".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "Call"
 * Description                 The Call key. Dials the number which has been entered.
 * Virtual Keycode
 *     Linux                   Qt::Key_Call (0x01100004)
 *     Android                 KEYCODE_CALL (5)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useCallKeyUp(callback, enabled = true) {
    useKeyUp("Call", callback, enabled);
};
