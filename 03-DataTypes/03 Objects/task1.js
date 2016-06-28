/* 
1. Write functions for working with shapes in standard Planar coordinate system
    * Points are represented by coordinates `P(X, Y)`
    * Lines are represented by two points, marking their beginning and ending: `L(P1(X1,Y1)`, `P2(X2,Y2))`
    * Calculate the distance between two points
    * Check if three segment lines can form a triangle */
function point(x, y) {
	var point = {
		x: x,
		y: y
	}
	point.printPoint = function() {
    	return ('P(' + point.x + ',' + point.y + ')');
    }
    return point;
}

function line(p1,p2) {
	var line = {
		p1: p1,
		p2: p2
	}
	line.printLine = function() {
		return ('L(P1' + line.p1.printPoint() + ', P2' + line.p2.printPoint() + ')');
	}
	return line;
}

function lineLength(line) {
	return (Math.sqrt(Math.pow((line.p1.x - line.p2.x),2) + Math.pow((line.p1.y - line.p2.y),2)));
}
function isTriangle(line1,line2,line3) {
	if (((lineLength(line1) + lineLength(line2)) > lineLength(line3)) & (((lineLength(line1) + lineLength(line3)) > lineLength(line2))) & 
		(((lineLength(line2) + lineLength(line3)) > lineLength(line1))))
		return 'можно построить треугольник';
	else
		return 'нельзя построить треугольник';
}

var arrayOfPoints = [],
	arrayOfLines = [],
	i,j;
for (i = 0; i < 3; i++) {
	arrayOfPoints[i] = point((i+1),(i+1));
}

arrayOfPoints[3] = point(1,5);
arrayOfPoints[4] = point(5,1);

for (i = 0; i < arrayOfPoints.length; i++) {
	document.write('Точка ' + (i+1) + ': ' + arrayOfPoints[i].printPoint());
	document.write('</br>');
}
for (i = 0; i < arrayOfPoints.length; i++) {
	for (j = i+1; j < arrayOfPoints.length; j++) {
		arrayOfLines.push(line(arrayOfPoints[i],arrayOfPoints[j]));
	}
}
for (i = 0; i < arrayOfLines.length; i++) {
	document.write('Расстояние от точки ' + arrayOfLines[i].p1.printPoint() + ' до точки ' + arrayOfLines[i].p2.printPoint() + ' равно : ' +
		arrayOfLines[i].printLine() + ' = ' + lineLength(arrayOfLines[i]));
	document.write('</br>');
}

document.write('Из линий</br>' + arrayOfLines[0].printLine() + '</br>' + arrayOfLines[1].printLine() + '</br>' + arrayOfLines[4].printLine() + 
	'</br>' +	isTriangle(arrayOfLines[0],arrayOfLines[1],arrayOfLines[4]) + '</br>');
document.write('Из линий</br>' + arrayOfLines[0].printLine() + '</br>' + arrayOfLines[1].printLine() + '</br>' + arrayOfLines[2].printLine() + 
	'</br>' +	isTriangle(arrayOfLines[0],arrayOfLines[1],arrayOfLines[2]) + '</br>');
