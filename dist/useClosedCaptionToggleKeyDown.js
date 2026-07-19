import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "ClosedCaptionToggle".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ClosedCaptionToggle"
 * Description                 Toggles closed captioning on and off.
 * Virtual Keycode
 *     Windows                 VK_CC (null)
 *     Android                 KEYCODE_CAPTIONS (175)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useClosedCaptionToggleKeyDown(callback, enabled = true) {
    useKeyDown("ClosedCaptionToggle", callback, enabled);
};
