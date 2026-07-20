import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "ScreenModeNext".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "ScreenModeNext"
 * Description                 Cycles through the available screen display modes.
 * Virtual Keycode
 *     Windows                 VK_SCREEN_MODE_NEXT (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useScreenModeNextKeyDown(callback, enabled = true) {
    useKeyDown("ScreenModeNext", callback, enabled);
};
