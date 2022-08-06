export type actionType = {
   type: string
}
export type StateType = {
   collapsed: boolean
}
export const TOGGLE_COLLAPSED = "TOGGLE-COLLAPSED"
export const reducer = (state: StateType, action: actionType): StateType => {
   switch (action.type) {
      case TOGGLE_COLLAPSED:
         const stateCopy = {...state}
         stateCopy.collapsed = !stateCopy.collapsed
         return stateCopy
      default:
         throw new Error("bad action tpe")
   }
}