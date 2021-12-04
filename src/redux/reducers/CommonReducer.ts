import { Common } from "../../types/models/Common";
import {
    CommonActionTypes,
    TOOGLE_NAVIGATION,
    TOOGLE_UNFOLDABLE
} from "../../types/actions/Common.action";

const INIT_STATE: Common = {
    sidebarShow: true,
    sidebarUnfoldable: false

};

const CommonReducer = (
    state = INIT_STATE,
    action: CommonActionTypes
): Common => {
    switch (action.type) {
        case TOOGLE_NAVIGATION: {
            return { ...state, sidebarShow: action.sidebarShow, };
        }
        case TOOGLE_UNFOLDABLE: {
            return { ...state, sidebarUnfoldable: action.sidebarUnfoldable, };
        }

        default:
            return state;
    }
};
export default CommonReducer;