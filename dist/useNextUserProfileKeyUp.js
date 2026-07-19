import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "NextUserProfile".
 *
 * Category                    Media controller keys
 * KeyboardEvent.key value     "NextUserProfile"
 * Description                 Cycles to the next saved user profile, if this feature is supported and multiple profiles exist.
 * Virtual Keycode
 *     Windows                 VK_USER (null)
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useNextUserProfileKeyUp(callback, enabled = true) {
    useKeyUp("NextUserProfile", callback, enabled);
};
