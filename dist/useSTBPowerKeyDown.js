import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "STBPower".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "STBPower"
 * Description                 Toggles on and off an external STB.
 * Virtual Keycode
 *     Android                 KEYCODE_STB_POWER (179)
 *
 * These keys were "Unidentified" until Firefox 37.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useSTBPowerKeyDown(callback, enabled = true) {
    useKeyDown("STBPower", callback, enabled);
};
