var script = document.createElement('script');script.src = "https://code.jquery.com/jquery-3.6.0.min.js";document.getElementsByTagName('head')[0].appendChild(script);
setTimeout(() => {
    $('#t').append('<input id="speedChanger" style="position: absolute; top: 15px; left: 15px;" placeholder="Change speed"/>')
    $('#t').append('<button id="godmode" style="position: absolute; top: 15px; left: 215px;">God mode: off</button>')
    $('#t').append('<input id="scoreChanger" style="position: absolute; top: 15px; left: 365px;" placeholder="Change score"/>')
    $('#t').append(`<div style='display:flex;position: absolute; top: 0; left: 565px;'><p style='margin-right: 10px'>Theme:<p><select id='themeChanger'>
        <option selected value='{"1x":"default","2x":"default"}'>Default</option>
        <option value='{"1x":"https://i.imgur.com/7BuRkS9.png","2x":"default"}'>Sonic</option>
    </select></div>`)
    let theme = {
        "1x": $('#offline-resources-1x'),
        "2x": $('#offline-resources-2x'),
        "default1x": $('#offline-resources-1x').attr('src'),
        "default2x": $('#offline-resources-2x').attr('src')
    }
    let ori = Runner.prototype.gameOver
    let isGodMode = false;
    $('#speedChanger').on('keypress', e => {
        if(e.keyCode == 13){
            this.Runner.instance_.setSpeed($("#speedChanger").val())
        }
    })
    $('#godmode').on('click', e => {
        if(isGodMode){
            Runner.prototype.gameOver = ori
        } else Runner.prototype.gameOver = function(){}
        isGodMode = !isGodMode
        $('#godmode').text(`God mode: ${isGodMode ? "on" : "off"}`)
    })
    $('#scoreChanger').on('keypress', e => {
        if(e.keyCode == 13){
            this.Runner.instance_.distanceRan = parseInt($("#scoreChanger").val()) / Runner.instance_.distanceMeter.config.COEFFICIENT
        }
    })

    $('#themeChanger').on('change', e => {
        let val = JSON.parse(e.target.value)
        console.log(val)
        theme['1x'].attr('src', val['1x'] == "default" ? theme['default1x'] : val['1x'])
        theme['2x'].attr('src', val['2x'] == "default" ? theme['default2x'] : val['2x'])
    })
}, 100)
