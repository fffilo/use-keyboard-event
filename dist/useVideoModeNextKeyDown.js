import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "VideoModeNext".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "VideoModeNext"
 * Description                 Cycles through the available video modes.
 * Virtual Keycode
 *     Windows                 VK_VIDEO_MODE_NEXT (null)
 *     Linux                   GDK_KEY_Next_VMode (0x1008FE22)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useVideoModeNextKeyDown(callback, enabled = true, target) {
    useKeyDown("VideoModeNext", callback, enabled, target);
};
