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
            ]
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
        }
    }
};

Vue.createApp(App).mount('#app');