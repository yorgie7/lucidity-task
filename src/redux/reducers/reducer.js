import { handleResponseData } from '../../utils/handleData';
import {
  FETCH_INVENTORY_DATA_START,
  FETCH_INVENTORY_SUCCESS,
  HANDLE_ERROR_INVENTORY_DATA,
  INITIATE_EDIT_INVENTORY_DATA,
  TERMINATE_EDIT_INVENTORY_DATA,
  SAVE_EDIT_INVENTORY_DATA,
  VIEW_INVENTORY_DATA,
  DELETE_INVENTORY_DATA,
  CHANGE_USER_ADMIN_MODE
} from '../actions';
import { combineReducers } from 'redux';

const initialState = {
  data: [],
  isLoading: false,
  editInventoryData: null,
  viewInventoryId: null,
  mode: "USER",
  error: null
};


const inventoryData = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_INVENTORY_DATA_START:

      return {
        ...state,
        data: [], isLoading: true, error: null,
      };
    case FETCH_INVENTORY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false,
        error: null
      }

    case HANDLE_ERROR_INVENTORY_DATA:
      return { ...state, data: [], isLoading: false, error: null }
    case CHANGE_USER_ADMIN_MODE:
      return { ...state, mode: action.payload, viewInventoryId: null }

    case INITIATE_EDIT_INVENTORY_DATA:
      return {
        ...state,
        editInventoryData: action.payload
      }

    case SAVE_EDIT_INVENTORY_DATA:

      const pre_data = state.data?.data;
      console.warn(pre_data, 'pre')
      let id_target = pre_data?.findIndex(({ id }) => action.payload?.id === id);
      if (id_target >= 0) {
        pre_data[id_target] = action.payload;
      }
      console.warn(pre_data, 'pre')

      const new_edited_Data = handleResponseData(pre_data, true);
      console.warn(new_edited_Data, "new")

      return {
        ...state, data: new_edited_Data,
        editInventoryData: null, viewInventoryId: null
      }

    case TERMINATE_EDIT_INVENTORY_DATA:
      return {
        ...state,
        editInventoryData: null,
        viewInventoryId: null,
      }
    case VIEW_INVENTORY_DATA:
      return { ...state, viewInventoryId: action.payload }

    case DELETE_INVENTORY_DATA:
      const data = state.data?.data.filter(el => el.id !== action?.payload);
      const newData = handleResponseData(data, true);
      return {
        ...state, data: newData, viewInventoryId: null, error: null
      }

    default:
      return state;
  }
};

const rootReducer = combineReducers({ inventoryData });
export default rootReducer;