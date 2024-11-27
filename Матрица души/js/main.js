jQuery(document).ready(function() {
    let date = jQuery('#date');
    let name = jQuery('#name')
    name.val('');
    date.val('');
    date.inputmask("99.99.9999");

// date.on('input', date, check_date)
    // jQuery('.form__btn').on('click', function(){
    //     if (date.inputmask("isComplete") && name.val() != ''){
    //         let matrix = new Matrix(date.val());
    //         matrix.main_matrix_values();
    //         matrix.fill_matrix();
    //         matrix.fill_table();
    //         jQuery('.matrix').css('display', 'flex');
    //     }
    //     else
    //         jQuery('.matrix').hide();
    // })
    // jQuery('form').on('submit', function(){
    //     return false
    // })


    jQuery('.no-link').on('click', function(){
        return false;
    });
    jQuery('.calculation__form .form__item .form__btn').on('click', function (e) {
        let windowInnerWidth = window.innerWidth;
        let success = true;
        let form_name = '';
        let fields_names = {}
        form_name = '#form';
        fields_names.name = '#name';
        fields_names.date = '#date';

        const validation = new window.JustValidate(form_name);

        validation
            .addField(fields_names.name, [{
                rule: 'required',
                errorMessage: 'Р—Р°РїРѕР»РЅРёС‚Рµ РїРѕР»Рµ РРјСЏ',
            }])
            .addField(fields_names.date, [{
                validator: (value) => {
                    if (!(/^\d\d\.\d\d\.\d\d\d\d$/).test(value)) {
                        removeError();
                        return value[value.length - 1] === '';
                    }
                    removeError();
                    return true;
                },
                errorMessage: 'РќРµРІРµСЂРЅС‹Р№ С„РѕСЂРјР°С‚ РґР°С‚С‹',
            },
                {
                    validator: (value) => {
                        var d = value.split('.');
                        if (!parseInt(d[1], 10) || parseInt(d[1], 10) > 12) {
                            removeError();
                            return value[value.length - 1] === '';
                        }
                        removeError();
                        return true;
                    },
                    errorMessage: 'РњРµСЃСЏС† РґРѕР»Р¶РµРЅ РёРјРµС‚СЊ Р·РЅР°С‡РµРЅРёРµ РѕС‚ 1 РґРѕ 12',
                },
                {
                    validator: (value) => {
                        var d = value.split('.');
                        if (!parseInt(d[0], 10) || parseInt(d[0], 10) > 31) {
                            removeError();
                            return value[value.length - 1] === '';
                        }
                        removeError();
                        return true;
                    },
                    errorMessage: 'Р”РµРЅСЊ РґРѕР»Р¶РµРЅ РёРјРµС‚СЊ Р·РЅР°С‡РµРЅРёРµ РѕС‚ 1 РґРѕ 31',
                },
            ])
            .onFail((event) => {
                success = false;
                //console.log('onFail');
            });
        validation
            .onSuccess((event) => {
                let matrix = new Matrix(date.val());
                matrix.main_matrix_values();
                matrix.fill_matrix();
                matrix.fill_table();
                jQuery('.matrix').css('display', 'flex');
                return false
            });
    })
})
function removeError() {
    var errorsMsg = document.querySelectorAll('.just-validate-error-label');
    errorsMsg.forEach((element) => {
        element.parentNode.removeChild(element)
    });
}
 function check_date(){
    let date = jQuery('#date');
     if (date.inputmask("isComplete")){
        let matrix = new Matrix(date.val());
        matrix.main_matrix_values();
        matrix.fill_matrix();
        matrix.fill_table();
        jQuery('.matrix').css('display', 'flex');
    }
    else
        jQuery('.matrix').hide();
 }