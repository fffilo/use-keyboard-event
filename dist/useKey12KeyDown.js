import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Key12".
 *
 * Category                    Numeric keypad keys
 * KeyboardEvent.key value     "Key12"
 * Description                 The 12 key found on certain media numeric keypads.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useKey12KeyDown(callback, enabled = true) {
    useKeyDown("Key12", callback, enabled);
};
