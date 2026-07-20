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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useEndCallKeyDown(callback, enabled = true, target) {
    useKeyDown("EndCall", callback, enabled, target);
};
