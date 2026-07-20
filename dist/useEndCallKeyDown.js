import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "EndCall".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "EndCall"
 * Description                 The End Call or Hang Up button.
 * Virtual Keycode
 *     Linux                   Qt::Key_Hangup (0x01100005)
 *     Android                 KEYCODE_ENDCALL (6)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useEndCallKeyDown(callback, enabled = true) {
    useKeyDown("EndCall", callback, enabled);
};
