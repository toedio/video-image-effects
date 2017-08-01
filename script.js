'use strict';

var modifiers = {
    'brightness':   { property: 'filter',    value: {}, init: 1  },
    'contrast':     { property: 'filter',    value: {}, init: 1  },
    'grayscale':    { property: 'filter',    value: {}, init: 0  },
    'invert':       { property: 'filter',    value: {}, init: 0  },
    'opacity':      { property: 'filter',    value: {}, init: 1  },
    'saturate':     { property: 'filter',    value: {}, init: 0  },
    'sepia':        { property: 'filter',    value: {}, init: 0  },
    'hue-rotate':   { property: 'filter',    value: {}, init: 0, extension: 'deg' },
    'rotate':       { property: 'transform', value: {}, init: 0, extension: 'deg' },
    'scale':        { property: 'transform', value: {}, init: 1, }
};

function changeAttr(e) {
    modifiers[e.id].value[e.name] = e.value;
    apply(e.name);
}

function apply(name) {
    var properties = { 'filter': '', 'transform': ''}
    for(var k in modifiers)
        modifiers[k].value[name] ? properties[modifiers[k].property] = properties[modifiers[k].property].concat(k + '(' + modifiers[k].value[name] + (modifiers[k].extension ? modifiers[k].extension : '') + ') ') : '';
    for(var p in properties)
        $('#'+ name).css(p, properties[p]);
}

function reset(e) {   
    $('#'+ e).css('filter', '');
    $('#'+ e).css('transform', '');
    $('#'+ e + '-modifiers').children('input').each(function() {
        $(this)[0].value = modifiers[$(this)[0].id].init;
    });        
}
