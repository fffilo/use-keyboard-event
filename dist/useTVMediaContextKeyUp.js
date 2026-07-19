import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "TVMediaContext".
 *
 * Category                    TV control keys
 * KeyboardEvent.key value     "TVMediaContext"
 * Description                 The Media Context menu key.
 * Virtual Keycode
 *     Android                 KEYCODE_TV_MEDIA_CONTEXT_MENU (257)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useTVMediaContextKeyUp(callback, enabled = true) {
    useKeyUp("TVMediaContext", callback, enabled);
};
