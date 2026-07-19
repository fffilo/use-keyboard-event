import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "TVNumberEntry".
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
export default function useTVNumberEntryKeyDown(callback, enabled = true) {
    useKeyDown("TVNumberEntry", callback, enabled);
};
