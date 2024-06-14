import { Signal } from "./Signal";

export enum GameStates{
    Initial,
    Playing,
    Loading,
    Finished
}

export enum GameMode{
    Normal,
    Bazinga
}

export const GameStatesHandler = {
    currentGameState : GameStates.Initial,
    OnStateChanged : new Signal(),

    ChangeState(state : GameStates): void {
        this.currentGameState = state;
        this.OnStateChanged.Emit({
            gameState: this.currentGameState
        });
    }
}
