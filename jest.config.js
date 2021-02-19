// eslint-disable-next-line no-undef
module.exports = {
    roots: [
        './apps',
        './libs',
        './tools'
    ],
    transform: {
        '.*?(ts|tsx)$': 'ts-jest'
    },
    testEnvironment: 'node',
    testMatch: ['**/__tests__/**/*.+(ts|tsx)'],
    moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
}; 
