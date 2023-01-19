<template>
    <div class="big-block">
        <h2>Encrypt message</h2>
        <h4 v-if="formValid === false" class="error-string">{{ errorText }}</h4>
        <form @submit.prevent="submitForm">
            <p>Enter your message:</p>
            <textarea 
                v-bind:value="convertText"
                @input="convertText = $event.target.value"
                cols="40" rows="8"></textarea>
            <p>Enter encrypt key (1-32):</p>
            <textarea
                v-bind:value="convertKey"
                @input="convertKey = $event.target.value"
                cols="40" rows="2"></textarea>
            <input type="submit" value="Submit">
            <input type="reset" value="Reset">
        </form>
        <p v-if="formValid === true" class="output">{{ outputText }}</p>
    </div>
</template>

<script>
import { convert } from '@/logic/converter';
import { deconvert } from '@/logic/deconverter';
import { validForm } from '@/logic/validator';
    export default {
        props: {
            blockType: {
                type: String,
                required: true,
            },
        },
        data () {
            return {
                convertText: '',
                convertKey: '',
                formValid: null,
                errorText: '',
                outputText: '',
            };
        },
        methods: {
            submitForm () {
                let rawText = this.convertText;
                let rawKey = this.convertKey;
                let { state, text, key } = validForm(rawText, rawKey);
                if (!state) {
                    this.formValid = state;
                    this.errorText = text;
                } else {
                    if (this.blockType === 'encrypter') {
                        this.outputText = convert(text, key);
                        this.convertText = '';
                        this.convertKey = '';
                        this.formValid = true;
                    } else {
                        this.outputText = deconvert(text, key);
                        this.convertText = '';
                        this.convertKey = '';
                        this.formValid = true;
                    }
                } 
            },
        },
    }
</script>

<style lang="scss" scoped>

</style>