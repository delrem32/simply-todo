const REGISTER = "REGISTER";
const LOG_IN = "LOG_IN";
const LOG_OUT = "LOG_OUT";

const initialState = false;

export const auth = (state = initialState, action) => {
    switch (action.type) {
        case LOG_IN:
            return true;
        case LOG_OUT:
            return false;
        case REGISTER:
            return true;
		default:
			return state;
	}
}