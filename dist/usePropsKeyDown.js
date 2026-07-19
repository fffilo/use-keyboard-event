import useKeyDown from "./useKeyDown";

/**
 * React useKeyDown wrapper for key "Props".
 *
 * Category                    UI keys
 * KeyboardEvent.key value     "Props"
 * Description                 The Props (Properties) key.
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function usePropsKeyDown(callback, enabled = true) {
    useKeyDown("Props", callback, enabled);
};
