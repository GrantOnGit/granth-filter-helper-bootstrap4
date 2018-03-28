import './per-page.html';

import { Template } from 'meteor/templating';
import { FilterHelpers } from 'meteor/granth:filter-helper';

Template.filterHelperPaginationPerPage.events({
	"change select"(event, template) {
		const val = event.currentTarget.value;
		FilterHelpers().get(template.data.tag).pagination().setPerPage(val);
	}
})