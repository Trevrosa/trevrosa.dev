/*********************************************
 * Created by:      Benjamin Moore
 * Date Created:    9/29/2015
 * Email:           Benjamin@MooreSof.com
 ********************************************/


/********************
 ***  Simulation  ***
 ********************/
function Simulation() {

    var iterator = null;


    /*****************
     ***  Options  ***
     *****************/
    var Options = (function () {

        var opts = {
                gridSize: 150,
                behavior: getBehaviors()[0],
                orientationIndex: 0,
                intervalCount: 1,
                milliseconds: 250
            }
            , behaviorsList;

        function getBehaviors() {
            if (behaviorsList != undefined) return behaviorsList;

            behaviorsList = [
                {turns: 'RL'.split(''), colors: ['#5f5', '#f55']}
                , {turns: 'RLR'.split(''), colors: generateRandomColors(3)}
                , {turns: 'LLRR'.split(''), colors: generateRandomColors(4)}
                , {turns: 'RLLR'.split(''), colors: generateRandomColors(4)}
                , {turns: 'LRRRRRLLR'.split(''), colors: generateRandomColors(9)}
                , {turns: 'LLRRRLRLRLLR'.split(''), colors: generateRandomColors(12)}
                , {turns: 'RRLLLRLLLRRR'.split(''), colors: generateRandomColors(12)}
            ];

            return behaviorsList;
        }

        function generateRandomColors(count) {
            var colors = [];

            for (var i = 0; i < count; i++) {
                var uniqueColor = getUniqueColor(generateRandomColor());

                colors.push(uniqueColor);
            }

            function generateRandomColor() {
                var letters = '0123456789ABCDEF'.split('');
                var color = '#';

                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }

            function getUniqueColor(hexColor) {
                for (var i = 0, len = colors.length; i < len; i++) {
                    if (colors[i] == hexColor) getUniqueColor(generateRandomColor());
                }
                return hexColor;
            }

            return colors;
        }

        (function generateBehaviorOptions() {
            var behaviors = getBehaviors();
            var behaviorElement = document.getElementById('behaviors');

            for (var y = 0, len = behaviors.length; y < len; y++) {
                var opt = '';
                for (var i = 0, lenTurns = behaviors[y].turns.length;i<lenTurns; i++) {
                    opt += behaviors[y].turns[i];
                }
                behaviorElement.appendChild(new Option(opt, y))
            }
            behaviorElement.appendChild(new Option('Custom', -1))
        })();

        return {
            setGridSize: function (gridSize) {
                opts.gridSize = parseInt(gridSize);
            },
            setAntBehavior: function (behaviorIndex) {
                opts.behavior = getBehaviors()[parseInt(behaviorIndex)];
            },
            setCustomAntBehavior: function (behaviorArray) {
                var turns = behaviorArray.split('');

                opts.behavior = {turns: turns, colors: generateRandomColors(turns.length)};
            },
            setAntOrientation: function (orientationIndex) {
                opts.orientationIndex = parseInt(orientationIndex);
            },
            setRefreshInterval: function (intervalCount) {
                opts.intervalCount = parseInt(intervalCount);
            },
            setRefreshDelayInterval: function (milliseconds) {
                opts.milliseconds = parseInt(milliseconds);
            },
            get: opts
        }
    })();


    /****************
     ***  Canvas  ***
     ****************/
    var Screen = (function () {
        var antBehaviorAlgorithm = document.getElementById('displayAntBehavior');
        var iterationCount = document.getElementById('iterationCount');
        var canvas = document.getElementById('theBoard');
        var ctx = canvas.getContext('2d');
        var cellSize = 8;
        var cellOffset = .5;
        var Orientation = [
            [{x: -1, y: 0}, {x: 0, y: -1}, {x: 1, y: 0}],   //Up - North
            [{x: 0, y: -1}, {x: 1, y: 0}, {x: 0, y: 1}],    //Right - East
            [{x: -1, y: 0}, {x: 0, y: 1}, {x: 1, y: 0}],    //Down - South
            [{x: 0, y: -1}, {x: -1, y: 0}, {x: 0, y: 1}]];  //Left - West

        return {
            setCanvasSize: function (size) {
                canvas.width = size;
                canvas.height = size;
            },
            clearCanvas: function () {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
            },
            printGrid: function () {
                var gridCanvasSize = (Options.get.gridSize * cellSize) + (cellSize * 2);
                this.setCanvasSize(gridCanvasSize);

                for (var x = cellOffset; x < gridCanvasSize; x += cellSize) {
                    ctx.moveTo(x, 0);
                    ctx.lineTo(x, gridCanvasSize - cellSize);
                }

                for (var y = cellOffset; y < gridCanvasSize; y += cellSize) {
                    ctx.moveTo(0, y);
                    ctx.lineTo(gridCanvasSize - cellSize, y);
                }

                ctx.strokeStyle = '#555';
                ctx.stroke();
            },
            printCellState: function (cellState) {
                var x = (Ant.x * cellSize) + 1,
                    y = (Ant.y * cellSize) + 1,
                    wh = cellSize - 1;

                ctx.fillStyle = Options.get.behavior.colors[cellState];
                //ctx.clearRect(x, y, wh, wh);
                ctx.fillRect(x, y, wh, wh);
            },
            printIterationCount: function (count) {
                iterationCount.innerText = count.toLocaleString();
            },
            clearIterationCount: function () {
                iterationCount.innerText = '0';
            },
            printAntOrientation: function () {
                var Screen_x = (Ant.x * cellSize) + cellOffset + (cellSize / 2),
                    Screen_y = (Ant.y * cellSize) + cellOffset + (cellSize / 2),
                    drawPoint = Orientation[Ant.orientation];

                ctx.fillStyle = '#000';
                ctx.beginPath();
                ctx.moveTo(Screen_x + drawPoint[0].x, Screen_y + drawPoint[0].y);
                ctx.lineTo(Screen_x + drawPoint[1].x, Screen_y + drawPoint[1].y);
                ctx.lineTo(Screen_x + drawPoint[2].x, Screen_y + drawPoint[2].y);
                ctx.fill();
            },
            printBehaviorAlgorithm: function (behavior) {
                var turns = '';

                for (var i = 0, len = behavior.turns.length; i < len; i++) {
                    turns += '<span class="behavior" style="background-color:' + behavior.colors[i] + ' !important;"><img src="img/' + behavior.turns[i] + '.png" alt="' + behavior.turns[i] + '"/></span>';
                }

                antBehaviorAlgorithm.innerHTML = turns;
            },
            clearBehaviorAlgorithm: function () {
                antBehaviorAlgorithm.innerHTML = '';
            }
        }
    })();


    /**************
     ***  Grid  ***
     **************/
    var Grid = {
        init: function () {
            this.cells = new Int8Array(Options.get.gridSize + (Options.get.gridSize * Options.get.gridSize));

            Screen.clearCanvas();
            Screen.printGrid();
        },
        getCellState: function (cellIndex) {
            return this.cells[cellIndex];
        },
        setCellState: function (cellIndex, state) {
            this.cells[cellIndex] = state;
        }
    };


    /*************
     ***  Ant  ***
     *************/
    var Ant = {
        init: function () {

            //Put the ant in the middle of the grid
            this.x = Math.floor(Options.get.gridSize / 2);
            this.y = Math.floor(Options.get.gridSize / 2);

            //Point the ant in a North:0, East:1, South:2, or West:3
            this.orientation = Options.get.orientationIndex;

            //Get the index of the cell the ant was placed on
            this.cellIndex = this.y + this.x * Options.get.gridSize;
        },
        turn: function (cellState) {
            if (Options.get.behavior.turns[cellState] === 'R') {
                this.orientation = (this.orientation + 5) % 4
            } else {
                this.orientation = (this.orientation + 3) % 4
            }
        },
        move: function () {
            if (!(this.orientation % 2)) {
                this.y += this.orientation - 1;
            } else {
                this.x -= this.orientation - 2;
            }

            this.cellIndex = this.y + this.x * Options.get.gridSize;
        }
    };

    function run() {
        reset();

        iterator = setInterval(runSteps, Options.get.milliseconds);

        Screen.printBehaviorAlgorithm(Options.get.behavior);

        var iterations = 0;

        function runSteps() {
            for (var i = 0, intervals = Options.get.intervalCount; i < intervals; i++) {
                if (runStep()) {
                    clearInterval(iterator);
                    Screen.printIterationCount(iterations);
                    break;
                }
                iterations++;
            }

            Screen.printIterationCount(iterations);
        }

        function runStep() {
            var currentCellState = Grid.getCellState(Ant.cellIndex);
            var newCellState = (currentCellState + 1) % Options.get.behavior.colors.length;

            Grid.setCellState(Ant.cellIndex, newCellState);

            Screen.printCellState(currentCellState);
            Screen.printAntOrientation();

            Ant.turn(currentCellState);
            Ant.move();

            if (Ant.cellIndex < 0 || Ant.cellIndex > Grid.cells.length) {
                return true;
            }
        }
    }

    function reset() {
        clearInterval(iterator);
        Screen.clearBehaviorAlgorithm();
        Screen.clearIterationCount();
        Grid.init();
        Ant.init();
    }

    return {
        run: run,
        reset: reset,
        Options: Options
    }
}