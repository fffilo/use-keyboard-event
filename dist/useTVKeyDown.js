import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "TV".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TV"
 * Description                 Switches into TV viewing mode.
 * Virtual Keycode
 *     Android                 KEYCODE_TV (170)
 *
 * Firefox added proper support for the "TV" key in Firefox 37; before that, this key generated the key code "Live".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVKeyDown(callback, enabled = true) {
    useKeyDown("TV", callback, enabled);
};
