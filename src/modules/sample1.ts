import sample2 from '~/modules/sample2'

export default function sample1(): string {
    console.log('sample1.ts passed!')
    sample2()
    return 'sample1'
}
