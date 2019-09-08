import * as firebase from 'firebase';

export function signOut() {
  return firebase.auth().signOut();
}
/**
 * Handles the sign in button press.
 */
export function signIn(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}
