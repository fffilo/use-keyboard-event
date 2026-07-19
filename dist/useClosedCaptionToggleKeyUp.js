import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "ClosedCaptionToggle".
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
export default function useClosedCaptionToggleKeyUp(callback, enabled = true) {
    useKeyUp("ClosedCaptionToggle", callback, enabled);
};
