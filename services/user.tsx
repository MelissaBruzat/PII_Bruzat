export interface User {
  id: string;
  nom: string;
  mdp: string;
  joie: Array<string>;
  colere: Array<string>;
  tristesse: Array<string>;
}

class UserService {
  public users: Array<User> = [
    {
      id: "mebrr",
      mdp: "motdepasse",
      nom: "Mélissa",
      joie: [
        "02/04: Une des Pom-Pom Girl de CBP a vomi pendant leur prestation parce qu'elle avait trop bu à la S4E. meilleur souvenir du Krystal ",
        "01/04 : La S4E s'est très bien passée, malgré certaines personnes beaucoup trop alcooliséees. C'était top et ça me rend fière de faire la passation du BDE juste après un tel event",
        " 23/11: J'ai mangé du tiramisu et de la pizza en regardant le film Dragons, je ne sais pas pourquoi mais c'était une excellente soirée et je m'en souviendrai.",
      ],
      colere: [
        " 06/04: Je me suis faite klakonnée sur la rocade, et ça m'irrite au plus haut point",
        "30/11: J'ai cassé mon bracelet, et ça me m'agace car il avait beaucoup de valeur sentimentale. Je suis vraiment super maladroite ",
      ],
      tristesse: [
        "21/04: Je me rends compte que c'est bientôt le départ en stage, et j'éprouve de la nostalgie",
        " 16/04: Je ne pourrai pas assister au match de mon frère, ça me rend triste car j'ai l'impression de ne pas le voir grandir et de manquer des moments importants avec lui",
        "03/04: Je n'ai pas assez avancé sur mon PII et je suis déçue de moi-même",
      ],
    },
  ];
}

export default new UserService();
