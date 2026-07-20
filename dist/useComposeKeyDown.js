import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Compose".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "Compose"
 * Description                 The Compose key.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Multi_key (0xFF20)
 *                             Qt::Key_Multi_key (0x01001120)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useComposeKeyDown(callback, enabled = true, target) {
    useKeyDown("Compose", callback, enabled, target);
};
