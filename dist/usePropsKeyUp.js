import useKeyUp from "./useKeyUp.js";

/**
 * React useKeyUp wrapper for key "Props".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Props"
 * Description                 The Props (Properties) key.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePropsKeyUp(callback, enabled = true) {
    useKeyUp("Props", callback, enabled);
};
