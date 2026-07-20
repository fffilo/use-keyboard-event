import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Backspace".
 *
 * Category                    Editing keys
 * KeyboardEvent.key value     "Backspace"
 * Description                 The Backspace key. This key is labeled Delete on Mac keyboards.
 * Virtual Keycode
 *     Windows                 VK_BACK (0x08)
 *     Mac                     kVK_Delete (0x33)
 *     Linux                   GDK_KEY_BackSpace (0xFF08)
 *                             Qt::Key_Backspace (0x01000003)
 *     Android                 KEYCODE_DEL (67)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useBackspaceKeyDown(callback, enabled = true, target) {
    useKeyDown("Backspace", callback, enabled, target);
};
