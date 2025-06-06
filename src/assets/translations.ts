import { LanguageEnum } from "../enums/language.enum";

export const translations = {
  [LanguageEnum.FR]: {
    home: "Accueil",
    login: "Connexion",
    register: "Inscription",
    logout: "Déconnexion",
    modifyEmail: "Modifier mon adresse email",
    newEmailPlaceholder: "Nouvelle adresse email",
    modifyPassword: "Modifier mon mot de passe",
    oldPasswordPlaceholder: "Ancien mot de passe",
    newPasswordPlaceholder: "Nouveau mot de passe",
    newPasswordConfirmationPlaceholder: "Confirmation du nouveau mot de passe",
    confirm: "Confirmer",
  },
  [LanguageEnum.EN]: {
    home: "Home",
    login: "Login",
    register: "Register",
    logout: "Logout",
    modifyEmail: "Modify my new mail adress",
    newEmailPlaceholder: "New mail adresse",
    modifyPassword: "Modify my password",
    oldPasswordPlaceholder: "Previous password",
    newPasswordPlaceholder: "New password",
    newPasswordConfirmationPlaceholder: "New password confirmation",
    confirm: "Confirm",
  },
};
