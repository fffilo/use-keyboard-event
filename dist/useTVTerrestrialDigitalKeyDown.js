import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TVTerrestrialDigital".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVTerrestrialDigital"
 * Description                 Selects digital terrestrial television service (digital cable or antenna reception).
 * Virtual Keycode
 *     Android                 KEYCODE_TV_TERRESTRIAL_DIGITAL (236)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVTerrestrialDigitalKeyDown(callback, enabled = true) {
    useKeyDown("TVTerrestrialDigital", callback, enabled);
};
