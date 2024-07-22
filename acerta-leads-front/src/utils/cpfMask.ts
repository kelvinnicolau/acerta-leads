export default function cpfMask(value: string): string {
    let newValue = value
    newValue = newValue.replace(/\D/g, '')
    newValue = newValue.replace(/(\d{3})(\d)/, '$1.$2')
    newValue = newValue.replace(/(\d{3})(\d)/, '$1.$2')
    newValue = newValue.replace(/(\d{3})(\d{1,2})/, '$1-$2')
    newValue = newValue.replace(/(-\d{2})\d+?$/, '$1')
    return newValue
}
