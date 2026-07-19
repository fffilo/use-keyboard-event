import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Subtitle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "Subtitle"
 * Description                 Toggles the display of subtitles on and off if they're available.
 * Virtual Keycode
 *     Windows                 VK_SUBTITLE (null)
 *     Linux                   GDK_KEY_Subtitle (0x1008FF9A)
 *     Android                 KEYCODE_CAPTIONS (175)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSubtitleKeyUp(callback, enabled = true) {
    useKeyUp("Subtitle", callback, enabled);
};
