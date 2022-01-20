var script = document.createElement('script');script.src = "https://code.jquery.com/jquery-3.6.0.min.js";document.getElementsByTagName('head')[0].appendChild(script);
setTimeout(() => {
    $('#t').append('<input id="speedChanger" style="position: absolute; top: 0; left: 0;" placeholder="Change speed"/>')
    $('#t').append('<button id="godmode" style="position: absolute; top: 0; left: 200px;">Turn on/off god mode</button>')
    $('#t').append('<input id="scoreChanger" style="position: absolute; top: 0; left: 400px;" placeholder="Change score"/>')
    let ori = Runner.prototype.gameOver
    let isGodMode = false;
    $('#speedChanger').on('keypress', e => {
        if(e.keyCode == 13){
            this.Runner.instance.setSpeed($("#speedChanger").val())
        }
    })
    $('#godmode').on('click', e => {
        if(isGodMode){
            Runner.prototype.gameOver = ori
        } else Runner.prototype.gameOver = function(){}
        isGodMode = !isGodMode
    })
    $('#scoreChanger').on('keypress', e => {
        if(e.keyCode == 13){
            this.Runner.instance.distanceRan = parseInt($("#scoreChanger").val()) / Runner.instance_.distanceMeter.config.COEFFICIENT
        }
    })
}, 75)
