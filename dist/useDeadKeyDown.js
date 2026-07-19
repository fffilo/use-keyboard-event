import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Dead".
 *
 * Category                    IME and composition keys → Common IME keys
 * KeyboardEvent.key value     "Dead"
 * Description                 A dead "combining" key; that is, a key which is used in tandem with other keys to generate accented and other modified characters. If pressed by itself, it doesn't generate a character. If you wish to identify which specific dead key was pressed (in cases where more than one exists), you can do so by examining the KeyboardEvent's associated compositionupdate event's data property.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useDeadKeyDown(callback, enabled = true) {
    useKeyDown("Dead", callback, enabled);
};
