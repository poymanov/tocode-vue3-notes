const App = {
    data() {
        return {
            form: {
                title: null
            },
            notes: [
                {'id': 1, 'title': 'Task 1'},
                {'id': 2, 'title': 'Task 2'},
                {'id': 3, 'title': 'Task 3'}
            ],
            editedNoteId: null
        }
    },
    methods: {
        submitForm() {
            const newNote = {
                id: this.notes.length + 1,
                title: this.form.title
            };
            this.notes.push(newNote);

            this.resetForm();
        },
        resetForm() {
            this.form.title = null;
        },
        removeNote(id) {
            this.notes = this.notes.filter((note) => note.id !== id);
        },
        updateNote(id, title) {
            this.notes = this.notes.map((note) => {
               if (note.id === id) {
                   note.title = title;
               }

               return note;
            });
        },
        getNotes() {
            const localNotes = localStorage.getItem('notes');

            if (localNotes) {
                this.notes = JSON.parse(localNotes);
            }
        },
        setEditedNoteId(id) {
            this.editedNoteId = id;
        },
        editNote(event) {
            if (event.key === 'Escape') {
                this.setEditedNoteId(null);
            } else if (event.key === 'Enter') {
                this.updateNote(this.editedNoteId, event.target.value);
                this.setEditedNoteId(null);
            }
        }
    },
    mounted() {
        this.getNotes();
    },
    watch: {
        notes: {
            handler: function (updatedNotes) {
                localStorage.setItem('notes', JSON.stringify(updatedNotes));
            },
            deep: true
        }
    }
};

Vue.createApp(App).mount('#app');