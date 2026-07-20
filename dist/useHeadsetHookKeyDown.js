import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "HeadsetHook".
 *
 * Category                    Phone keys
 * KeyboardEvent.key value     "HeadsetHook"
 * Description                 The Headset Hook key. This is typically actually a button on the headset which is used to hang up calls and play or pause media.
 * Virtual Keycode
 *     Linux                   Qt::Key_ToggleCallHangup (0x01100007)
 *     Android                 KEYCODE_HEADSETHOOK (79)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useHeadsetHookKeyDown(callback, enabled = true) {
    useKeyDown("HeadsetHook", callback, enabled);
};
