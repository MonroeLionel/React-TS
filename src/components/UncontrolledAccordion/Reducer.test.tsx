import {reducer, StateType, TOGGLE_COLLAPSED} from "./Reducer";

test('reducershout change value to opposite value', () => {
   //data
   const state: StateType = {
      collapsed: false
   }

   //action
   const newState = reducer(state, {type: TOGGLE_COLLAPSED})

   //expection
   expect(newState.collapsed).toBe(true)
})

test('reducershout change value to opposite qwe', () => {
   //data
   const state: StateType = {
      collapsed: true
   }

   //action
   const newState = reducer(state, {type: TOGGLE_COLLAPSED})

   //expection
   expect(newState.collapsed).toBe(false)
})

test('reducershout change value to opposite fake', () => {
   //data
   const state: StateType = {
      collapsed: true
   }

   //action
   expect(() => {
      reducer(state, {type: "fake"})
   }).toThrowError()


   //expection
})