// action strings
export const TOOGLE_NAVIGATION = "TOOGLE_NAVIGATION";
export const TOOGLE_UNFOLDABLE = "TOOGLE_UNFOLDABLE";

export interface ToogleNavigationAction {
    type: typeof TOOGLE_NAVIGATION;
    sidebarShow?: boolean
}

export interface ToogleUnfoldableAction {
    type: typeof TOOGLE_UNFOLDABLE;
    sidebarUnfoldable?: boolean
}




export type CommonActionTypes =
    ToogleNavigationAction | ToogleUnfoldableAction