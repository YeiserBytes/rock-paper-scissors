import { create, SetState } from 'zustand';

interface StoreState {
  score: number;
  incrementScore: () => void;
  resetScore: () => void;
}

export const useStore = create<StoreState>((setState: SetState<StoreState>) => ({
  score: 0,
  incrementScore: () => setState((state: StoreState) => ({ score: state.score + 1 })),
  resetScore: () => setState({ score: 0 }),
}));

// TODO: Uncomment this code to see the error
// ?: Use that code to fix the error and make the main code work
// interface StoreState {
//   scorePlayerOne: number;
//   scorePlayerTwo: number;
//   winner: string | null;
// }

// interface StoreActions {
//   incrementScore: (player: 'playerOne' | 'playerTwo') => void;
//   resetScore: () => void;
// }

// type Store = StoreState & StoreActions;

// export const useStore = create<Store>((set) => ({
//   scorePlayerOne: 0,
//   scorePlayerTwo: 0,
//   winner: null,

//   incrementScore: (player: 'playerOne' | 'playerTwo') => set((state) => {
//     const newScorePlayerOne = player === 'playerOne' ? state.scorePlayerOne + 1 : state.scorePlayerOne;
//     const newScorePlayerTwo = player === 'playerTwo' ? state.scorePlayerTwo + 1 : state.scorePlayerTwo;
//     let newWinner = state.winner;

//     if (newScorePlayerOne >= 10) {
//       newWinner = 'PlayerOne';
//     } else if (newScorePlayerTwo >= 10) {
//       newWinner = 'PlayerTwo';
//     }

//     return {
//       ...state,
//       scorePlayerOne: newScorePlayerOne,
//       scorePlayerTwo: newScorePlayerTwo,
//       winner: newWinner,
//     };
//   }),

//   resetScore: () => set(() => ({
//     scorePlayerOne: 0,
//     scorePlayerTwo: 0,
//     winner: null,
//   })),
// }));
