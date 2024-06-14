export interface RulesModalProps {
  toggleModal: () => void
  type?: 'Normal' | 'Expantion'
}

export type choiceRulesTypes = { [key in HandChoices]: HandChoices[] }
