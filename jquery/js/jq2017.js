$(document).ready(function() {
	// remove row from table, using button (uses "delegate event approach")
	$('#tblData').on('click', '.delete', function() {
		$(this).closest('tr').remove();
	});
	
	// remove column from table by clicking header
	$("#tblData tr:has(th)").mouseover(function(e) {
		$(this).css("cursor", "pointer");
	});
	$("#tblData th").click(function() {
		var iIndex = $(this).closest("th").prevAll("th").length;
		$(this).parents("#tblData").find("tr").each(function() {
			$(this).find("td:eq(" + iIndex + ")").remove();
			$(this).find("th:eq(" + iIndex + ")").remove();
		});
	});

	//add insert column
	$('#tblData tr:first').append("<th>Insert</th>"); //header
	$('#tblData').find('tr').each(function(){
		$(this).find('td').eq(3).after(
			'<td><input class="insert" type="button" value="Insert" /></td>');
	});

	//insert button functionality
	$('#tblData').on('click', '.insert', function() {
		$(this).closest('tr').before(
			'<tr> <td>John</td> <td>111</td><td>Portugal</td><td><input class="delete" type="button" value="Delete" /></td><td><input class="insert" type="button" value="Insert" /></td> </tr>');
	});

}); // end $(document).ready(function() 
