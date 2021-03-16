// main.js

// TODO

var volume_num = document.getElementById("volume-number");
var volume_slider = document.getElementById("volume-slider");
var vol_img = document.getElementById('volume-image');
var audio_source = document.getElementById('horn-sound');
var honk = document.getElementById("honk-btn");
var air = document.getElementById('radio-air-horn');
var car = document.getElementById('radio-car-horn');
var party = document.getElementById('radio-party-horn');
var sound_img = document.getElementById('sound-image');
var obj = document.getElementById('party-horn-form');

class IndexOutOfBoundryError extends Error{
    constructor(message){
        super(message);
        this.name = "IndexOutOfBoundryError";
    }
}

function testInput(input){
    if(input<0 || input>100){
        throw new IndexOutOfBoundryError("Invalid input");
    }
}

volume_slider.addEventListener("input",slider2text);
function slider2text(){
    volume_num.value = volume_slider.value;
    audio_source.volume = volume_slider.value/100;
    testInput(volume_num.value);
    // if(volume_slider.value<0 || volume_slider.value>100){
    //     throw new IndexOutOfBoundryError("Invalid input");
    // }
    if(volume_slider.value == 0){
        vol_img.src = "./assets/media/icons/volume-level-0.svg";
        honk.disabled = true;
    }
    else if (0<volume_slider.value && volume_slider.value<=33){
        vol_img.src = "./assets/media/icons/volume-level-1.svg";
        honk.disabled = false;
    }
    else if (33<volume_slider.value && volume_slider.value<67){
        vol_img.src = "./assets/media/icons/volume-level-2.svg";
        honk.disabled = false;
    }
    else 
    {
        vol_img.src = "./assets/media/icons/volume-level-3.svg";
        honk.disabled = false;
    }
}

volume_num.addEventListener("input",text2slider);
function text2slider(){
    volume_slider.value = volume_num.value;
    audio_source.volume = volume_slider.value/100;
    testInput(volume_num.value);
    // if(volume_num.value<0 || volume_num.value>100){
    //     throw new IndexOutOfBoundryError("Invalid input");
    // }
    if(volume_slider.value == 0){
        vol_img.src = "./assets/media/icons/volume-level-0.svg";
        honk.disabled = true;
    }
    else if (0<volume_slider.value && volume_slider.value<=33){
        vol_img.src = "./assets/media/icons/volume-level-1.svg";
        honk.disabled = false;
    }
    else if (33<volume_slider.value && volume_slider.value<67){
        vol_img.src = "./assets/media/icons/volume-level-2.svg";
        honk.disabled = false;
    }
    else 
    {    
        vol_img.src = "./assets/media/icons/volume-level-3.svg";
        honk.disabled = false;
    }
}

air.addEventListener('input',selectAir);
function selectAir(){
    audio_source.src = "./assets/media/audio/air-horn.mp3";
    sound_img.src = "./assets/media/images/air-horn.svg";
    sound_img.alt = "Air Horn";
}

car.addEventListener('input',selectCar);
function selectCar(){
    audio_source.src = "./assets/media/audio/car-horn.mp3";
    sound_img.src = "./assets/media/images/car.svg";
    sound_img.alt = "Car Horn";
}

party.addEventListener('input',selectParty);
function selectParty(){
    audio_source.src = "./assets/media/audio/party-horn.mp3";
    sound_img.src = "./assets/media/images/party-horn.svg";
    sound_img.alt = "Party Horn";
}

audio_source.addEventListener('input', realtime);
function realtime(){
    audio_source.volume = volume_slider.value/100;
}

honk.addEventListener('click', function(event){
    event.preventDefault();
    if (volume_num != 0){
        //audio_source.volume = (volume_num.value)/100;
        audio_source.play();
    }
});

var log = document.getElementById("console_log");
var error = document.getElementById("console_error");
var table = document.getElementById("console_table");
var dir = document.getElementById("console_dir");
var dirxml = document.getElementById("console_dirxml");
var group = document.getElementById("console_group");
var start = document.getElementById("console_time");
var end = document.getElementById("console_timeEnd");
var trace = document.getElementById("console_trace");
var global = document.getElementById("console_global");

var json = '{ "age": test dir pass }'
// let error = new Error(message);
// let error = new SyntaxError(message);
// let error = new ReferenceError(message);

log.addEventListener('click', function(event){
    event.preventDefault();
    try{
        console.log("log demo");
    } catch(err){
        alert("error in console.log");
    }
})

error.addEventListener('click', function(event){
    event.preventDefault();
    try{
        console.error("error demo");
    } catch(err){
        alert("error in console.error");
    }
})

var strTable = [
    {
      first: 'René',
      last: 'Magritte',
    },
    {
      first: 'Chaim',
      last: 'Soutine',
      birthday: '18930113',
    },
    {
      first: 'Henri',
      last: 'Matisse',
    }
  ]

table.addEventListener('click', function(event){
    event.preventDefault();
    try{
        if(strTable == null){
            throw new error("null input");
        }
        console.table(strTable);
    } catch(err){
        alert("error in console.table");
    }
})

dir.addEventListener('click', function(event){
    event.preventDefault();
    try{
        console.dir(obj.attributes);
    } catch(err){
        alert("error in console.dir");
    }
})

dirxml.addEventListener('click', function(event){
    event.preventDefault();
    try{
        console.dirxml(obj);
    } catch(err){
        alert("error in console.dirxml");
    }
})

group.addEventListener('click', function(event){
    event.preventDefault();
    try{
        const label = 'Adolescent Irradiated Espionage Tortoises';
        console.group(label);
        console.info('Leo');
        console.info('Mike');
        console.info('Don');
        console.info('Raph');
        console.groupEnd(label);
    } catch(err){
        alert("error in console.label");
    }
})

start.addEventListener('click', function(event){
    event.preventDefault();
    try{
        console.log("time start)");
        console.time();
    } catch(err){
        alert("error in console.time");
    }
})

end.addEventListener('click', function(event){
    event.preventDefault();
    try{
        console.timeEnd();
    } catch(err){
        alert("error in console.timeEnd");
    } finally{
        console.log("time end");
    }
})

trace.addEventListener('click', function(event){
    event.preventDefault();
    try{
        const first = () => { second(); };
        const second = () => { third(); };
        const third = () => { fourth(); };
        const fourth = () => { console.trace(); };
        first();
    } catch(err){
        alert("error in console.trace");
    }
})

global.addEventListener('click', function(event){
    event.preventDefault();
    try{
        var boom = ducument.getElementById("boom");
        console.log(boom);
    } catch(err){
        throw new ReferenceError("no boom");
    }
})

// TrackJS.track('Testing TrackJS!');
                        

