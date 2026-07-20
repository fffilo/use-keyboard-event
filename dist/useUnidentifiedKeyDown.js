import useKeyDown from "./useKeyDown.js";

/**
 * React useKeyDown wrapper for key "Unidentified".
 *
 * Category                    Special values
 * KeyboardEvent.key value     "Unidentified"
 * Description                 The user agent wasn't able to map the event's virtual keycode to a specific key value. This can happen due to hardware or software constraints, or because of constraints around the platform on which the user agent is running.
 * Virtual Keycode
 *     Windows                 varies
 *     Mac                     varies
 *     Linux                   varies
 *     Android                 varies
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useUnidentifiedKeyDown(callback, enabled = true) {
    useKeyDown("Unidentified", callback, enabled);
};
