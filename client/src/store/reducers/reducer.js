import * as actions from '../actions/actions';

const initialState = {
	votes: []
};

export const reducer = (state = initialState, action) => {
	switch(action.type){
		case actions.UPDATE_VOTE:
			return {
				...state,
				votes: [
					...state.votes.map(vote => {
						if(vote._id === action.vote._id)
							return {
								...vote,
								title: action.vote.title,
								options: action.vote.options
							}
						return vote;	
					})
				]
			};
		case actions.FETCH_VOTES:
			return {
				...state,
				votes: action.votes
			}
		case actions.CREATE_VOTE:
			return {
				...state,
				votes: [
					...state.votes,
					action.vote
				]
			}		
		default: 
			return state;	
	}
};