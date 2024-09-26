module.exports.templateTags = [{
    name: 'appId',
    displayName: 'appId',
    description: 'Retorna o canal escolhido na lista.',
    args: [
        {
            displayName: 'Selecione o appId',
            type: 'enum',
            options: [
                { displayName: 'ES2SUPERCONTIGENCIA', value: '48787-878787-878787-878787' },
                { displayName: 'MULTICARDS', value: '878787-87-878787-8787-8787' }
            ]
        }
    ],
    async run (context, selectedValue) {
        return selectedValue;
    }
}];
