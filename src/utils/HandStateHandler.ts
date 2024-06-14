import { PLAYER1, PLAYER2, TIE } from "./const.d";
import { choiceRulesTypes } from "./types.d";

export enum HandChoices {
  Rock,
  Paper,
  Scissors,
  Lizard,
  Spock,
}

const ChoiceRules: choiceRulesTypes = {
  [HandChoices.Rock]: [HandChoices.Scissors, HandChoices.Lizard],
  [HandChoices.Paper]: [HandChoices.Rock, HandChoices.Spock],
  [HandChoices.Scissors]: [HandChoices.Paper, HandChoices.Lizard],
  [HandChoices.Lizard]: [HandChoices.Spock, HandChoices.Paper],
  [HandChoices.Spock]: [HandChoices.Scissors, HandChoices.Rock],
};

export const ChoiceHandler = (choice1: HandChoices, choice2: HandChoices): HandChoices => {
  return ChoiceRules[choice1].includes(choice2) ? choice1 : choice2;
};

export const WinnerHandler = (player1Choice: HandChoices, player2Choice: HandChoices): symbol => {
  if (ChoiceRules[player1Choice].includes(player2Choice)) {
    return PLAYER1;
  } else if (ChoiceRules[player2Choice].includes(player1Choice)) {
    return PLAYER2;
  } else {
    return TIE;
  }
};
