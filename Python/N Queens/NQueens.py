
#Check if the queen palcement is valid
#int array colPalcements
def isValid(colPlacements):
	rowId = len(colPlacements)-1
	for i in range(0,rowId):
		diff = abs(colPlacements[i] - colPlacements[rowId])
		if (diff == 0 or diff == rowId - i):
			return False
	return True

#Solve the whole board
#int n: the board size
#int row: the current row the function is solving for. defaults to 0
#int array colPalcements
#array result: the finished and validated locations of the queens
def solve(n, row, colPlacements, result):
	if (row == n):
		result.append(colPlacements)
		printBoard(result,n)
		
	else:
		for i in range(0,n):		
			colPlacements.append(i)
			if(isValid(colPlacements)):
				solve(n, row+1, colPlacements, result)
			
			colPlacements.pop(len(colPlacements)-1)

def printBoard(result,num):
	#Create a board and put and X to denote an empty spot
	#The X makes reading the board easier because each spot on the board is the same size
	board = [['X' for x in range(num)] for y in range(num)]
	
	for i in range (0,num):
		for j in range(0,num):
			if i == result[0][j]:
				board[j][i] = 'Q'

	print("RESULT #",len(result))
	for i in range (len(board)):
		print("  -  " * num)
		for j in range(len(board)):
			print("|", board[i][j]," ", end = "")
			if (j == len(board)-1):
				print("|")
	print( "  -  " * num)
	print("---------------------\n")


result = []
colPlacements = []
boardSize = 4
solve(boardSize, 0, colPlacements, result )
