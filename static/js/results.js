/*
 * MINEX III table.
 */
$(document).ready(function() {
	$.fn.dataTable.moment('MM/DD/YYYY');
	var minexiii_dt = $('#minexiii_results').DataTable({
		"paging":false,
		"columnDefs": [
			{
			"targets": [5,6,8,9,10,11,12,13,14,15,16,17,18,19,20,21],
			"visible": false,
			},
			{
			"targets": 3,
			"render": $.fn.dataTable.render.moment('MM/DD/YYYY', 'DD MMM YYYY')
			}
		],
		colReorder: {
			fixedColumnsLeft: 1
		},
		scrollY: "300px",
		scrollCollapse: true,
		buttons: ['colvis', 'csvHtml5'],
		order: [[3, 'desc']],

		// Dynamic responsive columns. Must also set table class to dt-responsive.
		dom: 'Bfrtip',
		scrollX: false,
		responsive: {
			details: {
				display: $.fn.dataTable.Responsive.display.modal( {
					header: function ( row ) {
						var data = row.data();
						return 'Details for '+data[0];
					}
				} ),
				renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
					tableClass: 'ui table'
				} )
			}
		}

	}); /* DataTable */
}); /* document.ready */

/******************************************************************************/

/*
 * Ongoing MINEX table.
 */
$(document).ready(function() {
	$.fn.dataTable.moment('MM/DD/YYYY');
	var ominex_dt = $('#ominex_results').DataTable({
		"paging":false,
		"columnDefs": [
			{
			"targets": [4,6,7,8,9,10,11,12,13,14,15,16],
			"visible": false,
			},
			{
			"targets": 3,
			"render": $.fn.dataTable.render.moment('MM/DD/YYYY', 'DD MMM YYYY')
			}
		],
		colReorder: {
			fixedColumnsLeft: 1
		},
		scrollY: "300px",
		scrollCollapse: true,
		buttons: ['colvis', 'csvHtml5'],
		order: [[3, 'desc']],

		// Dynamic responsive columns. Must also set table class to dt-responsive.
		dom: 'Bfrtip',
		scrollX: false,
		responsive: {
			details: {
				display: $.fn.dataTable.Responsive.display.modal( {
					header: function ( row ) {
						var data = row.data();
						return 'Details for '+data[0];
						      }
				} ),
				renderer: $.fn.dataTable.Responsive.renderer.tableAll( {
					tableClass: 'ui table'
				} )
			}

		}
	}); /* DataTable */
}); /* document.ready */
