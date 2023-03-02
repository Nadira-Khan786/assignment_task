import {
  ADD_NEW_CONTECT_REQUEST_SUCCESS,
  ADD_NEW_CONTECT_REQUEST_FAILED,
  SET_LOADING,
  DELETE_CONTECT_REQUEST_SUCCESS,
  EDIT_CONTECT_REQUEST,
} from "../actions";

const initialState = {
  isLoading: false,
  contectList: localStorage.getItem("contectList")
    ? JSON.parse(localStorage.getItem("contectList"))
    : [],
};

const contectReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: !state.isLoading,
      };
    }
    case ADD_NEW_CONTECT_REQUEST_SUCCESS: {
      let data = [...state.contectList, action.payload];
      localStorage.setItem("contectList", JSON.stringify(data));
      return {
        ...state,
        contectList: [...state.contectList, action.payload],
        isLoading: false,
      };
    }
    case DELETE_CONTECT_REQUEST_SUCCESS: {
      console.log("action",action);
      let index = state.contectList.findIndex(
        (item) => item.phoneNumber == action.payload
      );
      let data = [...state.contectList];
      index >-1 && data.splice(index,1);
      localStorage.setItem("contectList", JSON.stringify(data));
      console.log("data",data,action.payload)
      return {
        ...state,
        contectList: data,
        isLoading: false,
      };
    }

    case ADD_NEW_CONTECT_REQUEST_FAILED: {
      return {
        ...state,
        error: action.error,
      };
    }
    default:
      return state;
  }
};

export default contectReducer;
