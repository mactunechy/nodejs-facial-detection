/*
*
*Face Detection using opencv
*
*/

//DEPENDECIES
var cv = require('opencv');
var path = require('path');

//box parameters

var color = [0.100,0]
var thickness

//add the cascadeFile into the root dir
 var cascadeFile = './my_cascadeFile.xml';
 
 //place input file into the photos dir 
 inputFiles = [
			'regonise_this_file1',
			'regonise_this_file2',
			'regonise_this_file3' 
 
 ];
 
 //looping through the photos array
 
inputFiles.forEach(filename={
	cv.readImage(filename,(err,im)=>{
		if(!err && im){
			//detecting faces for the image
			im.detectOject(cascadeFile,{neighbors:4,scale:2},(err,objects)=>{
				if(!err && objects){
						//number of faces found
						console.log(ojects.length);	
						//looping through the faces  objects and creating rectangles around them
						for(i=1;i<objects.length;i++){
							var object = objects[1];
							im.rectangle(
							[object.x,object.y],
							[object.x+object.width,object.y+object.height],
							color,
							2
							);
						}
						im.save(filename.replace(/\.jpg/,'processed.jpg'));
				}else{
					console.log(err,"No faces found");
				}
			})
		}else{
			console.log(err,'could not read this file');
		}
	});
	
}); 
 
 
/************************* END*************************************************/ 
 