export const getByAttr = (wrapper, value) => {
    return wrapper.find(`[data-test="${value}"]`);
}