import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Unidentified".
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
 * @param  {Function}    callback  Invoked when the keyboard event matches.
 * @param  {Boolean}     enabled   Enables or disables the listener (defaults to `true`).
 * @param  {EventTarget} target    Event target (defaults to `document`).
 * @return {Void}
 */
export default function useUnidentifiedKeyUp(callback, enabled = true, target) {
    useKeyUp("Unidentified", callback, enabled, target);
};
