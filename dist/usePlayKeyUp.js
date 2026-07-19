import useKeyUp from "./useKeyUp";

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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePlayKeyUp(callback, enabled = true) {
    useKeyUp("Play", callback, enabled);
};
