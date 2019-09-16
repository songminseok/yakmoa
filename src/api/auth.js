import * as firebase from 'firebase/app';

export function logout() {
  return firebase.auth().signOut();
}

export function login(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password);
}

export function signup(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password);
}
