import axios from 'axios';


export const UPDATE_VOTE = "UPDATE_VOTE";
export const FETCH_VOTES = "FETCH_VOTES";
export const CREATE_VOTE = "CREATE_VOTE";

export const updateVote = (vote) => {
	return {
		type: UPDATE_VOTE,
		vote: vote
	};
}

export const fetch = (votes) => {
	return {
		type: FETCH_VOTES,
		votes: votes
	}
}

export const fetchVotes = () => {
	return dispatch => {
		axios.get("/api/getVotings").then(res => {
			dispatch(fetch(res.data));
		}).catch(err => {
			console.log("Error while trying to fetch all votings in VotesList: ", err);
		});
	}
}

export const createVote = (vote) => {
	return {
		type: CREATE_VOTE,
		vote: vote
	}
}

