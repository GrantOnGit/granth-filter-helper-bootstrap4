import './pages.html';

import { Template } from 'meteor/templating';
import { FilterHelpers } from 'meteor/granth:filter-helper';

Template.registerHelper( 'eq', (a, b)  => {
    return a == b;
});

Template.filterHelperPaginationPages.onCreated(function() {
	FilterHelpers();
});

Template.filterHelperPaginationPages.helpers({
    pages() {
       return FilterHelpers().get(this.tag).pagination().pageArray;
    },
    currentPage() {
		return FilterHelpers().get(this.tag).pagination().page;
    },
    hasPrev() {
		return FilterHelpers().get(this.tag).pagination().hasPrev;
    },
    hasNext() {
		return FilterHelpers().get(this.tag).pagination().hasNext;
    },
});

Template.filterHelperPaginationPages.events({
    "click .page-button"(event, template) {
		event.preventDefault();
        const elem = event.currentTarget;
		const page = elem.dataset.page;
        FilterHelpers().get(template.data.tag).pagination().setPage(page);
    },
    "click .page-next"(event, template) {
		event.preventDefault();
        FilterHelpers().get(this.tag).pagination().nextPage();
    },
    "click .page-prev"(event, template) {
		event.preventDefault();
        FilterHelpers().get(this.tag).pagination().prevPage();
    },
});