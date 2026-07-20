import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Play".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Play"
 * Description                 The Play key. Resumes a previously paused application, if applicable. Note: This shouldn't be confused with the "MediaPlay" key value, which is used for media controllers, rather than to control applications and processes.
 * Virtual Keycode
 *     Windows                 VK_PLAY (0xFA)
 *     Linux                   GDK_KEY_3270_Play (0xFD16)
 *                             Qt::Key_Play (0x01020005)
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function usePlayKeyUp(callback, enabled = true, target) {
    useKeyUp("Play", callback, enabled, target);
};
