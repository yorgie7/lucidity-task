import { handleResponseData } from "../../utils/handleData";

export const FETCH_INVENTORY_SUCCESS = "FETCH_INVENTORY_SUCCESS";
export const FETCH_INVENTORY_DATA_START = "FETCH_INVENTORY_DATA_START";
export const HANDLE_ERROR_INVENTORY_DATA = "HANDLE_ERROR_INVENTORY_DATA";
// edit inventory actions
export const INITIATE_EDIT_INVENTORY_DATA = "INITIATE_EDIT_INVENTORY_DATA";
export const SAVE_EDIT_INVENTORY_DATA = "SAVE_EDIT_INVENTORY_DATA";
export const TERMINATE_EDIT_INVENTORY_DATA = "INITIATE_EDIT_INVENTORY_DATA";
export const VIEW_INVENTORY_DATA = "VIEW_INVENTORY_DATA";
export const DELETE_INVENTORY_DATA = "DELETE_INVENTORY_DATA";
export const CHANGE_USER_ADMIN_MODE = "CHANGE_USER_ADMIN_MODE";

const URL = "https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory";

export const changeModeUserAdmin = (payload) => ({
    type: CHANGE_USER_ADMIN_MODE,
    payload
})

const fetchProductSuccess = (payload) => ({
    type: FETCH_INVENTORY_SUCCESS,
    payload
});

const fetchProductStarted = () => ({
    type: FETCH_INVENTORY_DATA_START
});

const handleCatchError = (err) => (
    {
        type: HANDLE_ERROR_INVENTORY_DATA,
        payload: err
    }
)

export const getProductListData = () => {
    return dispatch => {
        dispatch(fetchProductStarted());

        fetch(URL)
            .then(response => response.json()).then(data => {
                const reStructuredData = handleResponseData(data);
                dispatch(fetchProductSuccess(reStructuredData));
            })
            .catch(err => {
                dispatch(handleCatchError())
            });
    };
};

export const initiateEditInventoryData = (payload) => ({
    type: INITIATE_EDIT_INVENTORY_DATA,
    payload
})
export const saveEditInventoryData = (payload) => ({
    type: SAVE_EDIT_INVENTORY_DATA,
    payload
})


export const viewInventoryAction = (payload) => ({
    type: VIEW_INVENTORY_DATA,
    payload
})
export const terminateEditInventory = () => ({
    type: TERMINATE_EDIT_INVENTORY_DATA,
})

export const deleteInventoryData = (payload) => ({
    type: DELETE_INVENTORY_DATA,
    payload
})
