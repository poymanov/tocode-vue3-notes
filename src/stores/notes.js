import { createStore } from "vuex";
import { updateLocalNotes, getLocalNotes } from "@/utils/notesStorage";
import { app } from "@/_config";

export const notes = createStore({
  state: {
    items: [],
  },
  getters: {
    getNotes(state) {
      if (state.items.length === 0) {
        const localNotes = getLocalNotes();
        state.items =
          localNotes && localNotes.length > 0 ? localNotes : app.defaultNotes;
      }

      return state.items;
    },
  },
  mutations: {
    addNote(state, note) {
      state.items.push(note);
    },
    deleteNote(state, id) {
      const itemIndex = state.items.findIndex((item) => item.id === id);
      state.items.splice(itemIndex, 1);
    },
  },
  actions: {
    addNote({ commit, state }, note) {
      note.id = state.items.length + 1;
      commit("addNote", note);

      updateLocalNotes(state.items);
    },
    deleteNote({ commit, state }, id) {
      commit("deleteNote", id);

      updateLocalNotes(state.items);
    },
  },
});
