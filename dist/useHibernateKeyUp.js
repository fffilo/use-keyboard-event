import useKeyUp from "./useKeyUp";

/**
 * React useKeyUp wrapper for key "Hibernate".
 *
 * Category                    Device keys
 * KeyboardEvent.key value     "Hibernate"
 * Description                 The Hibernate key. This saves the state of the computer to disk and then shuts down; the computer can be returned to its previous state by restoring the saved state information.
 * Virtual Keycode
 *     Linux                   GDK_KEY_Hibernate (0x1008FFA8)
 *                             Qt::Key_Hibernate (0x01000108)
 *
 * Prior to Firefox 37, this key generated the value "Unidentified".
 *
 * @param  {Function} callback
 * @param  {Boolean}  enabled
 * @return {Void}
 */
export default function useHibernateKeyUp(callback, enabled = true) {
    useKeyUp("Hibernate", callback, enabled);
};
