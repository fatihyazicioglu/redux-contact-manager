// Action Creator
export function addPerson(person) {
  return {
    type: "ADD_PERSON",
    data: person,
  };
}
// First, we need to create our action and corresponding reducer.
// The code above declares an action creator function named addPerson(), which returns an action with type ADD_PERSON and the corresponding payload.
