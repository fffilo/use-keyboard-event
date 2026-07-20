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
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useVideoModeNextKeyDown(callback, enabled = true) {
    useKeyDown("VideoModeNext", callback, enabled);
};
