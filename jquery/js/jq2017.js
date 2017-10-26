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
		//fake data for insert
		faker.locale = "en_US"; //set locale for faker
		var randomName = faker.name.firstName() +' '+faker.name.lastName(); //random first and last name
		var randomAge =  Math.floor(Math.random()*(100-13+1)+13); //random age between 13 and 100
		var randomCountry = faker.address.country(); //random country name
		//contruct new column with above fake data
		var newCol = '<tr> <td>'+randomName+'</td><td>'+randomAge+'</td><td>'+randomCountry
		newCol = newCol+'<td><input class="delete" type="button" value="Delete" /></td><td><input class="insert" type="button" value="Insert" /></td> </tr>'
		//create the new column with above construction
		$(this).closest('tr').before(newCol);
	}); 

}); // end $(document).ready(function() 
