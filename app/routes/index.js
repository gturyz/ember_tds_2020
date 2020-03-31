import Route from '@ember/routing/route';

export default Route.extend({
    actions: {        
        setData() {
            //developers
            let developer = this.store.createRecord('developer', {
				identity: "Jean Marc"
			});
            developer.save();
            let developer1 = this.store.createRecord('developer', {
				identity: "Dale Pout"
			});
            developer1.save();
            let developer2 = this.store.createRecord('developer', {
				identity: "Abi Tude"
			});
            developer2.save();
            // steps
            let step = this.store.createRecord('step', {
				title: "Todo"
            });
            step.save();
            let step1 = this.store.createRecord('step', {
				title: "In progress"
            });
            step1.save();
            let step2 = this.store.createRecord('step', {
				title: "Done"
            });
            step2.save();
            // projects
            let project = this.store.createRecord('project', {
                name: "Boards-EmberJS",
                descriptif: "Gestion de projet SCRUM avec EmberJS",
                startDate: new Date("2018-02-20"),
                dueDate: new Date("2018-02-28"),
                owner: developer
			});
            project.save();
            let project1 = this.store.createRecord('project', {
                name: "phpMyBenchmarks",
                descriptif: "Benchmarks PHP",
                startDate: new Date("2018-02-20"),
                dueDate: new Date("0000-00-00"),
                owner: developer2
			});
            project1.save();
            // tags
            let tag = this.store.createRecord('tag', {
                title: "Admin",
                color: "red"
			});
            tag.save();
            let tag1 = this.store.createRecord('tag', {
                title: "Question",
                color: "blue"
			});
            tag1.save();
            // stories
            let story = this.store.createRecord('story', {
                code: "Mise en prod",
                description: "Mise en prod du projet",
                project: project,
                tags: [
                    tag,
                    tag1
                ],
                developer: developer,
                step: undefined
            });
            story.save();
            let story1 = this.store.createRecord('story', {
                code: "Admin",
                description: "Admin",
                project: project,
                tags: [
                    tag,
                    tag1
                ],
                developer: developer2,
                step: step
            });
            story1.save();
        }
    }
});
