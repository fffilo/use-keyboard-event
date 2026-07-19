import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "TVTerrestrialAnalog".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVTerrestrialAnalog"
 * Description                 Selects analog terrestrial television service (analog cable or antenna reception).
 * Virtual Keycode
 *     Android                 KEYCODE_TV_TERRESTRIAL_ANALOG (235)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVTerrestrialAnalogKeyUp(callback, enabled = true) {
    useKeyUp("TVTerrestrialAnalog", callback, enabled);
};
