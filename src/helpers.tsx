export const getClassName = (id: number): string => {
    if (id % 2 === 0) {
        return 'active'
    }
    if (id % 3 === 0) {
        return 'inactive'
    }
    if (id % 5 === 0) {
        return 'removed'
    }

    return '';
}