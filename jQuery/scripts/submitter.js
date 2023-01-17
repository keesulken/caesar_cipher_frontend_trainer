function submitForm (event, blockName) {
    event.preventDefault();
    let text = event.target.elements['text'].value;
    let key = event.target.elements['key'].value;
    let success = `.${blockName}-success-string`;
    let error = `.${blockName}-error-string`;
    let validator = validForm(text, key);
    if (!validator.state) {
        $(error).html(validator.text);
    } else {
        $(error).html('');
        if (blockName === 'first') {
            $(success).html(convert(text, key));
        } else {
            $(success).html(deconvert(text, key));
        };
    };
};
