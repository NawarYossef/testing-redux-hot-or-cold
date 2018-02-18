import reducer from './reducer';
import {generateAuralUpdate, restartGame, makeGuess} from './actions';


describe('reducer', () => {
    it('Should set the initial state when nothing is passed in', () => {
        const state = reducer(undefined, {type: '__UNKNOWN'});
        expect(state.guesses).toEqual([])
        expect(state.feedback).toEqual('Make your guess!')
        expect(state.auralStatus).toEqual('')
        expect(state.correctAnswer).toBeGreaterThanOrEqual(0)
        expect(state.correctAnswer).toBeLessThanOrEqual(100);
        expect(state.auralStatus).toEqual('');
    });

    it('Should return the current state on an unknown action', () => {
        let currentState = {};
        const state = reducer(currentState, {type: '__UNKNOWN'});
        console.log()
        expect(state).toBe(currentState);
    });

    describe('restartGame', () => {
        it('Should start a new game', () => {
            let state = {
                guesses: [1,2,3],
                feedback: 'Make your guess!',
                auralStatus: '',
                correctAnswer: 45
            };

            const correctAnswer = 15
            state = reducer(state, restartGame(correctAnswer))

            expect(state.guesses).toEqual([])
            expect(state.feedback).toBe('Make your guess!')
            expect(state.auralStatus).toBe('')
        });
    });

})
