// Copyright (c) 2023, John and contributors
// For license information, please see license.txt

frappe.ui.form.on('CCA Allocation', {
	refresh: function(frm) {
		cur_frm.fields_dict['account'].get_query = function(doc) {
			// filter on Account
			return {
				filters: {
					'root_type': 'Expense',
					'is_group': 0,
					'company': doc.company
				}
			}
		}

		cur_frm.fields_dict['main_cost_center'].get_query = function(doc) {
			// filter on Account
			return {
				filters: {
					'perf_yn':'Y',
					'is_group': 0,
					'company': doc.company
				}
			}
		}
		

		cur_frm.fields_dict["allocation_percentages"].grid.get_field("cost_center").get_query = function(doc, cdt, cdn) {
			var d = locals[cdt][cdn]
            return {
                filters: {
                    'perf_yn':'Y',
					'is_group': 0,
					'company': doc.company
                }
            }
        }


	}
});
