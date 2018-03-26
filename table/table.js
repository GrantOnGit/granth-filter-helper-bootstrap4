import { Template } from  'meteor/templating';
import { FilterHelpers } from 'meteor/granth:filter-helper';
import './table.html';

Template.filterHelperTable.onCreated(function() {
	const template = this;
	FilterHelpers();
});

Template.filterHelperTable.helpers({
	error() {
		const template = Template.instance();
		const helper = template.filterHelpers.get(template.data.tag);
		const tableName = (template.data.table) ? template.data.table : "default";

		if(!helper.getTable(tableName)) {
			return "Table not found.";
		}
		
		return false;
	},

	items() {
		const template = Template.instance();
		const helper = template.filterHelpers.get(template.data.tag);
		const tableName = (template.data.table) ? template.data.table : "default";
		const result = helper.getTable(tableName).values();

		//console.log("VALS", result);

		return result;
	},

	helpers() {
		const template = Template.instance();
		const data = Template.currentData();
		const helper = template.filterHelpers.get(data.tag);
		const tableName = (data.table) ? data.table : "default";

		//console.log("HELPERS", helper.getTable(tableName));
		//helper.react();

		return {
			getSort: helper.getTable(tableName).getSort,
			headings: helper.getTable(tableName).fields,
			checkable() {
				return true;
			},
			setSort: helper.getTable(tableName).setSort,
			cycleSort: helper.getTable(tableName).cycleSort,
		};
	},


});

Template.filterHelperTable.events({
	"click .sortable"(event) {
		const target = event.currentTarget;
		const key = target.dataset.key;
		this.cycleSort(key);
	},

});