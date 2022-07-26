export const useIsMounted = () => {
    let isMounted = ref(false);
    onMounted(() => { isMounted.value = true })

    return { isMounted }
}