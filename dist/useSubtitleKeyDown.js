import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Subtitle".
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
export default function useSubtitleKeyDown(callback, enabled = true) {
    useKeyDown("Subtitle", callback, enabled);
};
