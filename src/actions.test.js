import {generateAuralUpdate, GENERATE_AURAL_UPDATE, RESTART_GAME, restartGame, MAKE_GUESS, makeGuess} from './actions';


describe('generateAuralUpdate', () => {
    it('Should return the action', () => {
        const action = generateAuralUpdate();
        expect(action.type).toEqual(GENERATE_AURAL_UPDATE);
    });
});

describe('restartGame', () => {
    it('Should return the action', () => {
        const correctAnswer = 'text';
        const action = restartGame(correctAnswer);
        expect(action.type).toEqual(RESTART_GAME);
        expect(action.correctAnswer).toEqual(correctAnswer);
    });
});

describe('makeGuess', () => {
    it('Should return the action', () => {
        const state = {
            
        }
    });
});