import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "TVNumberEntry".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVNumberEntry"
 * Description                 Put the TV into number entry mode.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_NUMBER_ENTRY (234)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVNumberEntryKeyUp(callback, enabled = true) {
    useKeyUp("TVNumberEntry", callback, enabled);
};
