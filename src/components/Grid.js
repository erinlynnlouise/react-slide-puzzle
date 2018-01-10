import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Tile from "./Tile";

class Grid extends Component {

    render() {

        //console.dir(this.props);
        //render each square, pass props (index, current position, click handler)
        const {sequence, onGrab, onDrop, onComplete, src, width, height, gridsize, gridscale, areaWidth, areaHeight, draggedIndex, droppedIndex, dragOffset} = this.props;
        const tileSize = getTileSize(width,height,gridsize);


        const tiles = sequence.map((item, i, arr) => {


            const dragged = (draggedIndex === i);
            const dropped = (droppedIndex === i);

            const imgPos = getPosition(tileSize.width, tileSize.height, item - 1,gridsize);
            let tilePos = getPosition(tileSize.width,tileSize.height, i,gridsize);

            //constrain drag to blank position space

            let adjustedOffset = {x:0,y:0};

            if(dragOffset != null && (dragged || dropped)){

                //swap index for dropped state since grid has been reordered but motion simulated from last state
                const blankIndex = (dropped) ? droppedIndex : arr.indexOf(arr.length);
                const dragIndex = (dropped) ? arr.indexOf(arr.length) : i;

                const dragCoor = getGridCoordinates(dragIndex,gridsize);
                const blankCoor = getGridCoordinates(blankIndex,gridsize);

                //drag left
                //console.log("blank index??? " + blankIndex);
                //console.log("dragging??" + dragOffset.x + ", drag coor x: " + dragCoor.x + ", blank coor x: " + blankCoor.x + " drag index? " + dragIndex);
                if(blankCoor.x - dragCoor.x === 1 && dragOffset.x > 0){
                    adjustedOffset.x = dragOffset.x;
                    if(adjustedOffset.x > tileSize.width){
                        adjustedOffset.x = tileSize.width;
                    }
                }

                //drag right
                if(blankCoor.x - dragCoor.x === -1 && dragOffset.x < 0){
                    adjustedOffset.x = dragOffset.x;
                    if(adjustedOffset.x < -tileSize.width){
                        adjustedOffset.x = -tileSize.width;
                    }

                }

                //drag down
                if(blankCoor.y - dragCoor.y === 1 && dragOffset.y > 0){
                    adjustedOffset.y = dragOffset.y;
                    if(adjustedOffset.y > tileSize.height){
                        adjustedOffset.y = tileSize.height;
                    }

                }

                //drag up
                if(blankCoor.y - dragCoor.y === -1 && dragOffset.y < 0){
                    adjustedOffset.y = dragOffset.y;
                    if(adjustedOffset.y < -tileSize.height){
                        adjustedOffset.y = -tileSize.height;
                    }

                }
            }


            if(dragged){
                tilePos.x += adjustedOffset.x;
                tilePos.y += adjustedOffset.y;
            }

            //if dropped move to blank position (or dragged position?) before transition
            if(dropped){
                //console.log("handle dragged" + draggedIndex + "handle dropped: " + droppedIndex + "dropped piece: " + item + "cur index: " + i);
                tilePos = getPosition(tileSize.width,tileSize.height, draggedIndex, gridsize);
                console.log("dropping at drag index?? " + draggedIndex + " offset x" + adjustedOffset.x);
                tilePos.x += adjustedOffset.x;
                tilePos.y += adjustedOffset.y;

            }

            const visible = (item === arr.length) ? "hidden" : "visible";

            return (

                <Tile key={i} imgSrc={src} width={tileSize.width} height={tileSize.height} index={i} id={item} onGrab={onGrab} onDrop={onDrop} curPos={tilePos} indexPos={imgPos} visible={visible} moveCompleteHandler={onComplete} dragged={dragged} dropped={dropped}/>

            )
        });

        const w = areaWidth;
        const leftpos = (w - (width * gridscale))/2;
        const leftpercent = (leftpos/w) * 100;

        const h = areaHeight;
        const toppos = (h - (height * gridscale))/2;
        const toppercent = (toppos/h) * 100;



        const gridStyle = {

            transform:`scale(${gridscale})`,
            left:`${leftpercent}%`,
            top:`${toppercent}%`


        };

        return (



            <div className="Grid" style={gridStyle}>
                <img className="bg-image"
                     src={src}
                />
                <div>
                    {tiles}
                </div>

            </div>

        );



    }

}

Grid.propTypes = {
    sequence:PropTypes.array.isRequired,
    gridsize:PropTypes.oneOf([3,4]).isRequired,
    src:PropTypes.string.isRequired
};

export default Grid;

const getTileSize = (width,height,gridsize) => {

    return {width:width/gridsize,height:height/gridsize}
};

const getPosition = (tileWidth,tileHeight,gridIndex,gridSize) => {

    const imgCoor = getGridCoordinates(gridIndex,gridSize);

    const x = tileWidth * imgCoor.x;
    const y = tileHeight * imgCoor.y;

    //console.log("pos x: " + x);

    return {x:x,y:y};

};

const getGridCoordinates = (index,size) => {

    //console.log("get coords: index.." + index + ', size...' + size);
    const y = Math.floor(index/size);
    const x = index - (y * size);

    return {x:x,y:y};

};
