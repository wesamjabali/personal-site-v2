export const useNoScroll = () => {
    const applyNoScroll = () => document.body.classList.add('no-scroll')
    const removeNoScroll = () => document.body.classList.remove('no-scroll')

    return { applyNoScroll, removeNoScroll }
}
