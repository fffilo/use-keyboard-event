import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Again".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Again"
 * Description                 The Again key. Redoes or repeats a previous action.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Redo (0xFF66)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useAgainKeyDown(callback, enabled = true, target) {
    useKeyDown("Again", callback, enabled, target);
};
