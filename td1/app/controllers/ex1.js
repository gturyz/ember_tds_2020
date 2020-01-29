import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        save(note){
            note.set('info', "Note sauvegardée")
        },
        update(note){
            note.set('info', "Note modifiée")
        },
        clear(note){
            note.set('content', "")
            note.set('info', "Note effacée")
        }
    }
});
