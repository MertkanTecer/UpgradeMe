export default {
    getItems(state){
    const items = state.items.filter(item => item.rate == 1)
    return items;
    },
    getInventory(state)
    {
       return state.inventory
    },
    getItem(state)
    {
        return state.item;
    },
    getNewItem(state)
    {
        return state.upgradedItem;
    },
    getScroll(state)
    {
        return state.isScrollSlotted;
    },
    isUpgraded(state)
    {
        return state.isUpgraded
    },
    progressing(state)
    {
        return state.progressing
    }
}