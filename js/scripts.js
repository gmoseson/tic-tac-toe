$(document).ready(function(){
	//sets variable for the current player = 0;
	var curPlayer = 0;

	/*When a cell is clicked, function will check that the cell is empty. If empty,
	and current player is evenly divisible by 2, cell marked with an "X". If current player is 
	not divisible evenly by two, cell is marked with an "O". Player is incremented by one to 
	swith turns.*/
	$('#board').find('td').on('click', function(){
			if ($(this).text() == '') {
				if(curPlayer % 2 === 0){
					$(this).text("X");
					checkWin("X");
					curPlayer++;
				} else {
					$(this).text("O");
					checkWin("O");
					curPlayer++; 
				}
			}
	})

	//New Game button clears the board, prevents default form submission
	$('#newGame').on('click', function (e){
		e.preventDefault();
		$('#board').find('td').text('');
	})

	function checkWin(player) {
	//assign the text values of each cell to variables
		var $topLeft = $('#board').find('#topLeft').text();
		var $topMid = $('#board').find('#topMid').text();
		var $topRight = $('#board').find('#topRight').text();
		var $centerLeft = $('#board').find('#centerLeft').text();
		var $centerMid = $('#board').find('#centerMid').text();
		var $centerRight = $('#board').find('#centerRight').text();
		var $bottomLeft = $('#board').find('#bottomLeft').text();
		var $bottomMid = $('#board').find('#bottomMid').text();
		var $bottomRight = $('#board').find('#bottomRight').text();

	//checks top row for win
		if ($topLeft != '') {
			if ($topLeft == $topMid) {
				if ($topLeft == $topRight) {
					alert("Game Over! Player " + player + " wins!");
					$('#board').find('td').text('');
				}
	//checks left diagonal for win
			} else if ($topLeft == $centerMid) {
				if ($topLeft == $bottomRight) {
					alert("Game Over! Player " + player + " wins!");
					$('#board').find('td').text('');
				}
	//check left column for win
			} else if ($topLeft == $centerLeft) {
				if ($topLeft == $bottomLeft) {
					alert("Game Over! Player " + player + " wins!");
					$('#board').find('td').text('');
				}
			}
		}
	//check middle row for win
		if ($centerLeft != '') {
		 	if ($centerLeft == $centerMid) {
		 		if ($centerLeft == $centerRight) {
					alert("Game Over! Player " + player + " wins!");
					$('#board').find('td').text('');
				}
		 	} 
		}
	//check bottom row for win
		if ($bottomLeft != '') {
		 	if ($bottomLeft == $bottomMid) {
		 		if ($bottomLeft== $bottomRight) {
					alert("Game Over! Player " + player + " wins!");
					$('#board').find('td').text('');
				}
		 	}
		}
	//check middle column for win
		if ($topMid != '') {
			if ($topMid == $centerMid) {
				if ($topMid == $bottomMid) {
					alert("Game Over! Player " + player + " wins!");
					$('#board').find('td').text('');
				}
			}
		}
	//check right column for win
		if ($topRight != '') {
			if ($topRight == $centerRight) {
				if ($topRight == $bottomRight) {
					alert("Game Over! Player " + player + " wins!");
					$('#board').find('td').text('');
				}
	//check right diagonal for win
			} else if ($topRight == $centerMid) {
				if ($topRight == $bottomLeft) {
					alert("Game Over! Player " + player + " wins!");
					$('#board').find('td').text('');
				}
			}
		}
	
	}
})




